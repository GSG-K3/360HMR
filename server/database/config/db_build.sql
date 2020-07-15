BEGIN;
  DROP TABLE IF EXISTS employees,questions,employees_questions,forms,employee_form,form_questions
  CASCADE;



CREATE TABLE employees
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR  ,
  image bytea,
  date date,
  position VARCHAR(50),
  role VARCHAR
);

CREATE TABLE questions
(
  id SERIAL PRIMARY KEY,
  type VARCHAR NOT NULL,
  context TEXT
);


CREATE TABLE employees_questions
(
  question_id INT,
  FOREIGN KEY (question_id)  REFERENCES questions(id),

  employee_id INT,
  FOREIGN KEY (employee_id)  REFERENCES employees(id),
  answer TEXT

);

CREATE TABLE forms
(
  id SERIAL PRIMARY KEY,
  reviewer_name VARCHAR
);


CREATE TABLE employee_form
(
  employee_id INT,
  FOREIGN KEY (employee_id)  REFERENCES employees(id),

  form_id INT,
  FOREIGN KEY (form_id)  REFERENCES forms(id),
  time date

);


CREATE TABLE form_questions
(
  form_id INT,
  FOREIGN KEY (form_id) REFERENCES forms(id),
  question_id INT,
  FOREIGN KEY(question_id) REFERENCES questions(id)
);


COMMIT;