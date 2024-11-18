// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   age: { type: Number, required: true },
//   country: { type: String, required: true },
//   signupDate: { type: String, required: true },
//   timestamp: { type: String, required: true },
//   primaryStreamingService: { type: String, required: true },
//   hoursPerDay: { type: Number, required: true },
//   whileWorking: { type: String, enum: ['Yes', 'No'], required: true },
//   instrumentalist: { type: String, enum: ['Yes', 'No'], required: true },
//   composer: { type: String, enum: ['Yes', 'No'], required: true },
//   favGenre: { type: String, required: true },
//   exploratory: { type: String, enum: ['Yes', 'No'], required: true },
//   foreignLanguages: { type: String, enum: ['Yes', 'No'], required: true },
//   bpm: { type: Number, required: true },

//   frequencyClassical: { type: String, enum: ['Never', 'Rarely', 'Sometimes', 'Very frequently'], required: true },
//   frequencyCountry: { type: String, enum: ['Never', 'Rarely', 'Sometimes', 'Very frequently'], required: true },
//   frequencyEDM: { type: String, enum: ['Never', 'Rarely', 'Sometimes', 'Very frequently'], required: true },
//   frequencyFolk: { type: String, enum: ['Never', 'Rarely', 'Sometimes', 'Very frequently'], required: true },
//   frequencyGospel: { type: String, enum: ['Never', 'Rarely', 'Sometimes', 'Very frequently'], required: true },
//   frequencyHipHop: { type: String, enum: ['Never', 'Rarely', 'Sometimes', 'Very frequently'], required: true },
//   frequencyJazz: { type: String, enum: ['Never', 'Rarely', 'Sometimes', 'Very frequently'], required: true },
//   frequencyKPop: { type: String, enum: ['Never', 'Rarely', 'Sometimes', 'Very frequently'], required: true },
//   frequencyLatin: { type: String, enum: ['Never', 'Rarely', 'Sometimes', 'Very frequently'], required: true },
//   frequencyLofi: { type: String, enum: ['Never', 'Rarely', 'Sometimes', 'Very frequently'], required: true },
//   frequencyMetal: { type: String, enum: ['Never', 'Rarely', 'Sometimes', 'Very frequently'], required: true },
//   frequencyPop: { type: String, enum: ['Never', 'Rarely', 'Sometimes', 'Very frequently'], required: true },
//   frequencyRNB: { type: String, enum: ['Never', 'Rarely', 'Sometimes', 'Very frequently'], required: true },
//   frequencyRap: { type: String, enum: ['Never', 'Rarely', 'Sometimes', 'Very frequently'], required: true },
//   frequencyRock: { type: String, enum: ['Never', 'Rarely', 'Sometimes', 'Very frequently'], required: true },
//   frequencyVideoGameMusic: { type: String, enum: ['Never', 'Rarely', 'Sometimes', 'Very frequently'], required: true },

//   anxiety: { type: Number, min: 0, max: 10, required: true },
//   depression: { type: Number, min: 0, max: 10, required: true },
//   insomnia: { type: Number, min: 0, max: 10, required: true },
//   ocd: { type: Number, min: 0, max: 10, required: true },

//   musicEffects: { type: String, required: true },
//   permissions: { type: String, required: true, enum: ['I understand.'] },
// },  { timestamps: true, collection: 'TestCollection1' });

// const User = mongoose.model('User', userSchema);

// module.exports = User;

const mongoose = require("mongoose");

const surveyResultsSchema = new mongoose.Schema(
  {
    Gender: {
      type: String,
      required: true,
    },
    Age: {
      type: Number,
      required: true,
    },
    Country: {
      type: String,
      required: true,
    },
    SignupDate: {
      type: Date,
      required: true,
    },
    Timestamp: {
      type: Date,
      required: true,
    },
    "Primary streaming service": {
      type: String,
      required: true,
    },
    "Hours per day": {
      type: Number,
      required: true,
    },
    "While working": {
      type: String,
      required: true,
    },
    Instrumentalist: {
      type: String,
      required: true,
    },
    Composer: {
      type: String,
      required: true,
    },
    "Fav genre": {
      type: String,
      required: true,
    },
    Exploratory: {
      type: String,
      required: true,
    },
    "Foreign languages": {
      type: String,
      required: true,
    },
    BPM: {
      type: Number,
      required: true,
    },
    "Frequency [Classical]": {
      type: String,
      required: true,
    },
    "Frequency [Country]": {
      type: String,
      required: true,
    },
    "Frequency [EDM]": {
      type: String,
      required: true,
    },
    "Frequency [Folk]": {
      type: String,
      required: true,
    },
    "Frequency [Gospel]": {
      type: String,
      required: true,
    },
    "Frequency [Hip hop]": {
      type: String,
      required: true,
    },
    "Frequency [Jazz]": {
      type: String,
      required: true,
    },
    "Frequency [K pop]": {
      type: String,
      required: true,
    },
    "Frequency [Latin]": {
      type: String,
      required: true,
    },
    "Frequency [Lofi]": {
      type: String,
      required: true,
    },
    "Frequency [Metal]": {
      type: String,
      required: true,
    },
    "Frequency [Pop]": {
      type: String,
      required: true,
    },
    "Frequency [R&B]": {
      type: String,
      required: true,
    },
    "Frequency [Rap]": {
      type: String,
      required: true,
    },
    "Frequency [Rock]": {
      type: String,
      required: true,
    },
    "Frequency [Video game music]": {
      type: String,
      required: true,
    },
    Anxiety: {
      type: String,
      required: true,
    },
    Depression: {
      type: String,
      required: true,
    },
    Insomnia: {
      type: String,
      required: true,
    },
    OCD: {
      type: String,
      required: true,
    },
    "Music effects": {
      type: String,
      required: true,
    },
    Permissions: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const SurveyResults = mongoose.model("SurveyResults", surveyResultsSchema, 'SurveyResults');

module.exports = SurveyResults;
