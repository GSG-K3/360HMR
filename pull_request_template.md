"What does this PR do?" 
This pull request created to get all form answers when
the manger select the employee from the list to show result.And this happend by
employee (id) joined with form (id) ,and questions (id) in the query.

"Does this Fix an Issue?" 
"Related #34"

"How to test this PR" 
1-You should be able to access database on heroku by
storing url in (config.env) file. 
2-Get the route that implement the query on database from index.js file.
3-Go to the browser and write the url as shown in router,but change the id to check more than one employee. 
4-The result will show as objects.

"Screenshots of changes" Its backend work, no FE done!.