function users(db){
    this.db = db;
}
users.prototype.findUsers = async () => {
  return new Promise((resolve,reject) => {
      this.db.all("select * from users",[],(err,rows) => {
          if(err){
              return reject(err);
          }
          resolve(rows);
      })
  })
}

module.exports = users;