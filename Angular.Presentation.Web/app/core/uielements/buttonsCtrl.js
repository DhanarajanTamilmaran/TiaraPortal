debugger;

define(['provision-app'], function (app) {
    app.controller('buttonsCtrl', buttonsCtrl);
    function buttonsCtrl($scope, $state) {
        $scope.add = function () {
            debugger;
            $state.go('home');

        }
    }
});
