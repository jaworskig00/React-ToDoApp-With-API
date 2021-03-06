import { Formik, Form, Field, ErrorMessage } from "formik";

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
          <button
            className="px-3 py-1 m-2 text-sm text-purple-600 font-semibold border rounded-full border-purple-200 hover:text-white hover:bg-purple-600"
            type="submit"
          >
            Add
          </button>
        </Form>
      </Formik>
    </aside>
  );
};
