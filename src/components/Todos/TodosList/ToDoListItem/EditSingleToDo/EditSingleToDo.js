import { Formik, Form, Field } from "formik";

import { api } from "../../../../../utils/api";
import { Button } from "../../../../Button/Button";

export const EditSingleToDo = ({ toDoId, handleEditCancel }) => {
  const initialValues = {
    description: "",
  };

  const handleEdit = async (values) => {
    handleEditCancel();
    await api.put("/task/" + toDoId, { description: values.description });
    console.log("Task updated");
  }; // obsługa edycji z api

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
            <Button text="Confirm" style="submit" type="submit" />
            <Button text="Cancel" style="cancel" click={handleEditCancel} />
          </div>
        </Form>
      </Formik>
    </aside>
  );
};
