(function () {
    angular.module('soupebolApp')
        .controller("foodCtrl", ["foodService", "$stateParams", foodCtrl]);

    function foodCtrl(foodService, $stateParams) {
        var vm = this;
        if (!$stateParams || !$stateParams.id) {
            console.log("invalid parameter");
            return;
        }
        vm.id = $stateParams.id;
        vm.food = foodService.getFoodById(vm.id);
        console.log(vm.food.name);
    }

})();