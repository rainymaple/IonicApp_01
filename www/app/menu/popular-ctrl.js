(function () {
    angular.module('soupebolApp').controller('popularCtrl', ['$state', 'foodService', 'config', popularCtrl]);

    function popularCtrl($state, foodService, config) {
        var vm = this;
        vm.popularFoods = foodService.getPopularFood();
        angular.forEach(vm.popularFoods,function(food){
            food.image = config.getImage('/food/'+food.id+'.jpg');
        })
    }
})();

