type TogglerProps = {
  handleChange: (e: React.ChangeEvent) => void;
};

export function Toggler({ handleChange }: TogglerProps) {
  return (
    <section className="toggler">
      <p>Monthly</p>
      <label className="switch">
        <input onChange={handleChange} type="checkbox" />
        <span className="slider round"></span>
      </label>
      <p>Yearly</p>
    </section>
  );
}
