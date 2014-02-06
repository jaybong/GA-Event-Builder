
$(function(){

  // ** Form Validation =====================================
// ====================================================

	$('body').on('keydown', '.inputs input', function()
	{

        var ValidationSet = false;
        var Repeater = $(this).parents('.repeater');

        Repeater.find('.required').each(function () {

    	      if( $(this).val().length === 0 ) {

                  ValidationSet = false;
                  return false;

    	      }else{

                  ValidationSet = true;

            }

            console.log(ValidationSet);

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



$("#onclick").click( function() {

  var current = $(this);
  console.log(current);
    if ($(this).is(':checked')){
        $('.code').prepend('onlick="').append('"');
    }
    if ($(this).attr('unchecked')){
        $('.code').prepend('').append('');
    }
});




});  // Ready

 
// ** Angular =========================================
// ====================================================

function TodoCtrl($scope) {
  $scope.todos = [
    {text:''}];
 
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText});
    $scope.todoText = '';
  };
 
}