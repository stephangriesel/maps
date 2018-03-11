function initMap(){

    // Map Options
    var options = {
        zoom:12,
        center:{lat:52.3702,lng:4.8952}
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Listen for click on map
    google.maps.event.addListener(map, 'click', function(event){
        // Add Marker
        addMarker({coords:event.latLng});
    });

    /*
    // Add marker
    var marker = new google.maps.Marker({
        position:{lat:52.3600, lng: 4.8852},
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    });

    var infoWindow = new google.maps.InfoWindow ({
        content:'<h3>Rijksmuseum</h3><p>The Rijksmuseum is a Dutch national museum dedicated to arts and history in Amsterdam. The museum is located at the Museum Square in the borough Amsterdam South, close to the Van Gogh Museum, the Stedelijk Museum Amsterdam, and the Concertgebouw. </p>'
    });

    marker.addListener('click', function(){
        infoWindow.open(map,marker);
    });*/

    var markers = [
        {
            coords:{lat:52.3600, lng: 4.8852},
            iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content:'<h3>Rijksmuseum</h3><p>The Rijksmuseum is a Dutch national museum dedicated to arts and history in Amsterdam. The museum is located at the Museum Square in the borough Amsterdam South, close to the Van Gogh Museum, the Stedelijk Museum Amsterdam, and the Concertgebouw. </p>'
        },
        {
            coords:{lat:52.379189, lng: 4.899431},
            iconImage:'',
            content:'<h3>Amsterdam Central Station</h3><p>Amsterdam Centraal is the largest railway station of Amsterdam, Netherlands, and a major national railway hub. Used by 162,000 passengers a day, it is the second-busiest railway station in the country after Utrecht Centraal and the most visited national heritage site of the Netherlands. </p>'
        },
        {
            coords:{lat:52.3752, lng: 4.8840},
            iconImage:'',
            content:'<h3>Anne Frank House</h3><p>The Anne Frank House is a writer\'s house and biographical museum dedicated to Jewish wartime diarist Anne Frank. The building is located on a canal called the Prinsengracht, close to the Westerkerk, in central Amsterdam in the Netherlands.</p>'
        }
    ];

    // Loop through markers
    for(var i = 0; i < markers.length;i++){
        // Add markers
        addMarker(markers[i]);
    }

    /* addMarker({
        coords:{lat:52.3600, lng: 4.8852},
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content:'<h3>Rijksmuseum</h3><p>The Rijksmuseum is a Dutch national museum dedicated to arts and history in Amsterdam. The museum is located at the Museum Square in the borough Amsterdam South, close to the Van Gogh Museum, the Stedelijk Museum Amsterdam, and the Concertgebouw. </p>'
    });
    addMarker({
        coords:{lat:52.379189, lng: 4.899431},
        iconImage:'',
        content:'<h3>Amsterdam Central Station</h3><p>Amsterdam Centraal is the largest railway station of Amsterdam, Netherlands, and a major national railway hub. Used by 162,000 passengers a day, it is the second-busiest railway station in the country after Utrecht Centraal and the most visited national heritage site of the Netherlands. </p>'
    });
    addMarker({
        coords:{lat:52.3752, lng: 4.8840},
        iconImage:'',
        content:'<h3>Anne Frank House</h3><p>The Anne Frank House is a writer\'s house and biographical museum dedicated to Jewish wartime diarist Anne Frank. The building is located on a canal called the Prinsengracht, close to the Westerkerk, in central Amsterdam in the Netherlands.</p>'
    }); */

    // Add Marker Function 
    function addMarker (props){
        var marker = new google.maps.Marker({
            position:props.coords,
            map:map,
            // icon:props.iconImage,
        });

        // Check for custom icon
        if(props.iconImage) {
            // Set Icon Image
            marker.setIcon(props.iconImage);
        }

        // Check content
        if (props.content){
            var infoWindow = new google.maps.InfoWindow ({
                content:props.content
            });
        
            marker.addListener('click', function(){
                infoWindow.open(map,marker);
            });
        }

    }
}