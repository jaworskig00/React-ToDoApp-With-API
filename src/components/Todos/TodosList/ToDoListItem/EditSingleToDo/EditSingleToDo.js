import { Formik, Form, Field } from "formik";

<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "../../../../Button/Button";

=======
>>>>>>> 49f364d (Moved handle funcions to edit and delete components)
export const EditSingleToDo = ({ handleEditCancel }) => {
=======
import { api } from "../../../../../utils/api";

export const EditSingleToDo = ({ toDoId, description, handleEditCancel }) => {
>>>>>>> c0580f4 (Added editing and deleting todos with API)
  const initialValues = {
    description: description,
  };

  const handleEdit = async (values) => {
    try {
    await api.put(`/task/${toDoId}`, { description: values.description });
    } catch (err) {
      console.error(err);
      // return; -> przerwanie wykonywania funkcji
    }
    handleEditCancel();
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
