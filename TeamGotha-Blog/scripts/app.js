(function () {

    // Create your own kinvey application

    let baseUrl = "https://baas.kinvey.com";
    let appKey = "kid_HktUFJ28"; // Place your appKey from Kinvey here...
    let appSecret = "8936a647e6a64f34b4cf38551dab316a"; // Place your appSecret from Kinvey here...
    var _guestCredentials = "66f57dc9-5d64-477f-a6b5-a8bf5a4c0f2d.1eAAV2LxymQ8qJLlzQMeOmYMfjdwls20MfptBwxlNFM=";

    let authService = new AuthorizationService(baseUrl,appKey,appSecret,_guestCredentials); 

    authService.initAuthorizationType("Kinvey");

    let requester = new Requester(authService);

    let selector = ".wrapper";
    let mainContentSelector = ".main-content";

    let homeView = new HomeView(selector,mainContentSelector);
    let homeController = new HomeController(homeView,requester,baseUrl,appKey);

    let userView = new UserView(selector,mainContentSelector);
    let userController = new UserController(userView,requester,baseUrl,appKey);
    
    let postView = new PostView(selector,mainContentSelector);
    let postController = new PostController(postView,requester,baseUrl,appKey);


    // Create HomeView, HomeController, UserView, UserController, PostView and PostController

    initEventServices();

    onRoute("#/", function () {
       if(authService.isLoggedIn()){
           homeController.showUserPage()
       }
        else{
           homeController.showGuestPage()
       }
    });

    onRoute("#/post-:id", function () {
        let top = $('#post-'+ this.params['id']).position().top;
        $(window).scrollTop(top);
    });

    onRoute("#/login", function () {
        userController.showLoginPage(authService.isLoggedIn());

    });

    onRoute("#/register", function () {
        userController.showRegisterPage(authService.isLoggedIn());
    });

    onRoute("#/logout", function () {
        userController.logout();
    });

    onRoute('#/posts/create', function () {
        let data = {
            fullname:sessionStorage['fullname']
        };
        postController.showCreatePostPage(data,authService.isLoggedIn());
    });

    bindEventHandler('login', function (ev, data) {
        userController.login(data)
    });

    bindEventHandler('register', function (ev, data) {
        userController.register(data)
    });

    bindEventHandler('createPost', function (ev, data) {
        postController.createPost(data);
    });

    run('#/');
})();
