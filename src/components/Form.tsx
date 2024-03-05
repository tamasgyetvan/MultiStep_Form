import { ProgressBar } from "./ProgressBar";
import { ButtonBar } from "./ButtonBar";
import { useState } from "react";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { PlanForm } from "./PlanForm";
import { PlanType } from "../types/plan";
export const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("Arcade");

  function handlePlanSelect(e: React.MouseEvent<HTMLButtonElement>) {
    setSelectedPlan(e.currentTarget.value as PlanType);
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);
  return (
    <div className="multiStepForm">
      <ProgressBar currentStep={currentStep} />
      {currentStep == 1 ? (
        <PersonalInfoForm
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      ) : currentStep == 2 ? (
        <PlanForm handleClick={handlePlanSelect} selectedPlan={selectedPlan} />
      ) : (
        <p>Step3</p>
      )}

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
