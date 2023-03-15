migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mx5xz2mhs1xjbeb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q9f5wtzc",
    "name": "kuantitasBarang",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "METER"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mx5xz2mhs1xjbeb")

  // remove
  collection.schema.removeField("q9f5wtzc")

  return dao.saveCollection(collection)
})
