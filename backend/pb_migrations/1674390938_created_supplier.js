migrate((db) => {
  const collection = new Collection({
    "id": "1t8wcbcsf79nlsv",
    "created": "2023-01-22 12:35:38.786Z",
    "updated": "2023-01-22 12:35:38.786Z",
    "name": "supplier",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wtwwjy5g",
        "name": "namaSupllier",
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
        "id": "w4wm0fju",
        "name": "nomorSupplier",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 15,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "098v88c3",
        "name": "status_delete",
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
  const collection = dao.findCollectionByNameOrId("1t8wcbcsf79nlsv");

  return dao.deleteCollection(collection);
})
