import PropTypes from 'prop-types';
import styled from 'styled-components';

const Subtitle = styled.h2`
font-size: ${p => p.theme.fontSizes.xl};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.secondary};
`;

export const Section = ({title, children}) => {
  return (
    <section>
      <Subtitle>{title}</Subtitle>
      {children}
    </section>    
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

