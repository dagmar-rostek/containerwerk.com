'use strict';

angular.module('crudApp')
    .controller('ProjektinformationenController',
        ['$scope', '$log', function ($scope, $log) {

            var tabs = [
                    {
                        title: 'Allgemeine Projektinformationen',
                        content: "whatever ..."
                    },
                    {title: 'GU-Partner', content: "was auch immer"},
                    {title: 'Architekt', content: "checkliste oder ..."},
                    {
                        title: 'Weiteres ...',
                        content: "freier text"
                    }
                ],
                selected = null,
                previous = null;
            $scope.tabs = tabs;
            $scope.selectedIndex = 0;
            $scope.$watch('selectedIndex', function (current, old) {
                previous = selected;
                selected = tabs[current];
                if (old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
                if (current + 1) $log.debug('Hello ' + selected.title + '!');
            });
            $scope.addTab = function (title, view) {
                view = view || title + " Content View";
                tabs.push({title: title, content: view, disabled: false});
            };
            $scope.removeTab = function (tab) {
                var index = tabs.indexOf(tab);
                tabs.splice(index, 1);
            };

        }
        ]);
