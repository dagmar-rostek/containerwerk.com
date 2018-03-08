'use strict';

angular.module('crudApp').controller('AngebotController',
    ['AngebotService', '$scope',  function( AngebotService, $scope) {

        var self = this;
        self.angebot = {};
        self.angebote = [];

        self.submit = submit;
        self.getAllAngebote = getAllAngebote;
        self.createAngebot = createAngebot;
        self.updateAngebot = updateAngebot;
        self.removeAngebot = removeAngebot;
        self.editAngebot = editAngebot;
        self.reset = reset;

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;


        function submit() {
            console.log('Submitting');
            if (self.angebot.id === undefined || self.angebot.id === null) {
                console.log('Saving New Angebot', self.angebot);
                createAngebot(self.angebot);
            } else {
                updateAngebot(self.angebot, self.angebot.id);
                console.log('Angebot updated with id ', self.angebot.id);
            }
        }


        function createAngebot(angebot) {
            console.log('About to create angebot');
            AngebotService.createAngebot(angebot)
                .then(
                    function (response) {
                        console.log('Angebot created successfully');
                        self.successMessage = 'Angebot created successfully';
                        self.errorMessage='';
                        self.done = true;
                        self.angebot={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating Angebot');
                        self.errorMessage = 'Error while creating Angebot .... :(: ' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                );
        }

        function updateAngebot(angebot, id){
            console.log('About to update angebot');
            AngebotService.updateAngebot(angebot, id)
                .then(
                    function (response){
                        console.log('Angebot updated successfully');
                        self.successMessage='Angebot updated successfully';
                        self.errorMessage='';
                        self.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function(errResponse){
                        console.error('Error while updating Angebot');
                        self.errorMessage='Error while updating Angebot '+errResponse.data;
                        self.successMessage='';
                    }
                );
        }

        function removeAngebot(id){
            console.log('About to remove Angebot with id '+id);
            AngebotService.removeAngebot(id)
                .then(
                    function(){
                        console.log('Angebot '+id + ' removed successfully');
                    },
                    function(errResponse){
                        console.error('Error while removing Angebot '+id +', Error :'+errResponse.data);
                    }
                );
        }

        function getAllAngebote() {
            return AngebotService.getAllAngebote();
        }


        function editAngebot(id) {
            self.successMessage='';
            self.errorMessage='';
            AngebotService.getAngebot(id).then(
                function (angebot) {
                    self.angebot = angebot;
                },
                function (errResponse) {
                    console.error('Error while removing angebot ' + id + ', Error :' + errResponse.data);
                }
            );
        }


        function getAngebot(id){
            self.successMessage='';
            self.errorMessage='';
            return AngebotService.getAngebot(id).then(
                function(angebot){
                    self.angebot = angebot;
                },
                function (errResponse){
                    console.error('Error while finding angebot ' + id + ', Error : ' + errResponse.data);
                }
            );
        }



        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.angebot={};
            $scope.myForm.$setPristine(); //reset Form
        }

    }

    ]);