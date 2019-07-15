(function() {
    'use strict';

    angular
        .module('nuts.pistachos')
        .controller('nuts.PistachoArrowController', PistachoArrowController);

    PistachoArrowController.$inject = [];

    function PistachoArrowController() {
        var ctrl = this;

        angular.extend(ctrl, {
            preview: preview,
            next: next
        });

        function preview() {
            ctrl.previousPistacho();
        }

        function next() {
            ctrl.nextPistacho();
        }
    }

})();