var helloWorld = function (argument) {
	return "hello world";
};
var clickTrigger = function (argument) {
	$(".fragment").click();
}
var myObj = {
	someFunction : function (argument) {
		$.get('some.html',function(data){
			return data;
		});
	}
};

$.fn.testPlugin = function () {
	return this.each(function(){
		var el = $(this);
		$.get('some.html',function(data){
			//el.append('<li>one</li><li>two</li>');
			el.append(data);
		});
	});	
}