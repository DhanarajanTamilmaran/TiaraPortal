debugger;

define(['provision-app'], function (app) {
    app.controller('notificationCtrl', notificationCtrl);
    function notificationCtrl($scope, $state) {
       

        $scope.alertsuccess = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
        $scope.alertinfo = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
        $scope.alertwarning = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
        $scope.alertdanger = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
        $scope.alertdismissable = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
        $scope.alertinfodismissable = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
        $scope.alertwarningdismissable = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
        $scope.alertdangerdismissable = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

    }
});