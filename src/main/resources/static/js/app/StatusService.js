'use strict';

angular.module('crudApp').factory('StatusService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllStatuss: loadAllStatuss,
                getAllStatuss: getAllStatuss,
                getStatus: getStatus,
                createStatus: createStatus,
                updateStatus: updateStatus,
                removeStatus: removeStatus
            };

            return factory;

            function loadAllStatuss() {
                console.log('Fetching all statuss');
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all statuss');
                            $localStorage.statuss = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading statuss');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllStatuss(){
                return $localStorage.statuss;
            }

            function getStatus(id) {
                console.log('Fetching Status with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Status with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading status with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function createStatus(status) {
                console.log('Creating Status');
                var deferred = $q.defer();
                $http.post(urls.USER_SERVICE_API, status)
                    .then(
                        function (response) {
                            loadAllStatuss();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while creating Status : '+errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateStatus(status, id) {
                console.log('Updating Status with id '+id);
                var deferred = $q.defer();
                $http.put(urls.USER_SERVICE_API + id, status)
                    .then(
                        function (response) {
                            loadAllStatuss();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating Status with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeStatus(id) {
                console.log('Removing Status with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.USER_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllStatuss();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing Status with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

        }
    ]);