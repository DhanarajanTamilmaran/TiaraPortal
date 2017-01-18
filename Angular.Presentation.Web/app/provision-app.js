debugger;
define(['angularAMD', 
  'angular-ui-router',
  'routeTable',
  //'angular-toaster',
  'toaster',
  'Bootstrap-ui',
  //'angular.filter',
      //'dist',
      'bootstrap',
      'metisMenu',
     
       'datatables',
       'datatables-plugins',
       'datatables-responsive',
    
       //'flot',
      
       
       


 ], function (angularAMD,uiRouter,routes) {
    debugger;
    var app = angular.module("mywebapp", ['ui.router', 'toaster', 'ui.bootstrap']);
    
    app.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {
	$urlRouterProvider.otherwise("/login");
        debugger;
        $stateProvider
             .state('home',
                {
                    url: '/home',
                    views: {
                        'header@': routes.authenticated.home.header,
                        //'content@': routes.authenticated.home.content

                    }
                })



             .state('login',
                    {
                        url: '/login',
                        views: {
                            //'header@': routes.authenticated.login.header,
                            'content@': routes.authenticated.login.content
                        }
                    })
            
        .state('home.tables',
                {
                    url: '/tables',
                    views: {
                        //'header@': routes.authenticated.tables.header,
                        'content@': routes.authenticated.tables.content

                    }
                })


        .state('home.flot',
                {
                    url: '/flot',
                    views: {
                        //'header@': routes.authenticated.flot.header,
                        'content@': routes.authenticated.flot.content

                    }
                })

        .state('home.forms',
                {
                    url: '/forms',
                    views: {
                        //'header@': routes.authenticated.forms.header,
                        'content@': routes.authenticated.forms.content

                    }
                })

      
         .state('home.buttons',
                {
                    url: '/buttons',
                    views: {
                        //'header@': routes.authenticated.uielements.header,
                        'content@': routes.authenticated.uielements.content

                    }
                })

          .state('home.notification',
                {
                    url: '/notification',
                    views: {
                        //'header@': routes.authenticated.notification.header,
                        'content@': routes.authenticated.notification.content

                    }
                })

         .state('home.typography',
                {
                    url: '/typography',
                    views: {
                        //'header@': routes.authenticated.typography.header,
                        'content@': routes.authenticated.typography.content

                    }
                })
          .state('home.icon',
                {
                    url: '/icon',
                    views: {
                        //'header@': routes.authenticated.icon.header,
                        'content@': routes.authenticated.icon.content

                    }
                })

         .state('home.grid',
                {
                    url: '/grid',
                    views: {
                        //'header@': routes.authenticated.icon.header,
                        'content@': routes.authenticated.grid.content

                    }
                })

         .state('home.dashboard',
                {
                    url: '/dashboard',
                    views: {
                        //'header@': routes.authenticated.icon.header,
                        'content@': routes.authenticated.dashboard.content

                    }
                })

            .state('home.panels',
                {
                    url: '/panels',
                    views: {
                        //'header@': routes.authenticated.icon.header,
                        'content@': routes.authenticated.panels.content

                    }
                })

        .state('home.blank',
                {
                    url: '/blank',
                    views: {
                        //'header@': routes.authenticated.icon.header,
                        'content@': routes.authenticated.blank.content

                    }
                })
    });
  var indexController = function ($scope, $rootScope, $http, $location, $q) {
   $scope.initializeController = function () {

             
}
  }  ;
      indexController.$inject = ['$scope', '$rootScope', '$http', '$location', '$q'];       
        app.controller("indexController", indexController);
      //  angularAMD.bootstrap(app);			
   
 return angularAMD.bootstrap(app);
});

