(function() {
    'use strict';

    angular
        .module('nuts.pistachos')
        .controller('nuts.PistachoContainerController', PistachoContainerController);

    PistachoContainerController.$inject = [
        'nuts.pistachoService'
    ];

    function PistachoContainerController(
        pistachoService
    ) {
        var ctrl = this;
        var pistachoIndex = 1;

        angular.extend(ctrl, {
            pistachos: []
        });

        angular.extend(ctrl, {
            $onInit: initialize,
            nextPistacho: nextPistacho,
            previousPistacho: previousPistacho
        });

        function initialize() {
            pistachoService
                .getAll()
                .then(function(result) {
                    ctrl.pistachos = result['pistachos'];
                    showPistacho(pistachoIndex);
                });
        }

        function nextPistacho() {
            activatePistacho(1);
        }

        function previousPistacho() {
            activatePistacho(-1);
        }

        function activatePistacho(n) {
            showPistacho(pistachoIndex += n);
        }

        function showPistacho(number) {
            if (number > ctrl.pistachos.length) {
                pistachoIndex = 1;
            }
            if (number < 1) { 
                pistachoIndex = ctrl.pistachos.length;
            }
            angular.forEach(ctrl.pistachos, element => {
                element.active = false;
            });
            ctrl.pistachos[pistachoIndex - 1].active = true;
        }

    }

})();