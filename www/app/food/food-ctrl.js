(function () {
    angular.module('soupebolApp')
        .controller("foodCtrl", ["foodService",'config', "$stateParams", foodCtrl]);

    function foodCtrl(foodService,config, $stateParams) {
        var vm = this;
        if (!$stateParams || !$stateParams.id) {
            console.log("invalid parameter");
            return;
        }
        vm.id = $stateParams.id;
        vm.food = foodService.getFoodById(vm.id);
        vm.food.image= config.getImage('food/' + vm.id + '.jpg');
        vm.food.imageBig= config.getImage('food/' + vm.id + '_big.jpg');
        console.log(vm.food.name);
    }

})();