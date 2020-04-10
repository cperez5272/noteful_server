const NotesService = {
    getAllNotes(knex) {
      return knex.select('*').from('true_noteful_notes')
    },
  
    insertNote(knex, newNote) {
      return knex
        .insert(newNote)
        .into('true_noteful_notes')
        .returning('*')
        .then(rows => {
          return rows[0]
        })
    },
  
    getById(knex, id) {
      return knex
        .from('true_noteful_notes')
        .select('*')
        .where('id', id)
        .first()
    },
  
    deleteNote(knex, id) {
      return knex('true_noteful_notes')
        .where({ id })
        .delete()
    },
  
    updateComment(knex, id, newNoteFields) {
      return knex('true_noteful_notes')
        .where({ id })
        .update(newNoteFields)
    },
  }
  
  module.exports = NotesService