'use strict';

angular.module('crudApp')
    .controller('ModulController',
        ['ModulService', 'ContainerService', 'NutzungsartService', '$uibModal', '$log', '$document', '$scope', '$stateParams',
            function (ModulService, ContainerService, NutzungsartService, $uibModal, $log, $document, $scope, $stateParams) {

                var $ctrl = this;
                $ctrl.modul = {};
                $ctrl.moduls = [];
                $ctrl.container = {};
                $ctrl.containers = [];
                $ctrl.nutzungsart = {};
                $ctrl.nutzungsarts = [];

                $ctrl.submit = submit;
                $ctrl.getAllModuls = getAllModuls;
                $ctrl.getModul = getModul;
                $ctrl.createModul = createModul;
                $ctrl.updateModul = updateModul;
                $ctrl.removeModul = removeModul;
                $ctrl.editModul = editModul;
                $ctrl.reset = reset;
                $ctrl.getAllContainers = getAllContainers;
                $ctrl.getAllNutzungsarts = getAllNutzungsarts;

                $ctrl.successMessage = '';
                $ctrl.errorMessage = '';
                $ctrl.done = false;

                $ctrl.onlyIntegers = /^\d+$/;
                $ctrl.onlyNumbers = /^\d+([,.]\d+)?$/;


                function getAllContainers() {
                    return ContainerService.getAllContainers();
                }

                function getAllNutzungsarts() {
                    return NutzungsartService.getAllNutzungsarts();
                }

                function submit() {
                    console.log('Submitting');
                    if ($ctrl.modul.id === undefined || $ctrl.modul.id === null) {
                        console.log('Saving New Modul', $ctrl.modul);
                        createModul($ctrl.modul);
                    } else {
                        updateModul($ctrl.modul, $ctrl.modul.id);
                        $ctrl.id = $ctrl.modul.id;
                        console.log('Modul updated with id ', $ctrl.modul.id);
                    }
                }

                function createModul(modul) {
                    console.log('About to create modul');
                    ModulService.createModul(modul)
                        .then(
                            function (response) {
                                console.log('Modul created successfully');
                                $ctrl.successMessage = 'Modul created successfully';
                                $ctrl.errorMessage = '';
                                $ctrl.done = true;
                                $ctrl.modul = {};
                            },
                            function (errResponse) {
                                console.error('Error while creating Modul');
                                $ctrl.errorMessage = 'Error while creating Modul .... :(: ' + errResponse.data.errorMessage;
                                $ctrl.successMessage = '';
                            }
                        );
                }


                function updateModul(modul, id) {
                    console.log('About to update modul');
                    ModulService.updateModul(modul, id)
                        .then(
                            function (response) {
                                console.log('Modul updated successfully');
                                $ctrl.successMessage = 'Modul updated successfully';
                                $ctrl.errorMessage = '';
                                $ctrl.done = true;
                                $scope.myForm.$setPristine();
                            },
                            function (errResponse) {
                                console.error('Error while updating Modul');
                                $ctrl.errorMessage = 'Error while updating Modul ' + errResponse.data;
                                $ctrl.successMessage = '';
                            }
                        );
                }


                function removeModul(id) {
                    console.log('About to remove Modul with id ' + id);
                    ModulService.removeModul(id)
                        .then(
                            function () {
                                console.log('Modul ' + id + ' removed successfully');
                            },
                            function (errResponse) {
                                console.error('Error while removing modul ' + id + ', Error :' + errResponse.data);
                            }
                        );
                }


                function getAllModuls() {
                    return ModulService.getAllModuls();
                }

                function editModul(id) {
                    $ctrl.successMessage = '';
                    $ctrl.errorMessage = '';
                    ModulService.getModul(id).then(
                        function (modul) {
                            $ctrl.modul = modul;
                        },
                        function (errResponse) {
                            console.error('Error while removing modul ' + id + ', Error :' + errResponse.data);
                        }
                    );
                }

                function reset() {
                    $ctrl.successMessage = '';
                    $ctrl.errorMessage = '';
                    $ctrl.modul = {};
                    $scope.myForm.$setPristine(); //reset Form
                }

                function getModul(id) {
                    $ctrl.successMessage = '';
                    $ctrl.errorMessage = '';
                    return ModulService.getModul(id).then(
                        function (modul) {
                            $ctrl.modul = modul;
                        },
                        function (errResponse) {
                            console.error('Error while finding module ' + id + ' , Error : ' + errResponse.data);
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


                $ctrl.openModalNutzung = function (size){
                    var modalInstance = $uibModal.open({
                        animation: $ctrl.animationsEnabled,
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: 'myModalContentNutzungsart.html',
                        controller: 'ModalInstanceNutzungsartCtrl',
                        controllerAs: '$ctrl',
                        size: size,
                        resolve: {
                            items: function () {
                                console.log("zeile 154");
                                return $ctrl.getAllNutzungsarts();
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



            }]);





// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.
angular.module('crudApp').controller('ModalInstanceNutzungsartCtrl', function ($uibModalInstance, items) {
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

angular.module('crudApp').component('modalComponent2', {
    templateUrl: 'myModalContentNutzungsart.html',
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
