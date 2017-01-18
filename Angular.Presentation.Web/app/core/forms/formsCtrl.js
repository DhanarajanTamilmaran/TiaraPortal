debugger;

define(['provision-app','Bootstrap-ui'], function (app) {
    app.controller('formsCtrl', formsCtrl);
    function formsCtrl($scope, $state, $rootScope) {
        debugger;
        //$scope.userName = undefined;

        //$scope.items = [{ id: '1', name: "Apple" }, { id: '2', name: "Banana" }];
        $scope.companyName = ['Tiara','TCS','CTS'];


        $scope.gridOptions = $scope.companyName;

        $scope.selects = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }, { id: 4, name: 'D' }, { id: 5, name: 'E' }, { id: 6, name: 'F' }, { id: 7, name: 'G' }, { id: 8, name: 'H' }, { id: 9, name: 'I' }, { id: 10, name: 'J' }];
        $scope.staticcontrol = 'email@example.com';

    }


  
  
   
});
