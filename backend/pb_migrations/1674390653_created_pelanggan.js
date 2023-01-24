migrate((db) => {
  const collection = new Collection({
    "id": "2jnv10nedopnhgo",
    "created": "2023-01-22 12:30:53.258Z",
    "updated": "2023-01-22 12:30:53.258Z",
    "name": "pelanggan",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vaswh4bm",
        "name": "namaPelanggan",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "qougwtzu",
        "name": "nomorPelanggan",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gjsyw8ah",
        "name": "alamatPelanggan",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5fzdscek",
        "name": "statusDelete",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2jnv10nedopnhgo");

  return dao.deleteCollection(collection);
})
