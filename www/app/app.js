angular.module("soupebolApp", ["ionic"])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                abstract: true,
                url: '/home',
                templateUrl: "app/home/home.html"
            })
            .state('home.welcome', {
                url: '/welcome',
                views: {
                    "tab-welcome": {
                        templateUrl: "app/home/welcome.html"
                    }
                }

            })
            .state('home.menu', {
                url: '/menu',
                views: {
                    "tab-menu": {
                        templateUrl: "app/home/menu.html"
                    }
                }
            })
            .state('app', {
                url: "/app",
                templateUrl: "app/layout/menu-layout.html"

            });
        $urlRouterProvider.otherwise('/home/welcome');
    });