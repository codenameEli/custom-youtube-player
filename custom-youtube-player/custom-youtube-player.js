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
                showinfo: 0,
                rel: 0
            },
            playerEvents: {},
            modal: true,
            locked: true
        };

    function Plugin( element, options ) {

        this.element = element;

        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    function isMobile() {

        var isMobile = false; //initiate as false
        // device detection
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
    }

    Plugin.prototype = {

        init: function() {

            var modalEl = '.custom-youtube-modal-container';

            this.setOptions();
            this.appendElements();

            if ( this.options.modal ) {

                this.appendModalElements();
            }

            this.createPlayer();
        },

        setOptions: function() {

            this.options.videoId = this.options.videoId ? this.options.videoId : this.getVideoId();
            this.options.appendTo = this.options.appendTo ? this.options.appendTo : $(this.element).parent()[0];
            this.options.height = this.options.height ? this.options.height : $(this.element).innerHeight();
            this.options.width = this.options.width ? this.options.width : $(this.element).innerWidth();
            this.options.thumbnailSrc = this.options.thumbnailSrc ? this.options.thumbnailSrc : this.getThumbnailSrc();
        },

        addListeners: function() {

            $('.custom-youtube-modal-container').on( 'click', this.closeModal.bind(this) );
            $('.custom-youtube-container').on( 'click', this.openModal.bind(this) );
        },

        openModal: function() {

            $('.custom-youtube-modal-container').addClass('currently-open');
            $('.custom-youtube-modal-container').removeClass('currently-closed');

            this.playVideo();
        },

        closeModal: function() {

            $('.custom-youtube-modal-container').addClass('currently-closed');
            $('.custom-youtube-modal-container').removeClass('currently-open');

            this.stopVideo();
        },

        createPlayer: function(element) {

            var player = '<div id="customYouTubePlayer" class="custom-youtube-player"></div>';
            var self = this;

            $(element).append(player);

            new YT.Player( 'customYouTubePlayer', {
                // width: this.options.width * 2,
                // height: this.options.height * 2,
                videoId: this.options.videoId,
                playerVars: this.options.playerVars,
                // events: this.options.playerEvents
                events: {
                    'onReady': this.onPlayerReady.bind(this),
                    'onStateChange': this.onStateChange.bind(this)
                }
            });

            this.removeOriginalPlayer();
        },

        removeOriginalPlayer: function() {

            $(this.element).remove();
        },

        onPlayerReady: function(event) {

            this.player = event.target;
            $('.custom-youtube-container').addClass('video-ready');
            $('.custom-youtube-container').removeClass('video-loading');
            this.addListeners();
        },

        onStateChange: function(event) {

            var state = event.data;

            if ( state == 0 ) { // Video has ended

                this.closeModal();
            }
        },

        playVideo: function() {

            this.player.playVideo();
            this.toggleModalLock();
            $('.custom-youtube-container').addClass('video-playing');
        },

        stopVideo: function() {

            this.player.stopVideo();
            this.player.seekTo(0);
            this.toggleModalLock();
            $('.custom-youtube-container').removeClass('video-playing');
        },

        toggleModalLock: function () {

            if ( !this.options.locked ) { return; }

            $('body').toggleClass('custom-youtube-player-modal-open');
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

            var openContainer = '<div class="custom-youtube-container video-loading" style="background-image: url(' + this.options.thumbnailSrc + '); height: ' + this.options.height + 'px; width: ' + this.options.width + 'px;">';
            var playButton = '<span class="custom-youtube-playbutton"></span>';
            var closeContainer = '</div>';

            $(this.options.appendTo).append( openContainer + playButton + closeContainer );
        },

        appendModalElements: function() {

            var openContainer = '<div class="custom-youtube-modal-container currently-closed">';
            var openWrapper = '<div class="custom-youtube-modal-wrapper">';
            var closeButton = '<span class="custom-youtube-close-button"></span>';
            var closeWrapper = '</div>';
            var closeContainer = '</div>';

            $('body').append( openContainer + openWrapper + closeButton );
            this.createPlayer( '.custom-youtube-modal-wrapper' );
            $('body').append( closeWrapper + closeContainer );
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