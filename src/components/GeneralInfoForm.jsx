// Form to capture general info like `First Name`, `Last Name`, `Phone`, `Location`, and `Email`.
function GeneralInfoForm() {
  return (
    <div>
      <h1>General Info</h1>
      <form className='info-form'>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' id='firstName' name='firstName' />
        <label htmlFor='lastName'>Last Name</label>
        <input type='text' id='lastName' name='lastName' />
        <label htmlFor='phone'>Phone</label>
        <input type='text' id='phone' name='phone' />
        <label htmlFor='location'>Location</label>
        <input type='text' id='location' name='location' />
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' name='email' />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export { GeneralInfoForm };
