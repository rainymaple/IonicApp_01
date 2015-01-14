(function(){
    angular.module('soupebolApp').controller( 'menuLayoutCtrl',['$state','config',menuLayoutCtrl]);

    function menuLayoutCtrl($state,config){
        var vm = this;
        vm.headerImage=config.getImage('common/head.png');
    }

})();