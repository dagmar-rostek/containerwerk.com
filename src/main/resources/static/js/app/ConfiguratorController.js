'use strict';

angular.module('crudApp')
    .controller('ConfiguratorController',
        ['ConfiguratorService', '$uibModal', '$log', '$document',
            function (ConfiguratorService, $uibModal, $log, $document, $scope) {
                var $ctrl = this;
                $ctrl.angebot = {};
                $ctrl.angebote = [];

                $ctrl.submit = submit;
                $ctrl.getAngebot = getAngebot;
                $ctrl.createAngebot = createAngebot;
                $ctrl.editAngebot = editAngebot;
                $ctrl.reset = reset;
                $ctrl.berechne = berechne;

                $ctrl.successMessage = '';
                $ctrl.errorMessage = '';
                $ctrl.done = false;



                function submit() {
                    console.log('Submitting new Angebot von configurator-seite');
                    if ($ctrl.angebot.id === undefined || $ctrl.angebot.id === null) {
                        console.log('Saving New Angebot', $ctrl.angebot);
                        createAngebot($ctrl.angebot);
                    } else {
                        updateAngebot($ctrl.angebot, $ctrl.angebot.id);
                        console.log('Angebot updated with id ', $ctrl.angebot.id);
                    }
                }

                function berechne() {
                    console.log('berechne');
                    if ($ctrl.angebot.id === undefined || $ctrl.angebot.id === null) {
                        console.log('Saving New Angebot', $ctrl.angebot);
                        createAngebot($ctrl.angebot);
                    } else {
                        updateAngebot($ctrl.angebot, $ctrl.angebot.id);
                        console.log('Angebot updated with id ', $ctrl.angebot.id);
                    }
                }

                function createAngebot(angebot) {
                    console.log('About to create angebot');
                    ConfiguratorService.createAngebot(angebot)
                        .then(
                            function (response) {
                                console.log('angebot created successfully');
                                $ctrl.successMessage = 'angebot created successfully';
                                $ctrl.errorMessage = '';
                                $ctrl.done = true;
                                $ctrl.angebot = {};
                                $scope.myForm.$setPristine();
                            },
                            function (errResponse) {
                                console.error('Error while creating angebot');
                                $ctrl.errorMessage = 'Error while creating angebot .... :(: ' + errResponse.data.errorMessage;
                                $ctrl.successMessage = '';
                            }
                        );
                }


                function updateAngebot(angebot, id) {
                    console.log('About to update angebot');
                    ConfiguratorService.updateAngebot(angebot, id)
                        .then(
                            function (response) {
                                console.log('Angebot updated successfully');
                                $ctrl.successMessage = 'Angebot updated successfully';
                                $ctrl.errorMessage = '';
                                $ctrl.done = true;
                                $scope.myForm.$setPristine();
                            },
                            function (errResponse) {
                                console.error('Error while updating Angebot');
                                $ctrl.errorMessage = 'Error while updating Angebot ' + errResponse.data;
                                $ctrl.successMessage = '';
                            }
                        );
                }


                function editAngebot(id) {
                    $ctrl.successMessage = '';
                    $ctrl.errorMessage = '';
                    ConfiguratorService.getCotnainer(id).then(
                        function (angebot) {
                            $ctrl.angebot = angebot;
                        },
                        function (errResponse) {
                            console.error('Error while removing angebot ' + id + ', Error :' + errResponse.data);
                        }
                    );
                }

                function reset() {
                    $ctrl.successMessage = '';
                    $ctrl.errorMessage = '';
                    $ctrl.angebot = {};
                    $scope.myForm.$setPristine(); //reset Form
                }

                function getAngebot(id) {
                    $ctrl.successMessage = '';
                    $ctrl.errorMessage = '';
                    return ConfiguratorService.getAngebot(id).then(
                        function (angebot) {
                            $ctrl.angebot = angebot;
                        },
                        function (errResponse) {
                            console.error('Error while finding angebot ' + id + ', Error : ' + errResponse.data);
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
                                return $ctrl.getAllAngebots();
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

