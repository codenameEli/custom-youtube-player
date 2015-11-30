# custom-youtube-player
jQuery plugin to customize iframe YouTube players

#### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
appendTo | string | 'Parent element of iframe' | Element that gets elements appended to.
thumbnailSrc | string | 'The default YouTube thumbnail' | Optional. Provide path to override the default YouTube thumbnail.
height | int | 'Initial height of iframe' | Height of the YouTube thumbnail.
width | int | 'Initial width of iframe' | Width of the YouTube thumbnail.
playerVars | object | 'showinfo: 0; rel: 0;' | Optional. Override default YouTube iframe options. See https://developers.google.com/youtube/player_parameters
modal | bool | true | Open the YouTube video in a modal.
locked | bool | true | Locks scroll of the body when the modal is open.

#### Use

Initialize with:

```javascript
function onYouTubeIframeAPIReady() {

    jQuery('iframe[src^="https://www.youtube.com"]').customYouTubePlayer();
}
 ```
 This is a catch-all for iframe elements with a YouTube video as the elements src attribute.
 NOTE: DO NOT CHANGE THE FUNCTION NAME and call outside of document.ready() call, preferably at the bottom of your JS file. This is called from when the YouTube iframe api loads.

#### Dependencies

jQuery 1.7
YouTube iframe API

#### License

Copyright 2015 Tim "Eli" Dalbey

Licensed under the MIT license.