import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: 'Ava',
    email: 'ava@example.com',
    notifications: true,
    language: 'English',
    theme: 'dark',
  })
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage(`Settings updated for ${formData.name}.`)
  }

  return (
    <main className="settings-page">
      <section className="settings-card">
        <div className="settings-header">
          <p className="eyebrow">Preferences</p>
          <h1>Settings</h1>
          <p>Manage your account details and how you receive updates.</p>
        </div>

        <form className="settings-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Email address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label className="checkbox-row">
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleChange}
            />
            Enable email notifications
          </label>

          <label>
            Language
            <select name="language" value={formData.language} onChange={handleChange}>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </label>

          <fieldset>
            <legend>Theme</legend>
            <label className="radio-row">
              <input
                type="radio"
                name="theme"
                value="light"
                checked={formData.theme === 'light'}
                onChange={handleChange}
              />
              Light
            </label>
            <label className="radio-row">
              <input
                type="radio"
                name="theme"
                value="dark"
                checked={formData.theme === 'dark'}
                onChange={handleChange}
              />
              Dark
            </label>
          </fieldset>

          <button type="submit">Save changes</button>
        </form>

        {message ? <p className="success-message">{message}</p> : null}
      </section>
    </main>
  )
}

export default App
