var i = 1;
var str = "";
$(document).ready(function(){
	//first question
	$("#small").click(function(){
		str = "You want to attend a small school,<br>";
		//switching question(sp)
		$("#q"+i).fadeOut("fast");
		i+=1;
		$("#q"+i).fadeIn("fast");
	})
	$("#medium").click(function(){
		str = "You want to attend a medium sized school,<br>";
		//sq
		$("#q"+i).fadeOut("fast");
		i+=1;
		$("#q"+i).fadeIn("fast");
	})
	$("#large").click(function(){
		str = "You want to attend a large school,<br>";
		//sq
		$("#q"+i).fadeOut("fast");
		i+=1;
		$("#q"+i).fadeIn("fast");
	})
	
	//second question
	$("#uc").click(function(){
		str += "that is a university,<br>"
		//sq
		$("#q"+i).fadeOut("fast");
		i+=1;
		$("#q"+i).fadeIn("fast");
	})
	$("#cc").click(function(){
		str += " that is a community college,<br>"
		//sq
		$("#q"+i).fadeOut("fast");
		i+=1;
		$("#q"+i).fadeIn("fast");
	})
	$("#pc").click(function(){
		str += " that is a private university,<br>"
		//sq
		$("#q"+i).fadeOut("fast");
		i+=1;
		$("#q"+i).fadeIn("fast");
	})
	
	//thrird question transition cuz answer doesn't really matter
	$("#are").click(function(){
		$("#q"+i).fadeOut("fast");
		i+=1;
		$("#q"+i).fadeIn("fast");
	})
	$("#not").click(function(){
		$("#q"+i).fadeOut("fast");
		i+=1;
		$("#q"+i).fadeIn("fast");
	})
	
	//fourth question
	$("#Christian").click(function(){
		str += "and is affiliated with Christianity."
		$("#type").append(str);
		//sq
		$("#q"+i).fadeOut("fast");
		i+=1;
		$("#q"+i).fadeIn("fast");
		$("#rev").fadeIn("fast");
	})
	$("#Atheist").click(function(){
		str += "and is not affiliated with any religion or it doesn't matter."
		$("#type").append(str);
		//sq
		$("#q"+i).fadeOut("fast");
		i+=1;
		$("#q"+i).fadeIn("fast");
		$("#rev").fadeIn("fast");
	})
	$("#NotListed").click(function(){
		str += "and is religiously affiliated."
		$("#type").append(str);
		//sq
		$("#q"+i).fadeOut("fast");
		i+=1;
		$("#q"+i).fadeIn("fast");
		$("#rev").fadeIn("fast");
	})

	//function that determines what school will be shown based on compilled string.
	$("#rev").click(function(){
		if(str.indexOf("private")>-1){
			$("#rec").fadeIn("fast");
		}
		else if(str.indexOf("community college")>-1){
			$("#rec2").fadeIn("fast");
		}else if(str.indexOf("university")>-1){
			$("#rec3").fadeIn("fast");
		}
	})
});

