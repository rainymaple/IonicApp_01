(function () {
    angular.module('soupebolApp').controller('popularCtrl', ['utility', 'foodService', 'config', popularCtrl]);

    function popularCtrl(utility, foodService, config) {
        var vm = this;
        vm.selectFood = selectFood;
        vm.gotoHome = gotoHome;

        (function () {
            vm.popularFoods = foodService.getPopularFoods();
            angular.forEach(vm.popularFoods, function (food) {
                food.image = config.getImage('food/' + food.id + '.jpg');
            });
        })();

        function selectFood(id) {
            utility.gotoView('app.food', {id: id}, false);
        }

        function gotoHome() {
            utility.gotoView('app.welcome', {}, true);
        }
    }
})();

