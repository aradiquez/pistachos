(function() {
    'use strict';

    angular
        .module('nuts.pistachos')
        .component('pistachoContainer', {
            templateUrl: '/public/pistachos/pistacho-container/pistacho-container-template.html',
            controller: 'nuts.PistachoContainerController'
        });
})();