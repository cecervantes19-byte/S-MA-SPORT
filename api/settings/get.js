import { db } from "hatchable";
export const access="public";
export const methods=["GET"];
export default async function(req,res){const {rows}=await db.query("SELECT value FROM site_settings WHERE key='theme'");res.json(rows[0]?JSON.parse(rows[0].value):{})}