define(['angularAMD'], function (angularAMD) {
    'use strict';
    var routes = {};
    routes.authenticated ={};
    routes.unauthenticated={};
	routes.authenticated.login = {};
	routes.authenticated.home = {};
	routes.authenticated.tables = {};
	routes.authenticated.flot = {};
	routes.authenticated.forms = {};
	routes.authenticated.uielements = {};
	routes.authenticated.notification = {};
	routes.authenticated.typography = {};
	routes.authenticated.icon = {};
	routes.authenticated.grid = {};
	routes.authenticated.dashboard = {};
	routes.authenticated.blank = {};
	routes.authenticated.panels = {};
	debugger;
	 
     routes.authenticated.login.header = angularAMD.route({
         templateUrl: 'app/core/login/login.html',
    });

    routes.authenticated.login.content = angularAMD.route({
        templateUrl: 'app/core/login/login.html',
        controller: 'loginCtrl',
        controllerUrl: 'app/core/login/loginCtrl'

    });
 routes.authenticated.home.header = angularAMD.route({
     templateUrl: 'app/core/home/home.html',
    controller: 'homeCtrl',
     controllerUrl: 'app/core/home/homeCtrl'
    });
	 //routes.authenticated.home.content = angularAMD.route({
     //     templateUrl: 'app/core/home/home.html',
	 //      controller: 'homeCtrl',
     //     controllerUrl: 'app/core/home/homeCtrl'
	 //});
	 //routes.authenticated.tables.header = angularAMD.route({
	 //    templateUrl: 'app/core/tables/tables.html',
	 //});
	 routes.authenticated.tables.content = angularAMD.route({
	     templateUrl: 'app/core/tables/tables.html',
	     controller: 'tablesCtrl',
	     controllerUrl: 'app/core/tables/tablesCtrl'
	 });

	 routes.authenticated.flot.header = angularAMD.route({
	     templateUrl: 'app/core/flot/flot.html',
	 });
	 routes.authenticated.flot.content = angularAMD.route({
	     templateUrl: 'app/core/flot/flot.html',
	     controller: 'flotCtrl',
	     controllerUrl: 'app/core/flot/flotCtrl'
	 });


	 routes.authenticated.forms.header = angularAMD.route({
	     templateUrl: 'app/core/forms/forms.html',
	 });
	 routes.authenticated.forms.content = angularAMD.route({
	     templateUrl: 'app/core/forms/forms.html',
	     controller: 'formsCtrl',
	     controllerUrl: 'app/core/forms/formsCtrl'
	 });


	 routes.authenticated.panels.header = angularAMD.route({
	     templateUrl: 'app/core/panels/panels.html',
	 });
	 routes.authenticated.panels.content = angularAMD.route({
	     templateUrl: 'app/core/panels/panels.html',
	     controller: 'panelsCtrl',
	     controllerUrl: 'app/core/panels/panelsCtrl'
	 });
	 routes.authenticated.uielements.header = angularAMD.route({
	     templateUrl: 'app/core/uielements/buttons.html',
	 });
	 routes.authenticated.uielements.content = angularAMD.route({
	     templateUrl: 'app/core/uielements/buttons.html',
	     controller: 'buttonsCtrl',
	     controllerUrl: 'app/core/uielements/buttonsCtrl'
	 });

	 routes.authenticated.notification.header = angularAMD.route({
	     templateUrl: 'app/core/notification/notification.html',
	 });
	 routes.authenticated.notification.content = angularAMD.route({
	     templateUrl: 'app/core/notification/notification.html',
	     controller: 'notificationCtrl',
	     controllerUrl: 'app/core/notification/notificationCtrl'
	 });
	 routes.authenticated.typography.header = angularAMD.route({
	     templateUrl: 'app/core/typography/typography.html',
	 });
	 routes.authenticated.typography.content = angularAMD.route({
	     templateUrl: 'app/core/typography/typography.html',
	     controller: 'typographyCtrl',
	     controllerUrl: 'app/core/typography/typographyCtrl'
	 });

	 routes.authenticated.icon.header = angularAMD.route({
	     templateUrl: 'app/core/icon/icon.html',
	 });
	 routes.authenticated.icon.content = angularAMD.route({
	     templateUrl: 'app/core/icon/icon.html',
	     controller: 'typographyCtrl',
	     controllerUrl: 'app/core/icon/iconCtrl'
	 });

	 routes.authenticated.grid.content = angularAMD.route({
	     templateUrl: 'app/core/grid/grid.html',
	     controller: 'gridCtrl',
	     controllerUrl: 'app/core/grid/gridCtrl'
	 });

	 routes.authenticated.dashboard.content = angularAMD.route({
	     templateUrl: 'app/core/dashboard/dashboard.html',
	     controller: 'dashboardCtrl',
	     controllerUrl: 'app/core/dashboard/dashboardCtrl'
	 });

	 routes.authenticated.blank.content = angularAMD.route({
	     templateUrl: 'app/core/blank/blank.html',
	     controller: 'blankCtrl',
	     controllerUrl: 'app/core/blank/blankCtrl'
	 });
    return routes;
});