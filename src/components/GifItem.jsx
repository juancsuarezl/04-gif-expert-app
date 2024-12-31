import PropTypes from "prop-types";

const GifItem = ({ title, url }) => {
  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}

GifItem.proptypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default GifItem;
