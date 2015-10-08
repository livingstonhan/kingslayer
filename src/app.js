
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var mainscene = ccs.load(res.MainScene_json);
        this.addChild(mainscene.node);

        var hp = ccui.helper.seekWidgetByName(mainscene.node, "herohp");
        hp.setPercent(10);

        var gameinfo = ccui.helper.seekWidgetByName(mainscene.node, "gameinfo");
        var infotext = ccui.helper.seekWidgetByName(mainscene.node, "gameinfo_text");

        //console.log(gameinfo);

        //gameinfo.setContainer(infotext);

        //infotext.setString("测试测试");
        //Text
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();

        this.addChild(layer);
    }
});

