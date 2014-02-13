
$(function(){

  // ** Form Validation =====================================
// ====================================================


	$('body').on('input', '.inputs input', function(){

        var ValidationSet = false;
        var Repeater = $(this).parents('.repeater');

        Repeater.find('.required').each(function () {

    	      if( $(this).val().length === 0 ) {

                  ValidationSet = false;
                  return false;

    	      }else{

                  ValidationSet = true;

            }


        });



        if(ValidationSet === true){

          Repeater.find('.alert-box').removeClass('warning').addClass('success');
          Repeater.find('.fi-check').removeClass('icon-off').addClass('icon-on');
        }else{

           Repeater.find('.alert-box').removeClass('success').addClass('warning');
           Repeater.find('.fi-check').removeClass('icon-on').addClass('icon-off');

        }
	});

// ** Float Label =====================================
// ====================================================

 var onClass = "on";
  var showClass = "show";

  function BindFloatLabels(){

      $("input").bind("checkval",function(){
        var label = $(this).prev("label");
        if(this.value !== ""){
          label.addClass(showClass);
        } else {
          label.removeClass(showClass);
        }
      }).on("keyup",function(){
        $(this).trigger("checkval");
      }).on("focus",function(){
        $(this).prev("label").addClass(onClass);
      }).on("blur",function(){
          $(this).prev("label").removeClass(onClass);
      }).trigger("checkval");



  }



  $('body').on('click', '.plus', function(){

  setTimeout(function(){
    
        BindFloatLabels();


      },0);

  });

  BindFloatLabels();



// ** Google Docs Inline ==============================
// ====================================================

$('#offical-docs-link').click(function(){
    $.get( "docs.html", function( data ) {
  $( "#docs-insert" ).html( data );
  });
  $('#docs-insert').fadeToggle();
  $('#offical-docs-link').toggleClass('fi-x');  
  $('#doc-icon').toggleClass('fi-page-doc');
 // $('body').toggleClass("bg");

});



// $('.copy-btn').zclip({
// path:'flash/ZeroClipboard.swf',
// copy:function()
//   {
//     return $('.ng-binding').val();
//   }
// });




// $('.copy-btn').zclip({
// path:'flash/ZeroClipboard.swf',
// copy:$('.ng-binding').text()
// });

// Reduce menu on scroll
var top = 0;
      $(window).scroll(function(event){

          var current = $(this).scrollTop();

        // If we're not at the top, make the menu smaller
          if (current > top){
             $('#logo').hide();
             $('#header h6').css({"margin-top": "10px"});
          }
          else {
             $('#logo').show();
             $('#header h6').css({"margin-top": "50px"});
          }
      });


});  // Ready

 
// ** Angular =========================================
// ====================================================

function GATrackingCtrl($scope) {
  $scope.TrackingCodes = [
    {text:''}
  ];

  $scope.AddOnClick = false;
 
  $scope.AddTrackingCode= function() {
    $scope.TrackingCodes.push({text:$scope.TrackingCodeText});
    $scope.TrackingCodeText = '';
  };


  /* Update Checkbox Function */
  $scope.ChangeCheckBox = function(){

    if($scope.AddOnClick == false){

        $scope.AddOnClick = true;

    }else{

        $scope.AddOnClick = false;

    }

  }

}