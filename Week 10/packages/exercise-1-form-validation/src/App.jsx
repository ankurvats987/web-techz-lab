import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  password: "",
};

function App() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const currentErrors = {};

    if (!formData.name.trim()) {
      currentErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      currentErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      currentErrors.email = "Enter a valid email address.";
    }

    if (!formData.password.trim()) {
      currentErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      currentErrors.password = "Password must be at least 6 characters.";
    }

    return currentErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <main className="page">
      <section className="card">
        <h1>User Form Validation</h1>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit">Submit</button>
        </form>
        {isSubmitted && <p className="success">Form submitted successfully.</p>}
      </section>
    </main>
  );
}

export default App;
