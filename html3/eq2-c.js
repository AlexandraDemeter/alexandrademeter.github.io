document.getElementById("id_logic_version").innerHTML = "Logic version = 2019.10.11.2";
document.getElementById("id_solve").addEventListener("click", solve);

class t_eq2
{
	a;
	b;
	c;
	x1_re;
	x1_im;
	x2_re;
	x2_im;
	
	constructor()
	{
		this.a = 1;
		this.b = 2;
		this.c = 1;
		this.x1_re = 0;
		this.x1_im = 0;
		this.x2_re = 0;
		this.x2_im = 0;
	}
	
	read_coefficients()
	{
		this.a = document.getElementById("id_a").value;
		this.b = document.getElementById("id_b").value;
		this.c = document.getElementById("id_c").value;
	}

	compute_solutions()
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

	print_solutions()
	{
		document.getElementById("id_x1").innerHTML = this.x1_re + "+" + this.x1_im + "i";
		document.getElementById("id_x2").innerHTML = this.x2_re + "+" + this.x2_im + "i";
	}
}
//-------------------------------------
function solve()
{
	var eq2 = new t_eq2();
	
	eq2.read_coefficients();
	eq2.compute_solutions();
	eq2.print_solutions();
}