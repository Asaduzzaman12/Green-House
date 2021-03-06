
// Code for google map
    var map;
    $(document).ready(function(){
      var map = new GMaps({
        el: '#map',
        lat: -12.043333,
        lng: -77.028333
      });

      GMaps.geolocate({
        success: function(position){
          map.setCenter(position.coords.latitude, position.coords.longitude);
        },
        error: function(error){
          alert('Geolocation failed: '+error.message);
        },
        not_supported: function(){
          alert("Your browser does not support geolocation");
        },
        always: function(){
          alert("Done!");
        }
      });


      $(window).scroll(function(){
                if($(this).scrollTop()>400){
                    $("#scrollTotop").fadeIn();
                } else {
                     $("#scrollTotop").fadeOut();
                }
            });

            $("#scrollTotop").click(function(){
                $("html, body").animate({
                    scrollTop:0
                }, 800)
            });

    });