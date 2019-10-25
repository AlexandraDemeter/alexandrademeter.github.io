document.getElementById("id_logic_version").innerHTML = "Logic version = 2019.10.11.1";
document.getElementById("id_solve").addEventListener("click", solve);

function t_eq2()
{

	this.read_coefficients = function()
	{
		this.a = document.getElementById("id_a").value;
		this.b = document.getElementById("id_b").value;
		this.c = document.getElementById("id_c").value;
	}

	this.compute_solutions = function()
	{
		var delta = this.b * this.b - 4 * this.a * this.c;
		
		if (delta >= 0){
			this.x1_re = (-this.b - Math.sqrt(delta)) / (2 * this.a);
			this.x2_re = (-this.b + Math.sqrt(delta)) / (2 * this.a);
			this.x1_im = 0;
			this.x2_im = 0;
		}
		else{
			this.x1_re = -this.b / (2 * this.a);
			this.x2_re = -this.b / (2 * this.a);
			this.x1_im = (- Math.sqrt(-delta)) / (2 * this.a);
			this.x2_im = (+ Math.sqrt(-delta)) / (2 * this.a);
		}
	}

	this.print_solutions = function()
	{
		document.getElementById("id_x1").innerHTML = this.x1_re + "+" + this.x1_im + "i";
		document.getElementById("id_x2").innerHTML = this.x2_re + "+" + this.x2_im + "i";
	}
}
function solve()
{
	var eq2 = new t_eq2();
	
	eq2.read_coefficients();
	eq2.compute_solutions();
	eq2.print_solutions();
}