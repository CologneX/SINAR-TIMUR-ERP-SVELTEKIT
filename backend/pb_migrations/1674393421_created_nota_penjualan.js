migrate((db) => {
  const collection = new Collection({
    "id": "pj2l6jhla39tlvu",
    "created": "2023-01-22 13:17:01.045Z",
    "updated": "2023-01-22 13:17:01.045Z",
    "name": "nota_penjualan",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qrbnb9vr",
        "name": "nota_barang",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": null,
          "collectionId": "mx5xz2mhs1xjbeb",
          "cascadeDelete": false
        }
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
  const collection = dao.findCollectionByNameOrId("pj2l6jhla39tlvu");

  return dao.deleteCollection(collection);
})
