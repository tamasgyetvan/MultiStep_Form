import { useFormContext } from "react-hook-form";

type ButtonBarProps = {
  currentStep: number;
  incrementStep: () => void;
  decrementStep: () => void;
};

export const ButtonBar = ({
  currentStep,
  incrementStep,
  decrementStep,
}: ButtonBarProps) => {
  if (currentStep == 5) {
    return null;
  }
  const { trigger } = useFormContext();
  return (
    <section className="buttonBar">
      <>
        {currentStep != 1 ? (
          <button className="backButton" onClick={decrementStep}>
            Go back
          </button>
        ) : null}
        {currentStep == 1 ? (
          <button
            className="nextButton"
            onClick={async () => {
              const output = await trigger();

              if (output == true) {
                incrementStep();
              }
            }}
          >
            Next step
          </button>
        ) : currentStep == 2 ? (
          <button type="button" className="nextButton" onClick={incrementStep}>
            Next step
          </button>
        ) : currentStep == 3 ? (
          <button type="button" className="nextButton" onClick={incrementStep}>
            Next step
          </button>
        ) : currentStep == 4 ? (
          <button
            type="submit"
            className="confirmButton"
            onClick={incrementStep}
          >
            Confirm
          </button>
        ) : null}
      </>
    </section>
  );
};
