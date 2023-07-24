const http = require("http");
const fs = require("fs");

/* ============================ SERVER DATA ============================ */
let artists = JSON.parse(fs.readFileSync("./seeds/artists.json"));
let albums = JSON.parse(fs.readFileSync("./seeds/albums.json"));
let songs = JSON.parse(fs.readFileSync("./seeds/songs.json"));

let nextArtistId = 2;
let nextAlbumId = 2;
let nextSongId = 2;

// returns an artistId for a new artist
function getNewArtistId() {
  const newArtistId = nextArtistId;
  nextArtistId++;
  return newArtistId;
}

// returns an albumId for a new album
function getNewAlbumId() {
  const newAlbumId = nextAlbumId;
  nextAlbumId++;
  return newAlbumId;
}

// returns an songId for a new song
function getNewSongId() {
  const newSongId = nextSongId;
  nextSongId++;
  return newSongId;
}

/* ======================= PROCESS SERVER REQUESTS ======================= */
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // assemble the request body
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    // finished assembling the entire request body
    // Parsing the body of the request depending on the "Content-Type" header
    if (reqBody) {
      switch (req.headers["content-type"]) {
        case "application/json":
          req.body = JSON.parse(reqBody);
          break;
        case "application/x-www-form-urlencoded":
          req.body = reqBody
            .split("&")
            .map((keyValuePair) => keyValuePair.split("="))
            .map(([key, value]) => [key, value.replace(/\+/g, " ")])
            .map(([key, value]) => [key, decodeURIComponent(value)])
            .reduce((acc, [key, value]) => {
              acc[key] = value;
              return acc;
            }, {});
          break;
        default:
          break;
      }
      console.log(req.body);
    }

    /* ========================== ROUTE HANDLERS ========================== */

    // Your code here

    let splitUrl = req.url.split("/");

    //get all artists
    if (req.method === "GET" && req.url === "/artists") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify(artists));
    }

    //get specific artist's details based on artistId
    if (
      req.method === "GET" &&
      splitUrl.length === 3 &&
      splitUrl[1] === "artists"
    ) {
      //get id and search for artist, if it exists then return it
      let artistId = splitUrl[2];

      if (!doesArtistExist(res, artistId)) return;

      let artist = artists[artistId];
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify(artist));
    }

    //add an artist
    if (req.method === "POST" && req.url === "/artists") {
      //if req body or req body name doesn't exist, return error
      if (!doesReqBodyOrNameExist(res, req)) {
        return;
      }
      //otherwise the name is provided in body, create the artist and return it
      let newArtist = {
        name: req.body.name,
        artistId: getNewArtistId(),
      };

      artists[`${newArtist.artistId}`] = newArtist;
      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify(newArtist));
    }

    //edit specified artist by artistId
    if (
      (req.method === "PUT" || req.method === "PATCH") &&
      splitUrl.length === 3 &&
      splitUrl[1] === "artists"
    ) {
      //get artist from id
      //send error if they don't exist
      //otherwise check if the corresponding properties exists, if not send error saying they're missing

      let keyArtistId = splitUrl[2];
      let keyArtist = artists[keyArtistId];

      if (!doesArtistExist(res, keyArtistId)) return;
      if (!doesReqBodyOrNameExist(res, req)) return;

      keyArtist.name = req.body.name;
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify(keyArtist));
    }

    //delete a specified artist by artist id
    if (
      req.method === "DELETE" &&
      splitUrl.length === 3 &&
      splitUrl[1] === "artists"
    ) {
      //if artist doesn't exist return error message
      //otherwise delete

      let keyId = splitUrl[2];

      if (!doesArtistExist(res, keyId)) {
        return;
      }

      delete artists[keyId];
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify({ message: "Deletion successful" }));
    }

    //get albums of specific artist based on artist id
    if (
      req.method === "GET" &&
      splitUrl.length === 4 &&
      splitUrl[1] === "artists" &&
      splitUrl[3] === "albums"
    ) {
      //get artist id
      let artistId = splitUrl[2];
      //return error message if artist doesn't exist
      if (!doesArtistExist(res, artistId)) {
        return;
      }

      //get albums based on artist id
      let searchAlbums = Object.values(albums).filter(
        (album) => album.artistId === Number(artistId)
      );
      //return them
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify(searchAlbums));
    }

    //get specific album based on album Id
    if (
      req.method === "GET" &&
      splitUrl.length === 3 &&
      splitUrl[1] === "albums"
    ) {
      //get album id
      let albumId = splitUrl[2];

      //if album exists, return it, otherwise return error
      if (!doesAlbumExist(res, albumId)) {
        return;
      }
      let album = albums[albumId];
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify(album));
    }

    //add album to specific artist based on artist id
    if (
      req.method === "POST" &&
      splitUrl.length === 4 &&
      splitUrl[1] === "artists" &&
      splitUrl[3] === "albums"
    ) {
      //check if artist exists, return error if not
      let artistId = splitUrl[2];
      if (!doesArtistExist(res, artistId)) {
        return;
      }

      //otherwise
      //if there's no body or name property on body, return error
      //otherwise, add it to albums with artist id and new albumid

      if (!doesReqBodyOrNameExist(res, req)) {
        return;
      }

      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      let newAlbumID = getNewAlbumId();
      let newAlbum = {
        name: req.body.name,
        artistId: Number(artistId),
        albumId: newAlbumID,
      };
      albums[`${newAlbumID}`] = newAlbum;
      return res.end(JSON.stringify(newAlbum));
    }

    //edit specified album by album id
    if (
      (req.method === "PUT" || req.method === "PATCH") &&
      splitUrl.length === 3 &&
      splitUrl[1] === "albums"
    ) {
      //get album id
      let albumId = splitUrl[2];
      //return error if album doesn't exist
      let album = albums[albumId];
      if (!doesAlbumExist(res, albumId)) {
        return;
      }
      //otherwise check if there's req body and name prop, if there isn't return error
      //otherwise edit and return edited album
      if (!doesReqBodyOrNameExist(res, req)) {
        return;
      }

      album.name = req.body.name;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify(album));
    }

    //get all songs of specific artist based on artist id
    if (
      req.method === "GET" &&
      splitUrl.length === 4 &&
      splitUrl[1] === "artists" &&
      splitUrl[3] === "songs"
    ) {
      let artistId = splitUrl[2];

      //return error message if artist doesn't exist
      if (!doesArtistExist(res, artistId)) {
        return;
      }
      //otherwise get all the albums of the artist
      //then get all their songs

      let searchAlbums = Object.values(albums).filter(
        (album) => album.artistId === Number(artistId)
      );
      let albumIds = Object.values(searchAlbums).map((album) => album.albumId);
      let searchSongs = Object.values(songs).filter((song) =>
        albumIds.includes(song.albumId)
      );
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify(searchSongs));
    }

    //get all songs of specific album based on album id
    if (
      req.method === "GET" &&
      splitUrl.length === 4 &&
      splitUrl[1] === "albums" &&
      splitUrl[3] === "songs"
    ) {
      let albumId = splitUrl[2];
      //return error if album doesn't exist
      if (!doesAlbumExist(res, albumId)) {
        return;
      }

      //otherwise filter through all songs with this album id and return them
      let searchSongs = Object.values(songs).filter(
        (song) => song.albumId === Number(albumId)
      );
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify(searchSongs));
    }

    //Get all songs of specified trackNumber
    if (
      req.method === "GET" &&
      splitUrl.length === 4 &&
      splitUrl[1] === "trackNumbers" &&
      splitUrl[3] === "songs"
    ) {
      let trackNumber = Number(splitUrl[2]);
      let searchSongs = Object.values(songs).filter(
        (song) => song.trackNumber === trackNumber
      );
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify(searchSongs));
    }

    //get song based on song id
    if (
      req.method === "GET" &&
      splitUrl.length === 3 &&
      splitUrl[1] === "songs"
    ) {
      let songId = splitUrl[2];
      if (!doesSongExist(res, songId)) {
        return;
      }

      res.statusCode = 200;
      return res.end(JSON.stringify(songs[songId]));
    }

    //add song to specific album based on album id
    if (
      req.method === "POST" &&
      splitUrl.length === 4 &&
      splitUrl[1] === "albums" &&
      splitUrl[3] === "songs"
    ) {
      let albumId = splitUrl[2];
      //if album doesn't exist or there is not req body/name or tracknumber prop return error
      if (!doesAlbumExist(res, albumId)) {
        return;
      }

      if (!doesReqBodyOrNameOrTracknumberOrLyricsExist(res, req)) {
        return;
      }

      //otherwise, create new song with new song id, the input album id, lyrics, track num, name
      //add to songs, and return it as response

      let newSongId = getNewSongId();
      let newSong = {
        songId: newSongId,
        lyrics: req.body.lyrics,
        trackNumber: req.body.trackNumber,
        albumId: Number(albumId),
        name: req.body.name,
      };
      songs[`${newSongId}`] = newSong;

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify(newSong));
    }

    //edit specific song by songId
    if (
      (req.method === "PATCH" || req.method === "PUT") &&
      splitUrl.length === 3 &&
      splitUrl[1] === "songs"
    ) {
      let songId = splitUrl[2];
      //if song doesn't exist return error
      if (!doesSongExist(res, songId)) {
        return;
      }

      //get song
      let song = songs[songId];
      //edit props if they exist on body
      if (req.body) {
        if (req.body.trackNumber) {
          song.trackNumber = req.body.trackNumber;
        }

        if (req.body.name) {
          song.name = req.body.name;
        }

        if (req.body.lyrics) {
          song.lyrics = req.body.lyrics;
        }
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify(song));
    }
    if (
      req.method === "DELETE" &&
      splitUrl.length === 3 &&
      splitUrl[1] === "songs"
    ) {
      let songId = splitUrl[2];
      //if song doesn't exist return error
      if (!doesSongExist(res, songId)) {
        return;
      }

      //otherwise delete it

      delete songs[songId];
      res.setHeader("Content-Type", "application/json");
      return res.end(
        JSON.stringify({
          message: "Deletion successful",
        })
      );
    }

    //delete song by song id

    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.write("Endpoint not found");
    return res.end();
  });
});

