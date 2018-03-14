angular.module('crudApp.configurator', [
    'ui.router'
])

    .config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                //////////////
                // Configurators //
                //////////////
                    .state('configurator', {

                        // With abstract set to true, that means this state can not be explicitly activated.
                        // It can only be implicitly activated by activating one of its children.
                        abstract: true,

                        // This abstract state will prepend '/configurator' onto the urls of all its children.
                        url: '/configurator',

                        // Example of loading a template from a file. This is also a top level state,
                        // so this template file will be loaded and then inserted into the ui-view
                        // within index.html.
                        templateUrl: 'partials/configurator',

                        // Use `resolve` to resolve any asynchronous controller dependencies
                        // *before* the controller is instantiated. In this case, since configurator
                        // returns a promise, the controller will wait until configurator.all() is
                        // resolved before instantiation. Non-promise return values are considered
                        // to be resolved immediately.
                        resolve: {
                            configurator: ['configurator',
                                function (configurator) {
                                    return configurator.all();
                                }]
                        },

                        // You can pair a controller to your template. There *must* be a template to pair with.
                        controller: ['$scope', '$state', 'configurator', 'utils',
                            function ($scope, $state, configurator, utils) {

                                // Add a 'configurator' field in this abstract parent's scope, so that all
                                // child state views can access it in their scopes. Please note: scope
                                // inheritance is not due to nesting of states, but rather choosing to
                                // nest the templates of those states. It's normal scope inheritance.
                                $scope.configurator = configurator;

                                /* $scope.goToRandom = function () {
                                     var randId = utils.newRandomKey($scope.configurator, "id", $state.params.configuratorId);

                                     // $state.go() can be used as a high level convenience method
                                     // for activating a state programmatically.
                                     $state.go('configurator.container', { configuratorId: randId });
                                 };*/
                            }]
                    })

                    /////////////////////
                    // Configurator > List //
                    /////////////////////

                    // Using a '.' within a state name declares a child within a parent.
                    // So you have a new state 'list' within the parent 'configurator' state.
                    .state('configurator.container', {

                        // Using an empty url means that this child state will become active
                        // when its parent's url is navigated to. Urls of child states are
                        // automatically appended to the urls of their parent. So this state's
                        // url is '/configurator' (because '/configurator' + '').
                        url: '',

                        // IMPORTANT: Now we have a state that is not a top level state. Its
                        // template will be inserted into the ui-view within this state's
                        // parent's template; so the ui-view within configurator.html. This is the
                        // most important thing to remember about templates.
                        templateUrl: 'partials/configurator.container'
                    })

                ///////////////////////
                // Configurator > Detail //
                ///////////////////////

                // You can have unlimited children within a state. Here is a second child
                // state within the 'configurator' parent state.
                /*.state('configurator.detail', {

                    // Urls can have parameters. They can be specified like :param or {param}.
                    // If {} is used, then you can also specify a regex pattern that the param
                    // must match. The regex is written after a colon (:). Note: Don't use capture
                    // groups in your regex patterns, because the whole regex is wrapped again
                    // behind the scenes. Our pattern below will only match numbers with a length
                    // between 1 and 4.

                    // Since this state is also a child of 'configurator' its url is appended as well.
                    // So its url will end up being '/configurator/{configuratorId:[0-9]{1,4}}'. When the
                    // url becomes something like '/configurator/42' then this state becomes active
                    // and the $stateParams object becomes { configuratorId: 42 }.
                    url: '/{configuratorId:[0-9]{1,4}}',

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
                            templateUrl: 'app/configurator/configurator.detail.html',
                            controller: ['$scope', '$stateParams', 'utils',
                                function (  $scope,   $stateParams,   utils) {
                                    $scope.configurator = utils.findById($scope.configurator, $stateParams.configuratorId);
                                }]
                        },

                        // This one is targeting the ui-view="hint" within the unnamed root, aka index.html.
                        // This shows off how you could populate *any* view within *any* ancestor state.
                        'hint@': {
                            template: 'This is configurator.detail populating the "hint" ui-view'
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
                                    return '<hr><small class="muted">Configurator ID: ' + $stateParams.configuratorId + '</small>';
                                }]
                        }
                    }
                })*/

                //////////////////////////////
                // Configurators > Detail > Item //
                //////////////////////////////

                /*.state('configurator.detail.item', {

                    // So following what we've learned, this state's full url will end up being
                    // '/configurator/{configuratorId}/item/:itemId'. We are using both types of parameters
                    // in the same url, but they behave identically.
                    url: '/item/:itemId',
                    views: {

                        // This is targeting the unnamed ui-view within the parent state 'configurator.detail'
                        // We wouldn't have to do it this way if we didn't also want to set the 'hint' view below.
                        // We could instead just set templateUrl and controller outside of the view obj.
                        '': {
                            templateUrl: 'app/configurator/configurator.detail.item.html',
                            controller: ['$scope', '$stateParams', '$state', 'utils',
                                function (  $scope,   $stateParams,   $state,   utils) {
                                    $scope.item = utils.findById($scope.configurator.items, $stateParams.itemId);

                                    $scope.edit = function () {
                                        // Here we show off go's ability to navigate to a relative state. Using '^' to go upwards
                                        // and '.' to go down, you can navigate to any relative state (ancestor or descendant).
                                        // Here we are going down to the child state 'edit' (full name of 'configurator.detail.item.edit')
                                        $state.go('.edit', $stateParams);
                                    };
                                }]
                        },

                        // Here we see we are overriding the template that was set by 'configurator.detail'
                        'hint@': {
                            template: ' This is configurator.detail.item overriding the "hint" ui-view'
                        }
                    }
                })*/

                /////////////////////////////////////
                // Configurators > Detail > Item > Edit //
                /////////////////////////////////////

                // Notice that this state has no 'url'. States do not require a url. You can use them
                // simply to organize your application into "places" where each "place" can configure
                // only what it needs. The only way to get to this state is via $state.go (or transitionTo)
                /* .state('configurator.detail.item.edit', {
                     views: {

                         // This is targeting the unnamed view within the 'configurator.detail' state
                         // essentially swapping out the template that 'configurator.detail.item' had
                         // inserted with this state's template.
                         '@configurator.detail': {
                             templateUrl: 'app/configurator/configurator.detail.item.edit.html',
                             controller: ['$scope', '$stateParams', '$state', 'utils',
                                 function (  $scope,   $stateParams,   $state,   utils) {
                                     $scope.item = utils.findById($scope.configurator.items, $stateParams.itemId);
                                     $scope.done = function () {
                                         // Go back up. '^' means up one. '^.^' would be up twice, to the grandparent.
                                         $state.go('^', $stateParams);
                                     };
                                 }]
                         }
                     }
                 })*/;
            }
        ]
    );
