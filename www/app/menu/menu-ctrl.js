(function () {
    angular.module('soupebolApp')

        .controller('menuCtrl', ['$state', 'foodService', 'config', menuCtrl]);

    function menuCtrl($state, foodService, config) {
        var vm = this;
        vm.categories = foodService.getAllFoods();

        //vm.categories_shrimp = foodService.getFoodsByName(vm.categories, 'shrimp');

        vm.openDropdown = false;
        vm.toggleDropdown = function () {
            vm.openDropdown = !vm.openDropdown;
        };

        setupAccordion();

        vm.selectFood = function (id) {
            $state.go("app.food", {id: id})
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