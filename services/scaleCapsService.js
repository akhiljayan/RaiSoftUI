'use strict';
app.factory('scaleCapsService', function ($http, toaster) {

    var serviceBase = 'api/scalecaps/';
    var scaleCapsDataFactory = {};
    
    var _getScaleCapsDetails = function () {

        return $http.get(serviceBase + "patient/getdetails").then(function (results) {
            return results;
        });

    };

    scaleCapsDataFactory.getScaleCapsDetails = _getScaleCapsDetails;
    

    return scaleCapsDataFactory
});