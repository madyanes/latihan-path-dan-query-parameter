import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MovieItem({ id, title, backdropPath, overview }) {
  return (
    <article>
      <img src={backdropPath} alt={title} />
      <h3>
        <Link to={`/movies/${id}`}>{title}</Link>
      </h3>
      <p>{overview}</p>
    </article>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backdropPath: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired
};

export default MovieItem;
