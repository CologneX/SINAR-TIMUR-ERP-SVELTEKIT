migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mx5xz2mhs1xjbeb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tgdcqxaz",
    "name": "keteranganBarang",
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
  const collection = dao.findCollectionByNameOrId("mx5xz2mhs1xjbeb")

  // remove
  collection.schema.removeField("tgdcqxaz")

  return dao.saveCollection(collection)
})
