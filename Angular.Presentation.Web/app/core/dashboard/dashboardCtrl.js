debugger;

define(['provision-app'], function (app) {
    app.controller('dashboardCtrl', dashboardCtrl);
    function dashboardCtrl($scope, $state) {
       

        $scope.table = [{ SNo: 3326, Date: '10/21/2013', Time: '3:29 PM', Amount: '$321.33' },
            { SNo: 3325, Date: '10/21/2013', Time: '3:20 PM', Amount: '$234.34' },
            { SNo: 3324, Date: '10/21/2013', Time: '3:03 PM', Amount: '$234.34' },
            { SNo: 3323, Date: '10/21/2013', Time: '3:00 PM', Amount: '$234.34' },
            { SNo: 3322, Date: '10/21/2013', Time: '2:49 PM', Amount: '$234.34' },
            { SNo: 3321, Date: '10/21/2013', Time: '2:23 PM', Amount: '$234.34' },



        ];
        $scope.gridOptions = $scope.table;

    }
});