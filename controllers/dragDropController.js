'use strict';

app.controller('dragDropController', function ($scope, $filter, scaleCapsService) {
    $scope.patientId = "";
    $scope.patient = "";
    $scope.repo = [];
    $scope.dropped = [];

    $scope.default_drop = { showtouch: true };

    init();
    function init() {
        getScaleCapsDetails();
    }

    $scope.moveToBox = function (id, targetIndexId) {
        var index = -1;
        var mainIndex = -1;
        var moveobject = $filter('filter')($scope.patient.scales, function (d) { return d.Id === id; })[0];
        if (targetIndexId === -1) {
            $scope.repo.push(moveobject);
        } else {
            var targetbject = $filter('filter')($scope.repo, function (td) { return td.Id === targetIndexId; })[0];
            mainIndex = $scope.repo.indexOf(targetbject);
            $scope.repo.splice(mainIndex, 0, moveobject);
        }
        passTheBeforeAfter(moveobject);
        var index = $scope.patient.scales.indexOf(moveobject);
        $scope.patient.scales.splice(index, 1);
        $scope.$apply();
    };

    $scope.removeFrmColumn = function (id) {
        console.log(id);
        var index = -1;
        var moveobject = $filter('filter')($scope.repo, function (d) { return d.Id === id; })[0];
        $scope.patient.scales.push(moveobject);
        var index = $scope.repo.indexOf(moveobject);
        $scope.repo.splice(index, 1);
    };

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

    function passTheBeforeAfter(object) {
        var beforeObject = "";
        var afterObject = "";
        var objectIndex = $scope.repo.indexOf(object);
        var beforeIndex = objectIndex - 1;
        var afterIndex = objectIndex + 1;
        if (beforeIndex == -1) {
            beforeObject = null;
        } else {
            beforeObject = $scope.repo[beforeIndex];
        }

        if (afterIndex >= $scope.repo.length) {
            afterObject = null;
        } else {
            afterObject = $scope.repo[afterIndex];
        }

        console.log(beforeObject);
        console.log(object);
        console.log(afterObject);
        // beforeObject: beforeObject; currentObjec: object; afterObject: afterObject;
    }

});