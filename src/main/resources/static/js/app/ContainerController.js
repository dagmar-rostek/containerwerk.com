'use strict';

angular.module('crudApp')
    .controller('ContainerController',  ['ContainerService', '$scope',
        function( ContainerService, $scope) {

        var self = this;
        self.container = {};
        self.containers = [];

        self.submit = submit;
        self.getAllContainers = getAllContainers;
        self.getContainer = getContainer;
        self.createContainer = createContainer;
        self.removecontainer = removeContainer;
        self.editContainer = editContainer;
        self.reset = reset;
        self.berechne = berechne;

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;


        function submit() {
            console.log('Submitting');
            if (self.container.id === undefined || self.container.id === null) {
                console.log('Saving New Container', self.container);
                createContainer(self.container);
            } else {
                updateContainer(self.container, self.container.id);
                console.log('Container updated with id ', self.container.id);
            }
        }

        function berechne() {
            console.log('berechne');
            if (self.container.id === undefined || self.container.id === null) {
                console.log('Saving New Container', self.container);
                createContainer(self.container);
            } else {
                updateContainer(self.container, self.container.id);
                console.log('Container updated with id ', self.container.id);
            }
        }

        function createContainer(container) {
            console.log('About to create container');
            ContainerService.createContainer(container)
                .then(
                    function (response) {
                        console.log('container created successfully');
                        self.successMessage = 'container created successfully';
                        self.errorMessage='';
                        self.done = true;
                        self.container={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating container');
                        self.errorMessage = 'Error while creating container .... :(: ' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                );
        }


        function updateContainer(container, id){
            console.log('About to update container');
            ContainerService.updateContainer(container, id)
                .then(
                    function (response){
                        console.log('Container updated successfully');
                        self.successMessage='Container updated successfully';
                        self.errorMessage='';
                        self.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function(errResponse){
                        console.error('Error while updating Container');
                        self.errorMessage='Error while updating Container '+errResponse.data;
                        self.successMessage='';
                    }
                );
        }

        function removeContainer(id){
            console.log('About to remove Container with id '+id);
            ContainerService.removeContainer(id)
                .then(
                    function(){
                        console.log('Container '+id + ' removed successfully');
                    },
                    function(errResponse){
                        console.error('Error while removing Container '+id +', Error :'+errResponse.data);
                    }
                );
        }

        function getAllContainers() {
            return ContainerService.getAllContainers();
        }

        function editContainer(id) {
            self.successMessage='';
            self.errorMessage='';
            ContainerService.getCotnainer(id).then(
                function (container) {
                    self.angebot = container;
                },
                function (errResponse) {
                    console.error('Error while removing container ' + id + ', Error :' + errResponse.data);
                }
            );
        }
        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.container={};
            $scope.myForm.$setPristine(); //reset Form
        }

        function getContainer(id){
            self.successMessage='';
            self.errorMessage='';
            return ContainerService.getContainer(id).then(
                function(container){
                    self.container = container;
                },
                function (errResponse){
                    console.error('Error while finding container ' + id + ', Error : ' + errResponse.data);
                }
            );
        }


    }

    ])




;