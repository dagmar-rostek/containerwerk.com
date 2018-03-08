'use strict';

angular.module('crudApp').controller('KundeController',
    ['KundeService', '$scope',  function( KundeService, $scope) {

        var self = this;
        self.kunde = {};
        self.kundes=[];

        self.submit = submit;
        self.getAllKundes = getAllKundes;
        self.createKunde = createKunde;
        self.updateKunde = updateKunde;
        self.removeKunde = removeKunde;
        self.editKunde = editKunde;
        self.reset = reset;

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;

        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;

        function submit() {
            console.log('Submitting');
            if (self.kunde.id === undefined || self.kunde.id === null) {
                console.log('Saving New Kunde', self.kunde);
                createKunde(self.kunde);
            } else {
                updateKunde(self.kunde, self.kunde.id);
                console.log('Kunde updated with id ', self.kunde.id);
            }
        }

        function createKunde(kunde) {
            console.log('About to create kunde');
            KundeService.createKunde(kunde)
                .then(
                    function (response) {
                        console.log('Kunde created successfully');
                        self.successMessage = 'Kunde created successfully';
                        self.errorMessage='';
                        self.done = true;
                        self.kunde={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating Kunde');
                        self.errorMessage = 'Error while creating Kunde .... :(: ' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                );
        }


        function updateKunde(kunde, id){
            console.log('About to update kunde');
            KundeService.updateKunde(kunde, id)
                .then(
                    function (response){
                        console.log('Kunde updated successfully');
                        self.successMessage='Kunde updated successfully';
                        self.errorMessage='';
                        self.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function(errResponse){
                        console.error('Error while updating Kunde');
                        self.errorMessage='Error while updating Kunde '+errResponse.data;
                        self.successMessage='';
                    }
                );
        }


        function removeKunde(id){
            console.log('About to remove Kunde with id '+id);
            KundeService.removeKunde(id)
                .then(
                    function(){
                        console.log('Kunde '+id + ' removed successfully');
                    },
                    function(errResponse){
                        console.error('Error while removing kunde '+id +', Error :'+errResponse.data);
                    }
                );
        }


        function getAllKundes(){
            return KundeService.getAllKundes();
        }

        function editKunde(id) {
            self.successMessage='';
            self.errorMessage='';
            KundeService.getKunde(id).then(
                function (kunde) {
                    self.kunde = kunde;
                },
                function (errResponse) {
                    console.error('Error while removing kunde ' + id + ', Error :' + errResponse.data);
                }
            );
        }
        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.kunde={};
            $scope.myForm.$setPristine(); //reset Form
        }
    }


    ]);