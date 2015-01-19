(function () {
    angular.module('soupebolApp').factory('utility', ['$state','config','$ionicHistory', utilityService]);

    function utilityService($state,config,$ionicHistory) {
        return {
            gotoView: gotoView
        };


        function gotoView(state, param,disableBackButton) {
            $ionicHistory.nextViewOptions({
                disableBack: !!disableBackButton
            });

            if (param) {
                param.languageId = config.languageId;
            } else {
                param = {languageId: config.languageId}
            }
            $state.go(state, param);

        }

    }

})();