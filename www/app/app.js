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
            .state('app', {
                abstract:true,
                url: "/app",
                templateUrl: "app/layout/menu-layout.html"

            })
            .state('app.home', {
                abstract: true,
                url: '/home',
                views: {
                    "mainContent": {
                        templateUrl: "app/home/home.html"
                    }
                }
            })
            .state('app.home.welcome', {
                url: '/welcome',
                views: {
                    "tab-welcome": {
                        templateUrl: "app/home/welcome.html"
                    }
                }

            })
            .state('app.home.menu', {
                url: '/menu',
                views: {
                    "tab-menu": {
                        templateUrl: "app/menu/menu.html"
                    }
                }
            })
            .state('app.home.popular', {
                url: '/popular',
                views: {
                    "tab-popular": {
                        templateUrl: "app/menu/popular.html"
                    }
                }
            })
            .state('app.map', {
                url: '/map',
                views: {
                    "mainContent": {
                        templateUrl: "app/contact/map.html"
                    }
                }
            })
            .state('app.contact', {
                url: '/contact',
                views: {
                    "mainContent": {
                        templateUrl: "app/contact/contact-info.html"
                    }
                }
            });
        $urlRouterProvider.otherwise('/app/home/welcome');
    });