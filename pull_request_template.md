### What does this PR do?

- Call the history details Page with http://localhost:3000/dashboard/history/:id
  endpoint.

on this page you can see a list of employees who reviewed the employee id above

using a query named getEmpById to get the reviewer name from database

use axios.get(/api/history/\${id}') you get the id from using useParams() to get
the result to the front end

LoaderProgress is used when the page take a time to load the result a loading
sign will show that the result is not ready yet and when it's ready the loading
will disapper and the page will view the result

### Does this Fix an Issue?

Fixes #64

### How to test this PR

- npm i

- cd client && npm i

- cd..

- npm run dev
- go to http://localhost:3000/dashboard/history/:id endpoint

### Screenshots of changes

https://ibb.co/m9nSqtc
