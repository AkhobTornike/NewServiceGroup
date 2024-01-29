var mapLocation = new google.maps.LatLng(41.6978598, 44.8219238);
var marker;
var map;
function initialize() {
    var mapOptions = {
        zoom: 14, // Change zoom here
        center: mapLocation,
        scrollwheel: false,
        styles: [
            {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},
            {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
            {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},
            {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
            {"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#f6954d"}]},
            {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#e3e2e2"}]},
            {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"water","elementType":"all","stylers":[{"color":"#a4c4c8"},{"visibility":"on"}]}]
    };
    
    map = new google.maps.Map(document.getElementById('map'),
    mapOptions);
    
     
    //change address details here
    var contentString = '<div class="map-info">' 
    + '<div class="map-title">' 
    + '<div class="brand" href="#"><img alt="" src="images/brand.png"><div class="brand-info"><div class="brand-name">New-Service-Group</div><div class="brand-text">Event Organising</div></div></div></div>' 
    + '<div class="map-address-row">'
    + '  <span class="text"><strong class="text-dark">Georgia, Tbilisi</strong><br>'
    + '  gantiadi 8</span>'
    + '</div>'
    + '<div>'
    + '   <span class="text"><strong class="text-dark">Phone:</strong> +995 579 99 15 04</span>'
    + '</div>'
    + '<div class="map-address-row">'
    + '   <span class="map-email">'
    + '      <span class="text"><strong class="text-dark">Email:</strong> phridonakhobadze@gmail.com</span>'
    + '   </span>'
    + '</div>' 
    + '<p class="gmap-open"><a href="https://www.google.com/maps/place/8%2F3+Gantiadi+St,+T%bilisi/@41.6979898,44.8210238,17.44z/data=!4m6!3m5!1s0x40440d0240f2ee6f:0x189cbf28be3094b0!8m2!3d41.6978324!4d44.8218685!16s%2Fg%2F11bw4csyt8?entry=ttu" target="_blank">Open on Google Maps</a></p></div>';
    
    
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    

    // Uncomment down to show Marker
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'New-Service-Group', //change title here
        animation: google.maps.Animation.DROP,
        position: mapLocation
    });



    // Uncomment down to show info window on marker
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });




}

if ($('#map').length) {
    google.maps.event.addDomListener(window, 'load', initialize);
}

