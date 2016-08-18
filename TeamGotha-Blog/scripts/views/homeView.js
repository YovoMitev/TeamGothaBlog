class HomeView{
    constructor(wrapperSelector,mainContentSelector){
        this._wrapperSelector=wrapperSelector;
        this._mainConteSelector=mainContentSelector
    }

    showGuestPage(sideBarData,mainData) {
        let _that=this;
        $.get('templates/welcome-guest.html',function (template) {
            let renderWrapper = Mustache.render(template,null);
            $(_that._wrapperSelector).html(renderWrapper);
            $.get('templates/recent-posts.html',function (template) {
                let recentPosts={
                    recentPosts: sideBarData
                };
                let renderedRecentPosts = Mustache.render(template,recentPosts);
                $('.recent-posts').html(renderedRecentPosts)
            })
        });
        $.get('templates/posts.html',function (template) {
            let blogPosts = {
                blogPosts:mainData
            };
            let renderedPosts = Mustache.render(template,blogPosts);
            $('.articles').html(renderedPosts)
        })
    }
    showUserPage(sideBarData,mainData) {
        let _that=this;
        $.get('templates/welcome-user.html',function (template) {
            let renderWrapper = Mustache.render(template,null);

            $(_that._wrapperSelector).html(renderWrapper);

            $.get('templates/recent-posts.html',function (template) {
                let recentPosts={
                    recentPosts: sideBarData
                };
                let renderedRecentPosts = Mustache.render(template,recentPosts);
                $('.recent-posts').html(renderedRecentPosts)
            })
        });
        $.get('templates/posts.html',function (template) {
            let blogPosts = {
                blogPosts:mainData
            };
            let renderedPosts = Mustache.render(template,blogPosts);
            $('.articles').html(renderedPosts)
        })
    }
}


