/**
 * @file mxrse-control-bar.js
 */
/* exported MxrseControlBar */
import videojs from 'video.js';

const Component = videojs.getComponent('Component');
const ControlBar = videojs.getComponent('ControlBar');

/**
 * Container of main controls.
 *
 * @extends ControlBar
 */
class MxrseControlBar extends ControlBar {

  /**
   * Create the `Component`'s DOM element
   *
   * @return {Element}
   *         The element that was created.
   */
  createEl() {
    return super.createEl();
  }
}

/**
 * Default options for `ControlBar`
 *
 * @type {Object}
 * @private
 */
MxrseControlBar.prototype.options_ = {
  children: [
    'progressControl',
    'playToggle',
    'playbackRateMenuButton',
    'volumePanel',
    'customControlSpacer',
    'currentTimeDisplay',
    'timeDivider',
    'durationDisplay',
    'liveDisplay',
    'seekToLive',
    'remainingTimeDisplay',
    'chaptersButton',
    'descriptionsButton',
    'subsCapsButton',
    'audioTrackButton',
    'pictureInPictureToggle',
    'fullscreenToggle'
  ]
};

Component.registerComponent('ControlBar', MxrseControlBar);
export default MxrseControlBar;
