(function () {
    angular.module('soupebolApp').controller('languageCtrl', ['$state', 'foodService', 'config', languageCtrl]);

    function languageCtrl($state, foodService, config) {
        var vm = this;
        vm.languages = config.languages();
        vm.languageId = config.languageId;
        vm.languageChanged = function () {
            config.languageId = vm.languageId;
        };
        console.log(config.languageId);
    }
})();

