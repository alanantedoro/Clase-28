import { Router } from 'express'

const infoRouter = new Router()

infoRouter.get('/info', (req, res) => {
    const info = {
        argv: process.argv.slice(2),
        platform: process.platform,
        version: process.version,
        memory: process.memoryUsage().rss,
        executable: process.execPath,
        pid: process.pid,
        path: process.cwd()
    }
    res.render( 'pages/info', { info } );
});



export default infoRouter