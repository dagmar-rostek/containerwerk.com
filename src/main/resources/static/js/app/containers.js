'use strict';

angular.module('crudApp')
    .controller('containers',
        ['ContainerService', 
            function (ContainerService) {
                var $ctrl = this;
                $ctrl.container = {};
                $ctrl.containers = [];


                $ctrl.getAllContainers = getAllContainers;
                $ctrl.getContainer = getContainer;

                $ctrl.successMessage = '';
                $ctrl.errorMessage = '';
                $ctrl.done = false;


                function getAllContainers() {
                    return ContainerService.getAllContainers();
                }

                function getContainer(id) {
                    $ctrl.successMessage = '';
                    $ctrl.errorMessage = '';
                    return ContainerService.getContainer(id).then(
                        function (container) {
                            $ctrl.container = container;
                        },
                        function (errResponse) {
                            console.error('Error while finding container ' + id + ', Error : ' + errResponse.data);
                        }
                    );
                }

            }]);

