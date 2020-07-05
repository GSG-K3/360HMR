BEGIN;

  INSERT INTO employees
    (id,name ,email,image,date,position,role)
  VALUES
    ('1', 'yaqoot', '', '', 'programming', 'employee'),
    ('2', 'haneen', '', '', 'programming', 'manager'),
    ('3', 'hussein', '', '', 'programming', 'employee'),
    ('4', 'karmel', '', '', 'programming', 'employee'),
    ('5', 'ruba', '', '', 'programming', 'employee'),
    ('6', 'ishak', '', '', 'marketing', 'manager');

  INSERT INTO questions
    (id,employee_id,type,result_rate,context)
  VALUES
    ('1', '1', 'write', '', 'What are the pros and cons you see in this employee dealings with other employees?'),
    ('2', '1', 'write', '', 'By collaborating with this employee, describe how his dealt with a problem that occurred?'),
    ('3', '1', 'write', '', 'Do you think that this employee is interested in time management? And why?'),
    ('4', '1', 'write', '', 'Describe to me the method that this employee used to solve a specific problem?'),
    ('5', '1', 'write', '', 'Other notes about this employee?'),
    ('6', '1', 'rate', '4', 'How satisfied are you with this employee in terms of cooperation at work?'),
    ('7', '1', 'rate', '1', 'Do you think this employee is in the right place in this company?'),
    ('8', '1', 'rate', '5', 'How committed is this employee to the attendance estimate?'),
    ('9', '1', 'rate', '2', 'How satisfied are you with this employee ability to withstand work pressure?'),
    ('10', '1', 'rate', '3', 'How satisfied are you with this employee handling of company customers?'),

    ('1', '2', 'write', '', 'What are the pros and cons you see in this employee dealings with other employees?'),
    ('2', '2', 'write', '', 'By collaborating with this employee, describe how his dealt with a problem that occurred?'),
    ('3', '2', 'write', '', 'Do you think that this employee is interested in time management? And why?'),
    ('4', '2', 'write', '', 'Describe to me the method that this employee used to solve a specific problem?'),
    ('5', '2', 'write', '', 'Other notes about this employee?'),
    ('6', '2', 'rate', '4', 'How satisfied are you with this employee in terms of cooperation at work?'),
    ('7', '2', 'rate', '1', 'Do you think this employee is in the right place in this company?'),
    ('8', '2', 'rate', '5', 'How committed is this employee to the attendance estimate?'),
    ('9', '2', 'rate', '2', 'How satisfied are you with this employee ability to withstand work pressure?'),
    ('10', '2', 'rate', '3', 'How satisfied are you with this employee handling of company customers?'),

    ('1', '3', 'write', '', 'What are the pros and cons you see in this employee dealings with other employees?'),
    ('2', '3', 'write', '', 'By collaborating with this employee, describe how his dealt with a problem that occurred?'),
    ('3', '3', 'write', '', 'Do you think that this employee is interested in time management? And why?'),
    ('4', '3', 'write', '', 'Describe to me the method that this employee used to solve a specific problem?'),
    ('5', '3', 'write', '', 'Other notes about this employee?'),
    ('6', '3', 'rate', '4', 'How satisfied are you with this employee in terms of cooperation at work?'),
    ('7', '3', 'rate', '1', 'Do you think this employee is in the right place in this company?'),
    ('8', '3', 'rate', '5', 'How committed is this employee to the attendance estimate?'),
    ('9', '3', 'rate', '2', 'How satisfied are you with this employee ability to withstand work pressure?'),
    ('10', '3', 'rate', '3', 'How satisfied are you with this employee handling of company customers?'),

    ('1', '4', 'write', '', 'What are the pros and cons you see in this employee dealings with other employees?'),
    ('2', '4', 'write', '', 'By collaborating with this employee, describe how his dealt with a problem that occurred?'),
    ('3', '4', 'write', '', 'Do you think that this employee is interested in time management? And why?'),
    ('4', '4', 'write', '', 'Describe to me the method that this employee used to solve a specific problem?'),
    ('5', '4', 'write', '', 'Other notes about this employee?'),
    ('6', '4', 'rate', '4', 'How satisfied are you with this employee in terms of cooperation at work?'),
    ('7', '4', 'rate', '1', 'Do you think this employee is in the right place in this company?'),
    ('8', '4', 'rate', '5', 'How committed is this employee to the attendance estimate?'),
    ('9', '4', 'rate', '2', 'How satisfied are you with this employee ability to withstand work pressure?'),
    ('10', '4', 'rate', '3', 'How satisfied are you with this employee handling of company customers?'),

    ('1', '5', 'write', '', 'What are the pros and cons you see in this employee dealings with other employees?'),
    ('2', '5', 'write', '', 'By collaborating with this employee, describe how his dealt with a problem that occurred?'),
    ('3', '5', 'write', '', 'Do you think that this employee is interested in time management? And why?'),
    ('4', '5', 'write', '', 'Describe to me the method that this employee used to solve a specific problem?'),
    ('5', '5', 'write', '', 'Other notes about this employee?'),
    ('6', '5', 'rate', '4', 'How satisfied are you with this employee in terms of cooperation at work?'),
    ('7', '5', 'rate', '1', 'Do you think this employee is in the right place in this company?'),
    ('8', '5', 'rate', '5', 'How committed is this employee to the attendance estimate?'),
    ('9', '5', 'rate', '2', 'How satisfied are you with this employee ability to withstand work pressure?'),
    ('10', '5', 'rate', '3', 'How satisfied are you with this employee handling of company customers?'),

    ('1', '6', 'write', '', 'What are the pros and cons you see in this employee dealings with other employees?'),
    ('2', '6', 'write', '', 'By collaborating with this employee, describe how his dealt with a problem that occurred?'),
    ('3', '6', 'write', '', 'Do you think that this employee is interested in time management? And why?'),
    ('4', '6', 'write', '', 'Describe to me the method that this employee used to solve a specific problem?'),
    ('5', '6', 'write', '', 'Other notes about this employee?'),
    ('6', '6', 'rate', '4', 'How satisfied are you with this employee in terms of cooperation at work?'),
    ('7', '6', 'rate', '1', 'Do you think this employee is in the right place in this company?'),
    ('8', '6', 'rate', '5', 'How committed is this employee to the attendance estimate?'),
    ('9', '6', 'rate', '2', 'How satisfied are you with this employee ability to withstand work pressure?'),
    ('10', '6', 'rate', '3', 'How satisfied are you with this employee handling of company customers?');

  INSERT INTO employees_questions
    (question_id,employee_id )
  VALUES
    ('', '');

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