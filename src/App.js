import React from "react";
import "./App.css";
import useForm from "./formValidation";
function App() {
  //Custom hook call
  const { handleChange, values, errors, checkbox, tigerField, handleSubmit } =
    useForm();
  
  const tigerCheckedBox = document.querySelectorAll(
    "input[value=tiger]:checked"
  ).length;

  return (
    <div className="App">
      <form id="sectionForm" method="post" action="" onSubmit={handleSubmit}>
        <h1>Fill out this awesome form</h1>
        <fieldset>
          <h3>Your details</h3>

          <p className={errors.email ? "error" : null}>
            <label className="label" for="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
            />
          </p>
          <p className={errors.password ? "error" : null}>
            <label className="label" for="password">
              Password
            </label>
            <input
              className="error"
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />
          </p>
        </fieldset>

        <fieldset>
          <h3>Your animal</h3>
          <p>
            <label className="label" for="colour">
              Colour
            </label>
            <select name="colour" id="colour" required>
              <option value="">Choose colour</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="black">Black</option>
              <option value="brown">Brown</option>
            </select>
          </p>
          <p className={checkbox.checkbox ? "error" : null}>
            <span className="label">Animal</span>

            <input
              type="checkbox"
              name="animal"
              value="bear"
              id="bear"
              onChange={handleChange}
            />
            <label for="bear">Bear</label>

            <input
              type="checkbox"
              name="animal"
              value="tiger"
              id="tiger"
              onChange={handleChange}
            />
            <label for="tiger">Tiger</label>

            <input
              type="checkbox"
              name="animal"
              value="snake"
              id="snake"
              onChange={handleChange}
            />
            <label for="snake">Snake</label>

            <input
              type="checkbox"
              name="animal"
              value="donkey"
              id="donkey"
              onChange={handleChange}
            />
            <label for="donkey">Donkey</label>
          </p>
          <p className={tigerField.tiger_type ? "error" : null}>
            <label className="label" for="tiger_type">
              Type of tiger
            </label>

            <input
              type="text"
              name="tiger_type"
              id="tiger_type"
              disabled={tigerCheckedBox === 1 ? false : true}
              onChange={handleChange}
            />
          </p>
        </fieldset>
        <fieldset>
          <p>
            <input type="submit" value="Create account" />
          </p>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
