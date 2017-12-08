!function ($) {
    $(document).ready(function () {

        $("video").each(function ($index) {
            var $video = $(this);
            var $clone = $video.clone();
            $video.after($clone);

            var video = $video[0];
            var clone = $clone[0];

            clone.hidden = true;
            clone.pause();
            clone.currentTime = 0;

            video.ontimeupdate = function () {
                if (video.currentTime >= video.duration - .5) {
                    clone.play();
                    video.hidden = true;
                    clone.hidden = false;
                    video.pause();
                    video.currentTime = 0;
                }
            }

            clone.ontimeupdate = function () {
                if (clone.currentTime >= clone.duration - .5) {
                    video.play();
                    clone.hidden = true;
                    video.hidden = false;
                    clone.pause();
                    clone.currentTime = 0;
                }
            }

        });

    });
}(jQuery);