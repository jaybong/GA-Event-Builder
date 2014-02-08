
$(function(){

  // ** Form Validation =====================================
// ====================================================

<<<<<<< HEAD

	$('body').on('input', '.inputs input', function(){
=======
	$('body').on('keydown', '.inputs input', function()
	{
>>>>>>> fe35caea9636d3b03ef6cad14ef2a90c7389736e

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

        }else{

           Repeater.find('.alert-box').removeClass('success').addClass('warning');

        }
	});

// ** Float Label =====================================
// ====================================================

 var onClass = "on";
  var showClass = "show";
  
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


// ** Google Docs Inline ==============================
// ====================================================
$('#offical-docs-link').click(function(){
	$('#official-docs').slideToggle("fast");
	$('#offical-docs-link').toggleClass('offical-docs-close');
	if (window.innerWidth > 1024) {
	$('#header').toggleClass('fixed');
	$('body').toggleClass("bg");
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