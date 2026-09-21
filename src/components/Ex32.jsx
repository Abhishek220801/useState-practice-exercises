// Implement a form with a state object containing firstName and lastName.

import { useState } from "react"

const Ex32 = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
  })
  return (
    <div>
      <form>
        <label>Firstname: </label>
        <input value={formValues.firstName} onChange={(e) => setFormValues({...formValues, firstName: e.target.value})} type="text" className="border"/>
        <label>Lastname: </label>
        <input value={formValues.lastName} onChange={(e) => setFormValues({...formValues, lastName: e.target.value })} type="text" className="border"/>
      </form>
      {formValues.firstName.length > 0 && formValues.lastName.length > 0 && <h1>Hello, {formValues.firstName} {formValues.lastName} !</h1>}
    </div>
  )
}

export default Ex32
