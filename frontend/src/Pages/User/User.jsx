// // import React, { useState } from "react";
// // import './User.css';

// // const User = () => {
// //   const [formData, setFormData] = useState({
// //     timestamp: "",
// //     age: "",
// //     primaryStreamingService: "",
// //     hoursPerDay: "",
// //     whileWorking: "",
// //     instrumentalist: "",
// //     composer: "",
// //     favGenre: "",
// //     exploratory: "",
// //     foreignLanguages: "",
// //     bpm: "",
// //     frequencyClassical: "",
// //     frequencyCountry: "",
// //     frequencyEDM: "",
// //     frequencyFolk: "",
// //     frequencyGospel: "",
// //     frequencyHipHop: "",
// //     frequencyJazz: "",
// //     frequencyKPop: "",
// //     frequencyLatin: "",
// //     frequencyLofi: "",
// //     frequencyMetal: "",
// //     frequencyPop: "",
// //     frequencyRNB: "",
// //     frequencyRap: "",
// //     frequencyRock: "",
// //     frequencyVideoGameMusic: "",
// //     anxiety: "",
// //     depression: "",
// //     insomnia: "",
// //     ocd: "",
// //     musicEffects: "",
// //     permissions: "",
// //   });

// //   const [currentStep, setCurrentStep] = useState(0);

