import { BillingMethod } from "../types/plan";

type TogglerProps = {
  handleChange: (e: React.ChangeEvent) => void;
  billingMethod: BillingMethod;
};

export function Toggler({ handleChange, billingMethod }: TogglerProps) {
  return (
    <section className="toggler">
      <p>Monthly</p>
      <label className="switch">
        <input
          onChange={handleChange}
          type="checkbox"
          checked={billingMethod == "yearly" ? true : false}
        />
        <span className="slider round"></span>
      </label>
      <p>Yearly</p>
    </section>
  );
}
