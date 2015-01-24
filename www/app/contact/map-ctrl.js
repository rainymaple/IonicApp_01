(function () {
    angular.module('soupebolApp').controller('mapCtrl', ['utility', mapCtrl]);

    function mapCtrl(utility) {
        var vm = this;

        vm.gotoHome = function () {
            utility.gotoView('app.welcome', {}, true);
        };
        vm.title = "Soupebol";
        vm.address = "1245, rue du Square Phillips";
        vm.phone = "(514) 282-8388";
        vm.postalCode=" H3B 3E9";

        /* map settings*/
        vm.map = {
            center: {
                latitude: 45.504110,
                longitude: -73.568408
            },
            zoom: 15
        };
        vm.options = {scrollwheel: false};
        vm.windowOptions = {visible: false};
        vm.clickMarker = function () {
            vm.windowOptions.visible = !vm.windowOptions.visible;
        };
        vm.closeClick = function () {
            vm.windowOptions.visible = false;
        };
        vm.marker = {
            coords: {
                latitude: 45.504110,
                longitude: -73.568408
            },
            show: false,
            id: 0
        }
    }
})();

