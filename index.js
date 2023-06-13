//bana tüm butonları getir
//istersem butonlardan gidebiliriz
//istersek drum üzerinden 
//tekrar buton eklersek sorun olabilir


//w id'si eşitse;
$(".drum").click(function(e){

    // let id=$(this).attr("id");
    // let id=e.key.toLowerCase();
    PlaySound($(this).attr("id"));
    
   
});

$(document).keypress(function(e){
    // let id=e.key.toLowerCase();
    PlaySound(e.key.toLowerCase());
})


// $(".drum").hover(function(e){
//     PlaySound($(this).attr("id"))
// })

$(".drum").mouseenter(function(e){
    PlaySound($(this).attr("id"))
})

function Animate(id)
{
    $("#"+id).addClass("pressed");
    setTimeout(function(){$("#"+id).removeClass("pressed")}, 5000);

   
}

function PlaySound(id)
{
    if (id=="w") {
        // alert("w basıldı")
        Animate(id);
        $("#"+id).addClass("pressed");
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
     
    }

    else if(id=="a"){
        Animate(id);
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    else if(id=="s"){
        Animate(id);
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    else if(id=="d"){
        Animate(id);
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }

    else if(id=="j"){
        Animate(id);
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if(id=="k"){
        Animate(id);
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else if(id=="l"){
        Animate(id);
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
}

// $("document").keypress(function(e){
//     alert(e.key);
// })