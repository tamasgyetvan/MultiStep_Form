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
import { BillingMethod, Plan } from "../types/plan";
import { AddOnForm } from "./AddOnForm";
import { SummaryPage } from "./SummaryPage";
import { ConfirmPage } from "./ConfirmPage";
export const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<Plan>({
    type: "Arcade",
    price: 9,
  });
  const [billingMethod, setBillingMethod] = useState<BillingMethod>("monthly");

  function handlePlanSelect(e: React.MouseEvent<HTMLButtonElement>) {
    if (billingMethod == "monthly") {
      setSelectedPlan({
        type: e.currentTarget.dataset.type,
        price: Number(e.currentTarget.dataset.price),
      });
    } else {
      setSelectedPlan({
        type: e.currentTarget.dataset.type,
        price: Number(e.currentTarget.dataset.price) * 10,
      });
    }
  }
  function handleBillingMethodChange() {
    if (billingMethod == "monthly") {
      setBillingMethod("yearly");
      setSelectedPlan((prev) => ({ ...prev, price: prev.price * 10 }));
    } else {
      setBillingMethod("monthly");
      setSelectedPlan((prev) => ({ ...prev, price: prev.price / 10 }));
    }
  }
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  const methods = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      addons: [],
    },
    mode: "onChange",
  });
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
            billingMethod={billingMethod}
            handleBillingMethodChange={handleBillingMethodChange}
          />
        ) : currentStep == 3 ? (
          <AddOnForm billingMethod={billingMethod} />
        ) : currentStep == 4 ? (
          <SummaryPage
            selectedPlan={selectedPlan}
            billingMethod={billingMethod}
          />
        ) : (
          <ConfirmPage />
        )}

        <ButtonBar
          currentStep={currentStep}
          incrementStep={() => {
            setCurrentStep(currentStep + 1);
          }}
          decrementStep={() => {
            setCurrentStep(currentStep - 1);
          }}
        />
      </form>
    </FormProvider>
  );
};
