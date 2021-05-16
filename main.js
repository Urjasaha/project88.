canvas= new fabric.Canvas("myCanvas");
playerx=10;
playery=10;
blockimagewidth=30;
blockimageheight=30;
var playerobject="";

function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerobject)
    })
}
function newImg(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockimageobject=Img;
        blockimageobject.scaleToWidth(blockimagewidth);
        blockimageobject.scaleToHeight(blockimageheight);
        blockimageobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(blockimageobject)
    })
}
window.addEventListener("keydown",kd);
function kd(e){
    keyPressed=e.keyCode;
    if (e.shiftKey==true && keyPressed=='80'){
        blockimagewidth=blockimagewidth+10;
        blockimageheight=blockimageheight+10;
        document.getElementById("current_width").innerHTML=blockimagewidth;
        document.getElementById("current_height").innerHTML=blockimageheight;
        console.log("p shift")
    }

    if (e.shiftKey==true && keyPressed=='77'){
        blockimagewidth=blockimagewidth-10;
        blockimageheight=blockimageheight-10;
        document.getElementById("current_width").innerHTML=blockimagewidth;
        document.getElementById("current_height").innerHTML=blockimageheight;
    }

    if(keyPressed=='70'){
        newImg('ironman_face.png');
        console.log("f");
    };
    if(keyPressed=='66'){
        newImg('spiderman_body.png');
        console.log("b");
    };
    if(keyPressed=='76'){
        newImg('hulk_legs.png');
        console.log("l");
    };
    if(keyPressed=='82'){
        newImg('hulk_right_hand.png');
        console.log("r");
    };
    if(keyPressed=='72'){
        newImg('captain_america_left_hand.png');
        console.log("h");
    };
    if(keyPressed=='38'){
        up();
        console.log("up")
    }

    if(keyPressed=='40'){
        down();
        console.log("down")
    }

    if(keyPressed=='37'){
        left();
        console.log("left")
    }

    if(keyPressed=='39'){
        right();
        console.log("right")
    }
};
function up(){
    if(playery >= 0)
    {
        playery= playery - blockimageheight;
        console.log("block image height ="+blockimageheight);
        console.log("When Up arrow key is pressed, X= "+playerx + " , Y ="+playery);
        playerUpdate();
        canvas.remove(playerobject);
        
    }
}
function down(){
    if(playery <= 500)
    {
        playery= playery + blockimageheight;
        console.log("block image height ="+blockimageheight);
        console.log("When Down arrow key is pressed, X= "+playerx + " , Y ="+playery);
        playerUpdate();
        canvas.remove(playerobject);
    }
}
function right(){
    if(playerx <= 900)
    {
        playerx= playerx + blockimageheight;
        console.log("block image height ="+blockimageheight);
        console.log("When Down arrow key is pressed, X= "+playerx + " , Y ="+playery);
        playerUpdate();
        canvas.remove(playerobject);
    }
}
function left(){
    if(playerx >= 0)
    {
        playerx= playerx - blockimageheight;
        console.log("block image height ="+blockimageheight);
        console.log("When Down arrow key is pressed, X= "+playerx + " , Y ="+playery);
        playerUpdate();
        canvas.remove(playerobject);
    }
}