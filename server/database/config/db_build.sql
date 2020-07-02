BEGIN;
  DROP TABLE IF EXISTS employees,questions,employees_questions,forms,employee_form,form_questions
  CASCADE;



CREATE TABLE employees
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR  ,
  image TEXT,
  date date,
  position VARCHAR(50),
  role VARCHAR
);

CREATE TABLE questions
(
  id SERIAL PRIMARY KEY,
  employee_id INT,
  FOREIGN KEY (employee_id)  REFERENCES employees(id),
  type VARCHAR NOT NULL,
  result_rate VARCHAR ,
  context TEXT
);


CREATE TABLE employees_questions
(
  employee_id INT,
  FOREIGN KEY (employee_id)  REFERENCES employees(id),

  question_id INT,
  FOREIGN KEY (question_id)  REFERENCES questions(id)
);

CREATE TABLE forms
(
  id SERIAL PRIMARY KEY,
  time date,
  employee_id INT,
  FOREIGN KEY(employee_id) REFERENCES employees(id)
);



CREATE TABLE employee_form
(
  employee_id INT,
  FOREIGN KEY (employee_id)  REFERENCES employees(id),

  form_id INT,
  FOREIGN KEY (form_id)  REFERENCES forms(id)
);


CREATE TABLE form_questions
(
  form_id INT,
  question_id INT,
  FOREIGN KEY (form_id) REFERENCES forms(id),
  FOREIGN KEY(question_id) REFERENCES questions(id)
);


COMMIT;