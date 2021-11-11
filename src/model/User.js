import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  profile: {
    name: { type: String },
    phone: { type: String },
    birthdate: { type: String },
    occupation: { type: String },
    school: { type: String },
  },
  membership: {
    expireDate: { type: Date },
    startDate: { type: Date },
    name: { type: String },
    approvedBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  updatedDate: {
    type: Date,
  },
});

export default mongoose.model("User", userSchema);
