migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2jnv10nedopnhgo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mikgmypq",
    "name": "keteranganPelanggan",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 150,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2jnv10nedopnhgo")

  // remove
  collection.schema.removeField("mikgmypq")

  return dao.saveCollection(collection)
})
