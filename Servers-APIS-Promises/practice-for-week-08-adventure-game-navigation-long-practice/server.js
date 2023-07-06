const http = require("http");
const fs = require("fs");

const { Player } = require("./game/class/player");
const { World } = require("./game/class/world");

const worldData = require("./game/data/basic-world-data");

let player;
let world = new World();
world.loadWorld(worldData);

const server = http.createServer((req, res) => {
  /* ============== ASSEMBLE THE REQUEST BODY AS A STRING =============== */
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    // After the assembly of the request body is finished
    /* ==================== PARSE THE REQUEST BODY ====================== */
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    }

    /* ======================== ROUTE HANDLERS ========================== */
    let splitUrl = req.url.split("/");
    //get css
    if (req.method === "GET" && splitUrl.indexOf("assets") > -1) {
      let extension = splitUrl[splitUrl.length - 1].split(".")[1];
      switch (extension) {
        case "css":
          let cssFile = fs.readFileSync(
            "./views/assets/" + splitUrl[splitUrl.length - 1],
            "utf-8"
          );
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/css");
          return res.end(cssFile);
        default:
          break;
      }
    }
    // Phase 1: GET /
    if (req.method === "GET" && req.url === "/") {
      let newPlayer = fs.readFileSync("./views/new-player.html", "utf-8");

      newPlayer = newPlayer.replace(
        /#{availableRooms}/,
        world.availableRoomsToString()
      );

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      return res.end(newPlayer);
    }
    // Phase 2: POST /player

    if (req.method === "POST" && req.url === "/player") {
      let playerName = req.body.name;
      let roomId = req.body.roomId;

      let room = world.rooms[roomId];

      let newPlayer = new Player(playerName, room);

      player = newPlayer;

      res.statusCode = 302;

      res.setHeader("Location", "/rooms/" + roomId);
      return res.end();
    }

    // Phase 3: GET /rooms/:roomId

    if (
      req.method === "GET" &&
      splitUrl.length === 3 &&
      splitUrl[1] === "rooms"
    ) {
      roomId = Number(splitUrl[2]);
      if (roomId !== player.currentRoom.id) {
        roomId = player.currentRoom.id;
      }

      room = world.rooms[roomId];
      let roomPage = fs
        .readFileSync("./views/room.html", "utf-8")
        .replace(/#{roomName}/g, room.name)
        .replace(/#{description}/g, room.description)
        .replace(/#{inventory}/g, player.inventoryToString())
        .replace(/#{roomItems}/g, room.itemsToString())
        .replace(/#{exits}/g, room.exitsToString());

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      return res.end(roomPage);
    }
    // Phase 4: GET /rooms/:roomId/:direction

    if (
      req.method === "GET" &&
      splitUrl.length === 4 &&
      splitUrl[1] === "rooms"
    ) {
      roomId = Number(splitUrl[2]);

      //doesn't match current room
      if (roomId !== player.currentRoom.id) {
        res.setHeader("Location", "/rooms/" + player.currentRoom.id);
        res.statusCode = 302;
        return res.end();
      }

      room = world.rooms[roomId];
      direction = splitUrl[3][0];

      try {
        player.move(direction);
      } catch (error) {
        //doesn't have a room in that direction or direction is invalid which would return undefined room anyways
        res.setHeader("Location", "/rooms/" + player.currentRoom.id);
        res.statusCode = 302;
        return res.end();
      }

      res.statusCode = 302;
      res.setHeader("Location", "/rooms/" + player.currentRoom.id);

      return res.end();
    }
    // Phase 5: POST /items/:itemId/:action
    if (
      req.method === "POST" &&
      splitUrl.length === 4 &&
      splitUrl[1] === "items"
    ) {
      let itemId = splitUrl[2];
      let item;

      let action = splitUrl[3];

      let errorPage = fs
        .readFileSync("./views/error.html", "utf-8")
        .replace(/#{roomId}/g, player.currentRoom.id);

      switch (action) {
        case "drop":
          try {
            player.dropItem(itemId);
          } catch (error) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            errorPage = errorPage.replace(
              /#{errorMessage}/g,
              "You can't drop this item, it either doesn't exist or isn't in your inventory."
            );
            return res.end(errorPage);
          }
          break;
        case "eat":
          try {
            player.eatItem(itemId);
          } catch (error) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            errorPage = errorPage.replace(
              /#{errorMessage}/g,
              "You can't eat this item, it either doesn't exist, isn't in your inventory, or you are not able to eat it."
            );
            return res.end(errorPage);
          }
          break;
        case "take":
          try {
            player.takeItem(itemId);
          } catch (error) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            errorPage = errorPage.replace(
              /#{errorMessage}/g,
              "You can't take this item, it either doesn't exist or isn't in this room."
            );
            return res.end(errorPage);
          }
          break;
        default:
          break;
      }

      //if no errors redirect back to current room
      res.setHeader("Location", "/rooms/" + player.currentRoom.id);
      res.statusCode = 302;
      return res.end();
    }

    // Phase 6: Redirect if no matching route handlers

    res.setHeader("Location", "/rooms/" + player.currentRoom.id);
    res.statusCode = 302;
    return res.end();
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
