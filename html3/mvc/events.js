class t_events{ //t_list_of_events_and_functions{
	events;
	
	constructor(){
		this.events = [];
	}
	
	add_event_uab(event_name, listener)
	{
		if (this.events.length == 0){
			this.events.push(event_name);
			this.events[event_name] = [];
		}
		else
			if (this.events.indexOf[event_name] == -1){ // nu este in lista
				this.events.push(event_name);
				this.events[event_name] = [];
			}
			
		this.events[event_name].push(listener);	
	}
	
	call_event_uab(event_name, params)
	{
		this.events[event_name].forEach(i => i(params));
	}
}