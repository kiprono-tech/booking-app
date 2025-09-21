import Hotel from "../models/Hotel.js";
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
}
export const updateHotel = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    next(error);
  }
}
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(
      req.params.id,
    );
    res.status(200).json("Hotel has been deleted.");
  } catch (error) {
    next(error);
  }
}
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(error);
  }
}
export const getHotels = async (req, res, next) => {
  try {
    // Extract filters limit, featured,
    const { limit, featured, min, max, ...others } = req.query;
    // featured: featured,
    const hotels = await Hotel.find({ ...others, cheapestPrice: {$gt: min || 1, $lt: max || 999} }).limit(limit);
    // const hotels = await Hotel.find({ ...others, featured: featured, cheapestPrice: { $gt: min || 1, $lt: max || 999 } }).limit(limit);
    // const hotels = await Hotel.find(req.query).limit(req.query.limit);
    // update
    // const { limit, featured } = req.query;

    // const hotels = await Hotel.find({
    //   ...(featured !== undefined && { featured: featured === "true" })
    // }).limit(Number(limit));

    res.status(200).json(hotels);
  } catch (err) {
    next(error);
  }
}
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",")
  try {
    const list = await Promise.all(cities.map(city => {
      return Hotel.countDocuments({ city: city })
    }))
    res.status(200).json(list);
  } catch (err) {
    next(error);
  }
}
export const getByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" })
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" })
    const resortCount = await Hotel.countDocuments({ type: "resort" })
    const villaCount = await Hotel.countDocuments({ type: "villa" })
    const cabinCount = await Hotel.countDocuments({ type: "cabin" })
    
    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmentCount },
      { type: "resort", count: resortCount },
      { type: "villa", count: villaCount },
      { type: "cabin", count: cabinCount },
    ]);
  } catch (err) {
    next(error);
  }
}
