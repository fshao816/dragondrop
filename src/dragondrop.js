(function(){

    function loadTag(src, callback){
        var tag = document.createElement('script');
        tag.type = 'text/javascript';
        tag.async = true;
        tag.src = src;
        tag.onload = callback;
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(tag);
    }

    function launchDragonDrop($){
        $(document).ready(function(){

            var size = (parseInt(Math.random() * 4) + 2) * 50;
            var left = (Math.random() * ($(window).width() - size - 20)) + 10;
            var top = $(window).scrollTop() + (Math.random() * ($(window).height() - size - 20)) + 10;
            var flip = parseInt(Math.random() * 2) ? true : false;
            var img = $('body')
                .append('<img src="http://i58.tinypic.com/166qgm.png"></img>')
                .find('> img').last();
            img.css({
                    position: 'absolute',
                    top: top + 'px',
                    left: left + 'px',
                    height: size + 'px',
                    width: size + 'px',
                    'z-index': 99999
                })
                .draggable();
            if (flip) {
                img.css({
                    '-moz-transform': 'scaleX(-1)',
                    '-o-transform': 'scaleX(-1)',
                    '-webkit-transform': 'scaleX(-1)',
                    'transform': 'scaleX(-1)',
                    'filter': 'FlipH',
                    '-ms-filter': '"FlipH"'
                });
            }
        });
    }

    (function(){
        if (typeof jQuery === 'undefined') {
            loadTag('https://code.jquery.com/jquery-2.1.3.min.js', function(){
                loadTag('https://code.jquery.com/ui/1.11.3/jquery-ui.min.js', function(){
                    launchDragonDrop(jQuery);
                });
            });
        } else {
            if (typeof jQuery.ui === 'undefined')
                loadTag('https://code.jquery.com/ui/1.11.3/jquery-ui.min.js', function(){
                    launchDragonDrop(jQuery);
                });
            else {
                launchDragonDrop(jQuery);
            }
        }
    })();
})();

