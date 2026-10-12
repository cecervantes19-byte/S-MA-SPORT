import { storage } from "hatchable";
export const access="admin";
export const methods=["POST"];
export default async function(req,res){const f=req.files?.[0];if(!f)return res.status(400).json({error:"Selecciona una imagen"});const key="products/"+Date.now()+"-"+f.filename.replace(/[^a-zA-Z0-9._-]/g,"-");await storage.put(key,f.buffer,f.contentType);res.json({url:"/api/products/image?key="+encodeURIComponent(key),key})}