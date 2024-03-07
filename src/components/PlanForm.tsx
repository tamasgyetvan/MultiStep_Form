import { PlanObject, PlanType } from "../types/plan";
import data from "../../data.json";
import { PlanButton } from "./PlanButton";
import { useEffect, useState } from "react";
import { Toggler } from "./Toggler";
type PlanFormProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedPlan: PlanType;
};

type Mode = "yearly" | "monthly";
export function PlanForm({ handleClick, selectedPlan }: PlanFormProps) {
  const [billingMethod, setBillingMethod] = useState<Mode>("monthly");

  function handleModeChange() {
    billingMethod === "monthly"
      ? setBillingMethod("yearly")
      : setBillingMethod("monthly");
  }

  return (
    <section className="planForm">
      <h1 className="formTitle">Select your plan</h1>
      <p className="formDescription">
        You have the option of monthly or yearly billing.
      </p>
      <div className="buttonContainer">
        {data.map((plan: PlanObject) => {
          return (
            <PlanButton
              key={plan.id}
              plan={plan}
              handleClick={handleClick}
              selectedPlan={selectedPlan}
              billingMethod={billingMethod}
            />
          );
        })}
      </div>
      <Toggler handleChange={handleModeChange} />
    </section>
  );
}
