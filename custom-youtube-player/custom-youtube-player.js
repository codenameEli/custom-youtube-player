// YouTube iframe API
if (!window['YT']) {var YT = {loading: 0,loaded: 0};}if (!window['YTConfig']) {var YTConfig = {'host': 'http://www.youtube.com'};}if (!YT.loading) {YT.loading = 1;(function(){var l = [];YT.ready = function(f) {if (YT.loaded) {f();} else {l.push(f);}};window.onYTReady = function() {YT.loaded = 1;for (var i = 0; i < l.length; i++) {try {l[i]();} catch (e) {}}};YT.setConfig = function(c) {for (var k in c) {if (c.hasOwnProperty(k)) {YTConfig[k] = c[k];}}};var a = document.createElement('script');a.type = 'text/javascript';a.id = 'www-widgetapi-script';a.src = 'https:' + '//s.ytimg.com/yts/jsbin/www-widgetapi-vflj6iRlI/www-widgetapi.js';a.async = true;var b = document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a, b);})();}

;(function ( $, window, document, undefined ) {

    var pluginName = "customYouTubePlayer",
        defaults = {
            appendTo: null,
            thumbnailSrc: null,
            videoId: null,
            height: 0,
            width: 0,
            playerVars: {
                showinfo: 0
            },
            playerEvents: {}
        };

    function Plugin( element, options ) {

        this.element = element;

        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function() {

            console.log(this);
            this.setOptions();
            this.appendElements();
            this.createPlayer();
            this.addListeners();

        },

        setOptions: function() {

            this.options.videoId = this.options.videoId ? this.options.videoId : this.getVideoId();
            this.options.appendTo = this.options.appendTo ? this.options.appendTo : $(this.element).parent()[0];
            this.options.height = this.options.height ? this.options.height : $(this.element).innerHeight();
            this.options.width = this.options.width ? this.options.width : $(this.element).innerWidth();
            this.options.thumbnailSrc = this.options.thumbnailSrc ? this.options.thumbnailSrc : this.getThumbnailSrc();
        },

        createPlayer: function() {

            this.player = new YT.Player( 'customYouTubePlayer', {
                width: this.options.width,
                height: this.options.height,
                videoId: this.options.videoId,
                playerVars: this.options.playerVars,
                events: this.options.playerEvents
            });
        },

        getVideoId: function() {

            var parseVideoUrl = function(url) {

                var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
                var match = url.match(regExp);
                return (match&&match[7].length==11)? match[7] : false;
            }

            return parseVideoUrl( $(this.element).attr('src') );
        },

        getThumbnailSrc: function() {

            return 'https://i.ytimg.com/vi_webp/' + this.options.videoId + '/sddefault.webp';
        },

        appendElements: function() {

            var openContainer = '<div class="custom-youtube-container" style="background-image: url(' + this.options.thumbnailSrc + '); height: ' + this.options.height + 'px; width: ' + this.options.width + 'px;">';
            var playButton = '<span class="custom-youtube-playbutton fa fa-play"></span>';
            var player = '<div id="customYouTubePlayer" style="display: none;"></div>';
            var closeContainer = '</div>';

            $(this.options.appendTo).append( openContainer + playButton + player + closeContainer );

            this.createPlayer();
        },

        addListeners: function() {

            $(this.element).on( 'click', function() {

                console.log("this", this);
            });
        },
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );

function onYouTubeIframeAPIReady() {

    jQuery('iframe[src^="https://www.youtube.com"]').customYouTubePlayer();
}