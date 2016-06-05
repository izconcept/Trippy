function getData(vibe,description,uber,drink) {
    FB.api(
        '/me',
        'GET',
        {"fields":"birthday,hometown,location,feed{message,place,created_time},likes{name,location,created_time}"},
        function(response) {
            // Insert your code here
            var birthday = response.birthday;
            var currentLocation = response.location;
            
            console.log('\nbirthday:');
            console.log(getAge(birthday));
            console.log("current location: ");
            console.log(currentLocation);
            
            console.log("\nPlaces most likely been:");
            var feedData = response.feed.data;
            var likelyBeen = getLikelyPlaces(feedData);
            console.log(likelyBeen);
//            console.log("Times went:");
            var timesWent = getTimesWent(feedData);
//            console.log(timesWent);
            console.log("Popular Season")
            var popularSeason = getPopularSeason(timesWent);
            console.log(popularSeason);
            
            var likeData = response.likes.data;
            var placesToGo = getPlacesToGo(likeData, likelyBeen);
            console.log("\nPlaces you most likely would like to go:");
            console.log(placesToGo);
            
            evaluate(popularSeason, vibe, descrition, uber, uber, getAge(birthday), drink, likelyBeen, placesToGo);
        }
    );
}

function getPopularSeason(times)
{
    var seasons = {
        summer: 0,
        winter: 10,
        spring: 0,
        fall: 0
    }
    
    for(var i = 0; i < times.length; ++i)
    {
        var currentTime = new Date(times[i]);
        var currentMonth = currentTime.getMonth() + 1;
        
        switch(currentMonth) {
            case 12:
            case 1:
            case 2:
                // winter
                seasons.winter += 1;
                break;
            case 3:
            case 4:
            case 5:
                // spring
                seasons.spring += 1;
                break;
            case 6:
            case 7:
            case 8:
                // summer
                seasons.summer += 1;
                break;
            case 9:
            case 10:
            case 11:
                // fall
                seasons.fall += 1;
                break;
        }
    }
    
    var max = -Infinity;
    var maxSeason;
    for(var season in seasons) {
        if(seasons[season] > max)
        {
            max = seasons[season];
            maxSeason = season;
        }
    }
    
    return maxSeason;
}

function getPlacesToGo(likeData, likelyBeen)
{
    var placesToGo = [];
    for(var i = 0; i < likeData.length; ++i)
    {
        var location = likeData[i].location;
        if(location !== undefined)
        {
            var city = location.city;
            if(city !== undefined && likelyBeen.indexOf(city) == -1)
            {
                placesToGo.push(city);    
            }
        }
    }
    return placesToGo;
}

function getTimesWent(feedData)
{
    var likelyBeen = [];
    var timesWent = [];
    for(var i = 0; i < feedData.length; ++i)
    {
        var place = feedData[i].place;
        var created_time = feedData[i].created_time;
        if(place !== undefined)
        {
            var location = place.location;
            if(location !== undefined)
            {
                var city = location.city;
                if(city !== undefined && likelyBeen.indexOf(city) == -1)
                {
                    likelyBeen.push(city);
                    timesWent.push(created_time);
                }
            }
        }
    }
    return timesWent;
}

function getLikelyPlaces(feedData)
{
    var likelyBeen = [];
    var timesWent = [];
    for(var i = 0; i < feedData.length; ++i)
    {
        var place = feedData[i].place;
        var created_time = feedData[i].created_time;
        if(place !== undefined)
        {
            var location = place.location;
            if(location !== undefined)
            {
                var city = location.city;
                if(city !== undefined && likelyBeen.indexOf(city) == -1)
                {
                    likelyBeen.push(city);
                    timesWent.push(created_time);
                }
            }
        }
    }
    return likelyBeen;
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function login() {
    FB.login(function(response) {
        if (response.authResponse)
        {
            setTimeout(
                  function() {
                    $('.sequence2').remove();
                    $(".gif").remove();
                    $("#chat").append("<div class='row'><div class='bubble left animated fadeInUp'><span>Perfect! What do you plan on doing while on vacation?</span></div></div>");
                  }, 2000);
              setTimeout(
                  function() {
                      $("#footer").append("<div class='col-xs-3 bubble bottom animated fadeInUp sequence3'><span>Party</span></div><div class='col-xs-3 bubble bottom animated fadeInUp sequence3'><span>Relax</span></div><div class='col-xs-3 bubble bottom animated fadeInUp sequence3'><span>Sightseeing</span></div><div class='col-xs-3 bubble bottom animated fadeInUp sequence3'><span>Expeditions</span></div><div class='col-xs-3 bubble bottom animated fadeInUp sequence3'><span>Sports</span></div>");
                      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
                  }
              , 2700);
        }
        else
        {
            console.log('User cancelled login or did not fully authorize.');
            $('.sequence2').remove();
            $(".gif").remove();
            $("#chat").append("<div class='row'><div class='bubble left animated fadeInUp'><span>Login failed.</span></div></div>");
            
            setTimeout(
              function() {
                  $("#chat").append("<div class='row'><div class='bubble left animated fadeInUp sequence2 clickable'><span>Try again.</span></div></div>");
              }, 750);
        }
    },{
        scope: 'user_birthday,user_likes,user_location,user_photos,user_posts,user_tagged_places,user_videos'
    });
}

function logout() {
    FB.logout();
}