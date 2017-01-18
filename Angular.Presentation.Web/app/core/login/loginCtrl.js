debugger;

define(['provision-app', 'alertsService'], function (app) {
    //app.controller('loginCtrl', 'alertsService', loginCtrl, alertsService);
    app.controller('loginCtrl', ['$scope', '$state', '$window', '$rootScope', 'alertsService', function ($scope, $state, $window, $rootScope, alertsService) {
        //function loginCtrl($scope, $state, $window, $rootScope, alertsService) {
        $scope.add = function () {
            debugger;
            $state.go('home.dashboard');

        }


        $scope.add = function () {
            debugger;

            if ($scope.username == "admin" && $scope.password == "admin") {


                $rootScope.role = $scope.username;
                $rootScope.admin = true;
                $state.go('home.dashboard');

            }
            //else if ($scope.username == null && $scope.password == null) {
            //    debugger;
            //    //alert("enter username and password");
            //    //alertsService.RenderErrorMessage("enter username and password");
            //}
        }
    
        //})];

    }]);
});
