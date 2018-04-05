'use strict';

angular.module('crudApp')
    .controller('NutzungsartController',
        ['NutzungsartService', '$uibModal', '$log', '$document', '$stateParams',
            function (NutzungsartService, $uibModal, $log, $document, $scope, $stateParams) {

                var $ctrl = this;
                $ctrl.nutzungsart = {};
                $ctrl.nutzungsarts = [];

                $ctrl.submit = submit;
                $ctrl.getAllNutzungsarts = getAllNutzungsarts;
                $ctrl.getNutzungsart = getNutzungsart;
                $ctrl.createNutzungsart = createNutzungsart;
                $ctrl.updateNutzungsart = updateNutzungsart;
                $ctrl.removeNutzungsart = removeNutzungsart;
                $ctrl.editNutzungsart = editNutzungsart;
                $ctrl.reset = reset;
                $ctrl.getModulOfNutzungsart = getModulOfNutzungsart;

                $ctrl.successMessage = '';
                $ctrl.errorMessage = '';
                $ctrl.done = false;

                $ctrl.onlyIntegers = /^\d+$/;
                $ctrl.onlyNumbers = /^\d+([,.]\d+)?$/;

               // $scope.id = $stateParams.id;

                function submit() {
                    console.log('Submitting');
                    if ($ctrl.nutzungsart.id === undefined || $ctrl.nutzungsart.id === null) {
                        console.log('Saving New Nutzungsart', $ctrl.nutzungsart);
                        createNutzungsart($ctrl.nutzungsart);
                    } else {
                        updateNutzungsart($ctrl.nutzungsart, $ctrl.nutzungsart.id);
                        console.log('Nutzungsart updated with id ', $ctrl.nutzungsart.id);
                    }
                }

                function createNutzungsart(nutzungsart) {
                    console.log('About to create nutzungsart');
                    NutzungsartService.createNutzungsart(nutzungsart)
                        .then(
                            function (response) {
                                console.log('Nutzungsart created successfully');
                                $ctrl.successMessage = 'Nutzungsart created successfully';
                                $ctrl.errorMessage = '';
                                $ctrl.done = true;
                                $ctrl.nutzungsart = {};
                                $scope.myForm.$setPristine();
                            },
                            function (errResponse) {
                                console.error('Error while creating Nutzungsart');
                                $ctrl.errorMessage = 'Error while creating Nutzungsart .... :(: ' + errResponse.data.errorMessage;
                                $ctrl.successMessage = '';
                            }
                        );
                }


                function updateNutzungsart(nutzungsart, id) {
                    console.log('About to update nutzungsart');
                    NutzungsartService.updateNutzungsart(nutzungsart, id)
                        .then(
                            function (response) {
                                console.log('Nutzungsart updated successfully');
                                $ctrl.successMessage = 'Nutzungsart updated successfully';
                                $ctrl.errorMessage = '';
                                $ctrl.done = true;
                                $scope.myForm.$setPristine();
                            },
                            function (errResponse) {
                                console.error('Error while updating Nutzungsart');
                                $ctrl.errorMessage = 'Error while updating Nutzungsart ' + errResponse.data;
                                $ctrl.successMessage = '';
                            }
                        );
                }


                function removeNutzungsart(id) {
                    console.log('About to remove Nutzungsart with id ' + id);
                    NutzungsartService.removeNutzungsart(id)
                        .then(
                            function () {
                                console.log('Nutzungsart ' + id + ' removed successfully');
                            },
                            function (errResponse) {
                                console.error('Error while removing nutzungsart ' + id + ', Error :' + errResponse.data);
                            }
                        );
                }


                function getAllNutzungsarts() {
                    return NutzungsartService.getAllNutzungsarts();
                }

                function editNutzungsart(id) {
                    $ctrl.successMessage = '';
                    $ctrl.errorMessage = '';
                    NutzungsartService.getNutzungsart(id).then(
                        function (nutzungsart) {
                            $ctrl.nutzungsart = nutzungsart;
                        },
                        function (errResponse) {
                            console.error('Error while removing nutzungsart ' + id + ', Error :' + errResponse.data);
                        }
                    );
                }

                function reset() {
                    $ctrl.successMessage = '';
                    $ctrl.errorMessage = '';
                    $ctrl.nutzungsart = {};
                    $scope.myForm.$setPristine(); //reset Form
                }

                function getModulOfNutzungsart(idModul) {
                    $ctrl.successMessage = '';
                    $ctrl.errorMessage = '';
                    return NutzungsartService.getModulOfNutzungsart(idModul).then(
                        function (modulOfnutzungsart) {
                            $ctrl.modulOfnutzungsart = modulOfnutzungsart;
                        },
                        function (errResponse) {
                            console.error('Error while finding modulOfnutzungsart ' + idModul + ', Error: ' + errResponse.data);
                        }
                    );
                }


                function getNutzungsart(id) {
                    $ctrl.successMessage = '';
                    $ctrl.errorMessage = '';
                    return NutzungsartService.getNutzungsart(id).then(
                        function (nutzungsart) {
                            $ctrl.nutzungsart = nutzungsart;
                        },
                        function (errResponse) {
                            console.error('Error while finding nutzungsart ' + id + ', Error: ' + errResponse.data);
                        }
                    );
                }

                $ctrl.animationsEnabled = true;

                $ctrl.openModalNutzung = function (size) {
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

angular.module('crudApp').component('modalComponent', {
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
