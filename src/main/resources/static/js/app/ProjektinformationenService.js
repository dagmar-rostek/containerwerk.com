'use strict';

angular.module('crudApp').factory('ProjektinformationenService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllProjektinformationens: loadAllProjektinformationens,
                getAllProjektinformationens: getAllProjektinformationens,
                getProjektinformationen: getProjektinformationen,
                createProjektinformationen: createProjektinformationen,
                updateProjektinformationen: updateProjektinformationen,
                removeProjektinformationen: removeProjektinformationen
            };

            return factory;

            function loadAllProjektinformationens() {
                console.log('Fetching all projektinformationens');
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all projektinformationens');
                            $localStorage.projektinformationens = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading projektinformationens');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllProjektinformationens(){
                return $localStorage.projektinformationens;
            }

            function getProjektinformationen(id) {
                console.log('Fetching Projektinformationen with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Projektinformationen with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading projektinformationen with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function createProjektinformationen(projektinformationen) {
                console.log('Creating Projektinformationen');
                var deferred = $q.defer();
                $http.post(urls.USER_SERVICE_API, projektinformationen)
                    .then(
                        function (response) {
                            loadAllProjektinformationens();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while creating Projektinformationen : '+errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateProjektinformationen(projektinformationen, id) {
                console.log('Updating Projektinformationen with id '+id);
                var deferred = $q.defer();
                $http.put(urls.USER_SERVICE_API + id, projektinformationen)
                    .then(
                        function (response) {
                            loadAllProjektinformationens();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating Projektinformationen with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeProjektinformationen(id) {
                console.log('Removing Projektinformationen with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.USER_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllProjektinformationens();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing Projektinformationen with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

        }
    ]);