import { ProgressBar } from "./ProgressBar";
import { ButtonBar } from "./ButtonBar";
import { useState } from "react";
export const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);

  function incrementStep(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
  }

  function decrementStep(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setCurrentStep(currentStep - 1);
  }
  return (
    <div className="formContainer">
      <ProgressBar />
      <form>
        <ButtonBar
          currentStep={currentStep}
          incrementStep={incrementStep}
          decrementStep={decrementStep}
        />
      </form>
    </div>
  );
};
