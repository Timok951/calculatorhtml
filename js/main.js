
var number = 0;
var numbervideo = 0 ;
function onClickButtonAddImage(el) {


    if (numbervideo == 0) {
        var newImage = document.createElement("img");
        newImage.src = "../img/AK74.jpeg";
        newImage.className = "image";
        var targetElement = document.getElementById("image_target"); 
        targetElement.appendChild(newImage);
        number = number +1;
    }

    else if (number == 1) {
        var secondImage = document.createElement("img");
        secondImage.src = "../img/MP5.jpg"; 
        secondImage.className = "image";
        var targetElement = document.getElementById("image_target");
        targetElement.appendChild(secondImage)
        number = number +1;
    }

    else if (number == 2) {
        var thirdImage = document.createElement("img");
        thirdImage.src = "../img/M16A2.jpg"; 
        thirdImage.className = "image";
        var targetElement = document.getElementById("image_target");
        targetElement.appendChild(thirdImage)
        number = number +1;
    }
    else
    {
        var targetElement = document.getElementById("image_target");
        var allimages = targetElement.querySelectorAll('ul > img');
        allimages.forEach(function (image){
            image.remove(); 
        });
        number = 0;
    }

}

function OnClickButtonAddVideo(el){
     if (numbervideo == 0) {
        var newvideo = document.createElement("video");
        newvideo.src = "../video/Original Vietnam-Era M60 at the Range.mp4";
        var targetElement = document.getElementById("video_target"); 
        newvideo.autoplay = true;
        targetElement.appendChild(newvideo);
        numbervideo = number +1;
    }

    else if (numbervideo == 1) {
        var secondVidoe = document.createElement("video");
        secondVidoe.src = "../video/Shooting a Suppressed Sten Gun.mp4";
        var targetElement = document.getElementById("video_target"); 
        secondVidoe.autoplay = true;
        targetElement.appendChild(secondVidoe);
        numbervideo = numbervideo +1;
    }

    else
    {
        var targetElement = document.getElementById("video_target");
        var allvideo = targetElement.querySelectorAll('ul > video');
        allvideo.forEach(function (video){
            video.remove(); 
        });
        numbervideo = 0;
    }

}
