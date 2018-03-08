'use strict';

angular.module('crudApp').factory('AdresseService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {
            var factory = {
                loadAllAdressee: loadAllAdressee,
                getAllAdressee: getAllAdressee,
                getAdresse: getAdresse,
                createAdresse: createAdresse,
                updateAdresse: updateAdresse,
                removeAdresse: removeAdresse
            };

            return factory;

            function loadAllAdressee() {
                console.log('Fetching all adressee');
                var deferred = $q.defer();
                $http.get(urls.ANGEBOT_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all adressee');
                            $localStorage.adressee = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading adressee');
                            deferred.reject(errResponse);
                        }
                    )
                ;
                return deferred.promise;
            }

            function getAllAdressee() {
                return $localStorage.adressee;
            }

            function getAdresse(id) {
                console.log('Get Adresse with id ' + id);
                var deffered = $q.defer();
                $http.get(urls.ANGEBOT_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Adresse with id: ' + id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading user with id' + id);
                            deffered.reject(errResponse)
                        }
                    );
                return deferred.promise;
            }

            function createAdresse(adresse) {
                console.log('Creating Adresse');
                var deferred = $q.defer();
                $http.post(urls.ANGEBOT_SERVICE_API, adresse)
                    .then(
                        function (response) {
                            loadAllAdressee();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while creating Adresse : '+errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateAdresse(adresse, id) {
                console.log('Updating Adresse with id '+id);
                var deferred = $q.defer();
                $http.put(urls.ANGEBOT_SERVICE_API + id, adresse)
                    .then(
                        function (response) {
                            loadAllAdressee();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating Adresse with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeAdresse(id) {
                console.log('Removing Adresse with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.ANGEBOT_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllAdressee();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing Adresse with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

        }

    ]);
