(function () {
    var app = angular.module("soupebolApp");


    var url = window.location.href;
    var wwwPath = url.substr(0, url.indexOf('index.html'));
    var dataServicePrefix = "/api/";
    var imagePath = wwwPath+'img/';

    var config = {
        docTitle: "Soupebol",
        dataServicePrefix: dataServicePrefix,
        getImage: getImage,
        dataServicePath: buildDataServicePath,
        cacheMaxAge: 5000,
        wwwPath: wwwPath,
        enableConsoleLog: true,
        enableToastrLog: true,
        version: '1.0.0'
    };

    function getImage(fileName) {
        return imagePath + fileName.trim();
    }

    function buildDataServicePath(endPoint) {
        if (!endPoint) {
            throw "End Point Is Empty!!";
        }
        endPoint = endPoint.trim();
        if (endPoint.indexOf('/') === 0) {
            endPoint = endPoint.substr(1);
        }
        if (endPoint.indexOf('/') === endPoint.length - 1) {
            endPoint = endPoint.substr(0, endPoint.length - 1);
        }
        return dataServicePrefix + endPoint;
    }

    app.value("config", config);


    app.config(["$logProvider", function ($logProvider) {
        // turn debugging off/on
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
    }])

})();