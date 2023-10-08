import React from 'react';
import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/flatpickr.css";
import { Field, Form, Formik } from 'formik';

const FlatpickrInput = ({ field, form, ...props }) => {
  return (
    <div className="panel">
      <div className="mb-5">
        <h5 className="text-lg font-semibold dark:text-white-light">
          Basic Date Only
        </h5>
      </div>
      <div className="mb-5">
        <Flatpickr
          options={{
            dateFormat: 'Y-m-d',
          }}
          value={field.value}
          onChange={(date) => {
            form.setFieldValue(field.name, date[0]);
            form.setFieldTouched(field.name, true);
          }}
          {...props}
          className="form-input" // Add your custom class directly to the Flatpickr component
        />
      </div>
    </div>
  );
};

const MyForm = () => {
  return (
    <Formik
      initialValues={{ date: "2022-07-05" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <label htmlFor="date">Select a date</label>
        <Field name="date" component={FlatpickrInput} />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default MyForm;
