(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
    }

    angular
        .module('chatRoom')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
