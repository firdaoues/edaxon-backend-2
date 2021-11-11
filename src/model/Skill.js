import mongoose from "mongoose";

const Schema = mongoose.Schema;

const skillSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
  ],

  name: {
    type: String,
    required: true,
  },

  scrimba: {
    type: String,
  },
  privateVideo: {
    type: String,
  },
  youtubeVideo: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  dateUpdated: {
    type: Date,
  },
});

export default mongoose.model("Skill", skillSchema);
