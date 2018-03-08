'use strict';

angular.module('crudApp').factory('EinrichtungService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllEinrichtungs: loadAllEinrichtungs,
                getAllEinrichtungs: getAllEinrichtungs,
                getEinrichtung: getEinrichtung,
                createEinrichtung: createEinrichtung,
                updateEinrichtung: updateEinrichtung,
                removeEinrichtung: removeEinrichtung
            };

            return factory;

            function loadAllEinrichtungs() {
                console.log('Fetching all einrichtungs');
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all einrichtungs');
                            $localStorage.einrichtungs = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading einrichtungs');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllEinrichtungs(){
                return $localStorage.einrichtungs;
            }

            function getEinrichtung(id) {
                console.log('Fetching Einrichtung with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Einrichtung with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading einrichtung with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function createEinrichtung(einrichtung) {
                console.log('Creating Einrichtung');
                var deferred = $q.defer();
                $http.post(urls.USER_SERVICE_API, einrichtung)
                    .then(
                        function (response) {
                            loadAllEinrichtungs();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while creating Einrichtung : '+errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateEinrichtung(einrichtung, id) {
                console.log('Updating Einrichtung with id '+id);
                var deferred = $q.defer();
                $http.put(urls.USER_SERVICE_API + id, einrichtung)
                    .then(
                        function (response) {
                            loadAllEinrichtungs();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating Einrichtung with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeEinrichtung(id) {
                console.log('Removing Einrichtung with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.USER_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllEinrichtungs();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing Einrichtung with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

        }
    ]);