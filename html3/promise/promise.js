document.getElementById("id_logic_version").innerHTML = "2019.11.22.0";
document.getElementById("id_button").addEventListener("click", start);

function f_uab(resolve, reject)
{
	// facem calcule
	//resolve(":)");
	
	reject(":(");
}

function on_ok_uab(e)
{
	alert("Success" + e);
}

function on_fail_uab(e)
{
	alert("Failure" + e);
}

function start()
{
	alert("start");
	var promisiune = new Promise(f_uab);
	
	promisiune.then(on_ok_uab).catch(on_fail_uab);
	alert("end");
}