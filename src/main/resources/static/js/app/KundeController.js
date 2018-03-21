'use strict';

angular.module('crudApp')
    .controller('KundeController',
    ['KundeService', '$uibModal', '$log', '$document', '$scope',
        function (KundeService, $uibModal, $log, $document, $scope) {

        var $ctrl = this;
        $ctrl.kunde = {};
        $ctrl.kundes = [];

        $ctrl.submit = submit;
        $ctrl.getAllKundes = getAllKundes;
        $ctrl.createKunde = createKunde;
        $ctrl.updateKunde = updateKunde;
        $ctrl.removeKunde = removeKunde;
        $ctrl.editKunde = editKunde;
        $ctrl.reset = reset;

        $ctrl.successMessage = '';
        $ctrl.errorMessage = '';
        $ctrl.done = false;

        $ctrl.onlyIntegers = /^\d+$/;
        $ctrl.onlyNumbers = /^\d+([,.]\d+)?$/;

        function submit() {
            console.log('Submitting');
            if ($ctrl.kunde.id === undefined || $ctrl.kunde.id === null) {
                console.log('Saving New Kunde', $ctrl.kunde);
                createKunde($ctrl.kunde);
            } else {
                updateKunde($ctrl.kunde, $ctrl.kunde.id);
                console.log('Kunde updated with id ', $ctrl.kunde.id);
            }
        }

        function createKunde(kunde) {
            console.log('About to create kunde');
            KundeService.createKunde(kunde)
                .then(
                    function (response) {
                        console.log('Kunde created successfully');
                        $ctrl.successMessage = 'Kunde created successfully';
                        $ctrl.errorMessage = '';
                        $ctrl.done = true;
                        $ctrl.kunde = {};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating Kunde');
                        $ctrl.errorMessage = 'Error while creating Kunde .... :(: ' + errResponse.data.errorMessage;
                        $ctrl.successMessage = '';
                    }
                );
        }


        function updateKunde(kunde, id) {
            console.log('About to update kunde');
            KundeService.updateKunde(kunde, id)
                .then(
                    function (response) {
                        console.log('Kunde updated successfully');
                        $ctrl.successMessage = 'Kunde updated successfully';
                        $ctrl.errorMessage = '';
                        $ctrl.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while updating Kunde');
                        $ctrl.errorMessage = 'Error while updating Kunde ' + errResponse.data;
                        $ctrl.successMessage = '';
                    }
                );
        }


        function removeKunde(id) {
            console.log('About to remove Kunde with id ' + id);
            KundeService.removeKunde(id)
                .then(
                    function () {
                        console.log('Kunde ' + id + ' removed successfully');
                    },
                    function (errResponse) {
                        console.error('Error while removing kunde ' + id + ', Error :' + errResponse.data);
                    }
                );
        }


        function getAllKundes() {
            return KundeService.getAllKundes();
        }

        function editKunde(id) {
            $ctrl.successMessage = '';
            $ctrl.errorMessage = '';
            KundeService.getKunde(id).then(
                function (kunde) {
                    $ctrl.kunde = kunde;
                },
                function (errResponse) {
                    console.error('Error while removing kunde ' + id + ', Error :' + errResponse.data);
                }
            );
        }

        function reset() {
            $ctrl.successMessage = '';
            $ctrl.errorMessage = '';
            $ctrl.kunde = {};
            $scope.myForm.$setPristine(); //reset Form
        }


        /*$ctrl.animationsEnabled = true;

        $ctrl.openModalKunde = function (size) {
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalKundeContent.html',
                controller: 'ModalKundeInstanceCtrl',
                controllerAs: '$ctrl',
                size: size,
                resolve: {
                    items: function () {
                        console.log("zeile 154");
                        return $ctrl.getAllKundes();
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
        };*/

    }]);

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.
/*

angular.module('crudApp').controller('ModalKundeInstanceCtrl', function ($uibModalInstance, items) {
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

angular.module('crudApp').component('modalKundeComponent', {
    templateUrl: 'myModalKundeContent.html',
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
*/
