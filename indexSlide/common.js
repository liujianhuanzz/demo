requirejs.config({
    paths: {
        jquery: './jquery-1.11.0.min',
        lazyload: './jquery.lazyload',
        indexSlide:'./indexSlide'
    },
    shim: {
        "qhpass": ["jquery"],
        "suggest": ["jquery"]
    }
});
