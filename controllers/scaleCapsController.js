'use strict';
app.controller('scaleCapsController', function ($scope, $filter, scaleCapsService) {
    $scope.patientId = "";
    $scope.patient = "";
    $scope.repo = [];

    $scope.calculatePercent = function (minValue, maxValue) {
        var perc = (minValue / maxValue) * 100;
        return perc+"%";
    };

    $scope.moveFromPrimaryColumn = function (id) {
        var index = -1;
        var moveobject = $filter('filter')($scope.patient.scales, function (d) { return d.Id === id; })[0];
        $scope.repo.push(moveobject);
        var index = $scope.patient.scales.indexOf(moveobject);
        $scope.patient.scales.splice(index, 1);     
    };

    $scope.moveFromSecondaryColumn = function (id) {
        console.log(id);
        var index = -1;
        var moveobject = $filter('filter')($scope.repo, function (d) { return d.Id === id; })[0];
        $scope.patient.scales.push(moveobject);
        var index = $scope.repo.indexOf(moveobject);
        $scope.repo.splice(index, 1);
    }



    init();

    function init() {
        getScaleCapsDetails();
    }


    function getScaleCapsDetails() {
        scaleCapsService.getScaleCapsDetails().then(function (response) {
            console.log(response);
            $scope.patient = response.data;
            $scope.patientId = response.data.PatientId;
        },
        function (response) {
            console.log(response);
        });
    };

});