'use strict';

angular.module('crudApp').factory('ChecklisteService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllChecklistes: loadAllChecklistes,
                getAllChecklistes: getAllChecklistes,
                getCheckliste: getCheckliste,
                createCheckliste: createCheckliste,
                updateCheckliste: updateCheckliste,
                removeCheckliste: removeCheckliste
            };

            return factory;

            function loadAllChecklistes() {
                console.log('Fetching all checklistes');
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all checklistes');
                            $localStorage.checklistes = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading checklistes');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllChecklistes(){
                return $localStorage.checklistes;
            }

            function getCheckliste(id) {
                console.log('Fetching Checkliste with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Checkliste with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading checkliste with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function createCheckliste(checkliste) {
                console.log('Creating Checkliste');
                var deferred = $q.defer();
                $http.post(urls.USER_SERVICE_API, checkliste)
                    .then(
                        function (response) {
                            loadAllChecklistes();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while creating Checkliste : '+errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateCheckliste(checkliste, id) {
                console.log('Updating Checkliste with id '+id);
                var deferred = $q.defer();
                $http.put(urls.USER_SERVICE_API + id, checkliste)
                    .then(
                        function (response) {
                            loadAllChecklistes();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating Checkliste with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeCheckliste(id) {
                console.log('Removing Checkliste with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.USER_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllChecklistes();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing Checkliste with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

        }
    ]);