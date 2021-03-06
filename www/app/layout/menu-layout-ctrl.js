(function () {
    angular.module('soupebolApp')
        .controller('menuLayoutCtrl', ['$scope', 'config', 'utility', menuLayoutCtrl]);

    function menuLayoutCtrl($scope, config, utility) {
        var vm = this;
        vm.headerImage = config.getImage('common/head.jpg');
        vm.languageId = config.languageId;
        vm.gotoView = gotoView;

        var sideMenu = {
            home: ['Home', 'Accueil', '首页'],
            menu: ['Menu', 'Menu', '菜单'],
            popular: ['Best Selling', 'Meilleure Vente', '热卖推荐'],
            googleMap: ['Google Map', 'Carte', '地图'],
            about: ['Contact us', 'Contactez-nous', '联系信息']
        };

        (function(){
            setLanguage(0);
            $scope.$on(config.languageChangedEvent, function (event, languageId) {
                vm.newLanguageId = languageId;
                var index = parseInt(languageId) - 1;
                setLanguage(index);
            });
        })();



        function gotoView(state, param) {
            utility.gotoView(state, param, true);
        }

        function setLanguage(index) {
            vm.home = sideMenu.home[index];
            vm.menu = sideMenu.menu[index];
            vm.popular = sideMenu.popular[index];
            vm.googleMap = sideMenu.googleMap[index];
            vm.about = sideMenu.about[index];
        }

    }

})();