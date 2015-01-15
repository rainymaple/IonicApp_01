(function () {
    var app = angular.module("soupebolApp");


    var url = window.location.href;
    var wwwPath = url.substr(0, url.indexOf('index.html'));
    var dataServicePrefix = "/api/";
    var imagePath = wwwPath + 'img/';

    var config = {
        docTitle: "Soupebol",
        dataServicePrefix: dataServicePrefix,
        getImage: getImage,
        dataServicePath: buildDataServicePath,
        languages:getLanguages,
        languageId:1,
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

    function getLanguages() {
        return  [
            {id: 1, language: "English", label: "English", image: getImage("language/UK.png")},
            {id: 2, language: "French", label: "Français", image: getImage("language/France.png")},
            {id: 3, language: "Chinese", label: "中文", image: getImage("language/China.png")}
        ];
    }

    app.value("config", config);


    app.config(["$logProvider", function ($logProvider) {
        // turn debugging off/on
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
    }])

})();