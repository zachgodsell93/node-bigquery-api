import { Pageviews } from "../models/Ga";
import { BigQuery } from "@google-cloud/bigquery";

export class PageviewsController {
	private bigquery: BigQuery;

	constructor() {
		this.bigquery = new BigQuery();
	}
	async getPageViews(): Promise<Pageviews[]> {
		const query = "";
		const [rows] = await this.bigquery.query(query);

		const pageviews = rows.map((row) => {
			return {};
		});

		return pageviews;
	}

	async getPageViewsBetweenDate(
		startDate: Date,
		endDate: Date
	): Promise<Pageviews | null> {
		const query = ``; // Update with your own project ID, dataset ID, and table name
		const [rows] = await this.bigquery.query(query);

		// If no rows are returned, return null
		if (rows.length === 0) {
			return null;
		}

		// Convert BigQuery row to User object
		const row = rows[0];
		const pageviews: Pageviews = {};

		return pageviews;
	}
}
