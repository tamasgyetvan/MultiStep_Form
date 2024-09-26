import { BillingMethod, Plan } from "../types/plan";
import data from "../data/addon.json";
import { Addon } from "../types/addon";
import { useFormContext } from "react-hook-form";
type SummaryPageProps = {
  selectedPlan: Plan;
  billingMethod: BillingMethod;
};

export function SummaryPage({ selectedPlan, billingMethod }: SummaryPageProps) {
  const { getValues } = useFormContext();
  const formValues = getValues();
  let selectedAddons = data.filter((item: Addon) =>
    formValues.addons.includes(item.title)
  );

  function getTotalPrice() {
    let planPrice = selectedPlan.price;
    if (billingMethod == "yearly") {
      return selectedAddons.reduce(
        (acc, curr) => acc + curr.yearlyPrice,
        planPrice
      );
    }

    return selectedAddons.reduce(
      (acc, curr) => acc + curr.monthlyPrice,
      planPrice
    );
  }

  const totalPrice = getTotalPrice();
  return (
    <section className="summaryPage">
      <h1 className="formTitle">Finishing-up</h1>
      <p className="formDescription">
        Double-check everything looks OK before confirming.
      </p>
      <div className="summaryContainer">
        <div className="planContainer">
          <h4 className="planTitle">{`${selectedPlan.type}`}</h4>
          <button className="navigate">Change</button>
          <span className="priceTag">
            {billingMethod == "yearly"
              ? `$${selectedPlan.price}/yr`
              : `$${selectedPlan.price}/mo`}
          </span>
        </div>
        {selectedAddons.length !== 0 && (
          <div className="addonContainer">
            {selectedAddons.map((addon: Addon) => {
              return (
                <div className="addon">
                  <h5>{addon.title}</h5>
                  <span className="priceTag">
                    {billingMethod == "yearly"
                      ? `$${addon.yearlyPrice}/yr`
                      : `$${addon.monthlyPrice}/mo`}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="total">
        <h5>
          {billingMethod == "yearly" ? "Total (per year)" : "Total (per month)"}
        </h5>
        <span className="totalPrice">
          {billingMethod == "yearly" ? `${totalPrice}/yr` : `${totalPrice}/mo`}
        </span>
      </div>
    </section>
  );
}
