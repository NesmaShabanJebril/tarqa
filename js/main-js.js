                $(".navbar-toggler").click(function(){
    $(".sidbar").toggleClass("open-sidbar");

});

             $(".close-sidbar").click(function(){
    $(".sidbar").toggleClass("open-sidbar");

});
          $(".close-country").click(function(){
 $(".country").addClass("display-none");
});     
$(".menu").click(function(){
       $(this).addClass("border-menu"); 
                  $(".rate").removeClass("border-menu");
                  $(".info").removeClass("border-menu");
                
    $(".menu1").addClass("display-block");
 $(".rate1").removeClass("display-block");
                 $(".info1").removeClass("display-block");
});
       $(".rate").click(function(){
            $(".menu").removeClass("border-menu"); 
             $(this).addClass("border-menu");
                  $(".info").removeClass("border-menu");
           
    $(".menu1").addClass("display-none");
            $(".menu1").removeClass("display-block");
 $(".rate1").addClass("display-block");
                 $(".info1").removeClass("display-block");
});
       $(".info").click(function(){
             $(".menu").removeClass("border-menu"); 
             $(this).addClass("border-menu");
                  $(".rate").removeClass("border-menu");
           
            $(this).addClass("border-menu"); 
    $(".menu1").addClass("display-none");
            $(".menu1").removeClass("display-block");
 $(".rate1").removeClass("display-block");
                 $(".info1").addClass("display-block");
});
 
// ============================================================================
// btn-plus and btn-minus in "#order-detail-content" table
// ============================================================================

  $('.btn-plus').on('click', function () {
    var $count = $(this).parent().find('.count');
    var val = parseInt($count.val(),10);
    $count.val(val+1);
    return false;
  });

  $('.btn-minus').on('click', function () {
    var $count = $(this).parent().find('.count');
    var val = parseInt($count.val(),10);
    if(val > 0) $count.val(val-1);
    return false;
  });



