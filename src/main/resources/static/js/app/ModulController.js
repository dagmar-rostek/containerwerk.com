'use strict';

angular.module('crudApp').controller('ModulController',
    ['ModulService', '$scope', '$stateParams', function (ModulService, $scope, $stateParams) {

        var self = this;
        self.modul = {};
        self.moduls = [];

        self.submit = submit;
        self.getAllModuls = getAllModuls;
        self.createModul = createModul;
        self.updateModul = updateModul;
        self.removeModul = removeModul;
        self.editModul = editModul;
        self.reset = reset;

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;

        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;

        self.auswahl = $stateParams;

        $scope.changedValue = function ($stateParams) {
            self.auswahl = $stateParams;
        };


        function submit() {
            console.log('Submitting');
            if (self.modul.id === undefined || self.modul.id === null) {
                console.log('Saving New Modul', self.modul);
                createModul(self.modul);
            } else {
                updateModul(self.modul, self.modul.id);
                console.log('Modul updated with id ', self.modul.id);
            }
        }

        function createModul(modul) {
            console.log('About to create modul');
            ModulService.createModul(modul)
                .then(
                    function (response) {
                        console.log('Modul created successfully');
                        self.successMessage = 'Modul created successfully';
                        self.errorMessage = '';
                        self.done = true;
                        self.modul = {};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating Modul');
                        self.errorMessage = 'Error while creating Modul .... :(: ' + errResponse.data.errorMessage;
                        self.successMessage = '';
                    }
                );
        }


        function updateModul(modul, id) {
            console.log('About to update modul');
            ModulService.updateModul(modul, id)
                .then(
                    function (response) {
                        console.log('Modul updated successfully');
                        self.successMessage = 'Modul updated successfully';
                        self.errorMessage = '';
                        self.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while updating Modul');
                        self.errorMessage = 'Error while updating Modul ' + errResponse.data;
                        self.successMessage = '';
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
            self.successMessage = '';
            self.errorMessage = '';
            ModulService.getModul(id).then(
                function (modul) {
                    self.modul = modul;
                },
                function (errResponse) {
                    console.error('Error while removing modul ' + id + ', Error :' + errResponse.data);
                }
            );
        }

        function reset() {
            self.successMessage = '';
            self.errorMessage = '';
            self.modul = {};
            $scope.myForm.$setPristine(); //reset Form
        }
    }


    ]);