(function () {
    angular.module('soupebolApp').controller('contactCtrl', ['utility', contactCtrl]);

    function contactCtrl(utility) {
        var vm = this;

        vm.gotoHome = function () {
            utility.gotoView('app.welcome', {}, true);
        };

    }
})();

