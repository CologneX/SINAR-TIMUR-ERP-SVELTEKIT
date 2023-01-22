migrate((db) => {
  const collection = new Collection({
    "id": "mx5xz2mhs1xjbeb",
    "created": "2023-01-17 07:37:56.038Z",
    "updated": "2023-01-17 07:37:56.038Z",
    "name": "barang",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gukhvkup",
        "name": "namaBarang",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "qtmywby2",
        "name": "stokBarang",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": null
        }
      },
      {
        "system": false,
        "id": "p2mjkk1b",
        "name": "lokasiBarang",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Gudang",
            "Toko"
          ]
        }
      },
      {
        "system": false,
        "id": "3fffkvnh",
        "name": "hargaBarang",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("mx5xz2mhs1xjbeb");

  return dao.deleteCollection(collection);
})
