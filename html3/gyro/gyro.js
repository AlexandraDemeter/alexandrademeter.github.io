document.getElementById("id_logic_version").innerHTML = "Logic version = 2019.10.25.0";

window.addEventListener("deviceorientation", on_orientation_uab);
window.addEventListener("devicemotion", on_motion_uab);

function on_orientation_uab(e)
{
	document.getElementById("id_alpha").innerHTML = e.alpha;
	document.getElementById("id_beta").innerHTML = e.beta;
	document.getElementById("id_gamma").innerHTML = e.gamma;
}

function on_motion_uab(e)
{
	document.getElementById("id_acc_z").innerHTML = e.accelerationIncludingGravity.z;
    document.getElementById("id_acc_x").innerHTML = e.accelerationIncludingGravity.x;
    document.getElementById("id_acc_y").innerHTML = e.accelerationIncludingGravity.y;
}
