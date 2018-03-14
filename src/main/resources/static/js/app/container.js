angular.module('crudApp.container', [
    'ui.router'
])
    .config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                //////////////
                // container //
                //////////////
                    .state('container', {
                        abstract: true,
                        url: '/container',
                        templateUrl: 'partials/container',
                        resolve: {
                            containers: ['container', function ($q, ContainerService) {
                                console.log('Load all container');
                                var deferred = $q.defer();
                                ContainerService.loadAllContainers().then(deferred.resolve, deferred.resolve);
                                return deferred.promise;
                            }]
                        },
                        controller: ['$scope', '$state', 'container', 'utils',
                            function ($scope, $state, container, utils) {

                                // Add a 'container' field in this abstract parent's scope, so that all
                                // child state views can access it in their scopes. Please note: scope
                                // inheritance is not due to nesting of states, but rather choosing to
                                // nest the templates of those states. It's normal scope inheritance.
                                $scope.container = container;

                                $scope.goToRandom = function () {
                                    var randId = utils.newRandomKey($scope.container, "id", $state.params.containerId);

                                    // $state.go() can be used as a high level convenience method
                                    // for activating a state programmatically.
                                    $state.go('container.modul', {containerId: randId});
                                };
                            }]
                    })

                    ///////////////////////
                    // Container > Modul //
                    ///////////////////////

                    // You can have unlimited children within a state. Here is a second child
                    // state within the 'container' parent state.
                    .state('container.modul', {

                        // Urls can have parameters. They can be specified like :param or {param}.
                        // If {} is used, then you can also specify a regex pattern that the param
                        // must match. The regex is written after a colon (:). Note: Don't use capture
                        // groups in your regex patterns, because the whole regex is wrapped again
                        // behind the scenes. Our pattern below will only match numbers with a length
                        // between 1 and 4.

                        // Since this state is also a child of 'container' its url is appended as well.
                        // So its url will end up being '/container/{containerId:[0-9]{1,4}}'. When the
                        // url becomes something like '/container/42' then this state becomes active
                        // and the $stateParams object becomes { containerId: 42 }.
                        url: '/{contactId:[0-9]{1,4}}',

                        // If there is more than a single ui-view in the parent template, or you would
                        // like to target a ui-view from even higher up the state tree, you can use the
                        // views object to configure multiple views. Each view can get its own template,
                        // controller, and resolve data.

                        // View names can be relative or absolute. Relative view names do not use an '@'
                        // symbol. They always refer to views within this state's parent template.
                        // Absolute view names use a '@' symbol to distinguish the view and the state.
                        // So 'foo@bar' means the ui-view named 'foo' within the 'bar' state's template.
                        views: {

                            // So this one is targeting the unnamed view within the parent state's template.
                            '': {
                                templateUrl: 'partials/modul',
                                controller: ['$scope', '$stateParams', 'utils',
                                    function ($scope, $stateParams, utils) {
                                        $scope.container = utils.findById($scope.container, $stateParams.containerId);
                                    }]
                            },

                            // This one is targeting the ui-view="hint" within the unnamed root, aka index.html.
                            // This shows off how you could populate *any* view within *any* ancestor state.
                            'hint@': {
                                template: 'This is container.modul populating the "hint" ui-view'
                            },

                            // This one is targeting the ui-view="menuTip" within the parent state's template.
                            'menuTip': {
                                // templateProvider is the final method for supplying a template.
                                // There is: template, templateUrl, and templateProvider.
                                templateProvider: ['$stateParams',
                                    function ($stateParams) {
                                        // This is just to demonstrate that $stateParams injection works for templateProvider.
                                        // $stateParams are the parameters for the new state we're transitioning to, even
                                        // though the global '$stateParams' has not been updated yet.
                                        return '<hr><small class="muted">Container ID: ' + $stateParams.containerId + '</small>';
                                    }]
                            }
                        }
                    });
            }
        ]
    );