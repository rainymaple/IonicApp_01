(function () {
    angular.module("soupebolApp").config(config)
        .run(function ($rootScope, $state) {
            $rootScope.$state = $state;
        });

    //---------------------------------

    function config($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('app', {
                abstract: true,
                url: "/app",
                templateUrl: "app/layout/menu-layout.html"

            })
/*            .state('app.home', {
                //abstract: true,
                url: '/home',
                views: {
                    "mainContent": {
                        templateUrl: "app/home/welcome.html"
                    }
                }
            })*/
            .state('app.welcome', {
                url: '/welcome/:languageId',
                views: {
                    "mainContent": {
                        templateUrl: "app/home/welcome.html"
                    }
                }

            })
            .state('app.menu', {
                url: '/menu/:languageId',
                views: {
                    "mainContent": {
                        templateUrl: "app/menu/menu.html"
                    }
                }
            })
            .state('app.popular', {
                url: '/popular/:languageId',
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
            .state('app.language', {
                url: '/layout/language',
                views: {
                    "mainContent": {
                        templateUrl: "app/layout/language.html"
                    }
                }
            })
            .state('app.contact', {
                url: '/contact/:languageId',
                views: {
                    "mainContent": {
                        templateUrl: "app/contact/contact-info.html"
                    }
                }
            });
        $urlRouterProvider.otherwise('/app/welcome/1');

    }

})();