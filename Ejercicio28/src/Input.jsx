export const Input = ({ label, type, id, error, register }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        {...register}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};
