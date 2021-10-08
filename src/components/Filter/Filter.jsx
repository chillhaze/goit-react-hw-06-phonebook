import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Search by name</h2>

      <input
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={value}
        onChange={onChange}
        className={css.input}
      />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
