import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

function Header(props) {
    const headerStyle = { 
        backgroundColor: props.bgColor, 
        color: props.textColor,
    }

  return (
    <header style={headerStyle}>
        <div className="container">
            <h2>{props.text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0, 0, 0, 0.4)',
    textColor: '#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header
