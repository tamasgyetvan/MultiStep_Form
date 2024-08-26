import { PlanObject, Plan, BillingMethod } from "../types/plan";
import data from "../../data.json";
import { PlanButton } from "./PlanButton";
import { Toggler } from "./Toggler";
type PlanFormProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedPlan: Plan;
  billingMethod: BillingMethod;
  handleBillingMethodChange: () => void;
};

export function PlanForm({
  handleClick,
  selectedPlan,
  billingMethod,
  handleBillingMethodChange,
}: PlanFormProps) {
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
      <Toggler
        handleChange={handleBillingMethodChange}
        billingMethod={billingMethod}
      />
    </section>
  );
}
