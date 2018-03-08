'use strict';

angular.module('crudApp').controller('LoginController',
    ['LoginService', '$scope',  function( LoginService, $scope) {

        var self = this;
        self.login = {};
        self.logins=[];

        self.submit = submit;
        self.getAllLogins = getAllLogins;
        self.createLogin = createLogin;
        self.updateLogin = updateLogin;
        self.removeLogin = removeLogin;
        self.editLogin = editLogin;
        self.reset = reset;

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;

        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;

        function submit() {
            console.log('Submitting');
            if (self.login.id === undefined || self.login.id === null) {
                console.log('Saving New Login', self.login);
                createLogin(self.login);
            } else {
                updateLogin(self.login, self.login.id);
                console.log('Login updated with id ', self.login.id);
            }
        }

        function createLogin(login) {
            console.log('About to create login');
            LoginService.createLogin(login)
                .then(
                    function (response) {
                        console.log('Login created successfully');
                        self.successMessage = 'Login created successfully';
                        self.errorMessage='';
                        self.done = true;
                        self.login={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating Login');
                        self.errorMessage = 'Error while creating Login .... :(: ' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                );
        }


        function updateLogin(login, id){
            console.log('About to update login');
            LoginService.updateLogin(login, id)
                .then(
                    function (response){
                        console.log('Login updated successfully');
                        self.successMessage='Login updated successfully';
                        self.errorMessage='';
                        self.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function(errResponse){
                        console.error('Error while updating Login');
                        self.errorMessage='Error while updating Login '+errResponse.data;
                        self.successMessage='';
                    }
                );
        }


        function removeLogin(id){
            console.log('About to remove Login with id '+id);
            LoginService.removeLogin(id)
                .then(
                    function(){
                        console.log('Login '+id + ' removed successfully');
                    },
                    function(errResponse){
                        console.error('Error while removing login '+id +', Error :'+errResponse.data);
                    }
                );
        }


        function getAllLogins(){
            return LoginService.getAllLogins();
        }

        function editLogin(id) {
            self.successMessage='';
            self.errorMessage='';
            LoginService.getLogin(id).then(
                function (login) {
                    self.login = login;
                },
                function (errResponse) {
                    console.error('Error while removing login ' + id + ', Error :' + errResponse.data);
                }
            );
        }
        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.login={};
            $scope.myForm.$setPristine(); //reset Form
        }
    }


    ]);