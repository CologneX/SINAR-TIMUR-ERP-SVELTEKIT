migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mx5xz2mhs1xjbeb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q9f5wtzc",
    "name": "satuanBarang",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "METER",
        "PCS",
        "LITER",
        "DOZEN",
        "DUS",
        "KG"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mx5xz2mhs1xjbeb")

  // update
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
        "METER",
        "PCS",
        "LITER",
        "DOZEN",
        "DUS",
        "KG"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
