migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pj2l6jhla39tlvu")

  // remove
  collection.schema.removeField("ufuroizx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r4n3geil",
    "name": "hargaBarang",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qrbnb9vr",
    "name": "idBarang",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "mx5xz2mhs1xjbeb",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pj2l6jhla39tlvu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ufuroizx",
    "name": "hargaBarang",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "mx5xz2mhs1xjbeb",
      "cascadeDelete": false
    }
  }))

  // remove
  collection.schema.removeField("r4n3geil")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qrbnb9vr",
    "name": "namaBarang",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "mx5xz2mhs1xjbeb",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
