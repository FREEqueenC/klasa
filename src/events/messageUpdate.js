const { Event } = require('klasa');

module.exports = class extends Event {

	async run(old, msg) {
		if (this.client.ready && old.content !== msg.content) this.client.monitors.run(msg);
	}

};
