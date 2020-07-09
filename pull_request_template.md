"What does this PR do?" This pull request created to get all form answers when
the manger select the employee from the list to show result.And this happend by
employee (id) joined with form (id) ,and questions (id) in the query.

"Does this Fix an Issue?"
 "Related #34"

"How to test this PR"
1-You should be able to access database on heroku by url.
2-When you can access to database by url, implement db_build.sql by db_build.js
to create all tables with it's relations. 
3-Implement dummyData.sql by
db_build.js. 
4-Go to check the tables data from terminal by make some basics
query. 
5-Make getForm.js consist of function that implement join query between
form,question,employee in queries file. 
6-Make route in index.js in controller
as "(router.get('/api/forminfo/:employeeID', getForms);)". 
7-Go to the browser
and write the url as shown in router, but change the id to check more than one
employee. 8-The result will show as objects.

"Screenshots of changes" 
Its backend work, no FE done!
