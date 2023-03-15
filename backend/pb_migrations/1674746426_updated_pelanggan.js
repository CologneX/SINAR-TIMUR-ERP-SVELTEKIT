migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2jnv10nedopnhgo")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5fzdscek",
    "name": "status_delete",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2jnv10nedopnhgo")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5fzdscek",
    "name": "statusDelete",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
