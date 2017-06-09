const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const next = require('next')
const OpenApi = require('./service/openapi')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const openapi = new OpenApi()
const handle = app.getRequestHandler()

// Gotta Catch 'Em All
process.addListener('uncaughtException', function (err, stack) {
    console.log('Caught exception: ' + err + '\n' + err.stack);
    console.log('\u0007'); // Terminal bell
})

app.prepare()
    .then(() => {
        const server = express()
        server.set('trust proxy', true)
        server.use(cors())
        server.use(bodyParser.urlencoded({ extended: false }))
        server.use(bodyParser.json())
        server.use(cookieSession({
            name: 'session',
            keys: ['impl'],
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        }))


        server.use('/', require('./routes/counter'))

        // status
        server.get('/status', (req, res) => {
            // pass data
            let query = {
                name: 'data',
                params: {
                    path: '/status',
                    counter: req.counter
                }
            }
            return app.render(req, res, '/status', query)
        })

        server.get('*', (req, res) => {
            openapi.get().then(data => {                                
                req.next_data = data
                return handle(req, res)
            }).catch(err => {                
                return handle(req, res)
            })            
        })

        server.listen(3000, (err) => {
            if (err) throw err
            const host = 'locahost'
            const port = 3000
            console.log('> Ready on http://%s:%s', host, port)
        })
    })