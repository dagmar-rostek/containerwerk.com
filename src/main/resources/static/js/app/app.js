var app = angular.module('crudApp', [
    //   'crudApp.container',
    'ngMaterial', 'ngMessages', 'material.svgAssetsCache',
    //   'crudApp.configurator',
    //  'crudApp.containers',
    'crudApp.utils.service',
    'ui.router',
    'ngStorage',
    'ui.router.stateHelper',
    'ngRoute',
    'ui.bootstrap'

]);
/*.run(
    ['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {

            // It's very handy to add references to $state and $stateParams to the $rootScope
            // so that you can access them from any scope within your applications.For example,
            // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
            // to active whenever 'contacts.list' or one of its decendents is active....
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]
);*/


app.constant('urls', {
    BASE: 'http://localhost:8080/',
    LOGIN_SERVICE_API: 'http://localhost:8080/api/login/',
    USER_SERVICE_API: 'http://localhost:8080/api/user/',
    KUNDE_SERVICE_API: 'http://localhost:8080/api/kunde/',
    ANGEBOT_SERVICE_API: 'http://localhost:8080/api/angebot/',
    CONTAINER_SERVICE_API: 'http://localhost:8080/api/container/',
    MODUL_SERVICE_API: 'http://localhost:8080/api/modul/',
    NUTZUNGSART_SERVICE_API: 'http://localhost:8080/api/nutzungsart/',
    AUSFUEHRUNGEN_SERVICE_API: 'http://localhost:8080/api/ausfuehrung/',
    PROJEKTINFORMATIONEN_SERVICE_API: 'http://localhost:8080/api/projektinformationen/'
});


app.config(
    ['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            /////////////////////////////
            // Redirects and Otherwise //
            /////////////////////////////

            $urlRouterProvider

                // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
                .otherwise('/');

            //////////////////////////
            // State Configurations //
            //////////////////////////

            // Use $stateProvider to configure your states.
            $stateProvider
                .state({
                    name: 'login',
                    url: '/',

                    templateUrl: 'partials/login'

                })
                .state({
                    name: 'projektinformationen',
                    url: '/projektinformationen',

                    templateUrl: 'partials/projektinformationen',
                    controller: 'ProjektinformationenController',
                    controllerAs: 'ctrl'

                })
                .state({
                    name: 'angebot',
                    url: '/angebot',

                    templateUrl: 'partials/angebot',
                    controller: 'AngebotController',
                    controllerAs: 'ctrl',

                    resolve: {
                        angebote: function ($q, AngebotService) {
                            console.log('Load all angebote');
                            var deferred = $q.defer();
                            AngebotService.loadAllAngebote().then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        },
                        kundes: function ($q, KundeService){
                            console.log('Load all Kundes');
                            var deferred = $q.defer();
                            KundeService.loadAllKundes().then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        }
                    }

                })
                .state({
                    name: 'configurator',
                    url: '/configurator',

                    templateUrl: 'partials/configurator',
                    controller: 'ConfiguratorController',
                    controllerAs: 'ctrl'

                })
                .state({
                    name: 'nutzungsart',
                    url: '/nutzungsart',
                    templateUrl: 'partials/nutzungsart',
                    controller: 'ContainerController',
                    controllerAs: 'ctrl',
                    parent: 'container',
                    resolve: {
                        nutzungsarts: function ($q, NutzungsartService) {
                            console.log('Load all nutzungsarts');
                            var deferred = $q.defer();
                            NutzungsartService.loadAllNutzungsarts().then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        }
                    }
                })
                .state({
                    name: 'ausfuehrung',
                    url: '/ausfuehrung',
                    templateUrl: 'partials/ausfuehrung',
                    controller: 'ContainerController',
                    controllerAs: 'ctrl',
                    parent: 'container',
                    resolve: {
                        ausfuehrungen: function ($q, AusfuehrungService) {
                            console.log('Load all ausfuehrungen');
                            var deferred = $q.defer();
                            AusfuehrungService.loadAllAusfuehrungen().then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        }
                    }
                })
                .state({
                    name: 'containers',
                    url: '/containers',
                    templateUrl: 'partials/containers',
                    controller: 'containers',
                    controllerAs: 'ctrl',
                    resolve: {
                        containers: function ($q, ContainerService) {
                            console.log('Load all container');
                            var deferred = $q.defer();
                            ContainerService.loadAllContainers().then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        }
                    }
                })
                .state({
                    name: 'container',
                    url: '/container',
                    params:{
                        'id':'id'
                    },
                    templateUrl: 'partials/container',
                    controller: 'ContainerController',
                    controllerAs: 'ctrl',
                    resolve: {
                        moduls: function ($q, ModulService) {
                            console.log('Load all moduls');
                            var deferred = $q.defer();
                            ModulService.loadAllModuls().then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        },
                        containers: function($q, ContainerService){
                            console.log('load all containers');
                            var deferred = $q.defer();
                            ContainerService.loadAllContainers().then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        }


                    }
                })
        }]);

