import { Formik, Form, Field } from "formik";

const initialValues = {
  description: "",
};

export const EditSingleToDo = ({ handleEdit, handleEditCancel }) => {
  return (
    <aside className="min-w-full flex flex-col items-center">
      <Formik initialValues={initialValues} onSubmit={handleEdit}>
        <Form className="w-9/12 flex flex-col items-center">
          <div>
            <label className="underline " htmlFor="description">
              Type new description
            </label>
            <Field
              className=" py-1 px-3 m-2 min-w-full placeholder:italic bg-white border rounded-full"
              name="description"
              type="text"
              placeholder="Description"
            />
          </div>
          <div>
            <button
              className="px-3 py-1 m-2 text-sm text-purple-600 font-semibold border rounded-full border-purple-200 hover:text-white hover:bg-purple-600"
              type="submit"
            >
              Confirm
            </button>
            <button
              className="px-3 py-1 m-2 text-sm text-red-500 font-semibold border rounded-full border-red-200 hover:text-white hover:bg-red-500"
              onClick={() => {
                handleEditCancel();
              }}
            >
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </aside>
  );
};
