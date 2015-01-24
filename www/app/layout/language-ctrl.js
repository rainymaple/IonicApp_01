(function () {
    angular.module('soupebolApp').controller('languageCtrl', ['utility', '$rootScope', 'config', languageCtrl]);

    function languageCtrl(utility, $rootScope, config) {
        var vm = this;
        vm.languages = config.languages();
        vm.languageId = config.languageId;
        vm.languageChanged = function () {
            config.languageId = vm.languageId;
            $rootScope.$broadcast(config.languageChangedEvent,config.languageId)
        };
        vm.gotoHome = function () {
            utility.gotoView('app.welcome', {}, true);
        };
    }
})();

