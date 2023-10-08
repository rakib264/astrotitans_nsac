"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { MdEmail, MdCall } from "react-icons/md";
import { isNull } from "lodash";

const animatedComponents = makeAnimated();

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email!").required("Email is required"),
  phone: Yup.string()
    .min(6, "Phone Number must contain 11 letters")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),

  demands: Yup.array() // Validation for the multi-select option
    .of(
      Yup.object().shape({
        value: Yup.string().required("Select a valid option"),
        label: Yup.string().required("Select a valid option"),
      })
    )
    .min(1, "Select at least one option")
    .required("Your demands is required"),
  agreeWith: Yup.bool().required("Required"),
});

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#1E1C4B",
    padding: "5px 0px",
    borderColor: "black",
    color: "white",
  }),

  menu: (provided) => ({
    ...provided,
    backgroundColor: "#1E1C4B",
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "blue" : "#1E1C4B",
    color: state.isSelected ? "white" : "white",
    "&:hover": {
      backgroundColor: "gray",
    },
  }),

  singleValue: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "red" : "white",
  }),

  multiValueRemove: (provided) => ({
    ...provided,
    color: "black", // Set the color of the close icon to black
    ":hover": {
      backgroundColor: "#fbcfe8", // Optional: Change the background color on hover
      color: "red", // Optional: Change the close icon color on hover
    },
  }),
};

const CustomSelect = ({ field, form, options, ...props }) => {
  const handleChange = (selectedOption) => {
    form.setFieldValue(field.name, selectedOption);
  };

  return (
    <Select
      {...field}
      {...props}
      options={options}
      onChange={handleChange}
      onBlur={() => form.setFieldTouched(field.name, true)}
      styles={customStyles}
      isMulti
      components={animatedComponents}
    />
  );
};

const CustomeErrorMessage = ({ children }) => {
  return (
    <div className="py-2 text-rose-400 text-sm font-semibold">{children}</div>
  );
};

const Register = React.memo(() => {
  const options = [
    {
      value: "earth sub-orbital exploration",
      label: "Earth Sub-Orbital Exploration",
    },
    { value: "earth orbital exploration", label: "Earth Orbital Exploration" },
    { value: "mars exploration", label: "Mars Exploration" },
    { value: "others", label: "Others" },
  ];

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    demands: "",
    agreeWith: false,
  };

  const onSubmit = (values) => {
    console.log("Values: ", values);
  };
  return (
    <div className="max-w-7xl mx-auto px-16 py-16 lg:px-20 lg:py-24 bg-blue-950 shadow-md shadow-primary">
      <div className="grid grid-cols-3 gap-4 divide-x-2 pb-12">
        <div className="col-span-3 lg:col-span-1">
          <div className="px-6">
            <h2 className="text-2xl text-gray-900 dark:text-white font-bold">
              Hazrat Shimanto
            </h2>
            <p className=" pt-2 text-md text-gray-600 dark:text-white">
              Marketing and Communications Manager
            </p>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <div className="flex items-center gap-2 px-6">
            <MdEmail className="w-6 h-6 text-gray-900 dark:text-white" />
            <p className=" pt-2 text-lg text-gray-800 dark:text-white">
              astrotitansp@gmail.com
            </p>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <div className="flex items-center gap-2 px-6">
            <MdCall className="w-6 h-6 text-gray-900 dark:text-white" />
            <p className=" pt-2 text-lg text-gray-800 dark:text-white">
              +88 - 01828123264
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-4xl text-gray-900 dark:text-white font-bold pb-6 uppercase text-center border-b-2 border-mainSecondary">
        Book Now
      </h2>
      <Formik
        initialValues={initialValues}
        // initialValues={{ ...initialValues, gender: savedGender }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="px-8 py-12">
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <div className="py-2.5">
                  <label
                    className="text-gray-900 dark:text-white"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <Field
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Redwan"
                    className="form-input"
                  />
                  <ErrorMessage
                    name="firstName"
                    component={CustomeErrorMessage}
                  />
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="py-2.5">
                  <label
                    className="text-gray-900 dark:text-white "
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <Field
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Rakib"
                    className="form-input"
                  />
                  <ErrorMessage
                    name="lastName"
                    component={CustomeErrorMessage}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <div className="py-2.5">
                  <label
                    className="text-gray-900 dark:text-white"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="doe@mail.com"
                    className="form-input"
                  />
                  <ErrorMessage name="email" component={CustomeErrorMessage} />
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="py-2.5">
                  <label
                    className="text-gray-900 dark:text-white"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <Field
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="+88 - 0182643..."
                    className="form-input"
                  />
                  <ErrorMessage name="phone" component={CustomeErrorMessage} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <div className="py-2.5">
                  <label
                    className="text-gray-900 dark:text-white"
                    htmlFor="demands"
                  >
                    What topic do you wish to discuss with us?
                  </label>
                  <Field
                    name="demands"
                    id="demands"
                    placeholder="Select one..."
                    options={options}
                    component={CustomSelect}
                  />
                  <ErrorMessage
                    name="demands"
                    component={CustomeErrorMessage}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <div className="py-2.5">
                  <label
                    className="text-gray-900 dark:text-white"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    id="message"
                    placeholder="Type your message..."
                    className="form-input"
                    style={{ minHeight: "8rem" }}
                  />
                  <ErrorMessage
                    name="message"
                    component={CustomeErrorMessage}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <div className="py-2.5">
                  <label className="inline-flex gap-2">
                    <Field
                      type="checkbox"
                      name="agreeWith"
                      className="peer form-checkbox"
                    />
                    <span className="peer-checked:text-primary dark:text-white">
                      I agree to AstroTitan's privacy policy and Terms of Use
                    </span>
                  </label>
                  <ErrorMessage
                    name="agreeWith"
                    component={CustomeErrorMessage}
                  />
                </div>
              </div>
            </div>

            {/* <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <button
                  className="btn btn-primary w-full mt-2.5 py-2.5"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </div> */}
          </div>
        </Form>
      </Formik>
    </div>
  );
});

export default Register;
