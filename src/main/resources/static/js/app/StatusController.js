'use strict';

angular.module('crudApp').controller('StatusController',
    ['StatusService', '$scope',  function( StatusService, $scope) {

        var self = this;
        self.status = {};
        self.statuss=[];

        self.submit = submit;
        self.getAllStatuss = getAllStatuss;
        self.createStatus = createStatus;
        self.updateStatus = updateStatus;
        self.removeStatus = removeStatus;
        self.editStatus = editStatus;
        self.reset = reset;

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;

        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;

        function submit() {
            console.log('Submitting');
            if (self.status.id === undefined || self.status.id === null) {
                console.log('Saving New Status', self.status);
                createStatus(self.status);
            } else {
                updateStatus(self.status, self.status.id);
                console.log('Status updated with id ', self.status.id);
            }
        }

        function createStatus(status) {
            console.log('About to create status');
            StatusService.createStatus(status)
                .then(
                    function (response) {
                        console.log('Status created successfully');
                        self.successMessage = 'Status created successfully';
                        self.errorMessage='';
                        self.done = true;
                        self.status={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating Status');
                        self.errorMessage = 'Error while creating Status .... :(: ' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                );
        }


        function updateStatus(status, id){
            console.log('About to update status');
            StatusService.updateStatus(status, id)
                .then(
                    function (response){
                        console.log('Status updated successfully');
                        self.successMessage='Status updated successfully';
                        self.errorMessage='';
                        self.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function(errResponse){
                        console.error('Error while updating Status');
                        self.errorMessage='Error while updating Status '+errResponse.data;
                        self.successMessage='';
                    }
                );
        }


        function removeStatus(id){
            console.log('About to remove Status with id '+id);
            StatusService.removeStatus(id)
                .then(
                    function(){
                        console.log('Status '+id + ' removed successfully');
                    },
                    function(errResponse){
                        console.error('Error while removing status '+id +', Error :'+errResponse.data);
                    }
                );
        }


        function getAllStatuss(){
            return StatusService.getAllStatuss();
        }

        function editStatus(id) {
            self.successMessage='';
            self.errorMessage='';
            StatusService.getStatus(id).then(
                function (status) {
                    self.status = status;
                },
                function (errResponse) {
                    console.error('Error while removing status ' + id + ', Error :' + errResponse.data);
                }
            );
        }
        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.status={};
            $scope.myForm.$setPristine(); //reset Form
        }
    }


    ]);