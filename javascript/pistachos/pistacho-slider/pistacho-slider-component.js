(function() {
    'use strict';

    angular
        .module('nuts.pistachos')
        .component('pistachoSlider', {
            bindings: {
                pistachos: '<'
            },
            templateUrl: '/public/pistachos/pistacho-slider/pistacho-slider-template.html',
            controller: 'nuts.PistachoSliderController'
        });
})();