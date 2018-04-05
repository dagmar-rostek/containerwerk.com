'use strict';

angular.module('crudApp')
    .controller('ContainerController',
        ['ContainerService', 'ModulService', 'NutzungsartService', 'AusfuehrungService', '$uibModal', '$log', '$document', '$scope', '$stateParams',
            function (ContainerService, ModulService, NutzungsartService, AusfuehrungService, $uibModal, $log, $document, $scope, $stateParams) {

                var $ctrl = this;
                $ctrl.views = ['container', 'nutzungsart', 'ausfuehrung', 'feature', 'einrichtung', 'anbaumodule'];
                $ctrl.status = 1;
                $ctrl.modul = {};
                $ctrl.moduls = [];
                $ctrl.container = {};
                $ctrl.containers = [];
                $ctrl.nutzungsart = {};
                $ctrl.nutzungsarts = [];
                $ctrl.ausfuehrung = {};
                $ctrl.ausfuehrungen = [];
                $ctrl.hide = false;
                $ctrl.hideNutzungsart = false;
                $ctrl.anzahl = 0;
                $ctrl.submit = submit;
                $ctrl.getAllModuls = getAllModuls;
                $ctrl.getModul = getModul;
                $ctrl.getAllContainers = getAllContainers;
                $ctrl.getContainer = getContainer;
                $ctrl.createContainer = createContainer;
                $ctrl.removecontainer = removeContainer;
                $ctrl.editContainer = editContainer;
                $ctrl.reset = reset;
                $ctrl.berechne = berechne;
                $ctrl.getAllNutzungsarts = getAllNutzungsarts;
                $ctrl.createNutzungsart = createNutzungsart;
                $ctrl.updateNutzungsart = updateNutzungsart;
                $ctrl.getAllAusfuehrungen = getAllAusfuehrungen;
                $ctrl.getIdContainer = getIdContainer;
                $ctrl.getView = getView;

                $ctrl.gesamtpreis = 0;
                $ctrl.successMessage = '';
                $ctrl.errorMessage = '';
                $ctrl.done = false;


                function getView(){
                    return $ctrl.views[$ctrl.status];
                }

                function getAllNutzungsarts() {
                    $scope.$parent.$ctrl.hide = true;
                    return NutzungsartService.getAllNutzungsarts();
                }

                function getAllAusfuehrungen(){
                    $scope.$parent.$ctrl.hideNutzungsart = true;
                    return AusfuehrungService.getAllAusfuehrungen();
                }


                function getAllModuls() {
                    return ModulService.getAllModuls();
                }

                function getIdContainer(container){
                    return ContainerService.getIdContainer(container);
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

                function submit($status) {
                    switch($status){
                        case 'container':
                            console.log('Submitting');
                            console.log('status is container');
                            if ($ctrl.container.id === undefined || $ctrl.container.id === null) {
                                console.log('Saving New Container', $ctrl.container);
                                createContainer($ctrl.container);
                            } else {
                                updateContainer($ctrl.container, $ctrl.container.id);
                                console.log('Container updated with id ', $ctrl.container.id);
                            }
                            break;
                        case 'nutzungsart':
                            console.log('Submitting nutzungsart');
                            console.log('status is nutzungsart');
                            if ($ctrl.nutzungsart.id === undefined || $ctrl.nutzungsart.id === null) {
                                console.log('Saving New nutzungsart', $ctrl.nutzungsart);
                                createNutzungsart($ctrl.nutzungsart);
                            } else {
                                updateNutzungsart($ctrl.nutzungsart, $ctrl.nutzungsart.id);
                                console.log('nutzungsart updated with id ', $ctrl.nutzungsart.id);
                            }
                            break;
                        case 'ausfuehrung':
                            console.log('Submitting ausfuehrung');
                            console.log('status is ausfuehrung');
                            if ($ctrl.ausfuehrung.id === undefined || $ctrl.ausfuehrung.id === null) {
                                console.log('Saving New ausfuehrung', $ctrl.ausfuehrung);
                                createAusfuehrung($ctrl.ausfuehrung);
                            } else {
                                updateAusfuehrung($ctrl.ausfuehrung, $ctrl.ausfuehrung.id);
                                console.log('ausfuehrung updated with id ', $ctrl.ausfuehrung.id);
                            }
                            break;
                    }

                    $ctrl.status = $ctrl.status+1;


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
                            },
                            function (errResponse) {
                                console.error('Error while creating container im ContainerController');
                                $ctrl.errorMessage = 'Error while creating container .... :(: ' + errResponse.data.errorMessage;
                                $ctrl.successMessage = '';
                            }
                        );
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



                function createAusfuehrung(ausfuehrung) {
                    console.log('About to create ausfuehrung');
                    AusfuehrungService.createAusfuehrung(ausfuehrung)
                        .then(
                            function (response) {
                                console.log('Ausfuehrung created successfully');
                                $ctrl.successMessage = 'Ausfuehrung created successfully';
                                $ctrl.errorMessage='';
                                $ctrl.done = true;
                                $ctrl.ausfuehrung={};
                                $scope.myForm.$setPristine();
                            },
                            function (errResponse) {
                                console.error('Error while creating Ausfuehrung');
                                $ctrl.errorMessage = 'Error while creating Ausfuehrung .... :(: ' + errResponse.data.errorMessage;
                                $ctrl.successMessage='';
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

                function updateAusfuehrung(ausfuehrung, id){
                    console.log('About to update ausfuehrung');
                    AusfuehrungService.updateAusfuehrung(ausfuehrung, id)
                        .then(
                            function (response){
                                console.log('Ausfuehrung updated successfully');
                                $ctrl.successMessage='Ausfuehrung updated successfully';
                                $ctrl.errorMessage='';
                                $ctrl.done = true;
                                $scope.myForm.$setPristine();
                            },
                            function(errResponse){
                                console.error('Error while updating Ausfuehrung');
                                $ctrl.errorMessage='Error while updating Ausfuehrung '+errResponse.data;
                                $ctrl.successMessage='';
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
                                return $ctrl.getAllModuls();
                            }
                        }
                    });

                    modalInstance.result.then(function (selectedItem) {
                        $ctrl.selected = selectedItem;
                        $ctrl.container.modul = selectedItem.modul;
                        $ctrl.container.imageID = selectedItem.imageID;
                        $ctrl.container.preis = selectedItem.preis;
                        $ctrl.gesamtpreis = selectedItem.preis;
                        $ctrl.container.beschreibung = selectedItem.beschreibung;
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
                        $ctrl.anzahl = $scope.anzahl;
                        $ctrl.gesamtpreis = $scope.$parent.$ctrl.selected.preis + selectedItem.preis;
                        $scope.$parent.$ctrl.selected.preis = $scope.$parent.$ctrl.selected.preis + selectedItem.preis;
                        $scope.$parent.$ctrl.selected = selectedItem;
                        $scope.$parent.$ctrl.selected.typ = selectedItem.typ;
                        $scope.$parent.$ctrl.selected.beschreibung = selectedItem.beschreibung;


                        console.log("zeile 161");
                    }, function () {
                        $log.info('Modal dismissed at: ' + new Date());
                    });
                };


                $ctrl.openModalAusfuehrung = function (size){
                    var modalInstance = $uibModal.open({
                        animation: $ctrl.animationsEnabled,
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: 'myModalContentAusfuehrung.html',
                        controller: 'ModalInstanceAusfuehrungCtrl',
                        controllerAs: '$ctrl',
                        size: size,
                        resolve: {
                            items: function () {
                                console.log("zeile 154");
                                return $ctrl.getAllAusfuehrungen();
                                // return $ctrl.items;
                            }
                        }
                    });

                    modalInstance.result.then(function (selectedItem) {
                        $ctrl.selected = selectedItem;
                        $ctrl.anzahl = $scope.anzahl;
                        $ctrl.gesamtpreis = $scope.$parent.$ctrl.selected.preis + selectedItem.preis;
                        $scope.$parent.$ctrl.selected.preis = $scope.$parent.$ctrl.selected.preis + selectedItem.preis;
                        $scope.$parent.$ctrl.selected = selectedItem;
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


// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.
angular.module('crudApp').controller('ModalInstanceAusfuehrungCtrl', function ($uibModalInstance, items) {
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
    templateUrl: 'myModalContentAusfuehrung.html',
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
