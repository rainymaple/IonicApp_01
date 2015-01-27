(function () {
    angular.module('soupebolApp')

        .controller('menuCtrl', ['$scope', 'foodService', 'utility', menuCtrl]);

    function menuCtrl($scope, foodService, utility) {
        var vm = this;
        vm.search = '';
        vm.showSearch = false;
        vm.openDropdown = false;
        vm.toggleDropdown = toggleDropdown;
        vm.toggleSearchBox = toggleSearchBox;
        vm.clearSearch = clearSearch;
        vm.selectFood = selectFood;
        vm.gotoHome = gotoHome;
        vm.gotoPopular = gotoPopular;

        (function () {
            vm.categories = foodService.getAllFoods();
            vm.allFoods = vm.categories;
            setupAccordion();
            $scope.$watch('vm.search', function (current, origin) {
                vm.categories = foodService.getFoodsByName(vm.allFoods, vm.search);
            });
        })();


        function clearSearch() {
            vm.search = '';
        }

        function selectFood(id) {
            utility.gotoView('app.food', {id: id}, false);
        }

        function gotoHome() {
            utility.gotoView('app.welcome', {}, true);
        }

        function gotoPopular() {
            utility.gotoView('app.popular', {}, false);
        }

        function toggleDropdown() {
            vm.openDropdown = !vm.openDropdown;
        }

        function toggleSearchBox() {
            vm.clearSearch();
            vm.showSearch = !vm.showSearch;
        }

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