const mongoclient=require("mongodb").MongoClient
var _db

module.exports={
    connectToServer: async function( callback ) {
        await mongoclient.connect( "mongodb://localhost:27017/ecomdb", function( err, db ) {
          _db = db;
          return callback( err );
        });
    },

   getDb: function(){
      return _db;
    }
}