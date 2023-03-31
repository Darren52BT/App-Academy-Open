// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Your code here
    this.currentID ++;
    this.users[this.currentID] = { 'id':this.currentID, 'name': name};
    this.follows[this.currentID] = new Set();
  return this.currentID;
  }

  getUser(userID) {
    // Your code here
    let user = this.users[userID];

    return user ? user : null;
  }

  follow(userID1, userID2) {
    // Your code here
    let user1 = this.getUser(userID1);
    let user2 = this.getUser(userID2);

    if( user1 && user2){
      this.follows[userID1].add(userID2);
      return true;
    }

    return false;
  }

  getFollows(userID) {
    // Your code here

    let user = this.getUser(userID);

    return user ? this.follows[userID] : false;
  }

  getFollowers(userID) {
    // Your code here
    let followers = new Set();

    for(let user of Object.keys(this.users)){
      if(this.follows[this.users[user].id].has(userID)){
        followers.add(this.users[user].id)
      }
    }

    return followers;
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
    let start = userID;
    //starting path
    let queue = [[start]];
    let visited = new Set();
    visited.add(start);

    //set of users that starting user directly follows
   let startFollows = new Set( this.getFollows(userID))
    
   //list of recommended followers
    let recommended = [];
    while ( queue.length > 0){

      //get next path
      let currentPath = queue.shift();
      //get last user and last user's folows
      let lastUser = currentPath[currentPath.length -1];
      let lastUsersFollows = this.getFollows(lastUser).keys();
      
    //if the current path is within the degrees of connection
    if(currentPath.length <= degrees + 2){

      //add the last user to the recommended if they have not been visited AND aren't being directly followed by starting user
      if(!visited.has(lastUser) && !startFollows.has(lastUser)){
        recommended.push(lastUser);
      }

      //for each neighbor of the last user, if they aren't visited yet add them to the new path and add the path to queue
      for(let user of lastUsersFollows){

        if(!visited.has(user)){
            let newPath = currentPath.slice();
            newPath.push(user);
            queue.push(newPath);
        }
      }
    
    }

    }

    return recommended;
  }

}

module.exports = SocialNetwork;
