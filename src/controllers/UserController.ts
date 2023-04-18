import { User } from "../models/Users";
import { BigQuery } from "@google-cloud/bigquery";

export class UserController {
	private bigquery: BigQuery;

	constructor() {
		this.bigquery = new BigQuery({
			projectId: "portfolio-384112",
			keyFilename:
				"/home/dojodev/.config/gcloud/application_default_credentials.json",
		});
	}
	async getUsers(): Promise<User[]> {
		const query = "SELECT *  FROM `portfolio-384112.users.userData` LIMIT 1000";
		const [rows] = await this.bigquery.query(query);
		console.log(rows);
		const users = rows.map((row) => {
			return {
				id: row.id,
				firstName: row.firstName,
				lastName: row.lastName,
				email: row.email,
				age: row.age,
			};
		});

		return users;
	}

	async getUserById(id: number): Promise<User | null> {
		const query = `SELECT * FROM \`portfolio-384112.users.userData\` WHERE id = ${id}`; // Update with your own project ID, dataset ID, and table name
		const [rows] = await this.bigquery.query(query);

		// If no rows are returned, return null
		if (rows.length === 0) {
			return null;
		}

		// Convert BigQuery row to User object
		const row = rows[0];
		const user: User = {
			id: row.id,
			firstName: row.firstName,
			lastName: row.lastName,
			email: row.email,
			age: row.age,
		};
		console.log(user);

		return user;
	}
}
