(function() {
    function ModalCtrl($uibModal, $log) {
        this.open = function() {
          var modalInstance = $uibModal.open({
//            ariaLabelledBy: 'modal-title',
//            ariaDescribedBy: 'modal-body',
            templateUrl: '../templates/modal.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: 'modal',
          });

          modalInstance.result.then(function () {
            $log.info('Succeed');
            }, function () {
              $log.info('Modal dismissed/cancelled at: ' + new Date());
          });
        };
    };

    angular
        .module('chatRoom')
        .controller('ModalCtrl', ['$uibModal', '$log', ModalCtrl]);
})();
