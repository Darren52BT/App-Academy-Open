const {Food} = require("./food")
class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {

        // Fill this in
        //search room for item
        let item = this.currentRoom.getItemByName(itemName);
        //if found, add it to inventory
        if(item!= null){
            this.items.push(item);
            this.currentRoom.items.splice(this.currentRoom.items.indexOf(item),1);
        }

    }

    dropItem(itemName) {

        // Fill this in
        let item = this.getItemByName(itemName);
        if (item != null){
            this.items.splice(this.items.indexOf(item),1);
            this.currentRoom.items.push(item);
        }
        
    }

    eatItem(itemName) {
        // Fill this in
        let item = this.getItemByName(itemName);
        if(item != null && item instanceof Food){
            this.items.splice(this.items.indexOf(item),1);
        }

    }

    getItemByName(name) {
        //filter out items for items that have a matching name
        let item = this.items.filter((item) => item.name === name);
        //if there are no such items, return null
        if (item.length ===0){
            return null;
        }
        //otherwise, return the first item that matches the name
        return item[0];
    }
}

module.exports = {
  Player,
};
