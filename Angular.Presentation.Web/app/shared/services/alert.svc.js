define(['provision-app', 'toaster'], function (app) {

    app.service('alertsService', ['$rootScope', 'toaster', function ($rootScope, toaster) {

        $rootScope.alerts = [];
        $rootScope.MessageBox = "";

        this.SetValidationErrors = function (scope, validationErrors) {

            for (var prop in validationErrors) {
                var property = prop + "InputError";
                scope[property] = true;
            }

        }

        this.RenderErrorMessage = function (title, message) {

            var messageBox = formatMessage(message);
            $rootScope.alerts = [];
            $rootScope.MessageBox = messageBox;
            //$rootScope.alerts.push({ 'type': 'danger', 'msg': '' });
            toaster.pop("error", title ? title : 'Error', messageBox, 3000, 'trustedHtml');

        };

        this.RenderSuccessMessage = function (message) {

            var messageBox = formatMessage(message);
            $rootScope.alerts = [];
            $rootScope.MessageBox = messageBox;
            toaster.pop("success", 'Success', messageBox, 3000, 'trustedHtml');
            //$rootScope.alerts.push({ 'type': 'success', 'msg': '' });
        };

        this.RenderWarningMessage = function (message) {

            var messageBox = formatMessage(message);
            $rootScope.alerts = [];
            $rootScope.MessageBox = messageBox;
            //$rootScope.alerts.push({ 'type': 'warning', 'msg': '' });
            toaster.pop("warning", 'Warning', messageBox, 3000, 'trustedHtml');
        };

        this.RenderInformationalMessage = function (message) {

            var messageBox = formatMessage(message);
            $rootScope.alerts = [];
            $rootScope.MessageBox = messageBox;
            toaster.pop("note", 'Note', messageBox, 3000, 'trustedHtml');

        };

        this.closeAlert = function (index) {
            $rootScope.alerts.splice(index, 1);
        };

        function formatMessage(message) {
            var messageBox = "";
            if (angular.isArray(message) == true) {
                for (var i = 0; i < message.length; i++) {
                    messageBox = messageBox + message[i] + "<br/>";
                }
            }
            else {
                messageBox = message;
            }

            return messageBox;

        }

    }]);
});
