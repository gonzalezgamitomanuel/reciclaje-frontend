const express = require('express')
const app = express()
app.use(express.static('./dist/frontend'));
app.get('/*', function(req, res) {
 res.sendFile('index.html', {root: 'dist/frontend/'}
 );
});
const port = 4200;
app.listen(process.env.PORT || 4200), () => {
 console.log(`Example app listening at http://localhost:${port}`)
}