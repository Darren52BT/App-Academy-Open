class Character {

  constructor(name, description, currentRoom, items=[]) {
    // Fill this in
    this.name=name;
    this.description=description;
    this.currentRoom=currentRoom;
    this.health = 100;
    this.strength = 10;
    this.items=items;
  }

  applyDamage(amount) {
    // Fill this in
    this.health -=amount;
    if(this.health<=0){
      console.log(this.name + " is now dead.");
      this.die();
    }
  }

  die() {
    // Fill this in
    this.items.forEach((item) =>{
      this.currentRoom.items.push(item);
    });
    this.items=[];
    this.currentRoom=null;
    this.health=0;
  }

}

module.exports = {
  Character,
};
