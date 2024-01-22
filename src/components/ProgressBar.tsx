import { Step } from "./Step";

type ProgressBarProps = {
  currentStep: number;
};
export const ProgressBar = ({ currentStep }: ProgressBarProps) => {
  return (
    <div className="progressBar">
      <Step
        stepNumber={1}
        title="Your info"
        active={currentStep === 1 ? true : false}
      />
      <Step
        stepNumber={2}
        title="Select plan"
        active={currentStep == 2 ? true : false}
      />
      <Step
        stepNumber={3}
        title="Add-ons"
        active={currentStep == 3 ? true : false}
      />
      <Step
        stepNumber={4}
        title="Summary"
        active={currentStep == 4 ? true : false}
      />
    </div>
  );
};
