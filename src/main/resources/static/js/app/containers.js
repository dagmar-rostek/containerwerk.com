angular.module('crudApp.containers', [
    'ui.router'
])
    .config(
        [          '$stateProvider', '$urlRouterProvider',
            function ($stateProvider,   $urlRouterProvider) {
                $stateProvider
                //////////////
                // Containers //
                //////////////
                    .state('containers', {

                        // With abstract set to true, that means this state can not be explicitly activated.
                        // It can only be implicitly activated by activating one of its children.
                        abstract: true,

                        // This abstract state will prepend '/containers' onto the urls of all its children.
                        url: '/containers',

                        // Example of loading a template from a file. This is also a top level state,
                        // so this template file will be loaded and then inserted into the ui-view
                        // within index.html.
                        templateUrl: 'partials/containers'
                       /* controller:'ContainerController',
                        controllerAs: 'ctrl',
                        // Use `resolve` to resolve any asynchronous controller dependencies
                        // *before* the controller is instantiated. In this case, since containers
                        // returns a promise, the controller will wait until containers.all() is
                        // resolved before instantiation. Non-promise return values are considered
                        // to be resolved immediately.
                        resolve: {
                            containers: function ($q,ContainerService) {
                                console.log('Load all container');
                                var deferred = $q.defer();
                                ContainerService.loadAllContainers().then(deferred.resolve, deferred.resolve);
                                return deferred.promise;
                            }
                        }*/
                        //,

                       /* // You can pair a controller to your template. There *must* be a template to pair with.
                        controller: ['$scope', '$state', 'containers', 'utils',
                            function (  $scope,   $state,   containers,   utils) {

                                // Add a 'containers' field in this abstract parent's scope, so that all
                                // child state views can access it in their scopes. Please note: scope
                                // inheritance is not due to nesting of states, but rather choosing to
                                // nest the templates of those states. It's normal scope inheritance.
                                $scope.containers = containers;

                                $scope.goToRandom = function () {
                                    var randId = utils.newRandomKey($scope.containers, "id", $state.params.containerId);

                                    // $state.go() can be used as a high level convenience method
                                    // for activating a state programmatically.
                                    $state.go('containers.detail', { containerId: randId });
                                };
                            }]*/
                    })

                    /////////////////////
                    // Containers > List //
                    /////////////////////

                    // Using a '.' within a state name declares a child within a parent.
                    // So you have a new state 'list' within the parent 'containers' state.
                    .state('containers.list', {

                        // Using an empty url means that this child state will become active
                        // when its parent's url is navigated to. Urls of child states are
                        // automatically appended to the urls of their parent. So this state's
                        // url is '/containers' (because '/containers' + '').
                        url: '',

                        // IMPORTANT: Now we have a state that is not a top level state. Its
                        // template will be inserted into the ui-view within this state's
                        // parent's template; so the ui-view within containers.ftl. This is the
                        // most important thing to remember about templates.
                        templateUrl: 'partials/containers.list',
                        controller:'ContainerController',
                        controllerAs: 'ctrl',
                        // Use `resolve` to resolve any asynchronous controller dependencies
                        // *before* the controller is instantiated. In this case, since containers
                        // returns a promise, the controller will wait until containers.all() is
                        // resolved before instantiation. Non-promise return values are considered
                        // to be resolved immediately.
                        resolve: {
                            containers: function ($q,ContainerService) {
                                console.log('Load all container');
                                var deferred = $q.defer();
                                ContainerService.loadAllContainers().then(deferred.resolve, deferred.resolve);
                                return deferred.promise;
                            }
                        }
                    })

                    ///////////////////////
                    // Containers > Detail //
                    ///////////////////////

                    // You can have unlimited children within a state. Here is a second child
                    // state within the 'containers' parent state.
                   /* .state('containers.detail', {

                        // Urls can have parameters. They can be specified like :param or {param}.
                        // If {} is used, then you can also specify a regex pattern that the param
                        // must match. The regex is written after a colon (:). Note: Don't use capture
                        // groups in your regex patterns, because the whole regex is wrapped again
                        // behind the scenes. Our pattern below will only match numbers with a length
                        // between 1 and 4.

                        // Since this state is also a child of 'containers' its url is appended as well.
                        // So its url will end up being '/containers/{containerId:[0-9]{1,4}}'. When the
                        // url becomes something like '/containers/42' then this state becomes active
                        // and the $stateParams object becomes { containerId: 42 }.
                        url: '/{containerId:[0-9]{1,4}}',

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
                                templateUrl: 'partials/containers.detail',
                                controller: ['$scope', '$stateParams', 'utils',
                                    function (  $scope,   $stateParams,   utils) {
                                        $scope.container = utils.findById($scope.containers, $stateParams.containerId);
                                    }]
                            },

                            // This one is targeting the ui-view="hint" within the unnamed root, aka index.html.
                            // This shows off how you could populate *any* view within *any* ancestor state.
                            'hint@': {
                                template: 'This is containers.detail populating the "hint" ui-view'
                            },

                            // This one is targeting the ui-view="menuTip" within the parent state's template.
                            'menuTip': {
                                // templateProvider is the final method for supplying a template.
                                // There is: template, templateUrl, and templateProvider.
                                templateProvider: ['$stateParams',
                                    function (        $stateParams) {
                                        // This is just to demonstrate that $stateParams injection works for templateProvider.
                                        // $stateParams are the parameters for the new state we're transitioning to, even
                                        // though the global '$stateParams' has not been updated yet.
                                        return '<hr><small class="muted">Container ID: ' + $stateParams.containerId + '</small>';
                                    }]
                            }
                        }
                    })
*/
                    //////////////////////////////
                    // Containers > Detail > Item //
                    //////////////////////////////

                   /* .state('containers.detail.item', {

                        // So following what we've learned, this state's full url will end up being
                        // '/containers/{containerId}/item/:itemId'. We are using both types of parameters
                        // in the same url, but they behave identically.
                        url: '/modul/:modulId',
                        views: {

                            // This is targeting the unnamed ui-view within the parent state 'container.detail'
                            // We wouldn't have to do it this way if we didn't also want to set the 'hint' view below.
                            // We could instead just set templateUrl and controller outside of the view obj.
                            '': {
                                templateUrl: 'partials/containers.detail.item',
                                controller: ['$scope', '$stateParams', '$state', 'utils',
                                    function (  $scope,   $stateParams,   $state,   utils) {
                                        $scope.item = utils.findById($scope.container.items, $stateParams.itemId);

                                        $scope.edit = function () {
                                            // Here we show off go's ability to navigate to a relative state. Using '^' to go upwards
                                            // and '.' to go down, you can navigate to any relative state (ancestor or descendant).
                                            // Here we are going down to the child state 'edit' (full name of 'containers.detail.item.edit')
                                            $state.go('.edit', $stateParams);
                                        };
                                    }]
                            },

                            // Here we see we are overriding the template that was set by 'containers.detail'
                            'hint@': {
                                template: ' This is containers.detail.item overriding the "hint" ui-view'
                            }
                        }
                    })

                    /////////////////////////////////////
                    // Containers > Detail > Item > Edit //
                    /////////////////////////////////////

                    // Notice that this state has no 'url'. States do not require a url. You can use them
                    // simply to organize your application into "places" where each "place" can configure
                    // only what it needs. The only way to get to this state is via $state.go (or transitionTo)
                    .state('containers.detail.item.edit', {
                        views: {

                            // This is targeting the unnamed view within the 'containers.detail' state
                            // essentially swapping out the template that 'containers.detail.item' had
                            // inserted with this state's template.
                            '@containers.detail': {
                                templateUrl: 'partials/containers.detail.item.edit',
                                controller: ['$scope', '$stateParams', '$state', 'utils',
                                    function (  $scope,   $stateParams,   $state,   utils) {
                                        $scope.item = utils.findById($scope.container.items, $stateParams.itemId);
                                        $scope.done = function () {
                                            // Go back up. '^' means up one. '^.^' would be up twice, to the grandparent.
                                            $state.go('^', $stateParams);
                                        };
                                    }]
                            }
                        }
                    });*/
            }
        ]
    );
