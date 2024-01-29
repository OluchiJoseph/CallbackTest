const url = require('url')
const route ="http://localhost:5000/addNewUsers?username=Thelma&age=15"
console.log(route)
let ul = url.parse(route, true);
console.log(ul.hostname)
console.log(ul.pathname)
console.log(ul.search)
//console.log(ul.query)
params = ul.query
console.log(params.username)
console.log(params.age)
