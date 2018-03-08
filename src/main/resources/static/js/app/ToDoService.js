'use strict';

angular.module('crudApp').factory('TodoService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllTodos: loadAllTodos,
                getAllTodos: getAllTodos,
                getTodo: getTodo,
                createTodo: createTodo,
                updateTodo: updateTodo,
                removeTodo: removeTodo
            };

            return factory;

            function loadAllTodos() {
                console.log('Fetching all todos');
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all todos');
                            $localStorage.todos = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading todos');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllTodos(){
                return $localStorage.todos;
            }

            function getTodo(id) {
                console.log('Fetching Todo with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Todo with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading todo with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function createTodo(todo) {
                console.log('Creating Todo');
                var deferred = $q.defer();
                $http.post(urls.USER_SERVICE_API, todo)
                    .then(
                        function (response) {
                            loadAllTodos();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while creating Todo : '+errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateTodo(todo, id) {
                console.log('Updating Todo with id '+id);
                var deferred = $q.defer();
                $http.put(urls.USER_SERVICE_API + id, todo)
                    .then(
                        function (response) {
                            loadAllTodos();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating Todo with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeTodo(id) {
                console.log('Removing Todo with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.USER_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllTodos();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing Todo with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

        }
    ]);