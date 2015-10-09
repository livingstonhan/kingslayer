
var mainscene = null;

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

        mainscene = ccs.load(res.MainScene_json);
        this.addChild(mainscene.node);

        var hp = ccui.helper.seekWidgetByName(mainscene.node, "herohp");
        hp.setPercent(10);

        console.log(mainscene);

        var gameinfo = ccui.helper.seekWidgetByName(mainscene.node, "gameinfo");

        var hero = new actorz(1000,100,20,20,20,20);
        var bad = new actorz(2000,50,10,10,10,10);
        console.log(hero);
        initbattle(hero,bad);

        //this.schedule(attack(hero,bad),1);
        //this.schedule(attack(bad,hero),1);

        return true;
    }
});

var initbattle = function(hero,bad){
    var heroatk = ccui.helper.seekWidgetByName(mainscene.node, "heroatk");
    var herodef = ccui.helper.seekWidgetByName(mainscene.node, "herodef");
    var heroacu = ccui.helper.seekWidgetByName(mainscene.node, "heroacu");
    var heroextr = ccui.helper.seekWidgetByName(mainscene.node, "heroextr");
    var herodod = ccui.helper.seekWidgetByName(mainscene.node, "herodod");

    var badatk = ccui.helper.seekWidgetByName(mainscene.node, "badatk");
    var baddef = ccui.helper.seekWidgetByName(mainscene.node, "baddef");
    var badacu = ccui.helper.seekWidgetByName(mainscene.node, "badacu");
    var badextr = ccui.helper.seekWidgetByName(mainscene.node, "badextr");
    var baddod = ccui.helper.seekWidgetByName(mainscene.node, "baddod");

    heroatk.setString("攻击力:" + hero.atk);
}

//function attack(one,two){
//    console.log("wtf");
//}

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();

        this.addChild(layer);
    }
});


var lineCnt = 0;
var InsertGameInfo = function(str){

    if(mainscene == null)
        return;

    var infotext = ccui.helper.seekWidgetByName(mainscene.node, "gameinfo_text");
    var context = infotext.getString();
    infotext.setString(context + str + "\n");

    lineCnt += 1;

    console.log(lineCnt);
    if(lineCnt >= 26)
    {

        var str = infotext.getString();
        var num = str.indexOf('\n') + 1;
        console.log(num);
        str = str.substring(num);
        infotext.setString(str);

        lineCnt -= 1;
    }
}

