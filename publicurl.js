const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

app.listen(process.env.PORT || 3000, () => console.log('Gator app listening on port 3000!'));