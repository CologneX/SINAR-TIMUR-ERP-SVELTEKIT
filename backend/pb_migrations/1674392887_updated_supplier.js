migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1t8wcbcsf79nlsv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vidi98io",
    "name": "alamatSupplier",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 100,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1t8wcbcsf79nlsv")

  // remove
  collection.schema.removeField("vidi98io")

  return dao.saveCollection(collection)
})
