'use strict'

const _ = require('lodash')
const Faker = require('Faker')
const P = require('bluebird')

// Although we tend to despise OOP, most real world implementations of something like a log source
// will still be in OO form, so we'll simulate that same real world interaction for now.

module.exports = class LogSource {
	constructor() {
		this.drained = false
		this.last = {
			date: new Date(Date.now() - (1000 * 60 * 60 * 24 * _.random(40, 60))),
			msg: Faker.Company.catchPhrase()
		}
	}
	// LogSource class creates a LogSource object that has whether the log source
	// is drained or not (out of entries), and what is the last entry of the source
	// entry's date value is a Date object, current time minus some random amount 
	// of seconds

	getNextPseudoRandomEntry() {
		return {
			date: new Date(this.last.date.getTime() + (1000 * 60 * 60 * _.random(10)) + _.random(1000* 60)),
			msg: Faker.Company.catchPhrase()
		}
	}
	// creates an entry object with a random date, which grabs the LogSource object's 
	// last entry date in milliseconds, adds some random amount of miliseconds,
	// sets that as the Date object of new entry
	// sets msg using Faker library to set a random string message

	pop() {
		this.last = this.getNextPseudoRandomEntry()
		if (this.last.date > new Date()) {
			this.drained = true
		}
		return this.drained ? false : this.last
	}
	// returns the LogSource's last entry if drained is set as false
	// drained is set as false if the date of the last entry is larger
	// than the current date (in the future, cannot log the future)

	popAsync() {
		this.last = this.getNextPseudoRandomEntry()
		if (this.last.date > Date.now()) {
			this.drained = true
		}
		return P.delay(_.random(8)).then(() => this.drained ? false : this.last)
	}
	// does the same thing as pop() but at a delay (random amount of time)
}