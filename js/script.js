
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var sreet = $('#street').val();
    var city = $('#city').val();
    var address = sreet + ', ' + city;

    $greeting.text('So, you want to live at ' + address + '?');
    // load streetview
    var sreetViewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + address + '&key=AIzaSyDX5gXzgo_JeZMs_pajtIqigPnKVIPBxTE';
    // YOUR CODE GOES HERE!
    $body.append('<img class="bgimg" src="' + sreetViewUrl + '">')
    return false;
};

$('#form-container').submit(loadData);
