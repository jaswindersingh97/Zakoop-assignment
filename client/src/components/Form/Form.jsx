import React, { useState } from "react";
import styles from './style.module.css'; // Import CSS Module

const Form = ({ fields, onSubmit, buttonLabel }) => {
  const [formValues, setFormValues] = useState(() =>
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Add loading state

  const validate = () => {
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required && !formValues[field.name]) {
        newErrors[field.name] = `${field.label || field.name} is required`;
      } else if (
        field.validate &&
        !field.validate(formValues[field.name], formValues)
      ) {
        newErrors[field.name] = field.errorMessage || "Invalid value";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true); // Disable button
      try {
        const filteredValues = Object.fromEntries(
          Object.entries(formValues).filter(([_, value]) => value !== "")
        );
        await onSubmit(filteredValues); // Wait for API handling
      } catch (error) {
        console.error("Error during submission:", error);
      } finally {
        setIsSubmitting(false); // Re-enable button
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {fields.map((field) => (
        <div key={field.name} className={styles.formGroup}>
          <label htmlFor={field.name} className={styles.label}>
            {field.label || field.name}
          </label>
          <input
            type={field.type || "text"}
            id={field.name}
            name={field.name}
            value={formValues[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            className={styles.input}
          />
          {errors[field.name] && (
            <span className={styles.error}>{errors[field.name]}</span>
          )}
        </div>
      ))}
      <button
        className={styles.authButton}
        type="submit"
        disabled={isSubmitting} // Disable when loading
      >
        {isSubmitting ? "Submitting..." : buttonLabel}
      </button>
    </form>
  );
};

export default Form;
