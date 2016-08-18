class UserView{
    constructor(wrapperSelector,mainContentSelector){
        this._wrapperSelector=wrapperSelector;
        this._mainConteSelector=mainContentSelector
    }
    showLoginPage(isLoggedIn){
        let _that=this;

        let templateUrl;
        if(isLoggedIn){
            templateUrl = "templates/form-user.html";
        }
        else {
            templateUrl = "templates/form-guest.html";
        }
        $.get(templateUrl,function (template) {
            let renderedWrapper = Mustache.render(template,null);
            $(_that._wrapperSelector).html(renderedWrapper);

            $.get('templates/login.html',function (template) {
                let rendered = Mustache.render(template,null)
                    $(_that._mainConteSelector).html(rendered),
                
                $('#login-request-button').on('click',function (ev) {
                    let username = $('#username').val();
                    let password = $('#password').val();

                    let data = {
                        username:username,
                        password:password
                    };
                    triggerEvent('login',data);
                });;
            });
        });
    }
    showRegisterPage(isLoggedIn){

        let _that=this;

        let templateUrl;
        if(isLoggedIn){
            templateUrl = "templates/form-user.html";
        }
        else {
            templateUrl = "templates/form-guest.html";
        }
        $.get(templateUrl,function (template) {
            let renderedWrapper = Mustache.render(template,null);
            $(_that._wrapperSelector).html(renderedWrapper);

            $.get('templates/register.html',function (template) {
                let rendered = Mustache.render(template,null)
                    $(_that._mainConteSelector).html(rendered),

                    $('#register-request-button').on('click',function (ev) {
                    let uresname = $('#username').val();
                    let password = $('#password').val();
                    let confirmpassoword = $('#pass-confirm').val();
                    let fullname=$('#full-name').val();

                    let data = {
                        username:uresname,
                        password:password,
                        fullname:fullname,
                        confirmpassword:confirmpassoword
                    };
                    triggerEvent('register',data)
                });
            });

        })
        
    }
}