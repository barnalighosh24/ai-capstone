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
  const [errors, setErrors] = useState({})

  const validate = (data) => {
    const errs = {}
    if (!data.name || !data.name.toString().trim()) {
      errs.name = 'Full name is required.'
    }
    if (!data.email || !data.email.toString().trim()) {
      errs.email = 'Email is required.'
    } else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!re.test(data.email)) errs.email = 'Enter a valid email address.'
    }
    return errs
  }

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    const newValue = type === 'checkbox' ? checked : value
    const newData = { ...formData, [name]: newValue }
    setFormData(newData)
    setErrors(validate(newData))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const currentErrors = validate(formData)
    setErrors(currentErrors)
    if (Object.keys(currentErrors).length === 0) {
      setMessage(`Settings updated for ${formData.name}.`)
    }
  }

  return (
    <main className="settings-page">
      <section className="settings-card">
        <div className="settings-header">
          <p className="eyebrow">Preferences</p>
          <h1>Settings</h1>
          <p>Manage your account details and how you receive updates.</p>
        </div>

        <form className="settings-form" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name ? (
              <p id="name-error" className="error-text" role="alert">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email ? (
              <p id="email-error" className="error-text" role="alert">
                {errors.email}
              </p>
            ) : null}
          </div>

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