'use strict';

angular.module('crudApp').factory('AusfuehrungService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {
            var factory = {
                loadAllAusfuehrunge: loadAllAusfuehrunge,
                getAllAusfuehrunge: getAllAusfuehrunge,
                getAusfuehrung: getAusfuehrung,
                createAusfuehrung: createAusfuehrung,
                updateAusfuehrung: updateAusfuehrung,
                removeAusfuehrung: removeAusfuehrung
            };

            return factory;

            function loadAllAusfuehrunge() {
                console.log('Fetching all ausfuehrunge');
                var deferred = $q.defer();
                $http.get(urls.ANGEBOT_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all ausfuehrunge');
                            $localStorage.ausfuehrunge = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading ausfuehrunge');
                            deferred.reject(errResponse);
                        }
                    )
                ;
                return deferred.promise;
            }

            function getAllAusfuehrunge() {
                return $localStorage.ausfuehrunge;
            }

            function getAusfuehrung(id) {
                console.log('Get Ausfuehrung with id ' + id);
                var deffered = $q.defer();
                $http.get(urls.ANGEBOT_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Ausfuehrung with id: ' + id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading user with id' + id);
                            deffered.reject(errResponse)
                        }
                    );
                return deferred.promise;
            }

            function createAusfuehrung(ausfuehrung) {
                console.log('Creating Ausfuehrung');
                var deferred = $q.defer();
                $http.post(urls.ANGEBOT_SERVICE_API, ausfuehrung)
                    .then(
                        function (response) {
                            loadAllAusfuehrunge();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while creating Ausfuehrung : '+errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateAusfuehrung(ausfuehrung, id) {
                console.log('Updating Ausfuehrung with id '+id);
                var deferred = $q.defer();
                $http.put(urls.ANGEBOT_SERVICE_API + id, ausfuehrung)
                    .then(
                        function (response) {
                            loadAllAusfuehrunge();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating Ausfuehrung with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeAusfuehrung(id) {
                console.log('Removing Ausfuehrung with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.ANGEBOT_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllAusfuehrunge();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing Ausfuehrung with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

        }

    ]);
