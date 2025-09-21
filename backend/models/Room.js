import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    maxPeople: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    roomNumbers: [{number: Number, unavailableDates: {type: [Date]} }],
},
    { timestamps: true }
);

[
    {number: 101, unavailableDates: ['2024-07-01', '2024-07-02']},
    { number: 102, unavailableDates: ['2024-07-01', '2024-07-04']},
    {number: 103, unavailableDates: ['2024-07-03']},
    {number: 104, unavailableDates: []},
    {number: 105, unavailableDates: []},
]

export default mongoose.model("Room", RoomSchema)