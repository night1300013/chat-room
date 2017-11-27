(function(){
    function CookiesCtrl($uibModalInstance, $cookies) {
        this.ok = function() {
          $cookies.put('chatRoomUser', this.userName);
          $uibModalInstance.close();
        };
    };

    angular
        .module('chatRoom')
        .controller('CookiesCtrl', ['$uibModalInstance', '$cookies', CookiesCtrl]);
})();
