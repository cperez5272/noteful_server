  CREATE TABLE true_noteful_notes (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL,
    folder_id 
    modified TIMESTAMP DEFAULT now() NOT NULL, 
    content TEXT,
);