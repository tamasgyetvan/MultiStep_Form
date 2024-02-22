import { ProgressBar } from "./ProgressBar";
import { ButtonBar } from "./ButtonBar";
import { useState } from "react";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { useForm } from "react-hook-form";
export const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  return (
    <div className="multiStepForm">
      <ProgressBar currentStep={currentStep} />
      <PersonalInfoForm
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
      />
      <ButtonBar
        currentStep={currentStep}
        incrementStep={() => {
          if (isValid == true) {
            setCurrentStep(currentStep + 1);
          }
        }}
        decrementStep={() => {
          setCurrentStep(currentStep - 1);
        }}
      />
    </div>
  );
};
