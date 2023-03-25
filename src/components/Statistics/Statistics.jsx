import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section class={css.statistics}>
      {title && <h2 class={css.title}>{title}</h2>}

      <ul class={css.list}>
        {stats.map(stat => (
          <li key={stat.id} class={css.item}>
            <span class={css.label}>{stat.label}</span>
            <span class={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
