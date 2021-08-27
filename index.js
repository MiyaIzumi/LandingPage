function show(){
    $(".ham i").attr("class","fas fa-times")
    $(".nav-lists").animate({ width:"100%"});
    $(".nav-lists").css("display","flex")
    $(".nav-lists li").css("display","block");
}
function close(){
    $(".ham i").attr("class","fas fa-bars")
    $(".nav-lists").animate({ width:"0%"});
    $(".nav-lists li").css("display","none");
    
}
$(".ham").click(function(){
    if($(".ham i").attr("class")==="fas fa-bars"){
        show();
    }
    else if($(".ham i").attr("class")==="fas fa-times"){
        close();
    }

});
$(".fas.fa-moon").mouseenter(function(){
    $(".fas.fa-moon").css("color","white");

})
$(".fas.fa-moon").mouseleave(function(){
    $(".fas.fa-moon").css("color","black");

})
$(".moo").click(function(){
    if($(".moo i").attr("class")=="fas fa-moon"){
        day();
    }
    else if($(".moo i").attr("class")=="fas fa-sun"){
        night();
    }
})

function day(){
    ani();
    $(".nav-lists li a").css("color","#064360");
    $(".landing .fas").css("color","#064360")
    $(".head h1").css("color","#064360");
    $(".head p").css("color","#064360");
    $(".brand h1").css("color","#dcf4ff");
    $(".moo i").attr("class","fas fa-sun");
    $("video").attr("src","mylivewallpapers.com-Floating-Spirited-Away.mp4");
    $(".fas.fa-sun").css("background-color", "rgba(48,222,232,0.78)");
    $(".nav-lists").css("background-color", "rgb(115 185 226 / 78%)");
    $(".head .btn").css("background-color", "rgba(115, 185, 226, 0.78)");
    $(".fas.fa-sun").mouseenter(function(){
        $(".fas.fa-sun").css("color","black");
    })
    $(".fas.fa-sun").mouseleave(function(){
        $(".fas.fa-sun").css("color","white");
    
    })
}
function night(){
    ani();
    $("video").attr("src","mylivewallpapers.com-Inazuma-Shrine-of-Depths.mp4");
    $(".moo i").attr("class","fas fa-moon");
    $(".fas.fa-moon").mouseenter(function(){
        $(".fas.fa-moon").css("color","black");
    })
    $(".fas.fa-moon").mouseleave(function(){
        $(".fas.fa-moon").css("color","white");
    
    })
    $(".fas.fa-moon").css("background-color", "rgba(123, 104, 231, 0.78)");
    $(".nav-lists").css("background-color", "rgba(73, 55, 172, 0.78)");
    $(".head .btn").css("background-color", "rgba(102, 51, 153, 0.78)");
    $(".nav-lists li a").css("color","#fff");
    $(".landing .fas").css("color","#fff")
    $(".head h1").css("color","#fff");
    $(".head p").css("color","#fff");
    $(".brand h1").css("color","#fff")
}
function ani(){
    $(".head").css("marginLeft","-30%");
    $(".header").css("top","-100px");
    $(".head").animate({
        marginLeft:"5%"
    },500);
    $(".header").animate({
        top:"0"
    },500);
}
