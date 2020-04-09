const FoldersService = {
    getAllFolders(knex) {
      return knex.select('*').from('true_noteful_folders')
    },
    insertFolder(knex, newFolder) {
      return knex
        .insert(newFolder)
        .into('true_noteful_folders')
        .returning('*')
        .then(rows => {
          return rows[0]
        })
    },
    getById(knex, id) {
      return knex.from('true_noteful_folders').select('*').where('id', id).first()
    },
    deleteArticle(knex, id) {
      return knex('true_noteful_folders')
        .where({ id })
        .delete()
    },
    updateArticle(knex, id, newFolderFields) {
      return knex('true_noteful_folders')
        .where({ id })
        .update(newFolderFields)
    },
  }
  
  module.exports = FoldersService