const express = require('express')
const app = express()
const http = require('http')
const bodyParser = require('body-parser')
const path = require('path')

module.exports = class Application {
	constructor() {
		this.setupExpress()
		this.setConfig()
	}
	
	setupExpress() {
		const server = http.createServer(app)
		server.listen(8001, () => console.log('Server running on port 8001'))
	}
	
	setConfig() {
		app.use(express.static('public'))
		app.set('view engine', 'ejs')
		app.set('views', path.resolve('./resources/views'))
		
		app.use(bodyParser.json())
		app.use(bodyParser.urlencoded({ extended: true }))
	}
}