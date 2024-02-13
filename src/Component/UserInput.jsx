import { useState } from "react";

export default function UserInput({ userInputs, onChangeValue }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Invetment</label>
          <input
            type="number"
            value={userInputs.initialInvestment}
            onChange={(event) =>
              onChangeValue("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Annual Invetment</label>
          <input
            type="number"
            value={userInputs.annualInvestment}
            onChange={(event) =>
              onChangeValue("annualInvestment", event.target.value)
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInputs.expectedReturn}
            onChange={(event) => onChangeValue("expectedReturn", event.target.value)}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInputs.duration}
            onChange={(event) => onChangeValue("duration", event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
