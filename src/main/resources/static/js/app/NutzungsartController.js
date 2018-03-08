'use strict';

angular.module('crudApp').controller('NutzungsartController',
    ['NutzungsartService', '$scope',  function( NutzungsartService, $scope) {

        var self = this;
        self.nutzungsart = {};
        self.nutzungsarts=[];

        self.submit = submit;
        self.getAllNutzungsarts = getAllNutzungsarts;
        self.createNutzungsart = createNutzungsart;
        self.updateNutzungsart = updateNutzungsart;
        self.removeNutzungsart = removeNutzungsart;
        self.editNutzungsart = editNutzungsart;
        self.reset = reset;

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;

        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;

        function submit() {
            console.log('Submitting');
            if (self.nutzungsart.id === undefined || self.nutzungsart.id === null) {
                console.log('Saving New Nutzungsart', self.nutzungsart);
                createNutzungsart(self.nutzungsart);
            } else {
                updateNutzungsart(self.nutzungsart, self.nutzungsart.id);
                console.log('Nutzungsart updated with id ', self.nutzungsart.id);
            }
        }

        function createNutzungsart(nutzungsart) {
            console.log('About to create nutzungsart');
            NutzungsartService.createNutzungsart(nutzungsart)
                .then(
                    function (response) {
                        console.log('Nutzungsart created successfully');
                        self.successMessage = 'Nutzungsart created successfully';
                        self.errorMessage='';
                        self.done = true;
                        self.nutzungsart={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating Nutzungsart');
                        self.errorMessage = 'Error while creating Nutzungsart .... :(: ' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                );
        }


        function updateNutzungsart(nutzungsart, id){
            console.log('About to update nutzungsart');
            NutzungsartService.updateNutzungsart(nutzungsart, id)
                .then(
                    function (response){
                        console.log('Nutzungsart updated successfully');
                        self.successMessage='Nutzungsart updated successfully';
                        self.errorMessage='';
                        self.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function(errResponse){
                        console.error('Error while updating Nutzungsart');
                        self.errorMessage='Error while updating Nutzungsart '+errResponse.data;
                        self.successMessage='';
                    }
                );
        }


        function removeNutzungsart(id){
            console.log('About to remove Nutzungsart with id '+id);
            NutzungsartService.removeNutzungsart(id)
                .then(
                    function(){
                        console.log('Nutzungsart '+id + ' removed successfully');
                    },
                    function(errResponse){
                        console.error('Error while removing nutzungsart '+id +', Error :'+errResponse.data);
                    }
                );
        }


        function getAllNutzungsarts(){
            return NutzungsartService.getAllNutzungsarts();
        }

        function editNutzungsart(id) {
            self.successMessage='';
            self.errorMessage='';
            NutzungsartService.getNutzungsart(id).then(
                function (nutzungsart) {
                    self.nutzungsart = nutzungsart;
                },
                function (errResponse) {
                    console.error('Error while removing nutzungsart ' + id + ', Error :' + errResponse.data);
                }
            );
        }
        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.nutzungsart={};
            $scope.myForm.$setPristine(); //reset Form
        }
    }


    ]);