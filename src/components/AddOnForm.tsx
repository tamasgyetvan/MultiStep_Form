import { useFormContext } from "react-hook-form";
import data from "../data/addon.json";
import { Addon } from "../types/addon";
import { BillingMethod } from "../types/plan";

type AddOnFormProps = {
  billingMethod: BillingMethod;
};
export function AddOnForm({ billingMethod }: AddOnFormProps) {
  const { register } = useFormContext();
  return (
    <section className="addOnForm">
      <h1 className="formTitle">Pick add-ons</h1>
      <p className="formDescription">
        Add-ons help enhance your gaming experience.
      </p>
      {data.map((addon: Addon) => {
        return (
          <label>
            <input
              {...register("addons")}
              type="checkbox"
              value={addon.title}
            />
            <div className="infoContainer">
              <h3>{addon.title}</h3>
              <p>{addon.text}</p>
            </div>
            <p className="price">
              {billingMethod == "monthly"
                ? `$${addon.monthlyPrice}/mo`
                : `$${addon.yearlyPrice}/yr`}
            </p>
          </label>
        );
      })}
    </section>
  );
}
