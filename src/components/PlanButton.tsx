import { PlanObject, PlanType } from "../types/plan";

type PlanButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedPlan: PlanType;
  plan: PlanObject;
};

export function PlanButton({
  plan,
  selectedPlan,
  handleClick,
}: PlanButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={
        selectedPlan === plan.type ? "planButton active" : "planButton"
      }
      value={plan.type}
    >
      <img src={plan.logo} alt="" />
      <div className="info">
        <h3>{plan.type}</h3>
        <p>${plan.price}/mo</p>
      </div>
    </button>
  );
}
