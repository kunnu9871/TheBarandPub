import mongoose from "mongoose";

const assets = mongoose.model('Assets', new mongoose.Schema({}, { collection: 'assets' }));

export {assets};