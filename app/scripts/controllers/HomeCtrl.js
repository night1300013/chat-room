(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;

    }

    angular
        .module('chatRoom')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
