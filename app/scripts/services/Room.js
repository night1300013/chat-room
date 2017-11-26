(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(roomName){
      rooms.$add({
        $value: roomName
/*        }).then(function(ref) {
        var id = ref.key;
        console.log("added record with id " + id);
        rooms.$indexFor(id); // returns location in the array
  */    });
    }

    Room.currentRoom = function(roomId) {
      return rooms.$getRecord(roomId).$value;
    }

    return Room;
  }

  angular
      .module('chatRoom')
      .factory('Room', ['$firebaseArray', Room]);
})();
