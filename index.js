require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app')

mongoose.connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log('Mongoose Connected')
    app.listen(PORT, () => console.log(`App Listening on http://localhost:${PORT}`))
});