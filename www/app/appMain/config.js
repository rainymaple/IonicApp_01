(function () {
    var app = angular.module("soupebolApp");


    var url = window.location.href;
    var wwwPath = url.substr(0, url.indexOf('index.html'));
    var dataServicePrefix = "/api/";
    var imagePath = wwwPath + 'img/';
    var orientations = {portrait: "portrait", landscape: "landscape"};

    var config = {
        docTitle: "Soupebol",
        dataServicePrefix: dataServicePrefix,
        getImage: getImage,
        dataServicePath: buildDataServicePath,
        languages: getLanguages,
        languageId: 1,
        orientations: orientations,
        orientation: orientations.portrait,
        orientationChangedEvent: 'orientationChangedEvent',
        languageChangedEvent: 'LanguageChangedEvent',
        cacheMaxAge: 5000,
        wwwPath: wwwPath,
        enableConsoleLog: true,
        enableToastrLog: true,
        version: '1.0.0'
    };

    function getImage(fileName) {
        return imagePath + fileName.trim();
    }

    function buildDataServicePath(endPoint,prefix) {
        if (!endPoint) {
            throw "End Point Is Empty!!";
        }
        endPoint = buildPath(endPoint.trim());

        if (!prefix) {
            prefix = dataServicePrefix;
        } else {
            prefix = buildPath(prefix);
        }
        return prefix + endPoint;
    }

    function buildPath(path) {
        if (path.indexOf('/') === 0) {
            path = path.substr(1);
        }
        if (path.indexOf('/') === path.length - 1) {
            path = path.substr(0, path.length - 1);
        }
        return path;
    }

    function getLanguages() {
        return [
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
    .config(function (uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            //    key: 'your api key',
            v: '3.17',
            //china: true,
            libraries: 'weather,geometry,visualization'
        });
    })


})();