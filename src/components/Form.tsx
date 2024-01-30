import { ProgressBar } from "./ProgressBar";
import { ButtonBar } from "./ButtonBar";
import { useState } from "react";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { useForm } from "react-hook-form";
export const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="multiStepForm">
      <ProgressBar currentStep={currentStep} />
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="personalInfoForm"
      >
        <h1 className="formTitle">Personal info</h1>
        <p className="formDescription">
          Please provide your name, email address, and phone number.
        </p>
        <label>
          {errors.name && <p>{`${errors.name.message}`}</p>}
          Name
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
          {errors.email && <p>{`${errors.email.message}`}</p>}
          Email
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
          {errors.phone && <p>{`${errors.phone.message}`}</p>}
          Phone
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

        <ButtonBar
          currentStep={currentStep}
          incrementStep={() => {}}
          decrementStep={() => {
            setCurrentStep(currentStep - 1);
          }}
        />
      </form>
    </div>
  );
};
