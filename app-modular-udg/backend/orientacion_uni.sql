CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  question_text TEXT NOT NULL
);
CREATE TABLE options (
  id SERIAL PRIMARY KEY,
  question_id INTEGER NOT NULL,
  option_text TEXT NOT NULL,
  area VARCHAR(50) NOT NULL,
  FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
);
CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  attempt_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  selected_option_id INTEGER NOT NULL,
  FOREIGN KEY (attempt_id) REFERENCES questionnaire_attempts(id) ON DELETE CASCADE,
  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (selected_option_id) REFERENCES options(id)
);
CREATE TABLE questionnaire_attempts (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

