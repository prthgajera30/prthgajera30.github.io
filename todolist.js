$(".fa-plus").click(function() {
	$(".toDoInput").fadeToggle();
});

$(".toDoInput").keypress(function(e){
	if (e.which == 13)
	{
		var toDoInput = $(this).val();
		if(!toDoInput)
		{
			return
		}
		else if (toDoInput.length <	 29) {
			$("ul").append("<li><span class='task'><i class='fa fa-trash'></i></span> "+toDoInput+"</li>");
		$(this).val("");
		}
		else{
			alert("Maximum Character reached( 29 char )");
			return
		}
	}
});
$(".fa-pencil").click(function() {
	var title = prompt("Enter To Do List Title","To Do List");
	if (!title)
	{
		return
	}
	else if (title.length <= 10) {
		$("#headerName").text(title);
	}
	else{
			alert("Maximum Character reached( 10 char )");
			return
		}

});
$("ul").on("click", "span", function(e) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("ul").on("click", "li", function() {
	$(this).toggleClass("finished");	
});

$(".fa-question").click(function() {
	alert("coming soon...!");
});