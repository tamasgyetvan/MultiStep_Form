export const PersonalInfoForm = () => {
  return (
    <form className="personalInfoForm">
      <h1 className="formTitle">Personal info</h1>
      <p className="formDescription">
        Please provide your name, email address, and phone number.
      </p>

      <div className="formContainer">
        <label>
          Name
          <input type="text" name="" id="" />
        </label>
        <label>
          Email
          <input type="email" name="" id="" />
        </label>
        <label>
          Phone Number
          <input type="number" name="" id="" />
        </label>
      </div>
    </form>
  );
};
