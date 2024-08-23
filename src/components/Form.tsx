import { ProgressBar } from "./ProgressBar";
import { ButtonBar } from "./ButtonBar";
import { useState } from "react";
import { PersonalInfoForm } from "./PersonalInfoForm";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  FormProvider,
} from "react-hook-form";
import { PlanForm } from "./PlanForm";
import { PlanType } from "../types/plan";
import { AddOnForm } from "./AddOnForm";
export const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("Arcade");

  function handlePlanSelect(e: React.MouseEvent<HTMLButtonElement>) {
    setSelectedPlan(e.currentTarget.value as PlanType);
    console.log(e.currentTarget.dataset.type);
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) =>
    console.log(data.name, data.email);

  const methods = useForm({ mode: "all" });
  return (
    <FormProvider {...methods}>
      <form className="multiStepForm" onSubmit={methods.handleSubmit(onSubmit)}>
        <ProgressBar currentStep={currentStep} />
        {currentStep == 1 ? (
          <PersonalInfoForm />
        ) : currentStep == 2 ? (
          <PlanForm
            handleClick={handlePlanSelect}
            selectedPlan={selectedPlan}
          />
        ) : null}

        <ButtonBar
          currentStep={currentStep}
          incrementStep={() => {
            if (methods.formState.isValid == true) {
              setCurrentStep(currentStep + 1);
            }
          }}
          decrementStep={() => {
            setCurrentStep(currentStep - 1);
          }}
        />
      </form>
    </FormProvider>
  );
};
