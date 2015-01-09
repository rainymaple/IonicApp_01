angular.module("soupebolApp", ["ngCordova","ionic"])
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
                //abstract: true,
                url: '/home',
                views: {
                    "mainContent": {
                        templateUrl: "app/home/welcome.html"
                    }
                }
            })
            .state('app.welcome', {
                url: '/welcome',
                views: {
                    "mainContent": {
                        templateUrl: "app/home/welcome.html"
                    }
                }

            })
            .state('app.menu', {
                url: '/menu',
                views: {
                    "mainContent": {
                        templateUrl: "app/menu/menu.html"
                    }
                }
            })
            .state('app.popular', {
                url: '/popular',
                views: {
                    "mainContent": {
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
            .state('app.food', {
                url: '/menu/:id',
                views: {
                    "mainContent": {
                        templateUrl: "app/food/food.html"
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
        $urlRouterProvider.otherwise('/app/map');
    });