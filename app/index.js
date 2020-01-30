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
		server.listen(8000, () => console.log('Server running on port 8000'))
	}
	
	setConfig() {
		app.use(express.static('public'))
		app.set('view engine', 'ejs')
		app.set('views', path.resolve('./resources/views'))
		
		app.use(bodyParser.json())
		app.use(bodyParser.urlencoded({ extended: true }))
		
		app.get('/', (req, res) => {
			res.json({
				status: 'OK',
				data: 'Hello World!'
			})
		})
	}
}