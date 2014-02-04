
$(function(){

	$('.inputs input').blur(function()
	{
	      if( $('.category-required').val().length > 0 && $('.action-required').val().length > 0 ) {
	            $('.warning').removeClass('warning').addClass('success');
	      }
	});

});  // Ready

function TodoCtrl($scope) {
  $scope.todos = [
    {text:''}];
 
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText});
    $scope.todoText = '';
  };
 
}