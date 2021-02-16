$(document).ready(function(){
var $carrousel = $('#carrousel'), 
    $img = $('#carrousel img'),
    $points = $('.carre') ,
    indexImg = $img.length - 1, 
    i = 0, 
    $currentImg = $img.eq(i); 
    $currentPoint = $points.eq(i);

    $img.css('display','none'); 
    $currentImg.css('display','block');
    $currentPoint.css('background','blue');


    $('.next').click(function(){
    $('.carre').css('background','white');

    i++; 

    if( i <= indexImg ){
        $img.css('display','none'); 
        $currentImg = $img.eq(i); 
        $currentPoint = $points.eq(i);
        $currentImg.css('display', 'block');
        $currentPoint.css('background','blue');
    }
    else{
        i = indexImg;   
    }

});

$('.prev').click(function(){ 
$('.carre').css('background','white');

    i--; 
    if( i >= 0 ){
        $img.css('display','none');
        $currentImg = $img.eq(i);
        $currentPoint = $points.eq(i);
        $currentImg.css('display','block');
        $currentPoint.css('background','blue');
    }
    else{
        i = 0;
    }


});
function slideImg(){
    setTimeout(function(){ 
            
        if(i < indexImg){ 
      i++; 
  }
  else{ 
      i = 0;
  }

  $img.css('display', 'none');
  $('.carre').css('blackground','white');

  $currentImg = $img.eq(i);
  $currentPoint = $points.eq(i);
  $currentImg.css('display', 'block');
  $currentPoint.css('background','blue');

  slideImg(); 

    }, 4000); 
  }

slideImg();
});





