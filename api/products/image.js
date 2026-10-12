import { storage } from "hatchable";
export const access="public";
export const methods=["GET"];
export default async function(req,res){const key=req.query?.key;if(!key)return res.status(400).send("Falta la imagen");try{const x=await storage.get(key);res.setHeader("Content-Type",x.contentType||"image/jpeg");res.setHeader("Cache-Control","public, max-age=31536000, immutable");res.send(x.buffer)}catch(e){res.status(404).send("Imagen no encontrada")}}