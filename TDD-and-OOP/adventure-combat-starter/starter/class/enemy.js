const { Character } = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom, cooldown = 3000) {
    // Fill this in
    super(name, description, currentRoom);
    this.cooldown = cooldown;
    this.defaultCooldown = cooldown;
    this.attackTarget = null;
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    // Fill this in
    let exits = this.currentRoom.getExits();
    let choice = Math.floor(Math.random() * exits.length);
    let nextRoomDirection = exits[choice];
    this.currentRoom = this.currentRoom.getRoomInDirection(nextRoomDirection);
    this.cooldown = this.defaultCooldown;
  }

  takeSandwich() {
    // Fill this in
    let sandwich = this.currentRoom.getItemByName('sandwich');
    //if there's a sandwich, take the sandwich
    if (sandwich !== null) {
      this.items.push(sandwich);
      this.currentRoom.items.splice(this.currentRoom.items.indexOf(sandwich), 1);
      this.cooldown+=1000;
    }
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    let enemy = this;
    const resetCooldown = function () {
      enemy.cooldown = 0;
      enemy.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    // Fill this in
    this.attackTarget.applyDamage(this.strength);
    console.log("The " + this.name + " hit " + this.attackTarget.name + " for " + this.strength + "damage");
    this.cooldown = this.defaultCooldown;
  }

  applyDamage(amount) {
    // Fill this in
    super.applyDamage(amount);
    console.log("The " + this.name + "'s health is now "+ this.health);
    this.act();

  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
      this.die();
      console.log("It's dead, you can stop beating its corpse now");
    } else if (this.cooldown > 0) {
      this.rest();
    }
    else if (this.cooldown === 0 && this.attackTarget !== null && this.player.currentRoom === this.currentRoom) {
      // Fill this in
      this.attack();
      if(this.attackTarget.health <=0){
        console.log("The game is now over");
        this.player.die();
      }
    } else if (this.player.currentRoom === this.currentRoom){
      this.takeSandwich();
    }
    else {
      this.scratchNose();
      this.randomMove();
      this.rest();
    }



  }


  scratchNose() {
    this.cooldown += 1000;
    console.log(`${this.name} scratches its nose`)
    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};
