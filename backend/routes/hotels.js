import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js"; 
import { createHotel, updateHotel, countByCity, getByType } from "../controllers/hotel.js";
import  { deleteHotel } from "../controllers/hotel.js";
import { getHotel } from "../controllers/hotel.js";
import { getHotels } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET
router.get("/find/:id", getHotel);
//GET ALL
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", getByType);

export default router