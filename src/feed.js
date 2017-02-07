
function ajaxCall(){

    var model = {
        data: {
            "media":[],
            "thumbnails":[]
        }
    }

	var apiUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=',
		apiToken = '5129060.14ba9b1.a0fcb87320534f7fa8e2a6f9e4009483',
		apiAjaxUrl = apiUrl + apiToken;

    $.ajax({
        url: apiAjaxUrl,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp'
    }).done(function(response){
        var instagramResponse = response.data;

        if(instagramResponse){
            var media = model.data.media;
            instagramResponse.forEach(function(el) {
                media.push(el);
            });
        }

    });

} ajaxCall();