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
			sendrequest(username, password);
		}
	});
});

function sendrequest(username, password)
{
	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function()
	{
		if(xmlhttp.status == 200 && xmlhttp.readyState == 4)
		{    
			var words = xmlhttp.responseText.split(' ');
			validate(username, password, words);
		}
	}
	
	xmlhttp.open("GET", "data.txt", true);
	xmlhttp.send();
}

function validate(username, password, data)
{
	for (var i in data)
		alert(data[i]);
}