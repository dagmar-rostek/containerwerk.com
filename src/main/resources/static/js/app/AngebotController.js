'use strict';

angular.module('crudApp')
    .controller('AngebotController',
    ['AngebotService', 'KundeService', '$uibModal', '$log', '$document', '$scope',
        function( AngebotService, KundeService, $uibModal, $log, $document, $scope) {

        var $ctrl = this;
        $ctrl.angebot = {};
        $ctrl.angebote = [];
        $ctrl.container = {};
        $ctrl.containers = [];

        $ctrl.submit = submit;
        $ctrl.submitKunde = submitKunde;

        $ctrl.getAllAngebote = getAllAngebote;
        $ctrl.getAllKundes = getAllKundes;
        $ctrl.getAngebot = getAngebot;
        $ctrl.createAngebot = createAngebot;
        $ctrl.updateAngebot = updateAngebot;
        $ctrl.removeAngebot = removeAngebot;
        $ctrl.editAngebot = editAngebot;
        $ctrl.reset = reset;


        $ctrl.successMessage = '';
        $ctrl.errorMessage = '';
        $ctrl.done = false;


        function submit() {
            console.log('Submitting');
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
            AngebotService.createAngebot(angebot)
                .then(
                    function (response) {
                        console.log('Angebot created successfully');
                        $ctrl.successMessage = 'Angebot created successfully';
                        $ctrl.errorMessage='';
                        $ctrl.done = true;
                        $ctrl.angebot={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating Angebot');
                        $ctrl.errorMessage = 'Error while creating Angebot .... :(: ' + errResponse.data.errorMessage;
                        $ctrl.successMessage='';
                    }
                );
        }

        function updateAngebot(angebot, id){
            console.log('About to update angebot');
            AngebotService.updateAngebot(angebot, id)
                .then(
                    function (response){
                        console.log('Angebot updated successfully');
                        $ctrl.successMessage='Angebot updated successfully';
                        $ctrl.errorMessage='';
                        $ctrl.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function(errResponse){
                        console.error('Error while updating Angebot');
                        $ctrl.errorMessage='Error while updating Angebot '+errResponse.data;
                        $ctrl.successMessage='';
                    }
                );
        }

        function removeAngebot(id){
            console.log('About to remove Angebot with id '+id);
            AngebotService.removeAngebot(id)
                .then(
                    function(){
                        console.log('Angebot '+id + ' removed successfully');
                    },
                    function(errResponse){
                        console.error('Error while removing Angebot '+id +', Error :'+errResponse.data);
                    }
                );
        }

        function getAllAngebote() {
            return AngebotService.getAllAngebote();
        }

        function getAllKundes() {
            return KundeService.getAllKundes();

        }

        function submitKunde(){
            KundeService.createKunde();
        }


        function editAngebot(id) {
            $ctrl.successMessage='';
            $ctrl.errorMessage='';
            AngebotService.getAngebot(id).then(
                function (angebot) {
                    $ctrl.angebot = angebot;
                },
                function (errResponse) {
                    console.error('Error while removing angebot ' + id + ', Error :' + errResponse.data);
                }
            );
        }


        function getAngebot(id){
            $ctrl.successMessage='';
            $ctrl.errorMessage='';
            return AngebotService.getAngebot(id).then(
                function(angebot){
                    $ctrl.angebot = angebot;
                },
                function (errResponse){
                    console.error('Error while finding angebot ' + id + ', Error : ' + errResponse.data);
                }
            );
        }



        function reset(){
            $ctrl.successMessage='';
            $ctrl.errorMessage='';
            $ctrl.angebot={};
            $scope.myForm.$setPristine(); //reset Form
        }

        //  $ctrl.items = ['item1', 'item2', 'item3'];

        $ctrl.animationsEnabled = true;

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

angular.module('crudApp').component('modalComponent', {
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
