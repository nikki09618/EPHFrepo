import React, { useReducer } from "react";
import { formReducer, initialState } from "../reducer/formReducer";
import "../styles/form.css";

export default function MultiStepForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { step, formData, isSubmitted } = state;

  const isStep1Valid = formData.name && formData.email;
  const isStep2Valid = formData.username && formData.password;

  if (isSubmitted) {
    return (
      <div className="form-container">
        <h2>✅ Registration Successful</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Register Again
        </button>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2>Step {step} of 3</h2>

      {step === 1 && (
        <>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "name",
                value: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
          />

          <button
            disabled={!isStep1Valid}
            onClick={() => dispatch({ type: "NEXT_STEP" })}
          >
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "username",
                value: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "password",
                value: e.target.value,
              })
            }
          />

          <div className="btn-group">
            <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
              Back
            </button>
            <button
              disabled={!isStep2Valid}
              onClick={() => dispatch({ type: "NEXT_STEP" })}
            >
              Next
            </button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className="review">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Username:</strong> {formData.username}</p>
          </div>

          <div className="btn-group">
            <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
              Back
            </button>
            <button
              className="submit"
              onClick={() => dispatch({ type: "SUBMIT_FORM" })}
            >
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
}
