import { ProgressBar } from "./ProgressBar";
import { ButtonBar } from "./ButtonBar";
import { useState } from "react";
import { PersonalInfoInputs } from "./PersonalInfoInputs";
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
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="personalInfoForm"
      >
        <PersonalInfoInputs errors={errors} register={register} />
        <ButtonBar
          currentStep={currentStep}
          incrementStep={() => {
            if (isValid) {
              setCurrentStep(currentStep + 1);
            }
          }}
          decrementStep={() => {
            setCurrentStep(currentStep - 1);
          }}
        />
      </form>
    </div>
  );
};
