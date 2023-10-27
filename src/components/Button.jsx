import PropTypes from 'prop-types';

function Button({ type, value, text, disabled }) {
  return (
    <button type={type} value={value} disabled={disabled}>
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export { Button };
