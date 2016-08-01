$(document).ready(function(){
  $('.projects .photo, .projects .description').hover(
    function(){
    $('.verticalLine, .mainRow').css('border-color','#E26A6A');
   
    
      },
    function(){
     $('.verticalLine, .mainRow').css('border-color','white');
    
     
  }
  );
  $('.team .photo, .team .description').hover(
    function(){
    $('.verticalLine, .mainRow').css('border-color','#1ABC9C');
   
    
      },
    function(){
     $('.verticalLine, .mainRow').css('border-color','white');
    
     
  }
  );
  $('.contacts .photo, .contacts .description').hover(
    function(){
    $('.verticalLine, .mainRow').css('border-color','#2980D9');
   
    
      },
    function(){
     $('.verticalLine, .mainRow').css('border-color','white');
    
     
  }
  );

  

});

