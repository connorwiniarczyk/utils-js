module.exports = function(event_listener){
	event_listener.prototype.next = function(event){
		return new Promise(function(resolve, reject){
			event_listener.once(event, args => resolve(args))
		})
	}
}