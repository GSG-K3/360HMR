const app = require('./app');

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => console.log('Hey I am running!'));
