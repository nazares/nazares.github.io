//AnyComment = window.AnyComment || []; AnyComment.Comments = [];
//AnyComment.Comments.push({
//    "root": "anycomment-app",
    "app_id": 1524,
//    "language": "ru"
//})
//var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
//s.src = "https://widget.anycomment.io/comment/embed.js";
//var sa = document.getElementsByTagName("script")[0];
//sa.parentNode.insertBefore(s, s.nextSibling);


AnyComment = window.AnyComment || []; AnyComment.Login = [];
    window.AnyComment.Login.push({
        root: 'anycomment-login',
        app_id: 1524,
        providers: 'vkontakte,twitter,odnoklassniki,google,mailru',
        options: {
            show_login_with: false,
        },
        onLogin: function (envelope) {
            console.log(envelope);
        }
    });
    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
    s.src = "https://cdn.anycomment.io/assets/js/login.js";
    var sa = document.getElementsByTagName("script")[0];
    sa.parentNode.insertBefore(s, s.nextSibling);
