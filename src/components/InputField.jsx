
import PropTypes from "prop-types";

const InputField = ({
  placeholder,
  type,
  id,
  name,
  register,
  error,
  pattern,
  patternMessage,
}) => (
  <div>
    <div className={`${error ? "error-input" : ""}`}>
      <input
        placeholder={placeholder}
        type={type || "text"}
        id={id}
        {...register(name, {
          required: `${id} is required`,
          pattern: {
            value: pattern,
            message: patternMessage || "Invalid input format",
          },
        })}
        className="w-[270px] p-2 border-b border-gray"
      />
    </div>
    <p className="text-primaryred text-xs tracking-normal">{error?.message}</p>
  </div>
);

InputField.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  register: PropTypes.func.isRequired,
  error: PropTypes.object,
  pattern: PropTypes.instanceOf(RegExp),
  patternMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default InputField;
