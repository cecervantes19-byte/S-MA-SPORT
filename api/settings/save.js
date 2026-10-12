import { db } from "hatchable";
export const access="admin"; export const methods=["POST"];
export default async function(req,res){const b=req.body||{};await db.query("INSERT INTO site_settings (key,value) VALUES ('theme',$1) ON CONFLICT (key) DO UPDATE SET value=$1, updated_at=now()",[JSON.stringify(b)]);res.json({ok:true})}