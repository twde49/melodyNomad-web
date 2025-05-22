export default defineEventHandler(async (event) => {
	const sqlite3 = require("sqlite3");
	const db = new sqlite3.Database(
		`${__dirname}/../database/db.sqlite`,
		sqlite3.OPEN_READWRITE,
		(err) => {
			if (err) {
				console.log(__dirname);
				console.log(err);
			}
		},
	);

	const usersmodel = require(`${__dirname}/../models/users.js`);
	const usersdb = new usersmodel(db);
	const users = await usersdb.findUsers();

		return {
		users: users
		}
})
