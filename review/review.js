import PropTypes from 'prop-types'

function Movie ({img, title, text, genres}) {
  return (
    <div>
      <img src={img} />
      <h1>{title}</h1>
      <p>{text}</p>
      <ul>
        {genres.map((genre)=><li>{genre}</li>)}
      </ul>
    </div>
  );  
};

Movie.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;