requirejs.config({
    paths: {
        jquery: 'http://s10.qhimg.com/lib/jquery/1102',
        lazyload: './jquery.lazyload',
        indexSlide:'./indexSlide'
    },
    shim: {
        "qhpass": ["jquery"],
        "suggest": ["jquery"]
    }
});
