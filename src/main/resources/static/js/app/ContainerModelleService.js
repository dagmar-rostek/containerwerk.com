'use strict';

angular.module('crudApp').factory('ContainerModelleService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllContainerModelle: loadAllContainerModelle,
                getAllContainerModelle: getAllContainerModelle,
                getContainerModell: getContainerModell,
                createContainerModell: createContainerModell,
                updateContainerModell: updateContainerModell,
                removeContainerModell: removeContainerModell
/*                ,
                getAllModule: getAllModule,
                getAllNutzungsarten: getAllNutzungsarten,
                getAllAusfuehrungen: getAllAusfuehrungen*/
            };

            return factory;

            function loadAllContainerModelle() {
                console.log('Fetching all containermodelle');
                var deferred = $q.defer();
                $http.get(urls.CONTAINERMODELLE_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all containermodelle');
                            $localStorage.containerModelle = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading containermodelle');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllContainerModelle(){
                return $localStorage.containerModelle;
            }

            function getContainerModell(id) {
                console.log('Fetching ContainerModell with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.CONTAINERMODELLE_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully ContainerModell with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading modul with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function createContainerModell(modul) {
                console.log('Creating ContainerModell');
                var deferred = $q.defer();
                $http.post(urls.CONTAINERMODELLE_SERVICE_API, modul)
                    .then(
                        function (response) {
                            loadAllContainerModelle();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while creating ContainerModell : '+errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateContainerModell(modul, id) {
                console.log('Updating ContainerModell with id '+id);
                var deferred = $q.defer();
                $http.put(urls.CONTAINERMODELLE_SERVICE_API + id, modul)
                    .then(
                        function (response) {
                            loadAllContainerModelle();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating ContainerModell with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeContainerModell(id) {
                console.log('Removing ContainerModell with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.CONTAINERMODELLE_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllContainerModelle();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing ContainerModell with id :'+id);
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
