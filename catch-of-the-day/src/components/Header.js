import React from 'react';

const Header = (props) => (
  
  <header className="top">
  {/* {console.log('props', props)} */}
      <h1>Catch
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="the">The</span>
        </span>
        Day</h1>
      <h3 className="tagline">
        <span>{props.tagline}</span>
      </h3>
    </header>
);

// class Header extends React.Component {
//   render() {
//     return (
//     )
//   }
// }

export default Header;