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
            $('body')
                .append('<img src="http://i58.tinypic.com/166qgm.png"></img>')
                .find('> img').last()
                .css({
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    height: '200px',
                    width: '200px'
                })
                .draggable();
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

