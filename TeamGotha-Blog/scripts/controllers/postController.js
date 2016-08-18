class PostController {
    constructor(postView, requester, baseUrl, appKey) {
        this._postView = postView;
        this._requester = requester;
        this._appKey = appKey;
        this._baseServiceUrl = baseUrl + "/appdata/" + appKey + "/posts/";
    }
    showCreatePostPage(data,isLoggedIn){
        this._postView.showCreatePostPage(data,isLoggedIn)
    }

    createPost(requestData){

        if(requestData.title.length<10){
            showPopup('error',"Post title must consist of atleast 10 symbols.")
            return;
        }
        if(requestData.content.length<40){
            showPopup('error',"Post content must consist of atleast 50 symbols.")
            return;
        }

        let requestUrl = this._baseServiceUrl;

        this._requester.post(requestUrl,requestData,
            function success(data) {
                showPopup('success',"You have successfully create new post.")
                return;
        },
            function error(data) {
                showPopup('error',"An error has occurred while attempting" + "to create new post")
                return;
            }
        )
    }

}