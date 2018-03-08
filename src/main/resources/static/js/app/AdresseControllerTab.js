'use strict';

angular.module('crudApp').controller('AdresseController',
    ['AdresseService', '$scope',  function( AdresseService, $scope) {

        var self = this;
        self.adresse = {};
        self.adressee = [];

        self.submit = submit;
        self.getAllAdressee = getAllAdressee;
        self.getAdresse= getAdresse;
        self.createAdresse = createAdresse;
        self.updateAdresse = updateAdresse;
        self.removeAdresse = removeAdresse;
        self.editAdresse = editAdresse;
        self.reset = reset;

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;


        function submit() {
            console.log('Submitting');
            if (self.adresse.id === undefined || self.adresse.id === null) {
                console.log('Saving New Adresse', self.adresse);
                createAdresse(self.adresse);
            } else {
                updateAdresse(self.adresse, self.adresse.id);
                console.log('Adresse updated with id ', self.adresse.id);
            }
        }


        function createAdresse(adresse) {
            console.log('About to create adresse');
            AdresseService.createAdresse(adresse)
                .then(
                    function (response) {
                        console.log('Adresse created successfully');
                        self.successMessage = 'Adresse created successfully';
                        self.errorMessage='';
                        self.done = true;
                        self.adresse={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating Adresse');
                        self.errorMessage = 'Error while creating Adresse .... :(: ' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                );
        }

        function updateAdresse(adresse, id){
            console.log('About to update adresse');
            AdresseService.updateAdresse(adresse, id)
                .then(
                    function (response){
                        console.log('Adresse updated successfully');
                        self.successMessage='Adresse updated successfully';
                        self.errorMessage='';
                        self.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function(errResponse){
                        console.error('Error while updating Adresse');
                        self.errorMessage='Error while updating Adresse '+errResponse.data;
                        self.successMessage='';
                    }
                );
        }

        function removeAdresse(id){
            console.log('About to remove Adresse with id '+id);
            AdresseService.removeAdresse(id)
                .then(
                    function(){
                        console.log('Adresse '+id + ' removed successfully');
                    },
                    function(errResponse){
                        console.error('Error while removing Adresse '+id +', Error :'+errResponse.data);
                    }
                );
        }

        function getAllAdressee() {
            return AdresseService.getAllAdressee();
        }


        function editAdresse(id) {
            self.successMessage='';
            self.errorMessage='';
            AdresseService.getAdresse(id).then(
                function (adresse) {
                    self.adresse = adresse;
                },
                function (errResponse) {
                    console.error('Error while removing adresse ' + id + ', Error :' + errResponse.data);
                }
            );
        }


        function getAdresse(id){
            self.successMessage='';
            self.errorMessage='';
            return AdresseService.getAdresse(id).then(
                function(adresse){
                    self.adresse = adresse;
                },
                function (errResponse){
                    console.error('Error while finding adresse ' + id + ', Error : ' + errResponse.data);
                }
            );
        }



        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.adresse={};
            $scope.myForm.$setPristine(); //reset Form
        }

    }

    ]);