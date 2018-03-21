'use strict';

angular.module('crudApp').factory('ConfiguratorService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllAngebote: loadAllAngebote,
                getAngebot: getAngebot,
                createAngebot: createAngebot,
                updateAngebot: updateAngebot
                
            };

            return factory;

            function loadAllAngebote() {
                console.log('Fetching all angebote');
                var deferred = $q.defer();
                $http.get(urls.ANGEBOT_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all angebot');
                            $localStorage.angebote = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading angebot');
                            deferred.reject(errResponse);
                        }
                    )
                ;
                return deferred.promise;

            }

           
            function getAngebot(id) {
                console.log('Get Angebot with id ' + id);
                var deferred = $q.defer();
                $http.get(urls.ANGEBOT_SERVICE_API + id)
                    .then(
                        function(response){
                            console.log('Fetched successfully angebot with id: ' + id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading angebot with id' + id);
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

           

        }
    ]);