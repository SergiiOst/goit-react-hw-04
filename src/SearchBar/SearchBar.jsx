import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    if (!values.query) {
      return toast.error("Please, enter your request!");
    }
    setQuery(values.query);
  };
  return (
    <header>
      <Toaster position="top-left" reverseOrder={false} />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="query"
            placeholder="Search images and photos"
            type="text"
            autoComplete="off"
            autoFocus
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
