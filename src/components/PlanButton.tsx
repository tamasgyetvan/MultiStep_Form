import { PlanObject, PlanType } from "../types/plan";

type PlanButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedPlan: PlanType;
  plan: PlanObject;
  billingMethod: "yearly" | "monthly";
};

export function PlanButton({
  plan,
  selectedPlan,
  handleClick,
  billingMethod,
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
        <p>
          {billingMethod == "monthly"
            ? "$" + plan.price + "/mo"
            : "$" + plan.price * 10 + "/yr"}
        </p>
        {billingMethod == "yearly" ? <p>2 months free</p> : null}
      </div>
    </button>
  );
}
