
$(function(){

	$('.inputs input').blur(function()
	{
	      if( $('.category-required').val().length > 0 && $('.action-required').val().length > 0 ) {
	            $('.warning').removeClass('warning').addClass('success');
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

function TodoCtrl($scope) {
  $scope.todos = [
    {text:''}];
 
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText});
    $scope.todoText = '';
  };
 
}