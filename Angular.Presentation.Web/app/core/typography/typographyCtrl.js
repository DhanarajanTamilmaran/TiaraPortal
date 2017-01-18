debugger;

define(['provision-app'], function (app) {
    app.controller('typographyCtrl', typographyCtrl);
    function typographyCtrl($scope, $state) {
       
        $scope.heading = 'Headings';
        $scope.subheading = 'Sub-heading';
        $scope.heading1 = ' Heading 1';
        $scope.heading2 = 'Heading2';
        $scope.heading3 = 'Heading3';
        $scope.heading4 = 'Heading4';
        $scope.heading5 = 'Heading5';
        $scope.Paragraphs = ' Paragraphs';
        $scope.text = 'This is an example of lead body copy.';
        $scope.smalltext = 'This is an example of standard paragraph text. This is an example of link anchor text within body copy.';
        $scope.emphasis = ' Emphasis Classes';
        $scope.textmuted = 'This is an example of muted text';
        $scope.textprimary = 'This is an example of primary text.';
        $scope.textsuccess = 'This is an example of success text.';
        $scope.textinfo = 'This is an example of success text.';
        $scope.warningtext = 'This is an example of info text.';
        $scope.dangertext = 'This is an example of danger text.';
        $scope.apprv = 'HyperText Markup Language';
      
    }
});