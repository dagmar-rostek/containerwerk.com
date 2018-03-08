'use strict';

angular.module('crudApp').controller('EinrichtungController',
    ['EinrichtungService', '$scope',  function( EinrichtungService, $scope) {

        var self = this;
        self.einrichtung = {};
        self.einrichtungs=[];

        self.submit = submit;
        self.getAllEinrichtungs = getAllEinrichtungs;
        self.createEinrichtung = createEinrichtung;
        self.updateEinrichtung = updateEinrichtung;
        self.removeEinrichtung = removeEinrichtung;
        self.editEinrichtung = editEinrichtung;
        self.reset = reset;

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;

        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;

        function submit() {
            console.log('Submitting');
            if (self.einrichtung.id === undefined || self.einrichtung.id === null) {
                console.log('Saving New Einrichtung', self.einrichtung);
                createEinrichtung(self.einrichtung);
            } else {
                updateEinrichtung(self.einrichtung, self.einrichtung.id);
                console.log('Einrichtung updated with id ', self.einrichtung.id);
            }
        }

        function createEinrichtung(einrichtung) {
            console.log('About to create einrichtung');
            EinrichtungService.createEinrichtung(einrichtung)
                .then(
                    function (response) {
                        console.log('Einrichtung created successfully');
                        self.successMessage = 'Einrichtung created successfully';
                        self.errorMessage='';
                        self.done = true;
                        self.einrichtung={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating Einrichtung');
                        self.errorMessage = 'Error while creating Einrichtung .... :(: ' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                );
        }


        function updateEinrichtung(einrichtung, id){
            console.log('About to update einrichtung');
            EinrichtungService.updateEinrichtung(einrichtung, id)
                .then(
                    function (response){
                        console.log('Einrichtung updated successfully');
                        self.successMessage='Einrichtung updated successfully';
                        self.errorMessage='';
                        self.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function(errResponse){
                        console.error('Error while updating Einrichtung');
                        self.errorMessage='Error while updating Einrichtung '+errResponse.data;
                        self.successMessage='';
                    }
                );
        }


        function removeEinrichtung(id){
            console.log('About to remove Einrichtung with id '+id);
            EinrichtungService.removeEinrichtung(id)
                .then(
                    function(){
                        console.log('Einrichtung '+id + ' removed successfully');
                    },
                    function(errResponse){
                        console.error('Error while removing einrichtung '+id +', Error :'+errResponse.data);
                    }
                );
        }


        function getAllEinrichtungs(){
            return EinrichtungService.getAllEinrichtungs();
        }

        function editEinrichtung(id) {
            self.successMessage='';
            self.errorMessage='';
            EinrichtungService.getEinrichtung(id).then(
                function (einrichtung) {
                    self.einrichtung = einrichtung;
                },
                function (errResponse) {
                    console.error('Error while removing einrichtung ' + id + ', Error :' + errResponse.data);
                }
            );
        }
        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.einrichtung={};
            $scope.myForm.$setPristine(); //reset Form
        }
    }


    ]);