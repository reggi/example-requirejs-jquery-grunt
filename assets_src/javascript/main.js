require.config({
    paths: {
        "jquery": "../../bower_components/jquery/jquery",
    }
});

define("main", function(){
    var $ = require("jquery");
    console.log($().jquery);
});

require(["main"]);