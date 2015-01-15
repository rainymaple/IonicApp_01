(function () {
    angular.module('soupebolApp')
        .controller('menuLayoutCtrl', ['$scope', '$state', '$ionicHistory', 'config', menuLayoutCtrl]);

    function menuLayoutCtrl($scope, $state, $ionicHistory, config) {
        var vm = this;
        vm.headerImage = config.getImage('common/head.jpg');

        vm.languageId = config.languageId;
        $scope.$on(config.languageChangedEvent, function (event, languageId) {
            vm.newLanguageId = languageId;
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

        }
    }

})();