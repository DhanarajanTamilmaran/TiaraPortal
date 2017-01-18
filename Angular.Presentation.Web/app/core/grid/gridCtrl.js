debugger;

define(['provision-app'], function (app) {
    app.controller('gridCtrl', gridCtrl);
    function gridCtrl($scope, $state) {

        $scope.smalldevicesPhones1 = "Horizontalatalltimes";
        $scope.devicesTablets1 = 'Collapsed to start, horizontal above breakpoints';
        $scope.smalldevicesPhones2 = "None (auto)";
        $scope.devicesTablets2 = '750px';
        $scope.MediumdevicesDesktops2 = '970px';
        $scope.largedevice2 = '1170px';

        $scope.smalldevicesPhones3 = ".col-xs-";
        $scope.devicesTablets3 = '.col-sm-';
        $scope.MediumdevicesDesktops3 = '.col-md-';
        $scope.largedevice3 = '.col-lg-';
        $scope.smalldevicesPhones4 = 12;

        $scope.col1 = '.col-md-8';
        $scope.col2 = '.col-md-4'
        $scope.col3 = '.col-md-4';
        $scope.col4 = '.col-md-4';
        $scope.col5 = '.col-md-4';
        $scope.col6 = '.col-md-6';
        $scope.col7 = '.col-md-6';
     
    }
});