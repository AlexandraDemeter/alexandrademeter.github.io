var ruleaza = false;

onmessage = function(e){
	if (e.data == "start"){
		ruleaza = true;
	}
	else
		if (e.data == "stop"){
			ruleaza = false;
		}
}

function este_prim(n)
{
	for (var i = 2; i * i <= n; i++)
		if (n % i == 0)
			return true;
	return false;	
}

function start_calcul(start_numar)
{
	if (ruleaza == false)
		;
	else{
		for (var i = start_numar; i < start_numar + 100; i++)
			if (este_prim(i))
				postMessage(i);
		start_numar += 100;	
	}
	if (start_numar < 1E12){
		setTimeout(start_calcul, 1, start_numar);
	}
	else{
		postMessage("gata");
	}
}	

start_calcul(1E11);