//function for evaluating if artist with artist id exists, will set error response if not and return false, true if it does exist
function doesArtistExist(response, artistId) {
  if (!artists[artistId]) {
    response.statusCode = 404;
    response.setHeader("Content-Type", "application/json");
    response.end(
      JSON.stringify({ message: "No artist with this artistId exists" })
    );
    return false;
  }
  return true;
}

//function for evaluating if album with album id exists, will set error response if not and return false, true if it does exist
function doesAlbumExist(response, albumId) {
  if (!albums[albumId]) {
    response.statusCode = 404;
    response.setHeader("Content-Type", "application/json");
    response.end(
      JSON.stringify({ message: "No album with this album id exists" })
    );
    return false;
  }
  return true;
}

//function for evaluating if req body exists or if it has a name prop, if either are false then set error response and return false, true if they are true
function doesReqBodyOrNameExist(response, request) {
  if (!request.body || !request.body.name) {
    response.statusCode = 404;
    response.setHeader("Content-Type", "application/json");
    response.end(
      JSON.stringify({ message: "Needs req body with name property" })
    );
    return false;
  }
  return true;
}

//function for evaluating if req body exists or if it has a name prop or track number prop or lyrics prop, if either are false then set error response and return false, true if they are true
function doesReqBodyOrNameOrTracknumberOrLyricsExist(response, request) {
  if (
    !request.body ||
    !request.body.name ||
    !request.body.trackNumber ||
    !request.body.lyrics
  ) {
    response.statusCode = 404;
    response.setHeader("Content-Type", "application/json");
    response.end(
      JSON.stringify({
        message: "Needs req body with name, track number, and lyrics property",
      })
    );
    return false;
  }
  return true;
}

//funciton for evaluating if song exists based on song id, if not return false and set error message, return true otherwise
function doesSongExist(response, songId) {
  if (!songs[songId]) {
    response.statusCode = 404;
    response.setHeader("Content-Type", "application/json");
    response.end(
      JSON.stringify({ message: "No song with this song id exists" })
    );
    return false;
  }

  return true;
}

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
