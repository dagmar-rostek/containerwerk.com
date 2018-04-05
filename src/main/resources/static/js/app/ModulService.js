'use strict';

angular.module('crudApp').factory('ModulService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllModuls: loadAllModuls,
                getAllModuls: getAllModuls,
                getModul: getModul,
                createModul: createModul,
                updateModul: updateModul,
                removeModul: removeModul
            };

            return factory;

            function loadAllModuls() {
                console.log('Fetching all moduls');
                var deferred = $q.defer();
                $http.get(urls.MODUL_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all moduls');
                            $localStorage.moduls = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading moduls');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllModuls(){
                return $localStorage.moduls;
            }

            function getModul(id) {
                console.log('Fetching Modul with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.MODUL_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Modul with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading modul with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function createModul(modul) {
                console.log('Creating Modul');
                var deferred = $q.defer();
                $http.post(urls.MODUL_SERVICE_API, modul)
                    .then(
                        function (response) {
                            loadAllModuls();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while creating Modul : '+errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateModul(modul, id) {
                console.log('Updating Modul with id '+id);
                var deferred = $q.defer();
                $http.put(urls.MODUL_SERVICE_API + id, modul)
                    .then(
                        function (response) {
                            loadAllModuls();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating Modul with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeModul(id) {
                console.log('Removing Modul with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.MODUL_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllModuls();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing Modul with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

        }
    ])
    .service('sharedProperties', function(){
        var property = 'id';

        return{
            getProperty: function(){
                return property;
            },
            setProperty: function(value){
                property = value;
            }
        };
    });
