(function () {
    angular.module('soupebolApp').controller('welcomeCtrl', ['config', welcomeCtrl]);

    function welcomeCtrl(config) {
        var vm = this;
        vm.languageId=config.languageId;

    }
})();