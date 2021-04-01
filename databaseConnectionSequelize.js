const is_heroku = process.env.IS_HEROKU || false;
const dbConfigHeroku = "mysql://b5312bcbf4a979:e0e09774@us-cdbr-east-03.cleardb.com/heroku_1b8ce626cc5660b?reconnect=true";
const dbConfigLocal = "mysql://root:Password@localhost/lab_example";
if (is_heroku) {
var databaseConnectionString = dbConfigHeroku;
}
else {
var databaseConnectionString = dbConfigLocal;
}
module.exports = databaseConnectionString;