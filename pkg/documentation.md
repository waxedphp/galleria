# Galleria

A free JavaScript image gallery framework that simplifies the process of creating beautiful image galleries for the web and mobile devices.

- https://galleriajs.github.io/
- https://github.com/galleriajs/galleria

MIT license

---

### PHP:

```php
  use \Waxedphp\Galleria\Setter as Galleria;

  $gal = new Galleria($this->waxed);
  $gal->setRoute('/images/betty/{PATH}')
  ->addFolder('/Collection/betty')
  ->setTheme('folio');
  
  $this->waxed->pick('main')->display([
    'payload1' => $gal->value(),
  ], 'templates/galleria');


```
---

### HTML:

```html

  <div 
    class="waxed-galleria"
    data-name="payload1" 
  >
  
  </div>


```

---
---

### PHP methods:

```php
  
  // clears already added images.
  $gal->clear();
  
  // set route, from which images will be served
  $gal->setRoute('/images/betty/{PATH}');
  
  // load all images from folder
  $gal->addFolder('/Collection/betty');

  // add image
  $gal->addImage('/Collection/betty/image.jpg');

  // add image together with additional values
  $gal->addImage([
    'image' => '/Collection/betty/image.jpg',
    'title' => 'Betty',
    'description' => 'Betty bla bla bla...',
    //...
  ]);
  
  // shuffle order of images:
  $gal->shuffle();

  // select count of random images:
  $gal->random(10);
  
  // set theme:
  $gal->setTheme('folio');
  // available themes:
  // ['azur','classic','folio','fullscreen','miniml','twelve']
  
  
  
  $gal->setAutoplay(true);
  //Sets Galleria to play slidehow when initialized.

  $gal->setCarousel(true);
  //Toggle the creation of a carousel.

  $gal->setCarouselSpeed(50);
  //Carousel animation speed in milliseconds.

  $gal->setCarouselSteps(100);
  //Defines how many “steps” the carousel should take on each nav click.

  $gal->setDailymotion([
    'foreground' => '%23EEEEEE',
    'highlight' => '%235BCEC5',
    'background' => '%23222222',
    'logo' => 0,
    'hideInfos' => 1
  ]);
  //Adds player options for the Daliymotion video player

  $gal->setDataSelector('#myobject');
  //Defines the selector Galleria should look for in the source.

  $gal->setDataSource($myImagesArray);
  //Defines the Galleria data, or the HTML source where the data is found.

  $gal->setDebug(true);
  //Set this to false to prevent debug messages.

  $gal->setDummy('/images/dummy.jpg');
  //Defines a dummy image that will be used if the image can’t be found.

  $gal->setEasing('swing');
  //Defines the easing mode globally.
  /*
    “linear” and “swing”, Galleria includes the following easings:
    galleria, galleriaIn, galleriaOut
    ...or use f.ex. jQuery Easing plugin
  */


  $gal->setFullscreenCrop('sdsdsd');
  //Sets how Galleria should crop when in fullscreen mode.

  $gal->setFullscreenDoubleTap(true);
  //Enabled fullscreen toggle on double-tap for touch devices.

  $gal->setFullscreenTransition('???');
  //Defines a different transition for fullscreen mode.

  $gal->setHeight(300);
  //Manually set a gallery height.

  $gal->setIdleMode(true);
  //Option for turning on/off idle mode.

  $gal->setIdleTime(1000);
  //Defines how long delay before Galleria goes into idle mode.

  $gal->setIdleSpeed(10);
  //Defines the animation speed in milliseconds when entering/exiting idle mode.

  $gal->setImageCrop('landscape');
  //Defines how Galleria will crop the image.
  /*
  true means that all images will be scaled to fill the stage, centered and cropped.
  false will scale down so the entire image fits.
  ‘height’ will scale the image to fill the height of the stage.
  ‘width’ will scale the image to fill the width of the stage.
  ‘landscape’ will fill up images that has landscape proportions, but scale portrait images to fit inside the container.
  ‘portrait’ is like ‘landscape’ but the other way around.
  */
    
  $gal->setImageMargin(10);
  //Sets a margin between the image and the stage.

  $gal->setImagePan(true);
  //Toggles the image pan effect.

  $gal->setImagePanSmoothness('??');
  //Defines how smooth ( and CPU consuming ) the pan effect should be.

  $gal->setImagePosition('??');
  //Positions the image.

  $gal->setimageTimeout(100);
  //Sets a timeout for fetching images.

  $gal->setInitialTransition('??');
  //Sets a different transition on the the first image.

  $gal->setKeepSource(true);
  //Lets you keep the source elements.

  $gal->setLayerFollow(true);
  //Boolean for controlling if the layer will follow the image size or not.

  $gal->setLightboxFadeSpeed(50);
  //Defines how fast the lightbox should fade.

  $gal->setLightboxTransitionSpeed(50);
  //Defines how fast the lightbox should animate.

  $gal->setMaxScaleRatio(100);
  //Defines how much Galleria is allowed to upscale images.

  $gal->setMaxVideoSize();
  //Defines how much Galleria is allowed to upscale videos.

  $gal->setOverlayBackground('#ffffff');
  //Defines the background color of the overlay.

  $gal->setOverlayOpacity(0.7);
  //Sets how transparent the overlay should be.

  $gal->setPauseOnInteraction(true);
  //Toggles if Galleria should stop playing if the user navigates.

  $gal->setPopupLinks(true);
  //Open Image links in new windows.

  $gal->setPreload(50);
  //Defines how much Galleria should preload.

  $gal->setQueue(true);
  //Defines if Galleria should queue the slideshow.

  $gal->setResponsive(true);
  //Sets Galleria in responsive mode.

  $gal->setShow(5);
  //Lets you start the slideshow at any image index.

  $gal->setShowCounter(true);
  //Toggles the counter.

  $gal->setShowInfo(true);
  //Toggles the caption.

  $gal->setShowImagenav(true);
  //Toggles the image navigation arrows.

  $gal->setSwipe(true);
  //Enables the swipe gesture for navigating on touch devices.

  $gal->setThumbCrop('??');
  //Same as image_crop for thumbnails.

  $gal->setThumbDisplayOrder('??');
  //Defines if the gallery should display the loaded thumbnails in order

  $gal->setThumbMargin(5);
  // Same as imageMargin for thumbnails.

  $gal->setThumbnails('numbers');
  // Sets how and if thumbnails should be created.

  $gal->setThumbPosition('center');
  // Same as imagePosition for thumbnails.
  /*
  Positions the thumbnail image inside it’s container. Works like the CSS background-position property, f.ex 
  ‘top right’ or ‘20% 100%’.
  You can use keywords, percents or pixels.
  The first value is the horizontal position and the second is the vertical.
  */

  $gal->setThumbQuality(false);
  // Defines if and how IE should use bicubic image rendering for thumbnails
  /*
    ‘auto’ uses high quality if image scaling is moderate.
    false will not use high quality (better performance).
    true will force high quality renedring (can slow down performance)
  */


  $gal->setTouchTransition('pulse');
  //Defines a different transition when a touch device is detected.

  $gal->setTransition('flash');
  //Defines what transition to use.
  /*
  ‘fade’ crossfade betweens images
  ‘flash’ fades into background color between images
  ‘pulse’ quickly removes the image into background color, then fades the next image
  ‘slide’ slides the images depending on image position
  ‘fadeslide’ fade between images and slide slightly at the same time
  ... or use transitions API.
  */


  $gal->setTransitionSpeed(50);
  //Defines the speed of the transition.

  $gal->setTrueFullscreen(true);
  //Makes Galleria enter a native fullscreen mode where supported.

  $gal->setVariation('??');
  //Visual variations of a theme

  $gal->setVideoPoster(true);
  //Defines if a poster image should be used for videos

  $gal->setVimeo([
     'title' => 0,
     'byline' => 0,
     'portrait' => 0,
     'color' => 'aaaaaa'
  ]);
  //Sets options for the Vimeo player
  // 

  $gal->setWait(100);
  //Defines if and how Galleria should wait until it can be displayed using user interaction.

  $gal->setWidth(800);
  //Manually set a gallery width.

  $gal->setYoutube([
    'modestbranding' => 1,
    'autohide' => 1,
    'color' => 'white',
    'hd' => 1,
    'rel' => 0,
    'showinfo' => 0
  ]);
  //Sets options for the YouTube player
  // see: https://developers.google.com/youtube/player_parameters?csw=1
  
  // returns values for frontend.
  $gal->value();

```

### Options:

