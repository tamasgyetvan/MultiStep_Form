import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormHandleSubmit,
} from "react-hook-form";

type AddonFormProps = {
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  onSubmit: (data: any) => void;
};

export function AddOnForm({
  errors,
  register,
  handleSubmit,
  onSubmit,
}: AddonFormProps) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="addOnForm">
      <h1 className="formTitle">Pick add-ons</h1>
      <p className="formDescription">
        Add-ons help enhance your gaming experience.
      </p>
      <label>
        <input {...register("addons")} type="checkbox" value="Online Service" />
        <div className="infoContainer">
          <h3>Online service </h3>
          <p>Access to multiplayer games</p>
        </div>
        <p className="price">$10</p>
      </label>
      <label>
        <input {...register("addons")} type="checkbox" value="Larger Storage" />
        <div className="infoContainer">
          <h3>Larger storage</h3>
          <p>Extra 1TB of cloud save</p>
        </div>
        <p className="price">$10</p>
      </label>
      <label>
        <input
          {...register("addons")}
          type="checkbox"
          value="Customizable Profile"
        />
        <div className="infoContainer">
          <h3>Customizable profile</h3>
          <p>Custom theme on your profile</p>
        </div>
        <p className="price">$10</p>
      </label>
      <button type="submit"></button>
    </form>
  );
}
