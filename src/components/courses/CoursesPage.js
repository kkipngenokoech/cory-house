import React from "react";
import { Field, Form, Formik } from "formik";

export default function CoursesPage() {
  const courses = { title: "", lecturer: "", room: "" };

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <div>
      <h2>Courses</h2>
      <Formik initialValues={courses} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <h3>Add course</h3>
            <div>
              <label htmlFor="title">Title:</label>
              <Field
                type="text"
                id="title"
                name="title"
                placeholder="Course Title"
              />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
