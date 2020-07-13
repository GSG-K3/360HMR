### What does this PR do?

- Call the Create Form Page with http://localhost:3000/dashboard/form endpoint.

* On the create form page the manager will be able to click the default
  questions where listed on the page.

- Bring the default questions from the database through query called
  getquestionsQuery showing the loading or error if there something bad happens
  through the request.

* Adding the new question which the manager has to type it down on the text
  field and picking the type of question through the Add button.

- The new question will be added into the database through the
  insertQuestionsQuery.

* The new question will be displayed also with the listed default questions.

- If the manager didn't type the question or pick the type. The alert error will
  be displayed.

* Submit button will display a dialog component for confirming the submitting
  the form questions ( still not all the functionality of the buttons are
  working waiting for the final design).

### Does this Fix an Issue?

Fixes #37

### How to test this PR

- npm i <<<<<<< HEAD

- cd client && npm i

- cd..

- npm run dev
- go to http://localhost:3000/dashboard/form endpoint

### Screenshots of changes

![Create Form Page](https://ibb.co/qJmrnkQ)

# ![Confrim Dialog](https://ibb.co/RYbt3qK)

- cd client && npm i
- create .env file put the variable names which you will find them on the Hiroku
- cd.. && npm run dev

### Screenshots of changes

> > > > > > > 5f4194020236b2b545416730e27779f2f4e2171d
