import React from 'react';
import PropTypes from 'prop-types';
import 'Styles/GlobalStyles';

import Header from 'Organisms/Header';
import Footer from 'Organisms/Footer';

const Index = ({ data, children }) => (
  <div>
    <Header data={data} />
    {children()}
    <Footer />
  </div>
);

Index.propTypes = {
  data: PropTypes.shape({}),
  children: PropTypes.func.isRequired,
};

Index.defaultProps = {
  data: {},
};

export default Index;

/* eslint no-undef: "off" */
export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
