import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

//Video Schema

const videoSchema = new Schema(
  {
    videoFile: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublishes: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

// mongooseAggregatePaginate use to access aggregate method in mongoDB 

videoSchema.plugin(mongooseAggregatePaginate)

//Video model

export const Video = mongoose.model("Video", videoSchema);
