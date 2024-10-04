import { useFormContext } from "react-hook-form";

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
            required: true,
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters.",
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
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address.",
            },
          })}
          type="email"
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
            required: true,
            minLength: {
              value: 6,
              message: "Phone number must be at least 6 characters.",
            },
          })}
          type="number"
          name="phone"
        />
      </label>
    </section>
  );
}
