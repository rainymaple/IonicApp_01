(function () {
    angular.module('soupebolApp').controller('welcomeCtrl', ["$rootScope", '$scope', "$window", 'config', welcomeCtrl]);

    function welcomeCtrl($rootScope, $scope, $window, config) {
        var vm = this;
        vm.languageId = config.languageId;
        vm.background = config.getImage('common/bg05a.jpg');

        setupWindowSizeChanged($window);

        function setupWindowSizeChanged($window) {
            detectOrientation();
            var win = angular.element($window);
            win.bind("load resize", function () {
                detectOrientation();
                $scope.$apply();
                $rootScope.$broadcast(config.orientationChangedEvent, $scope.orientation);
            });
        }
        function detectOrientation() {
            var bgDiv = document.getElementById('bgDiv');
            var width = bgDiv.offsetWidth;
            var height = bgDiv.offsetHeight;
            $scope.orientation = (width > height) ? config.orientations.landscape : config.orientations.portrait;
            vm.isPortrait = $scope.orientation == config.orientations.portrait;
        }
    }
})();