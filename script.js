
window.DBSDK_Cfg = {
    export_mode: ['download'],
    export_callback: function (resultUrl, exportTarget) {
        var data = "<p><img style='width:1080px; height:637px;' src='" + resultUrl + "'></p>";
        document.getElementById('img_callback_container').innerHTML += data;
    },
    auth: {
        email: 'hungdemo7@gmail.com',
        name: 'Welcome to DesignBold',
    },
};



(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://sdk.designbold.com/button.js#app_id=08b68556d3";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'db-js-sdk'));    