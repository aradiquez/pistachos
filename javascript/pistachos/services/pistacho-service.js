(function() {
    'use strict';

    angular
        .module('nuts.pistachos')
        .service('nuts.pistachoService', pistachoService);

    pistachoService.$inject = [
        '$http'
    ];

    function pistachoService(
        $http
    ) {
        var domainUrl = '/pistachos';
        var config = {
            headers: getHeaders()
        };

        return {
            getAll: getAll
        };

        function getAll() {
            return $http
                .get(domainUrl, config)
                .then(function(response) {
                    return response.data;
                });
        }

        function getHeaders() {
            return { 'Accept': 'application/vnd.api+json' };
        }

    }
})();