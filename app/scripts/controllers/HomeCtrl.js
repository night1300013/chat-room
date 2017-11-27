(function() {
    function HomeCtrl(Room, $scope, Message) {
        this.rooms = Room.all;
        this.currentRoom = function(room) {
            $scope.room = room;
            $scope.messages = Message.getByRoomId($scope.room.$id);
        }

    }

    angular
        .module('chatRoom')
        .controller('HomeCtrl', ['Room', '$scope', 'Message', HomeCtrl]);
})();
