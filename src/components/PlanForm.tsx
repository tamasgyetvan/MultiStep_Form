import { PlanType } from "../types/plan";

type PlanFormProps = {
  handleClick: (e: any) => void;
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
        <button
          onClick={handleClick}
          className={
            selectedPlan === "arcade" ? "planButton active" : "planButton"
          }
          value="arcade"
        >
          <img src="public/images/icon-arcade.svg" alt="" />
          <div className="info">
            <h3>Arcade</h3>
            <p>$9/mo</p>
          </div>
        </button>
        <button
          onClick={handleClick}
          className={
            selectedPlan === "advanced" ? "planButton active" : "planButton"
          }
          value="advanced"
        >
          <img src="public/images/icon-advanced.svg" alt="" />
          <div className="info">
            <h3>Advanced</h3>
            <p>$12/mo</p>
          </div>
        </button>
        <button
          onClick={handleClick}
          className={
            selectedPlan === "pro" ? "planButton active" : "planButton"
          }
          value="pro"
        >
          <img src="public/images/icon-pro.svg" alt="" />
          <div className="info">
            <h3>Pro</h3>
            <p>$15/mo</p>
          </div>
        </button>
      </div>
    </section>
  );
}
