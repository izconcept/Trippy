window.fbAsyncInit = function () {
    FB.init({
        appId      : '1622929911368002',
        xfbml      : true,
        version    : 'v2.6'
    });
    
    FB.getLoginStatus(function(response){
        if (response.status === 'connected') {
            getData();
        }
        else {
//            login();
            console.log("The user is not logged in!");
        } 
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));