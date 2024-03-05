export function AddOnForm() {
  return (
    <form className="addOnForm">
      <h1 className="formTitle">Pick add-ons</h1>
      <p className="formDescription">
        Add-ons help enhance your gaming experience.
      </p>
      <label>
        <input type="checkbox" name="" id="" />
        <div className="infoContainer">
          <h3>Online service </h3>
          <p>Access to multiplayer games</p>
        </div>
        <p className="price">$10</p>
      </label>
      <label>
        <input type="checkbox" name="" id="" />
        <div className="infoContainer">
          <h3>Larger storage</h3>
          <p>Extra 1TB of cloud save</p>
        </div>
        <p className="price">$10</p>
      </label>
      <label>
        <input type="checkbox" name="" id="" />
        <div className="infoContainer">
          <h3>Customizable profile</h3>
          <p>Custom theme on your profile</p>
        </div>
        <p className="price">$10</p>
      </label>
    </form>
  );
}
