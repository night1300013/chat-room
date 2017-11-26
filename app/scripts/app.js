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
/*            .state('room', {
                url: 'room',
                controller: 'MessageCtrl as message',
                templateUrl: '/templates/listMessages.html'
            });*/
/*         $routeProvider
            .when('/', {
                templateUrl: '/templates/home.html',
                controller: 'HomeCtrl as home',
                resolve: {
                  message: function(message){
                      return message.getByRoomId();
                  }
                }
            });*/
    }

    angular
        .module('chatRoom',['ui.router', 'firebase', 'ui.bootstrap'])
        .config(config);
})();