// //   const questions = [
// //     {
// //       question: "Timestamp",
// //       type: "datetime-local",
// //       name: "timestamp",
// //     },
// //     {
// //       question: "Age",
// //       type: "number",
// //       name: "age",
// //     },
// //     {
// //       question: "Primary Streaming Service",
// //       type: "select",
// //       name: "primaryStreamingService",
// //       options: ["Spotify", "Pandora", "Apple Music", "Other"],
// //     },
// //     {
// //       question: "Hours per day you listen to music",
// //       type: "number",
// //       name: "hoursPerDay",
// //     },
// //     {
// //       question: "Do you listen to music while working?",
// //       type: "select",
// //       name: "whileWorking",
// //       options: ["Yes", "No"],
// //     },
// //     {
// //       question: "Are you an instrumentalist?",
// //       type: "select",
// //       name: "instrumentalist",
// //       options: ["Yes", "No"],
// //     },
// //     {
// //       question: "Are you a composer?",
// //       type: "select",
// //       name: "composer",
// //       options: ["Yes", "No"],
// //     },
// //     {
// //       question: "What is your favorite genre?",
// //       type: "text",
// //       name: "favGenre",
// //     },
// //     {
// //       question: "Do you like exploring new genres?",
// //       type: "select",
// //       name: "exploratory",
// //       options: ["Yes", "No"],
// //     },
// //     {
// //       question: "Do you listen to music in foreign languages?",
// //       type: "select",
// //       name: "foreignLanguages",
// //       options: ["Yes", "No"],
// //     },
// //     {
// //       question: "What is your preferred BPM range?",
// //       type: "number",
// //       name: "bpm",
// //     },
// //     // You can repeat the following block for each frequency genre
// //     {
// //       question: "How frequently do you listen to Classical music?",
// //       type: "select",
// //       name: "frequencyClassical",
// //       options: ["Never", "Rarely", "Sometimes", "Very frequently"],
// //     },
// //     // Add other genres like Country, EDM, Folk, etc. in the same way
// //     {
// //       question: "Do you suffer from anxiety?",
// //       type: "select",
// //       name: "anxiety",
// //       options: ["0", "1"], // 0 = No, 1 = Yes
// //     },
// //     {
// //       question: "Do you suffer from depression?",
// //       type: "select",
// //       name: "depression",
// //       options: ["0", "1"],
// //     },
// //     {
// //       question: "Do you suffer from insomnia?",
// //       type: "select",
// //       name: "insomnia",
// //       options: ["0", "1"],
// //     },
// //     {
// //       question: "Do you have OCD?",
// //       type: "select",
// //       name: "ocd",
// //       options: ["0", "1"],
// //     },
// //     {
// //       question: "Any effects music has on you?",
// //       type: "text",
// //       name: "musicEffects",
// //     },
// //     {
// //       question: "Do you consent to data collection?",
// //       type: "textarea",
// //       name: "permissions",
// //       placeholder: "I understand.",
// //     },
// //   ];

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleNext = () => {
// //     if (currentStep < questions.length - 1) {
// //       setCurrentStep(currentStep + 1);
// //     }
// //   };

// //   const handlePrev = () => {
// //     if (currentStep > 0) {
// //       setCurrentStep(currentStep - 1);
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(formData);
// //     // In a real application, you might send this data to a backend API here
// //   };

// //   const currentQuestion = questions[currentStep];

// //   return (
// //     <div>
// //       <h2>User Information Form</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="question-container">
// //           <label>{currentQuestion.question}</label>
// //           {currentQuestion.type === "select" ? (
// //             <select
// //               name={currentQuestion.name}
// //               value={formData[currentQuestion.name]}
// //               onChange={handleChange}
// //             >
// //               {currentQuestion.options.map((option, index) => (
// //                 <option key={index} value={option}>
// //                   {option}
// //                 </option>
// //               ))}
// //             </select>
// //           ) : currentQuestion.type === "textarea" ? (
// //             <textarea
// //               name={currentQuestion.name}
// //               value={formData[currentQuestion.name]}
// //               onChange={handleChange}
// //               placeholder={currentQuestion.placeholder || ""}
// //             />
// //           ) : (
// //             <input
// //               type={currentQuestion.type}
// //               name={currentQuestion.name}
// //               value={formData[currentQuestion.name]}
// //               onChange={handleChange}
// //             />
// //           )}
// //         </div>

// //         {/* Navigation buttons */}
// //         <div className="navigation-buttons">
// //           {currentStep > 0 && (
// //             <button type="button" onClick={handlePrev}>
// //               Previous
// //             </button>
// //           )}
// //           {currentStep < questions.length - 1 ? (
// //             <button type="button" onClick={handleNext}>
// //               Next
// //             </button>
// //           ) : (
// //             <button type="submit">Submit</button>
// //           )}
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default User;

// import React, { useState } from "react";
// import './User.css';

// const User = () => {
//   const [formData, setFormData] = useState({
//     age: "",
//     country: "",
//     signupDate: "",
//     timestamp: "",
//     primaryStreamingService: "",
//     hoursPerDay: "",
//     whileWorking: "",
//     instrumentalist: "",
//     composer: "",
//     favGenre: "",
//     exploratory: "",
//     foreignLanguages: "",
//     bpm: "",
//     frequencyClassical: "",
//     frequencyCountry: "",
//     frequencyEDM: "",
//     frequencyFolk: "",
//     frequencyGospel: "",
//     frequencyHipHop: "",
//     frequencyJazz: "",
//     frequencyKPop: "",
//     frequencyLatin: "",
//     frequencyLofi: "",
//     frequencyMetal: "",
//     frequencyPop: "",
//     frequencyRNB: "",
//     frequencyRap: "",
//     frequencyRock: "",
//     frequencyVideoGameMusic: "",
//     anxiety: "",
//     depression: "",
//     insomnia: "",
//     ocd: "",
//     musicEffects: "",
//     permissions: "",
//   });

//   const [currentStep, setCurrentStep] = useState(0);

//   const questions = [
//     { question: "Age", type: "number", name: "age" },
//     { question: "Country", type: "text", name: "country" },
//     { question: "Signup Date", type: "date", name: "signupDate" },
//     { question: "Timestamp", type: "datetime-local", name: "timestamp" },
//     {
//       question: "Primary Streaming Service",
//       type: "select",
//       name: "primaryStreamingService",
//       options: ["Spotify", "Pandora", "Apple Music", "YouTube Music", "Other"],
//     },
//     {
//       question: "Hours per day you listen to music",
//       type: "number",
//       name: "hoursPerDay",
//     },
//     {
//       question: "Do you listen to music while working?",
//       type: "select",
//       name: "whileWorking",
//       options: ["Yes", "No"],
//     },
//     {
//       question: "Are you an instrumentalist?",
//       type: "select",
//       name: "instrumentalist",
//       options: ["Yes", "No"],
//     },
//     {
//       question: "Are you a composer?",
//       type: "select",
//       name: "composer",
//       options: ["Yes", "No"],
//     },
//     {
//       question: "What is your favorite genre?",
//       type: "text",
//       name: "favGenre",
//     },
//     {
//       question: "Do you like exploring new genres?",
//       type: "select",
//       name: "exploratory",
//       options: ["Yes", "No"],
//     },
//     {
//       question: "Do you listen to music in foreign languages?",
//       type: "select",
//       name: "foreignLanguages",
//       options: ["Yes", "No"],
//     },
//     {
//       question: "What is your preferred BPM range?",
//       type: "number",
//       name: "bpm",
//     },
//     {
//       question: "How frequently do you listen to Classical music?",
//       type: "select",
//       name: "frequencyClassical",
//       options: ["Never", "Rarely", "Sometimes", "Very frequently"],
//     },
//     {
//       question: "How frequently do you listen to Rock music?",
//       type: "select",
//       name: "frequencyRock",
//       options: ["Never", "Rarely", "Sometimes", "Very frequently"],
//     },
//     // Repeat the above block for other genres...
//     {
//       question: "Do you suffer from anxiety?",
//       type: "number",
//       name: "anxiety",
//     },
//     {
//       question: "Do you suffer from depression?",
//       type: "number",
//       name: "depression",
//     },
//     {
//       question: "Do you suffer from insomnia?",
//       type: "number",
//       name: "insomnia",
//     },
//     {
//       question: "Do you have OCD?",
//       type: "number",
//       name: "ocd",
//     },
//     {
//       question: "Any effects music has on you?",
//       type: "text",
//       name: "musicEffects",
//     },
//     {
//       question: "Do you consent to data collection?",
//       type: "textarea",
//       name: "permissions",
//       placeholder: "I understand.",
//     },
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleNext = () => {
//     if (currentStep < questions.length - 1) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);

//     // Make a POST request to save the data to MongoDB
//     fetch('http://localhost:5000/api/users', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.error('Error:', error));
//   };

//   const currentQuestion = questions[currentStep];

//   return (
//     <div className="user-form">
//       <h2>User Information Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="question-container">
//           <label>{currentQuestion.question}</label>
//           {currentQuestion.type === "select" ? (
//             <select
//               name={currentQuestion.name}
//               value={formData[currentQuestion.name]}
//               onChange={handleChange}
//             >
//               {currentQuestion.options.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           ) : currentQuestion.type === "textarea" ? (
//             <textarea
//               name={currentQuestion.name}
//               value={formData[currentQuestion.name]}
//               onChange={handleChange}
//               placeholder={currentQuestion.placeholder || ""}
//             />
//           ) : (
//             <input
//               type={currentQuestion.type}
//               name={currentQuestion.name}
//               value={formData[currentQuestion.name]}
//               onChange={handleChange}
//             />
//           )}
//         </div>
//         <div className="navigation-buttons">
//           {currentStep > 0 && (
//             <button type="button" onClick={handlePrev}>
//               Previous
//             </button>
//           )}
//           {currentStep < questions.length - 1 ? (
//             <button type="button" onClick={handleNext}>
//               Next
//             </button>
//           ) : (
//             <button type="submit">Submit</button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default User;


import React, { useState } from "react";
import './User.css';

const User = () => {
  const [formData, setFormData] = useState({
    Gender: "",
    Age: "",
    Country: "",
    SignupDate: "",
    Timestamp: "",
    "Primary streaming service": "",
    "Hours per day": "",
    "While working": "",
    Instrumentalist: "",
    Composer: "",
    "Fav genre": "",
    Exploratory: "",
    "Foreign languages": "",
    BPM: "",
    "Frequency [Classical]": "",
    "Frequency [Country]": "",
    "Frequency [EDM]": "",
    "Frequency [Folk]": "",
    "Frequency [Gospel]": "",
    "Frequency [Hip hop]": "",
    "Frequency [Jazz]": "",
    "Frequency [K pop]": "",
    "Frequency [Latin]": "",
    "Frequency [Lofi]": "",
    "Frequency [Metal]": "",
    "Frequency [Pop]": "",
    "Frequency [R&B]": "",
    "Frequency [Rap]": "",
    "Frequency [Rock]": "",
    "Frequency [Video game music]": "",
    Anxiety: "",
    Depression: "",
    Insomnia: "",
    OCD: "",
    "Music effects": "",
    Permissions: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  const questions = [
    { question: "Gender", type: "select", name: "Gender", options: ["Male", "Female", "Other"] },
    { question: "Age", type: "number", name: "Age" },
    { question: "Country", type: "text", name: "Country" },
    { question: "Signup Date", type: "date", name: "SignupDate" },
    { question: "Timestamp", type: "datetime-local", name: "Timestamp" },
    {
      question: "Primary streaming service",
      type: "select",
      name: "Primary streaming service",
      options: ["Spotify", "Pandora", "Apple Music", "YouTube Music", "Other"],
    },
    { question: "Hours per day you listen to music", type: "number", name: "Hours per day" },
    { question: "Do you listen to music while working?", type: "select", name: "While working", options: ["Yes", "No"] },
    { question: "Are you an instrumentalist?", type: "select", name: "Instrumentalist", options: ["Yes", "No"] },
    { question: "Are you a composer?", type: "select", name: "Composer", options: ["Yes", "No"] },
    { question: "What is your favorite genre?", type: "text", name: "Fav genre" },
    { question: "Do you like exploring new genres?", type: "select", name: "Exploratory", options: ["Yes", "No"] },
    { question: "Do you listen to music in foreign languages?", type: "select", name: "Foreign languages", options: ["Yes", "No"] },
    { question: "What is your preferred BPM range?", type: "number", name: "BPM" },
    { question: "How frequently do you listen to Classical music?", type: "select", name: "Frequency [Classical]", options: ["Never", "Rarely", "Sometimes", "Very frequently"] },
    { question: "How frequently do you listen to Country music?", type: "select", name: "Frequency [Country]", options: ["Never", "Rarely", "Sometimes", "Very frequently"] },
    { question: "How frequently do you listen to EDM music?", type: "select", name: "Frequency [EDM]", options: ["Never", "Rarely", "Sometimes", "Very frequently"] },
    { question: "How frequently do you listen to Folk music?", type: "select", name: "Frequency [Folk]", options: ["Never", "Rarely", "Sometimes", "Very frequently"] },
    { question: "How frequently do you listen to Gospel music?", type: "select", name: "Frequency [Gospel]", options: ["Never", "Rarely", "Sometimes", "Very frequently"] },
    { question: "How frequently do you listen to Hip hop music?", type: "select", name: "Frequency [Hip hop]", options: ["Never", "Rarely", "Sometimes", "Very frequently"] },
    { question: "How frequently do you listen to Jazz music?", type: "select", name: "Frequency [Jazz]", options: ["Never", "Rarely", "Sometimes", "Very frequently"] },
    { question: "How frequently do you listen to K-pop music?", type: "select", name: "Frequency [K pop]", options: ["Never", "Rarely", "Sometimes", "Very frequently"] },
    { question: "How frequently do you listen to Latin music?", type: "select", name: "Frequency [Latin]", options: ["Never", "Rarely", "Sometimes", "Very frequently"] },
    { question: "How frequently do you listen to Lofi music?", type: "select", name: "Frequency [Lofi]", options: ["Never", "Rarely", "Sometimes", "Very frequently"] },
    { question: "How frequently do you listen to Metal music?", type: "select", name: "Frequency [Metal]", options: ["Never", "Rarely", "Sometimes", "Very frequently"] },
    { question: "How frequently do you listen to Pop music?", type: "select", name: "Frequency [Pop]", options: ["Never", "Rarely", "Sometimes", "Very frequently"] },
    { question: "How frequently do you listen to R&B music?", type: "select", name: "Frequency [R&B]", options: ["Never", "Rarely", "Sometimes", "Very frequently"] },
    { question: "How frequently do you listen to Rap music?", type: "select", name: "Frequency [Rap]", options: ["Never", "Rarely", "Sometimes", "Very frequently"] },
    { question: "How frequently do you listen to Rock music?", type: "select", name: "Frequency [Rock]", options: ["Never", "Rarely", "Sometimes", "Very frequently"] },
    { question: "How frequently do you listen to Video game music?", type: "select", name: "Frequency [Video game music]", options: ["Never", "Rarely", "Sometimes", "Very frequently"] },
    { question: "Do you suffer from anxiety?", type: "number", name: "Anxiety" },
    { question: "Do you suffer from depression?", type: "number", name: "Depression" },
    { question: "Do you suffer from insomnia?", type: "number", name: "Insomnia" },
    { question: "Do you have OCD?", type: "number", name: "OCD" },
    { question: "Any effects music has on you?", type: "text", name: "Music effects" },
    { question: "Do you consent to data collection?", type: "textarea", name: "Permissions", placeholder: "I understand." },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Make a POST request to save the data to MongoDB
    fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  };

  const currentQuestion = questions[currentStep];

  return (
    <div className="user-form">
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="question-container">
          <label>{currentQuestion.question}</label>
          {currentQuestion.type === "select" ? (
            <select
              name={currentQuestion.name}
              value={formData[currentQuestion.name]}
              onChange={handleChange}
            >
              {currentQuestion.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : currentQuestion.type === "textarea" ? (
            <textarea
              name={currentQuestion.name}
              value={formData[currentQuestion.name]}
              onChange={handleChange}
              placeholder={currentQuestion.placeholder || ""}
            />
          ) : (
            <input
              type={currentQuestion.type}
              name={currentQuestion.name}
              value={formData[currentQuestion.name]}
              onChange={handleChange}
            />
          )}
        </div>
        <div className="navigation-buttons">
          {currentStep > 0 && (
            <button type="button" onClick={handlePrev}>
              Previous
            </button>
          )}
          {currentStep < questions.length - 1 ? (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default User;
