(function () {
    angular.module('soupebolApp')

        .controller('menuCtrl', ['$state', 'foodService', menuCtrl]);

    function menuCtrl($state, foodService) {
        var vm = this;
        vm.categories = foodService.getAllCategoriesWithFood();

        setupAccordion();

        vm.selectFood = function(id){
            $state.go("app.food",{id:id})
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