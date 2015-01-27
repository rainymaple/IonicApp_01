(function () {
    angular.module('soupebolApp')

        .controller('menuCtrl', ['foodService', 'utility', menuCtrl]);

    function menuCtrl(foodService, utility) {
        var vm = this;
        vm.search='';
        vm.categories = foodService.getAllFoods();

        //vm.categories_shrimp = foodService.getFoodsByName(vm.categories, 'shrimp');

        vm.openDropdown = false;
        vm.toggleDropdown = function () {
            vm.openDropdown = !vm.openDropdown;
        };

        vm.clearSearch=function(){
            vm.search='';
        };

        setupAccordion();

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