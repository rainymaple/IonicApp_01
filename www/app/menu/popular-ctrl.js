(function () {
    angular.module('soupebolApp').controller('popularCtrl', ['utility', 'foodService', 'config', popularCtrl]);

    function popularCtrl(utility, foodService, config) {
        var vm = this;

        vm.popularFoods = foodService.getPopularFoods();
        angular.forEach(vm.popularFoods, function (food) {
            food.image = config.getImage('food/' + food.id + '.jpg');
        });

        vm.selectFood = function (id) {
            utility.gotoView('app.welcome', {id: id}, false);
        };
        vm.gotoHome = function () {
            utility.gotoView('app.welcome', {}, true);
        };
    }
})();

