
var image =document.getElementsByClassName(".img1");
      
    image.addEventListener("mouseover",function(){
        image.style.transform = 'scale(1.2)';
        image.style.transition = 'transform 0.3s ease-in-out';
     });
     image.addEventListener("mouseout",function(){
        image.style.transform = 'scale(1)';
        image.style.transition = 'transform 0.3s ease-in-out';
    });

