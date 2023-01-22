migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mx5xz2mhs1xjbeb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vvuadb6f",
    "name": "status_delete",
    "type": "bool",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mx5xz2mhs1xjbeb")

  // remove
  collection.schema.removeField("vvuadb6f")

  return dao.saveCollection(collection)
})
