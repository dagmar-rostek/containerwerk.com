'use strict';

angular.module('crudApp').controller('ChecklisteController',
    ['ChecklisteService', '$scope',  function( ChecklisteService, $scope) {

        var self = this;
        self.checkliste = {};
        self.checklistes=[];

        self.submit = submit;
        self.getAllChecklistes = getAllChecklistes;
        self.createCheckliste = createCheckliste;
        self.updateCheckliste = updateCheckliste;
        self.removeCheckliste = removeCheckliste;
        self.editCheckliste = editCheckliste;
        self.reset = reset;

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;

        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;

        function submit() {
            console.log('Submitting');
            if (self.checkliste.id === undefined || self.checkliste.id === null) {
                console.log('Saving New Checkliste', self.checkliste);
                createCheckliste(self.checkliste);
            } else {
                updateCheckliste(self.checkliste, self.checkliste.id);
                console.log('Checkliste updated with id ', self.checkliste.id);
            }
        }

        function createCheckliste(checkliste) {
            console.log('About to create checkliste');
            ChecklisteService.createCheckliste(checkliste)
                .then(
                    function (response) {
                        console.log('Checkliste created successfully');
                        self.successMessage = 'Checkliste created successfully';
                        self.errorMessage='';
                        self.done = true;
                        self.checkliste={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating Checkliste');
                        self.errorMessage = 'Error while creating Checkliste .... :(: ' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                );
        }


        function updateCheckliste(checkliste, id){
            console.log('About to update checkliste');
            ChecklisteService.updateCheckliste(checkliste, id)
                .then(
                    function (response){
                        console.log('Checkliste updated successfully');
                        self.successMessage='Checkliste updated successfully';
                        self.errorMessage='';
                        self.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function(errResponse){
                        console.error('Error while updating Checkliste');
                        self.errorMessage='Error while updating Checkliste '+errResponse.data;
                        self.successMessage='';
                    }
                );
        }


        function removeCheckliste(id){
            console.log('About to remove Checkliste with id '+id);
            ChecklisteService.removeCheckliste(id)
                .then(
                    function(){
                        console.log('Checkliste '+id + ' removed successfully');
                    },
                    function(errResponse){
                        console.error('Error while removing checkliste '+id +', Error :'+errResponse.data);
                    }
                );
        }


        function getAllChecklistes(){
            return ChecklisteService.getAllChecklistes();
        }

        function editCheckliste(id) {
            self.successMessage='';
            self.errorMessage='';
            ChecklisteService.getCheckliste(id).then(
                function (checkliste) {
                    self.checkliste = checkliste;
                },
                function (errResponse) {
                    console.error('Error while removing checkliste ' + id + ', Error :' + errResponse.data);
                }
            );
        }
        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.checkliste={};
            $scope.myForm.$setPristine(); //reset Form
        }
    }


    ]);