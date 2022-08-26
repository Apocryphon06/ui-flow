import React from "react";
import "../App.css";

import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";

export default function ProgressBar() {
  return (
    <div className="App w-50 m-auto">
      <StepProgressBar
        startingStep={0}
        previousBtnName="<"
        nextBtnName=">"
        steps={[
          {
            name: "Briefing",
          },
          {
            name: "Image-Acquisition",
          },
          {
            name: "Image Processing",

            // validator: step2Validator
          },
          {
            name: "Finish",
          },
        ]}
      />
    </div>
  );
}
