'use strict';

angular.module('crudApp').factory('LoginService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllLogins: loadAllLogins,
                getAllLogins: getAllLogins,
                getLogin: getLogin,
                createLogin: createLogin,
                updateLogin: updateLogin,
                removeLogin: removeLogin
            };

            return factory;

            function loadAllLogins() {
                console.log('Fetching all logins');
                var deferred = $q.defer();
                $http.get(urls.LOGIN_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all logins');
                            $localStorage.logins = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading logins');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllLogins(){
                return $localStorage.logins;
            }

            function getLogin(id) {
                console.log('Fetching Login with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.LOGIN_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Login with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading login with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function createLogin(login) {
                console.log('Creating Login');
                var deferred = $q.defer();
                $http.post(urls.LOGIN_SERVICE_API, login)
                    .then(
                        function (response) {
                            loadAllLogins();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while creating Login : '+errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateLogin(login, id) {
                console.log('Updating Login with id '+id);
                var deferred = $q.defer();
                $http.put(urls.LOGIN_SERVICE_API + id, login)
                    .then(
                        function (response) {
                            loadAllLogins();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating Login with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeLogin(id) {
                console.log('Removing Login with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.LOGIN_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllLogins();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing Login with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

        }
    ]);