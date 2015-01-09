(function () {
    angular.module('soupebolApp')

        .controller('menuCtrl', ['$state', 'foodService', 'config', menuCtrl]);

    function menuCtrl($state, foodService, config) {
        var vm = this;
        vm.categories = foodService.getAllCategoriesWithFood();

        // todo: move to each group with individual image
        vm.imageGroup = function (image) {
            return config.getFoodImage(image);
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