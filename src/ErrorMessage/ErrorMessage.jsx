import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <p className={s.errorMessage}>Oops! Something went wrong. Try again</p>
  );
};

export default ErrorMessage;
