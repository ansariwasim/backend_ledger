//  Run server
import 'dotenv/config'
import app from './src/app.js'
import connect from './src/config/db.js'
connect()


app.listen(3000, ()=>{
    console.log(`Server is running on port: 3000`)
})