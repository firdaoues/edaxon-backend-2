import mongoose from "mongoose";

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  type: {
    type: String,
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  isCode: {
    type: Boolean,
    required: true,
  },
  answers: [
    {
      text: {
        type: String,
      },
      correct: {
        type: Boolean,
      },
      users: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      skill: {
        type: Schema.Types.ObjectId,
        ref: "Skill",
      },
    },
  ],
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  dateUpdated: {
    type: Date,
  },
});

export default mongoose.model("Skill", questionSchema);
