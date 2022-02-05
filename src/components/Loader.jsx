import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = (props) => (
  <ContentLoader 
    rtl
    speed={2}
    width={260}
    height={360}
    viewBox="0 0 260 360"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="110" r="100" /> 
    <rect x="5" y="220" rx="5" ry="5" width="250" height="80" />
  </ContentLoader>
)

export default Loader
