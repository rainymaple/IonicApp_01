(function () {
    angular.module('soupebolApp')

        .controller('menuCtrl', ['$scope', 'foodService', 'utility', menuCtrl]);

    function menuCtrl($scope, foodService, utility) {
        var vm = this;
        vm.search = '';
        vm.showSearch = false;
        vm.openDropdown = false;
        vm.categories = foodService.getAllFoods();
        vm.allFoods = vm.categories;

        vm.toggleDropdown = function () {
            vm.openDropdown = !vm.openDropdown;
        };
        vm.toggleSearchBox = function () {
            vm.clearSearch();
            vm.showSearch = !vm.showSearch;
        };

        vm.clearSearch = function () {
            vm.search = '';
        };

        setupAccordion();

        $scope.$watch('vm.search', function (current, origin) {
            vm.categories = foodService.getFoodsByName(vm.allFoods, vm.search);
        });
        vm.selectFood = function (id) {
            utility.gotoView('app.food', {id: id}, false);
        };

        vm.gotoHome = function () {
            utility.gotoView('app.welcome', {}, true);
        };

        function setupAccordion() {
            vm.toggleGroup = function (group) {
                if (vm.isGroupShown(group)) {
                    vm.shownGroup = null;
                } else {
                    vm.shownGroup = group;
                }
            };
            vm.isGroupShown = function (group) {
                return vm.shownGroup === group;
            };
        }

    }
})();