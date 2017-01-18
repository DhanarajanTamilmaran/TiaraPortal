debugger;

define(['provision-app'], function (app) {
    app.controller('tablesCtrl', tablesCtrl);
    function tablesCtrl($scope, $state) {
        $scope.add = function () {
            debugger;
            $state.go('home');

        }

        $scope.myData = [{ Renderingengine: "Trident", Browser: 'Internet Explorer 4.0', Platform: 'Win 95+', Engineversion: 4, CSSgrade: 'x' },
                  { Renderingengine: "Trident", Browser: 'Internet Explorer 5.0', Platform: 'Win 95+', Engineversion: 5, CSSgrade: 'C' },
                  { Renderingengine: "Trident", Browser: 'Internet Explorer 5.5', Platform: 'Win 95+', Engineversion: 5.5, CSSgrade: 'A' },
                   { Renderingengine: "Trident", Browser: 'Internet Explorer 6', Platform: 'Win 98+', Engineversion: 4, CSSgrade: 'A' },
                  { Renderingengine: "Trident", Browser: 'Internet Explorer 7', Platform: 'Win XP SP2+', Engineversion: 7, CSSgrade: 'A' },
                  { Renderingengine: "Trident", Browser: 'AOL browser (AOL desktop)', Platform: 'Win XP', Engineversion: 6, CSSgrade: 'A' },
                  { Renderingengine: "Gecko", Browser: 'Firefox 1.0', Platform: 'Win 95+', Engineversion: 1.7, CSSgrade: 'A' },
                  { Renderingengine: "Gecko", Browser: 'Firefox 1.5', Platform: 'Win 98+ / OSX.2+', Engineversion: 1.8, CSSgrade: 'A' },
                  { Renderingengine: "Gecko", Browser: 'Firefox 3.0', Platform: 'Win 98+ / OSX.2+', Engineversion: 1.8, CSSgrade: 'A' },
                  { Renderingengine: "Gecko", Browser: 'Internet Explorer 4.0', Platform: 'Win 2k+ / OSX.3+', Engineversion: 1.9, CSSgrade: 'A' },
                 
                  { Renderingengine: "Gecko", Browser: 'Firefox 1.0', Platform: 'Win 95+', Engineversion: 1.7, CSSgrade: 'A' },
                  { Renderingengine: "Gecko", Browser: 'Firefox 1.5', Platform: 'Win 98+ / OSX.2+', Engineversion: 1.8, CSSgrade: 'A' },
                  { Renderingengine: "Gecko", Browser: 'Firefox 3.0', Platform: 'Win 98+ / OSX.2+', Engineversion: 1.8, CSSgrade: 'A' },
                  { Renderingengine: "Gecko", Browser: 'Internet Explorer 4.0', Platform: 'Win 2k+ / OSX.3+', Engineversion: 1.9, CSSgrade: 'A' }
        ];
        $scope.gridOptions = $scope.myData;
    }
});

