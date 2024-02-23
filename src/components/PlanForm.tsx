import { PlanObject, PlanType } from "../types/plan";
import data from "../../data.json";
import { PlanButton } from "./PlanButton";
type PlanFormProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedPlan: PlanType;
};

export function PlanForm({ handleClick, selectedPlan }: PlanFormProps) {
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
            />
          );
        })}
      </div>
    </section>
  );
}
