class t_eq2_controller{
	view;
	model;
	constructor(view, model)
	{
		this.view = view;
		this.model = model;
		
		var events_list = new t_events(); // cream o lista de functii
		events_list.add_event_uab("on_solve_clicked_uab", this.on_solve.bind(this));// adaugam la lista pe on_solve
		this.view.set_events(events_list); // trimitem la view lista de functii
	}
	
	on_solve()
	{
		var a = this.view.get_a();
		var b = this.view.get_b();
		var c = this.view.get_c();
		
		
		
		this.model.set_coefficients(a, b, c);
		this.model.solve();
		var solutions = this.model.get_solutions();
		
		this.view.set_solutions(solutions.x1_re, solutions.x1_im, solutions.x2_re, solutions.x2_im);
	}
}

const app = new t_eq2_controller(new t_eq2_view(), new t_eq2_model());