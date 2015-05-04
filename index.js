$(document).ready(function()
{
	$("#login").click(function()
	{
		var username = $("#username").val();
		var password = $("#password").val();
		
		// Check for blank fields
		if( username == '' || password == '')
		{
			$('input[type="text"],input[type="password"]').css("border", "2px solid red");
			$('input[type="text"],input[type="password"]').css("box-shadow", "0 0 2px red");
		}
		else 
		{
			validate(username, password);
		}
	});
});

function validate(username, password)
{
	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function()
	{
		if(xmlhttp.status == 200 && xmlhttp.readyState == 4)
		{    
			var words = xmlhttp.responseText.split(' ');
			alert(words[0]);
		}
	}
	
	xmlhttp.open("GET", "data.txt", true);
	xmlhttp.send();
}