import React from 'react';
import styled from 'styled-components';
import STYLE from '../../constants/style';

const StyledNav = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 60px;
  background-color: ${STYLE.NAVBAR_BG};
`;

class Sidebar extends React.PureComponent {
  render() {
    return (
      <StyledNav>
        <div>Siva</div>
      </StyledNav>
    );
  }
}

export default Sidebar;
