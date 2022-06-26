import { Formik, Form, Field, ErrorMessage } from "formik";

import { Button } from "../../Button/Button";

export const AddToDoFrom = ({ initialValues, handleSubmit }) => {
  return (
    <aside className="border rounded-lg p-3">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label className="underline" htmlFor="description">
            Add new task
          </label>
          <br />
          <Field
            className=" py-1 px-3 m-2 placeholder:italic bg-white border rounded-full"
            name="description"
            type="text"
            placeholder="Description"
          />
          <Button text="Add" style="submit" type="submit" />
        </Form>
      </Formik>
    </aside>
  );
};
