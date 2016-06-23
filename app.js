$(document).ready(function() {
            // wrap this inside a listerning function such as submit or click.
            $("#type").on('submit', function(event) {
                    event.preventDefault();
                    var videoSearch = $('#search').val();
                    $.getJSON('https://www.googleapis.com/youtube/v3/search?key=AIzaSyBDnADmOVFa8ct_lqA8JV_l6AeUi-3p2wM&part=snippet&q=' + escape(videoSearch), function(data) {
                            for (var i = 0; i < data.items.length; i++) {
                                console.log(data);
                                var object = data.items[i]
                                    // var videoId = object.data.items[i].id.videoId
                                var youTube = '<li>' +
                                    '<h3>' + object.snippet.title + '</h3>' +
                                    // <a class="fancybox-media" href="https://www.youtube.com/watch?v=59Zcx9YbZxI" rel="media-gallery">Youtube</a>
                                    '<a class="fancybox-media" href="https://www.youtube.com/watch?v=' + object.id.videoId + '" rel="media-gallery"><img src=" ' + object.snippet.thumbnails.high.url + ' " alt="TALENT!"></a>' +
                                    '<p>' + object.snippet.description + '</p>' +
                                    '</li>'
                                $('#apiSearch').append(youTube);
                           
                                   
                            }

// '<a class="fancybox" rel="group" href="https://www.youtube.com/watch?v=' + object.id.videoId + '"
                                });

                            // why doesn't this WORK!!?!?!


                        })


                        // [lightbox href="http://www.youtube.com/embed/2KN-WvkDGtk?hd=1&controls=0&autoplay=1" iframe="true" width="710" height="400" title="YouTube test"]Test[/lightbox]

                    });

            

        // Make the images clickable..when you click you get access to the youtube video
        // don't forget to console.log API so you know where you need to go in the API object Data
        // how to solve things using code: "envision things" (use wireframes)...maybe write your code in HTML 1st
        // another way to get solutions is through looking at other sites