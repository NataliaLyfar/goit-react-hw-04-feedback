import PropTypes from 'prop-types';
import Title from './Header.styled';

const Header = ({title}) => {
    return <Title>{title}</Title>
};

Header.propTypes = {
    title: PropTypes.string,
};

export default Header;