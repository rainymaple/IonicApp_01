(function () {
    angular.module('soupebolApp').controller('languageCtrl', ['$state', '$rootScope', 'config', languageCtrl]);

    function languageCtrl($state, $rootScope, config) {
        var vm = this;
        vm.languages = config.languages();
        vm.languageId = config.languageId;
        vm.languageChanged = function () {
            config.languageId = vm.languageId;
            $rootScope.$broadcast(config.languageChangedEvent,config.languageId)
        };
    }
})();

