'use strict';

angular.module('crudApp')
    .controller('ModalDemoCtrl',
        ['ContainerService', '$uibModal', '$log', '$document',  '$scope',
        function (ContainerService, $uibModal, $log, $document, $scope) {
        var $ctrl = this;
        $ctrl.container = {};
        $ctrl.containers = [];

        $ctrl.submit = submit;
        $ctrl.getAllContainers = getAllContainers;
        $ctrl.getContainer = getContainer;
        $ctrl.createContainer = createContainer;
        $ctrl.removecontainer = removeContainer;
        $ctrl.editContainer = editContainer;
        $ctrl.reset = reset;
        $ctrl.berechne = berechne;

        $ctrl.successMessage = '';
        $ctrl.errorMessage = '';
        $ctrl.done = false;




        function submit() {
            console.log('Submitting');
            if ($ctrl.container.id === undefined || $ctrl.container.id === null) {
                console.log('Saving New Container', $ctrl.container);
                createContainer($ctrl.container);
            } else {
                updateContainer($ctrl.container, $ctrl.container.id);
                console.log('Container updated with id ', $ctrl.container.id);
            }
        }

        function berechne() {
            console.log('berechne');
            if ($ctrl.container.id === undefined || $ctrl.container.id === null) {
                console.log('Saving New Container', $ctrl.container);
                createContainer($ctrl.container);
            } else {
                updateContainer($ctrl.container, $ctrl.container.id);
                console.log('Container updated with id ', $ctrl.container.id);
            }
        }

        function createContainer(container) {
            console.log('About to create container');
            ContainerService.createContainer(container)
                .then(
                    function (response) {
                        console.log('container created successfully');
                        $ctrl.successMessage = 'container created successfully';
                        $ctrl.errorMessage = '';
                        $ctrl.done = true;
                        $ctrl.container = {};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating container');
                        $ctrl.errorMessage = 'Error while creating container .... :(: ' + errResponse.data.errorMessage;
                        $ctrl.successMessage = '';
                    }
                );
        }


        function updateContainer(container, id) {
            console.log('About to update container');
            ContainerService.updateContainer(container, id)
                .then(
                    function (response) {
                        console.log('Container updated successfully');
                        $ctrl.successMessage = 'Container updated successfully';
                        $ctrl.errorMessage = '';
                        $ctrl.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while updating Container');
                        $ctrl.errorMessage = 'Error while updating Container ' + errResponse.data;
                        $ctrl.successMessage = '';
                    }
                );
        }

        function removeContainer(id) {
            console.log('About to remove Container with id ' + id);
            ContainerService.removeContainer(id)
                .then(
                    function () {
                        console.log('Container ' + id + ' removed successfully');
                    },
                    function (errResponse) {
                        console.error('Error while removing Container ' + id + ', Error :' + errResponse.data);
                    }
                );
        }

        function getAllContainers() {
            return ContainerService.getAllContainers();
        }

        function editContainer(id) {
            $ctrl.successMessage = '';
            $ctrl.errorMessage = '';
            ContainerService.getCotnainer(id).then(
                function (container) {
                    $ctrl.angebot = container;
                },
                function (errResponse) {
                    console.error('Error while removing container ' + id + ', Error :' + errResponse.data);
                }
            );
        }

        function reset() {
            $ctrl.successMessage = '';
            $ctrl.errorMessage = '';
            $ctrl.container = {};
            $scope.myForm.$setPristine(); //reset Form
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


      //  $ctrl.items = ['item1', 'item2', 'item3'];

        $ctrl.animationsEnabled = true;

        $ctrl.openModal = function (size) {
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                size: size,
                resolve: {
                    items: function () {
                        console.log("zeile 154");
                        return $ctrl.getAllContainers();
                       // return $ctrl.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $ctrl.selected = selectedItem;
                console.log("zeile 161");
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

       /* $ctrl.openComponentModal = function () {
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                component: 'modalComponent',
                resolve: {
                    items: function () {
                        //return $ctrl.items;
                        console.log("zeile 175");
                        return $ctrl.getAllContainers();
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $ctrl.selected = selectedItem;
            }, function () {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        };*/

       /* $ctrl.openMultipleModals = function () {
            $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title-bottom',
                ariaDescribedBy: 'modal-body-bottom',
                templateUrl: 'stackedModal.html',
                size: 'sm',
                controller: function ($scope) {
                    $scope.name = 'bottom';
                }
            });

            $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title-top',
                ariaDescribedBy: 'modal-body-top',
                templateUrl: 'stackedModal.html',
                size: 'sm',
                controller: function ($scope) {
                    $scope.name = 'top';
                }
            });
        };*/

       /* $ctrl.toggleAnimation = function () {
            $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
        };*/
    }]);

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('crudApp').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
    var $ctrl = this;
    $ctrl.items = items;
    $ctrl.selected = {
        item: $ctrl.items[0]
    };

    $ctrl.ok = function () {
        $uibModalInstance.close($ctrl.selected.item);
    };

    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('crudApp').component('modalComponent', {
    templateUrl: 'myModalContent.html',
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    controller: function () {
        var $ctrl = this;
        $ctrl.$onInit = function () {
            $ctrl.items = $ctrl.resolve.items;
            $ctrl.selected = {
                item: $ctrl.items[0]
            };
        };

        $ctrl.ok = function () {
            $ctrl.close({$value: $ctrl.selected.item});
        };

        $ctrl.cancel = function () {
            $ctrl.dismiss({$value: 'cancel'});
        };
    }
});
