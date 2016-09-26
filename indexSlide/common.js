requirejs.config({
    paths: {
        jquery: 'http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js',
        lazyload: './jquery.lazyload',
        indexSlide:'./indexSlide'
    },
    shim: {
        "qhpass": ["jquery"],
        "suggest": ["jquery"]
    }
});
