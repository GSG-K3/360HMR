Call the history with http://localhost:3000/dashboard/history endpoint.

on this page you can see a list of employees that have been reviewed before

using a query named getEmployees to get the names,id and image from database

use axios.get('/api/employees') to get the result to the front end

LoaderProgress is used when the page take a time to load the result a loading
sign will show that the result is not ready yet and when it's ready the loading
will disapper and the page will view the result

Does this Fix an Issue? Fixes #41

How to test this PR npm i

cd client && npm i

cd..

npm run dev

go to http://localhost:3000/dashboard/history endpoint

Screenshots of changes if the database is empty you will only see a page loading
