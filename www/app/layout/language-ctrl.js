(function () {
    angular.module('soupebolApp').controller('languageCtrl', ['utility', '$rootScope', 'config', languageCtrl]);

    function languageCtrl(utility, $rootScope, config) {
        var vm = this;
        vm.languages = config.languages();
        vm.languageId = config.languageId;
        vm.languageChanged = languageChanged;
        vm.gotoHome = gotoHome;

        function languageChanged () {
            config.languageId = vm.languageId;
            $rootScope.$broadcast(config.languageChangedEvent,config.languageId)
        }

        function gotoHome(){
            utility.gotoView('app.welcome', {}, true);
        }
    }
})();

