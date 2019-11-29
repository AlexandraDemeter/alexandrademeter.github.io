document.getElementById("id_logic_version").innerHTML = "Logic version = 2019.10.25.4";

window.addEventListener("deviceorientation", on_orientation_uab);
window.addEventListener("devicemotion", on_motion_uab);

function desenare(beta, gamma)
{
	var canvas = document.getElementById("id_canvas");
	var context = canvas.getContext("2d");
	
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	var r = 10;
	
	context.beginPath();
	var x = canvas.width / 2 + beta / 90 * (canvas.width / 2 - r);
	var y = canvas.height / 2 + gamma / 90 * (canvas.height / 2 - r);
	context.arc(x, y, r, 0, 2 * Math.PI);
	context.stroke();
}

function on_orientation_uab(e)
{
	document.getElementById("id_alpha").innerHTML = Math.round(e.alpha * 100)/100;
	document.getElementById("id_beta").innerHTML = Math.round(e.beta * 100)/100;
	document.getElementById("id_gamma").innerHTML = Math.round(e.gamma * 100)/100;
	
	desenare(e.beta, e.gamma);
}

function on_motion_uab(e)
{
	var acc = e.accelerationIncludingGravity;
	
	document.getElementById("id_acc_z").innerHTML = Math.round(acc.z * 100)/100;
	document.getElementById("id_acc_x").innerHTML = Math.round(acc.x * 100)/100;
	document.getElementById("id_acc_y").innerHTML = Math.round(acc.y * 100)/100;	
	
	var beta = -Math.atan(acc.y / acc.z) / Math.PI * 180;
	var gamma = Math.atan(acc.x / acc.z) / Math.PI * 180;
	
	document.getElementById("id_beta_acc").innerHTML = Math.round(beta * 100) / 100;
	
	document.getElementById("id_gamma_acc").innerHTML = Math.round(gamma * 100) / 100;
	
	desenare(beta, gamma);
}