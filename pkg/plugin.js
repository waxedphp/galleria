
;(function ( $, window, document, undefined ) {

    var pluginName = 'galleria',
        _search = '.waxed-galleria',
        _api = [],
        defaults = {
            propertyName: "value"
        },
        inited = false,
        loadedThemes = {}
        ;

    function Instance(pluggable,element,dd){
      var that = this;
      this.pluggable = pluggable;
      this.element = element;
      this.o = element;
      this.t = 'galleria';
      this.dd = dd;
      this.name = '';
      this.theme = 'classic';
      this.cfg = {
        'height': 500
      };
      this.allowedOptions = [
      'autoplay', 'carousel', 'carouselSpeed', 'carouselSteps', 'clicknext', 'dailymotion',
      'dataConfig', 'dataSelector', 'dataSort', 'dataSource',
      'debug', 'dummy', 'easing', 'extend', 'fullscreenCrop', 'fullscreenDoubleTap',
      'fullscreenTransition', 'height', 'idleMode', 'idleTime', 'idleSpeed',
      'imageCrop', 'imageMargin', 'imagePan', 'imagePanSmoothness', 'imagePosition',
      'imageTimeout', 'initialTransition', 'keepSource', 'layerFollow', 'lightbox',
      'lightboxFadeSpeed', 'lightboxTransitionSpeed', 'maxScaleRatio', 'maxVideoSize',
      'overlayBackground', 'overlayOpacity', 'pauseOnInteraction', 'popupLinks', 'preload',
      'queue', 'responsive', 'show', 'showCounter', 'showInfo', 'showImagenav', 'swipe',
      'thumbCrop', 'thumbDisplayOrder', 'thumbMargin',  'thumbnails', 'thumbPosition', 'thumbQuality',
      'touchTransition', 'transition', 'transitionSpeed', 'trueFullscreen',
      'variation', 'videoPoster', 'vimeo', 'wait', 'width', 'youtube'
      ];
      this.allowedThemes = [
      'azur','classic','folio','fullscreen','miniml','twelve'
      ];
      
      this.galleria = null;
      this.invalidate = function(RECORD){

      },

      this.setRecord = function(RECORD){
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);
        if (typeof rec != 'object') { return; };
        if (typeof rec.images == 'object') { 
          this.cfg.dataSource = rec.images;
        };
        if (typeof rec.config == 'object') { 
          for(var i=0;i<this.allowedOptions.length;i++) {
            if (typeof rec.config[this.allowedOptions[i]]!='undefined') {
              this.cfg[this.allowedOptions[i]] = rec.config[this.allowedOptions[i]];
            }
            if (typeof rec.config['theme']!='undefined') {
              this.setTheme(rec.config['theme']);
            }
          }
        };
        this.build();

      },
      
      this.setTheme = function(theme) {
        if (this.allowedThemes.includes(theme)) {
          this.theme = theme;
          this.cfg.theme = theme;
        };
      },


      this.free = function() {
        this.galleria = $('.galleria').data('galleria');
        if (this.galleria) this.galleria.destroy();
        $(this.element).empty();
      },
      
      this.build = function() {
        this.free();
        if (typeof loadedThemes[this.theme] == 'undefined') {
          loadedThemes[this.theme] = 1;
          $('head').append('<link rel="stylesheet" type="text/css" href="assets/galleria/themes/'+this.theme+'/galleria.'+this.theme+'.min.css">');
          Galleria.loadTheme('assets/galleria/themes/'+this.theme+'/galleria.'+this.theme+'.min.js');
        };
        Galleria.run(that.element, structuredClone(this.cfg));
        //console.log(this.galleria);
        this.galleria = $('.galleria').data('galleria');
      },

      this.init=function() {
        //console.log('GAL', $(that.element));
        if (typeof that.dd.theme!='undefined') {
          this.setTheme(that.dd.theme);
        }
        //this.build();
        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
