import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title."],
    minLength: [3, "Title must contain at least 3 Characters!"],
    maxLength: [30, "Title cannot exceed 30 Characters!"],
  },
  description: {
    type: String,
    required: [true, "Please provide decription."],
    minLength: [30, "Description must contain at least 30 Characters!"],
    maxLength: [50000, "Description cannot exceed 500 Characters!"],
  },
  category: {
    type: String,
    required: [true, "Please provide a category."],
  },
  country: {
    type: String,
    required: [true, "Please provide a country name."],
  },
  city: {
    type: String,
    required: [true, "Please provide a city name."],
  },
  location: {
    type: String,
    required: [true, "Please provide location."],
    minLength: [10, "Location must contian at least 20 characters!"],
  },
  salary: {
    type: Number,
    minLength: [4, "Salary must contain at least 4 digits"],
    maxLength: [9, "Salary cannot exceed 9 digits"],
  },
  deadline: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  company:{
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  users:{
    type:[
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      }
    ],
  }
},{timestamps:true});

export const Job = mongoose.model("Job", jobSchema);