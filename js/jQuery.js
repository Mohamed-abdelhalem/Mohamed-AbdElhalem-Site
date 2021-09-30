$(document).ready(function()
{

 // for Navigation in Mobile phone
  $('.mobile-nav-toggle').click(function() {
    $(this).toggleClass("click");
    $('#header').fadeToggle();
  })

  function openFunction()
  {
    document.getElementById('header').style.left = "0px";
  }

// end Navigation in Mobile phone
  $('.mo').click(function()
    {
     $('.jj').fadeToggle();
    });

var scrolltop = $("#scrollTop a");
$(window).scroll(function()
      {

         $(this).scrollTop() >= 200 ? scrolltop.show(1000) : scrolltop.hide(1000);

          scrolltop.click(function()
          {
               $("html , body").animate({ scrolltoTop : 0} , 700);
          });
      });

      var scrolldown = $("#scrolldown a");
      $(window).scroll(function()
            {

               $(this).scrollTop() >= 10 ? scrolldown.hide(1000) : scrolldown.show(1000);

            });


});
 // loading
 $(window).on('load' ,function()
 {

 $(".load .load-container").fadeOut(5000 ,
       function()
     {
       $(this).parent().fadeOut(300 ,
          function()
                    {
                         $("body").css("overflow" , "auto");
                    });
     });

 });

 function openFunction()
 {
   document.getElementById('header').style.left = "0px";
 }
