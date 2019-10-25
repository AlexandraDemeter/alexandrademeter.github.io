window.addEventListener("deviceorientation", on_rotate_uab);

function on_rotate_uab(e)
{
	document.getElementById("id_alpha").innerHTML = e.alpha;
	document.getElementById("id_beta").innerHTML = e.beta;
	document.getElementById("id_gamma").innerHTML = e.gamma;
}