(function () {
    angular.module('soupebolApp')
        .controller('menuLayoutCtrl', ['$scope', '$state', '$ionicHistory', 'config', menuLayoutCtrl]);

    function menuLayoutCtrl($scope, $state, $ionicHistory, config) {
        var vm = this;
        vm.headerImage = config.getImage('common/head.jpg');

        var sideMenu = {
            home: ['Home', 'Accueil', '首页'],
            menu: ['Menu', 'Menu', '菜单'],
            popular: ['Best Selling', 'Meilleure Vente', '热卖推荐'],
            googleMap: ['Google Map', 'Carte', '地图'],
            about: ['Contact us', 'Contactez-nous', '联系信息']
        };
        setLanguage(0);


        vm.languageId = config.languageId;
        $scope.$on(config.languageChangedEvent, function (event, languageId) {
            vm.newLanguageId = languageId;
            var index = parseInt(languageId) - 1;
            setLanguage(index);
        });

        vm.gotoView = function (state, param) {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });

            if (param) {
                param.languageId = config.languageId;
            } else {
                param = {languageId: config.languageId}
            }
            $state.go(state, param);

        };

        function setLanguage(index){
            vm.home = sideMenu.home[index];
            vm.menu = sideMenu.menu[index];
            vm.popular = sideMenu.popular[index];
            vm.googleMap = sideMenu.googleMap[index];
            vm.about = sideMenu.about[index];
        }
    }

})();