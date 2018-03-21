'use strict';

angular.module('crudApp').factory('AngebotService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {
            var factory = {
                loadAllAngebote: loadAllAngebote,
                getAllAngebote: getAllAngebote,
                getAngebot: getAngebot,
                createAngebot: createAngebot,
                updateAngebot: updateAngebot,
                removeAngebot: removeAngebot,
                loadAllContainers: loadAllContainers,
                getAllContainers: getAllContainers,
                getContainer: getContainer,
                createContainer: createContainer,
                updateContainer: updateContainer,
                removeContainer: removeContainer
            };

            return factory;

            function loadAllContainers() {
                console.log('Fetching all containers');
                var deferred = $q.defer();
                $http.get(urls.CONTAINER_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all container');
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
                console.log('Get all containers ');
                return $localStorage.containers;
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
                            console.error('Error while creating Container : '+errResponse.data.errorMessage);
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

            function loadAllAngebote() {
                console.log('Fetching all angebote');
                var deferred = $q.defer();
                $http.get(urls.ANGEBOT_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all angebote');
                            $localStorage.angebote = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading angebote');
                            deferred.reject(errResponse);
                        }
                    )
                ;
                return deferred.promise;
            }

            function getAllAngebote() {
                return $localStorage.angebote;
            }

            function getAngebot(id) {
                console.log('Get Angebot with id ' + id);
                var deferred = $q.defer();
                $http.get(urls.ANGEBOT_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Angebot with id: ' + id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading user with id' + id);
                            deferred.reject(errResponse)
                        }
                    );
                return deferred.promise;
            }

            function createAngebot(angebot) {
                console.log('Creating Angebot');
                var deferred = $q.defer();
                $http.post(urls.ANGEBOT_SERVICE_API, angebot)
                    .then(
                        function (response) {
                            loadAllAngebote();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while creating Angebot : '+errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateAngebot(angebot, id) {
                console.log('Updating Angebot with id '+id);
                var deferred = $q.defer();
                $http.put(urls.ANGEBOT_SERVICE_API + id, angebot)
                    .then(
                        function (response) {
                            loadAllAngebote();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating Angebot with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeAngebot(id) {
                console.log('Removing Angebot with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.ANGEBOT_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllAngebote();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing Angebot with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

        }

    ]);
