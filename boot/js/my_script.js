$("document").ready(function(){
	$("#name").val("Maxwell Ebobo");
		$("#age").val(25);
		$("#add").val("Abdullahi mai kano way, Dutse Jigawa state");
	$("#edit").click(function(){
	
		$("input").prop("disabled",false).css({
		"background-color":"white",
		"color":"black",
		"border-radius":"0px"
		
	});
		$("#add").prop("disabled",false);
		$(this).hide();
		$("#save").show();
	});
	$("#save").click(function(){
	
	var name=$("#name").val();
	var age=$("#age").val();
	var add=$("#add").val();

		$("#name").val(name);
		$("#age").val(age);
		$("#add").val(add);
		$("input").css({
		"background-color":"black",
		"color":"white",
		"border-radius":"10px"
		
	});
		
		$("input").prop("disabled",true);
		$("#add").prop("disabled",true);
		$(this).hide();
		$("#edit").show();
	});
	$("#tog").click(function(){
		
		$("#prac").slideToggle(1000);
		
		$("#slider").animate({
			
			borderRadius:'40px',
			opacity:'0.9'
		},1000,function(){
			alert("A callback function is called");
		});


	});
	$("#sname").blur(function(){
		var name=$(this).val();
		$("#info").prepend(name);
	
	});
	$("#faculty").change(function(){
		if($(this).val()=="Sciences"){
			$(this).before("<select id='department'>\
			<option>--select department--</option>\
			<option>Chemistry</option><option>Biology</option>\
			<option>Computer Science</option></select>"
			);
			

		}
	});
	$("#del").click(function(){
		
		$("#slider").toggleClass("important");
	});
	$("input").css({
		"background-color":"black",
		"color":"white",
		"border-radius":"10px"
		
	});
	
	$("#slider").fadeIn(5000);
	$("#slider").fadeOut(5000);
});
                                                     