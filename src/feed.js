
function ajaxCall(){

    var model = {
        data: {
            "media":[],
            "thumbnails":[]
        }
    }

    var control = {
        init: function(){

        },
        apiCall: function(){

            var apiUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=',
                apiToken = '-',
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

        },
    }



} ajaxCall();