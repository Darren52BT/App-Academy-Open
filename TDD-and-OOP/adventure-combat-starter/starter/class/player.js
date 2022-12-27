const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
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
            console.log("You successfully picked up the " + item.name);
        } else{
          console.log("There is no item with this name.");
        }
  }

  dropItem(itemName) {

 // Fill this in
 let item = this.getItemByName(itemName);
 if (item != null){
     this.items.splice(this.items.indexOf(item),1);
     this.currentRoom.items.push(item);
     console.log("You dropped "+ item.name+".");
 }
  }

  eatItem(itemName) {

  // Fill this in
  let item = this.getItemByName(itemName);
  if(item != null && item instanceof Food){
      this.items.splice(this.items.indexOf(item),1);
      console.log("You ate this " + item.name+" and gained back 10 health");
      this.health +=10;
  } else{
    console.log("You can't eat this");
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
applyDamage(damage){
  super.applyDamage(damage);
  console.log(this.name + " now has " + this.health + " health.");
}
  hit(name) {

    // Fill this in
    //get enemies in room
    let enemies = this.currentRoom.getEnemies();
    //search for enemy with name
    let enemy = enemies.filter((monster)  => monster.name === name);
    //if no enemies with that name, quit
    if(enemy.length===0){
      console.log("There is no enemy with this name");
      return;
    }
    enemy = enemy[0]; 
    //set enemy's target to player
    enemy.attackTarget = this;
    enemy.applyDamage(this.strength);
    console.log("You hit the " + enemy.name + " for " + this.strength + " damage!");
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
