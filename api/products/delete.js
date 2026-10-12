import { db } from "hatchable";
export const access="admin";
export const methods=["POST"];
export default async function(req,res){const id=req.body?.id;if(!id)return res.status(400).json({error:"Falta id"});await db.query("DELETE FROM products WHERE id=$1",[id]);res.json({ok:true})}