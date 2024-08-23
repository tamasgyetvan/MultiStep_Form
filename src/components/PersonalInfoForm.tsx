import { SubmitHandler, useFormContext, FieldValues } from "react-hook-form";

export function PersonalInfoForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="personalInfoForm">
      <h1 className="formTitle">Personal info</h1>
      <p className="formDescription">
        Please provide your name, email address, and phone number.
      </p>
      <label>
        <div>
          <span>Name</span>
          {errors.name && <p>{`${errors.name.message}`}</p>}
        </div>
        <input
          {...register("name", {
            required: "This field is required",
            minLength: {
              value: 3,
              message: "Minimum 3",
            },
          })}
          type="text"
          name="name"
        />
      </label>
      <label>
        <div>
          <span>Email</span>
          {errors.email && <p>{`${errors.email.message}`}</p>}
        </div>
        <input
          {...register("email", {
            required: "This field is required",
            minLength: {
              value: 3,
              message: "Minimum 3",
            },
          })}
          type="text"
          name="email"
        />
      </label>
      <label>
        <div>
          <span>Phone</span>
          {errors.phone && <p>{`${errors.phone.message}`}</p>}
        </div>
        <input
          {...register("phone", {
            required: "This field is required",
            minLength: {
              value: 3,
              message: "Minimum 3",
            },
          })}
          type="text"
          name="phone"
        />
      </label>
    </section>
  );
}
