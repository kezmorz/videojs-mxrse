(function() {

    const options = {
        controls: true,
        controlBar: {
            children: [
                'progressControl', 
                'playToggle', 
                'playbackRateMenuButton', 
                'volumePanel', 
                'customControlSpacer', 
                'currentTimeDisplay', 
                'timeDivider', 
                'durationDisplay', 
                'fullscreenToggle'
            ]
        },
        fluid: true,
        fill: true,
        responsive: true,
        breakpoints: {
            tiny: 0,
            xsmall: 0,
            small: 540,
            medium: 720,
            large: 960,
            xlarge: 1140
        },
        playbackRates: [0.5, 1, 1.5, 2]
    };

    const videoElements = document.querySelectorAll('.vjs-mxrse');
    videoElements.forEach(element => {
        videojs(element, options);
    });

})();