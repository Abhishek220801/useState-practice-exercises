// Create an object state that stores multiple settings and updates only selected values.

import { useState } from "react"

const Ex49 = () => {
    const [settings, setSettings] = useState({
        notifications: false,
        darkMode: true,
        autoDebit: false
    })

    const handleChange = (e) => {
        const checkbox = e.target;
        const key = checkbox.name;
        const val = checkbox.checked;

        setSettings({
            ...settings,
            [key]: val
        })
    }
  return (
    <div>
      <div className="flex flex-col m-24">
        <div className="flex gap-3">
          <input checked={settings.notifications} type="checkbox" name="notifications" onChange={handleChange}/>
          <label>Notifications: {settings.notifications.toString()}</label>
        </div>

        <div className="flex gap-3">
          <input checked={settings.darkMode} type="checkbox" name="darkMode" onChange={handleChange}/>
          <label>Dark mode: {settings.darkMode.toString()}</label>
        </div>

        <div className="flex gap-3">
          <input checked={settings.autoDebit} type="checkbox" name="autoDebit" onChange={handleChange}/>
          <label>Auto Debit: {settings.autoDebit.toString()}</label>
        </div>
      </div>
    </div>
  )
}

export default Ex49
