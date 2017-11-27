(function(){
  function ChatRoomCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('chatRoomUser');
    if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username
      $uibModal.open({
        templateUrl: '/templates/userModal.html',
        controller: 'CookiesCtrl',
        controllerAs: 'cookies'
      })
    }

    angular
      .module('chatRoom')
      .run(['$cookies', '$uibModal', ChatRoomCookies]);
  }
})();
