'use strict';

angular.module('crudApp').factory('ContainerService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllContainers: loadAllContainers,
                getAllContainers: getAllContainers,
                getContainer: getContainer,
                createContainer: createContainer,
                updateContainer: updateContainer,
                removeContainer: removeContainer,
                getIdContainer: getIdContainer
            };

            return factory;

            function loadAllContainers() {
                console.log('Fetching all containers');
                var deferred = $q.defer();
                $http.get(urls.CONTAINER_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all container in ContainerService');
                            $localStorage.containers = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading container');
                            deferred.reject(errResponse);
                        }
                    )
                ;
                return deferred.promise;

            }

            function getAllContainers() {
                console.log('Get all containers im Service');
                return $localStorage.containers;
            }

            function getIdContainer(container){
                console.log('Get Container with container ' + container);
                var deferred = $q.defer();
                $http.get(urls.CONTAINER_SERVICE_API + container)
                    .then(
                        function(response){
                            console.log('Fetched successfully id from container: ' + id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading id from container' + id);
                            deferred.reject(errResponse)
                        }
                    );
                return deferred.promise;
            }

            function getContainer(id) {
                console.log('Get Container with id ' + id);
                var deferred = $q.defer();
                $http.get(urls.CONTAINER_SERVICE_API + id)
                    .then(
                        function(response){
                            console.log('Fetched successfully container with id: ' + id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading container with id' + id);
                            deferred.reject(errResponse)
                        }
                    );
                return deferred.promise;


            }

            function createContainer(container) {
                console.log('Creating Container');
                var deferred = $q.defer();
                $http.post(urls.CONTAINER_SERVICE_API, container)
                    .then(
                        function (response) {
                            loadAllContainers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while creating Container in ContainerService : '+errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateContainer(container, id) {
                console.log('Updating Container with id '+id);
                var deferred = $q.defer();
                $http.put(urls.CONTAINER_SERVICE_API + id, container)
                    .then(
                        function (response) {
                            loadAllContainers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating Container with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeContainer(id) {
                console.log('Removing Container with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.CONTAINER_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllContainers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing Container with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

        }
    ]);