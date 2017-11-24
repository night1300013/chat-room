(function(){
    function ModalInstanceCtrl($uibModalInstance, Room) {
        this.ok = function() {
          Room.add(this.roomName);
          $uibModalInstance.close();
        };

        this.cancel = function() {
          $uibModalInstance.dismiss('cancel');
        };
    };

    angular
        .module('chatRoom')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();
