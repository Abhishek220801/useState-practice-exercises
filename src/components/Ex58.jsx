//  Create a form that resets only specific fields when a reset button is clicked.

const Ex58 = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Fullname" className="border border-red-500"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>

        <button className="bg-green-400 text-white px-4 py-1 rounded-2xl">Submit</button>
      </form>
    </div>
  )
}

export default Ex58
