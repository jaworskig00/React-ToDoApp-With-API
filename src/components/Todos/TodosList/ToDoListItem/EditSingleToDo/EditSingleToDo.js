import { Formik, Form, Field } from "formik";

<<<<<<< HEAD
import { Button } from "../../../../Button/Button";

=======
>>>>>>> 49f364d (Moved handle funcions to edit and delete components)
export const EditSingleToDo = ({ handleEditCancel }) => {
  const initialValues = {
    description: "",
  };

  const handleEdit = () => {
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
