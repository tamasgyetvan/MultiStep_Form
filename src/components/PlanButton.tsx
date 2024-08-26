import { PlanObject, Plan, BillingMethod } from "../types/plan";

type PlanButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedPlan: Plan;
  plan: PlanObject;
  billingMethod: BillingMethod;
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
        selectedPlan.type === plan.type ? "planButton active" : "planButton"
      }
      data-type={plan.type}
      data-price={plan.price}
      data-billingmethod={billingMethod}
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
