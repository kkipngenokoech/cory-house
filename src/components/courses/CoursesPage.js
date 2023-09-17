import React from "react";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { createCourse } from "../../Redux/Actions/CourseActions";

function CoursesPage({ courses, createCourse }) {
  const initialValues = { title: "", lecturer: "", room: "" };

  function handleSubmit(values) {
    createCourse(values);
  }

  return (
    <div>
      <h2>Courses</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
      <div>
        <h3>Course List:</h3>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>
              Title: {course.title}, Lecturer: {course.lecturer}, Room:{" "}
              {course.room}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses,
  };
}

export default connect(mapStateToProps, { createCourse })(CoursesPage);
