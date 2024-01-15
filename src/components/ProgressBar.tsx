import { Step } from "./Step";

export const ProgressBar = () => {
  return (
    <div className="progressBar">
      <Step stepNumber={1} title="Your info" active={false} />
      <Step stepNumber={2} title="Select plan" active={false} />
      <Step stepNumber={3} title="Add-ons" active={false} />
      <Step stepNumber={4} title="Summary" active={false} />
    </div>
  );
};
