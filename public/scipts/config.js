requirejs.config({
    baseUrl: './',
    paths: {
        "jquery": [
            "//ajax.googleapis.com/ajax/libs/jquery/1.10.0/jquery.min",
            "libs/jquery-1.10.0.min"
        ],
        "mylibs": "mylibs",
        "libs": "libs"
    }
});

requirejs(['app.require']);