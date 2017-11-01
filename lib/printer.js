'use strict'

const _ = require('lodash')
// JS library to help programmers write more concise and easier to maintain JS
// from Wikipedia
// idea originates from Underscore.js

module.exports = class Printer {
	constructor() {
		this.last = new Date(0)
		this.logsPrinted = 0
	}

	print(log) {
		if (!_.isDate(log.date)) {
			throw new Error(log.date + " is not a date")
		}
		// _.isDate checks if log.date is a Date object
		// returns a boolean true or false
		// so if not a Date object, throw an new Error
		if (log.date >= this.last) {
			console.log(log.date, log.msg)
			// if current log's date is larger than printer's last log's date
			// console log the current log's date and msg
		} else {
			throw new Error(log.date + " is not greater than " + this.last)
			// else throw an Error saying that sorting algorthm is not
			// sorting log entries in chronological order (oldest to newer)
		}
		this.last = log.date
		// replace printer's last date with current log's date
		this.logsPrinted++
		// increment the number of logsPrinted
		if (this.logsPrinted === 1) {
			this.startTime = new Date()
		}
		// if the printer has only printed 1 log entry
		// set a new instance value startTime (of printing) to the current time
	}

	done() {
		var timeTaken = (new Date() - this.startTime) / 1000
		console.log("\n***********************************")
		console.log("Logs printed:\t\t", this.logsPrinted)
		console.log("Time taken (s):\t\t", timeTaken)
		console.log("Logs/s:\t\t\t", this.logsPrinted / timeTaken)
		console.log("***********************************\n")
	}
	// after done printing, run how much time the log printing process took
}