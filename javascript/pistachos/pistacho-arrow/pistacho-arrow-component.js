(function() {
    'use strict';

    angular
        .module('nuts.pistachos')
        .component('pistachoArrow', {
            bindings: {
                nextPistacho: '&',
                previousPistacho: '&'
            },
            templateUrl: '/public/pistachos/pistacho-arrow/pistacho-arrow-template.html',
            controller: 'nuts.PistachoArrowController'
        });
})();