(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
    }

    function ChatRoomCookies($cookies, $uibModal) {
      var currentUser = $cookies.get('chatRoomUser');
      if (!currentUser || currentUser === '') {
        // Do something to allow users to set their username
        $uibModal.open({
          templateUrl: '/templates/userModal.html',
          controller: 'CookiesCtrl',
          controllerAs: 'cookies',
          backdrop: 'static',
          keyboard: false
        })
      }
    }
    angular
        .module('chatRoom',['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
        .config(config)
        .run(['$cookies', '$uibModal', ChatRoomCookies]);
})();
