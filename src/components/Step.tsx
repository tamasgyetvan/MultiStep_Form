type StepProps = {
  stepNumber: number;
  title: string;
  active: boolean;
};

export const Step = ({ stepNumber, title, active }: StepProps) => {
  return (
    <div className="step">
      <p className={active ? "stepNumber active" : "stepNumber"}>
        {stepNumber}
      </p>
      <div className="infoWrapper">
        <p className="stepText">{"Step " + stepNumber}</p>
        <h2 className="title">{title}</h2>
      </div>
    </div>
  );
};
