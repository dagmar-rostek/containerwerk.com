'use strict';

angular.module('crudApp').controller('AusfuehrungController',
    ['AusfuehrungService', '$scope',  function( AusfuehrungService, $scope) {

        var self = this;
        self.ausfuehrung = {};
        self.ausfuehrungen = [];

        self.submit = submit;
        self.getAllAusfuehrungen = getAllAusfuehrungen;
        self.getAusfuehrung= getAusfuehrung;
        self.createAusfuehrung = createAusfuehrung;
        self.updateAusfuehrung = updateAusfuehrung;
        self.removeAusfuehrung = removeAusfuehrung;
        self.editAusfuehrung = editAusfuehrung;
        self.reset = reset;

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;


        function submit() {
            console.log('Submitting');
            if (self.ausfuehrung.id === undefined || self.ausfuehrung.id === null) {
                console.log('Saving New Ausfuehrung', self.ausfuehrung);
                createAusfuehrung(self.ausfuehrung);
            } else {
                updateAusfuehrung(self.ausfuehrung, self.ausfuehrung.id);
                console.log('Ausfuehrung updated with id ', self.ausfuehrung.id);
            }
        }


        function createAusfuehrung(ausfuehrung) {
            console.log('About to create ausfuehrung');
            AusfuehrungService.createAusfuehrung(ausfuehrung)
                .then(
                    function (response) {
                        console.log('Ausfuehrung created successfully');
                        self.successMessage = 'Ausfuehrung created successfully';
                        self.errorMessage='';
                        self.done = true;
                        self.ausfuehrung={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating Ausfuehrung');
                        self.errorMessage = 'Error while creating Ausfuehrung .... :(: ' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                );
        }

        function updateAusfuehrung(ausfuehrung, id){
            console.log('About to update ausfuehrung');
            AusfuehrungService.updateAusfuehrung(ausfuehrung, id)
                .then(
                    function (response){
                        console.log('Ausfuehrung updated successfully');
                        self.successMessage='Ausfuehrung updated successfully';
                        self.errorMessage='';
                        self.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function(errResponse){
                        console.error('Error while updating Ausfuehrung');
                        self.errorMessage='Error while updating Ausfuehrung '+errResponse.data;
                        self.successMessage='';
                    }
                );
        }

        function removeAusfuehrung(id){
            console.log('About to remove Ausfuehrung with id '+id);
            AusfuehrungService.removeAusfuehrung(id)
                .then(
                    function(){
                        console.log('Ausfuehrung '+id + ' removed successfully');
                    },
                    function(errResponse){
                        console.error('Error while removing Ausfuehrung '+id +', Error :'+errResponse.data);
                    }
                );
        }

        function getAllAusfuehrungen() {
            return AusfuehrungService.getAllAusfuehrungen();
        }


        function editAusfuehrung(id) {
            self.successMessage='';
            self.errorMessage='';
            AusfuehrungService.getAusfuehrung(id).then(
                function (ausfuehrung) {
                    self.ausfuehrung = ausfuehrung;
                },
                function (errResponse) {
                    console.error('Error while removing ausfuehrung ' + id + ', Error :' + errResponse.data);
                }
            );
        }


        function getAusfuehrung(id){
            self.successMessage='';
            self.errorMessage='';
            return AusfuehrungService.getAusfuehrung(id).then(
                function(ausfuehrung){
                    self.ausfuehrung = ausfuehrung;
                },
                function (errResponse){
                    console.error('Error while finding ausfuehrung ' + id + ', Error : ' + errResponse.data);
                }
            );
        }



        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.ausfuehrung={};
            $scope.myForm.$setPristine(); //reset Form
        }

    }

    ]);