const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const validator = require('validator');

const subscriptionSchema = new Schema(
  {
    package_name: {
      type: String,
      trim: true,
      required: [true, "kindly select a package of your choice"],
    },
    amount: {
      type: Number,
      trim: true,
      required: [true, "a package must have an amount"],
    },
    duration: {
      type: Number,
      trim: true,
      required: [true, "package runs for a certain amount of time"],
    },
    start_date: {
      type: String,
      trim: true,
      required: [true, "period package started"],
    },
    end_date: {
      type: String,
      trim: true,
      required: [true, "expiry period"],
    },
  },
  {
    timestamps: true,
  }
);

const Subscription = mongoose.model('Subscription',subscriptionSchema)

module.exports = Subscription;