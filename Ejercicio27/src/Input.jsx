export const Input = ({ label, type, id, value, onChange, error }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};
