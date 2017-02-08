
function instagramFeed(){

    var model = {
        data: {
            "media":[],
            "thumbnails":[]
        }
    }

    var control = {
        init: function(){
            this.apiCall();
        },
        apiTimeout: function(){
            setTimeout(function() {
                if(model.data.media.length < 10){
                    console.log('error');
                }
            }, 5000);
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
                } else {
                    control.apiTimeout();
                }

            }).fail(function(xhr,textStatus){
                control.apiTimeout();
            });

        },
    }

    // var view = {
    // }

    control.init();

} instagramFeed();