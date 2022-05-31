import express from "express";
import MongoDB from "../services/mongodb.service.js";
import {mongoConfig} from "../config.js";
import UserController from "../controller/UserController.js";

const router = express.Router();
/* GET users listing. */
router.get('/', async function(req, res, next) {
const collection =  MongoDB.db.collection(mongoConfig.collections.CLIENT)
  const {birth_date} = req.body
  if(birth_date){
  const user = await collection.find({birth_date})._id
    res.json({
      status: 'ok',
      user
    })
  }
})

router.post('/', UserController.login);

export default router;
