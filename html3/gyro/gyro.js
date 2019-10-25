document.getElementById("id_logic_version").innerHTML = "Logic version = 2019.10.25.1";

window.addEventListener("deviceorientation", on_orientation_uab);
window.addEventListener("devicemotion", on_motion_uab);

function on_orientation_uab(e)
{
	document.getElementById("id_alpha").innerHTML = Math.round(e.alpha * 100) / 100;
	document.getElementById("id_beta").innerHTML = Math.round(e.beta * 100) / 100;
	document.getElementById("id_gamma").innerHTML = Math.round(e.gamma * 100) / 100;
}

function on_motion_uab(e)
{
    var acc = e.accelerationIncludingGravity;
	document.getElementById("id_acc_z").innerHTML = Math.round(acc.z * 100) / 100;
    document.getElementById("id_acc_x").innerHTML = Math.round(acc.x * 100) / 100;
    document.getElementById("id_acc_y").innerHTML = Math.round(acc.y * 100) / 100;
    
    document.getElementById("id_beta_acc").innerHTML = Math.round(Math.atan(acc.x / acc.z) / Math.PI * 180 * 100) / 100;
    document.getElementById("id_gamma_acc").innerHTML = Math.round(Math.atan(acc.y / acc.z) / Math.PI * 180 * 100) / 100;
}
