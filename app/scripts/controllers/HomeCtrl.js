(function() {
    function HomeCtrl(Room, $scope, Message) {
        this.rooms = Room.all;
        this.currentRoom = function(roomId) {
//          console.log("Clicked " + roomId);
            this.room = Room.currentRoom(roomId);
            $scope.messages = Message.getByRoomId(roomId);
/*            Message.getByRoomId(roomId).$bindTo($scope, "data")
                .then(function(){
                  this.messages = $scope.data;
            });*/
        }

    }

    angular
        .module('chatRoom')
        .controller('HomeCtrl', ['Room', '$scope', 'Message', HomeCtrl]);
})();
