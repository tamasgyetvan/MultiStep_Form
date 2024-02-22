type ButtonBarProps = {
  currentStep: number;
  incrementStep: (e: React.MouseEvent<HTMLButtonElement>) => void;
  decrementStep: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ButtonBar = ({
  currentStep,
  incrementStep,
  decrementStep,
}: ButtonBarProps) => {
  return (
    <section className="buttonBar">
      <>
        {currentStep !== 1 ? (
          <button className="backButton" onClick={decrementStep}>
            Go back
          </button>
        ) : null}
        {currentStep !== 4 ? (
          <button
            type="submit"
            form="personal"
            className="nextButton"
            onClick={incrementStep}
          >
            Next step
          </button>
        ) : (
          <button className="confirmButton" onClick={() => {}}>
            Confirm
          </button>
        )}
      </>
    </section>
  );
};
