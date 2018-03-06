function initMap(){
    var options = {
        zoom:14,
        center:{lat:52.3702,lng:4.8952}
    }

    var map = new google.maps.Map(document.getElementById('map'), options);
}