'use strict';

angular.module('crudApp').factory('NutzungsartService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllNutzungsarts: loadAllNutzungsarts,
                getAllNutzungsarts: getAllNutzungsarts,
                getNutzungsart: getNutzungsart,
                createNutzungsart: createNutzungsart,
                updateNutzungsart: updateNutzungsart,
                removeNutzungsart: removeNutzungsart
            };

            return factory;

            function loadAllNutzungsarts() {
                console.log('Fetching all nutzungsarts');
                var deferred = $q.defer();
                $http.get(urls.NUTZUNGSART_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all nutzungsarts');
                            $localStorage.nutzungsarts = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading nutzungsarts');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllNutzungsarts(){
                return $localStorage.nutzungsarts;
            }

            function getNutzungsart(id) {
                console.log('Fetching Nutzungsart with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.NUTZUNGSART_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Nutzungsart with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading nutzungsart with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function createNutzungsart(nutzungsart) {
                console.log('Creating Nutzungsart');
                var deferred = $q.defer();
                $http.post(urls.NUTZUNGSART_SERVICE_API, nutzungsart)
                    .then(
                        function (response) {
                            loadAllNutzungsarts();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while creating Nutzungsart : '+errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateNutzungsart(nutzungsart, id) {
                console.log('Updating Nutzungsart with id '+id);
                var deferred = $q.defer();
                $http.put(urls.NUTZUNGSART_SERVICE_API + id, nutzungsart)
                    .then(
                        function (response) {
                            loadAllNutzungsarts();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating Nutzungsart with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeNutzungsart(id) {
                console.log('Removing Nutzungsart with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.NUTZUNGSART_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllNutzungsarts();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing Nutzungsart with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

        }
    ]);