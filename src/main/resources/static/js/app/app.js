var app = angular.module('crudApp',  ['ui.router',  'ngStorage', 'ui.router.stateHelper', 'ui.bootstrap'])
    .run(
        ['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {

                // It's very handy to add references to $state and $stateParams to the $rootScope
                // so that you can access them from any scope within your applications.For example,
                // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
                // to active whenever 'contacts.list' or one of its decendents is active.
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    );


app.constant('urls', {
    BASE: 'http://localhost:8080/',
    LOGIN_SERVICE_API: 'http://localhost:8080/api/login/',
    USER_SERVICE_API: 'http://localhost:8080/api/user/',
    ANGEBOT_SERVICE_API: 'http://localhost:8080/api/angebot/',
    CONTAINER_SERVICE_API: 'http://localhost:8080/api/container/',
    MODUL_SERVICE_API: 'http://localhost:8080/api/modul/',
    NUTZUNGSART_SERVICE_API: 'http://localhost:8080/api/nutzungsart/',
    PROJEKTINFORMATIONEN_SERVICE_API: 'http://localhost:8080/api/projektinformationen/'
});



app.config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('', '/');
});


app.config(function (stateHelperProvider) {

    stateHelperProvider
        .state({
            name: 'login',
            url: '/',
            views: {
                '': {
                    templateUrl: 'partials/login'
                }
            }
        })
        .state({
            name: 'projektinformationen',
            url: '/projektinformationen',
            views: {
                '': {
                    templateUrl: 'partials/projektinformationen',
                    controller: 'ProjektinformationenController',
                    controllerAs: 'ctrl'
                }
            }
        })
        .state({
            name: 'angebot',
            url: '/angebot',
            views: {
                '': {
                    templateUrl: 'partials/angebot',
                    controller: 'AngebotController',
                    controllerAs: 'ctrl',
                    resolve: {
                        angebote: function ($q, AngebotService) {
                            console.log('Load all angebote');
                            var deferred = $q.defer();
                            AngebotService.loadAllAngebote().then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        }
                    }
                }
            }
        })
        .state({
            name: 'configurator',
            url: '/configurator',
            views: {
                '': {
                    templateUrl: 'partials/configurator'
                }
            }
        })
     .state({
         name: 'container',
         url: '/container',
         views: {
             '': {
                 templateUrl: 'partials/container',
                 controller: 'ModalDemoCtrl',
                 controllerAs: 'ctrl',
                 resolve: {
                     containers: function ($q, ContainerService) {
                         console.log('Load all container');
                         var deferred = $q.defer();
                         ContainerService.loadAllContainers().then(deferred.resolve, deferred.resolve);
                         return deferred.promise;
                     }
                 },
                 //  the child views (absolutely named)

                 // for column #1, defines a separate controller
                 'modul@container': {
                     templateUrl: 'partials/modul',
                     controller: 'ModalDemoCtrl',
                     controllerAs: 'modul',
                     resolve: {
                         containers: function ($q, ContainerService) {
                             console.log('Load all container');
                             var deferred = $q.defer();
                             ContainerService.loadAllContainers().then(deferred.resolve, deferred.resolve);
                             return deferred.promise;
                         }
                     }
                     //  the child views (absolutely named)

                     /* // for column #1, defines a separate controller
                      'nutzungsart@container': {
                          templateUrl: 'partials/nutzungsart',
                          controller: 'NutzungsartController',
                          controllerAs: 'ctrl'
                      }*/
                 }
             }


         }})
});

