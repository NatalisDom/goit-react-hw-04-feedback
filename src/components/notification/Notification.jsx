import PropTypes from 'prop-types';
import css from 'components/notification/Notification.module.css';

export const Notification = ({ message }) => {
  return <p className={css.stat}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
