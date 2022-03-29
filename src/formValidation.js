import React, { useState, useEffect } from "react";
import { omit } from "lodash";

const useForm = () => {
  //Form values
  const [values, setValues] = useState({});
  //Errors
  const [errors, setErrors] = useState({});
  const [checkbox, setCheckbox] = useState({});
  const [tigerField, setTigerField] = useState({});

  //   const tigerCheckedBox = document.querySelectorAll("input[name=tiger_type]");

  const validate = (event, name, value) => {
    switch (name) {
      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;

      case "password":
        if (value.length <= 7) {
          setErrors({
            ...errors,
            password: "Password should contains at least 8 characters or more ",
          });
        } else {
          let newObj = omit(errors, "password");

          setErrors(newObj);
        }
        break;

      case "animal":
        const checkedBoxes = document.querySelectorAll(
          "input[name=animal]:checked"
        );
        var boxesTicked = 0;
        for (let i = checkedBoxes.length - 1; i >= 0; i--) {
          if (checkedBoxes[i].checked) {
            boxesTicked++;
          }
        }

        if (boxesTicked > 1) {
          let newObj = omit(checkbox, "checkbox");
          setCheckbox(newObj);
        } else {
          setCheckbox({
            ...checkbox,
            checkbox: "You must select at least two",
          });
        }

        break;

      case "tiger_type":
        const tigerCheckedBox = document.querySelectorAll(
          "input[name=tiger_type]"
        )[0].disabled;

        const tigerInput = document.querySelectorAll("input[name=tiger_type]");

        if (!tigerCheckedBox && event.target.value.length !== 0) {
          let newObj = omit(tigerField, "tiger_type");
          setTigerField(newObj);
        } else {
          setTigerField({
            ...tigerField,
            tiger_type: "Please input a tiger type ",
          });
        }

        break;
      //   default:
      //     break;
    }
  };

  //A method to handle form inputs
  const handleChange = (event) => {
    //To stop default events
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);
    //Let's set these values in state

    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    const tigerCheckedBox = document.querySelectorAll(
      "input[name=tiger_type]"
    )[0].disabled;

    if (!tigerCheckedBox) {
      if (
        Object.keys(errors).length === 0 &&
        Object.keys(checkbox).length === 0 &&
        Object.keys(tigerField).length === 0 &&
        Object.keys(values).length === 4
      ) {
        alert("Form Submitted!!");
      } else {
        alert("FIll in the whole form");
      }
    } else {
      if (
        Object.keys(errors).length === 0 &&
        Object.keys(checkbox).length === 0 &&
        Object.keys(tigerField).length === 0 &&
        Object.keys(values).length === 3
      ) {
        alert("Form Submitted!!!");
      } else {
        alert("FIll in the whole form");
      }
    }
  };

  return {
    values,
    errors,
    checkbox,
    tigerField,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
