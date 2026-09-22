// Build a settings page where users can enable or disable different options dynamically.

// Create an object state that stores multiple settings and updates only selected values.

import { useState } from "react"

const Ex50 = () => {
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
    <div className="min-h-screen" style={{backgroundColor: settings.darkMode ? "#000" : "#fff", padding: 20}}>
      <div className="flex flex-col">
        <div className="flex gap-3">
          <input checked={settings.notifications} type="checkbox" name="notifications" onChange={handleChange}/>
          <label className="text-gray-500">Notifications: {settings.notifications.toString()}</label>
        </div>

        <div className="flex gap-3">
          <input checked={settings.darkMode} type="checkbox" name="darkMode" onChange={handleChange}/>
          <label className="text-gray-500">Dark mode: {settings.darkMode.toString()}</label>
        </div>

        <div className="flex gap-3">
          <input checked={settings.autoDebit} type="checkbox" name="autoDebit" onChange={handleChange}/>
          <label className="text-gray-500">Auto Debit: {settings.autoDebit.toString()}</label>
        </div>
      </div>

      {settings.notifications && <div className="bg-blue-500 p-6 rounded-lg fixed bottom-12 right-12 text-white">
        <h1 className="text-gray-300">We will shortly be in touch with you!</h1>
      </div>}
    </div>
  )
}

export default Ex50

