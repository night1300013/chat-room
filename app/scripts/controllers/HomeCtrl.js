(function() {
    function HomeCtrl(Room, $scope, Message) {
        this.rooms = Room.all;
        this.currentRoom = function(room) {
            $scope.room = room;
            $scope.messages = Message.getByRoomId($scope.room.$id);
        }

        var currentMessage = this.currentMessage;
        this.sendMessage = function(currentMessage) {
            var room = $scope.room;
            var message = Message.send(currentMessage, room);
            this.currentMessage = null;

        }
    }

    angular
        .module('chatRoom')
        .controller('HomeCtrl', ['Room', '$scope', 'Message', HomeCtrl]);
})();
