'use strict';

angular.module('crudApp').factory('KundeService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllKundes: loadAllKundes,
                getAllKundes: getAllKundes,
                getKunde: getKunde,
                createKunde: createKunde,
                updateKunde: updateKunde,
                removeKunde: removeKunde
            };

            return factory;

            function loadAllKundes() {
                console.log('Fetching all kundes');
                var deferred = $q.defer();
                $http.get(urls.KUNDE_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all kundes');
                            $localStorage.kundes = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading kundes');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllKundes(){
                return $localStorage.kundes;
            }

            function getKunde(id) {
                console.log('Fetching Kunde with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.KUNDE_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Kunde with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading kunde with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function createKunde(kunde) {
                console.log('Creating Kunde');
                var deferred = $q.defer();
                $http.post(urls.KUNDE_SERVICE_API, kunde)
                    .then(
                        function (response) {
                            loadAllKundes();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while creating Kunde : '+errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateKunde(kunde, id) {
                console.log('Updating Kunde with id '+id);
                var deferred = $q.defer();
                $http.put(urls.KUNDE_SERVICE_API + id, kunde)
                    .then(
                        function (response) {
                            loadAllKundes();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating Kunde with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeKunde(id) {
                console.log('Removing Kunde with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.KUNDE_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllKundes();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing Kunde with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

        }
    ]);