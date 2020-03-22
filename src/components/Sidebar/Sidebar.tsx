import React from 'react';
import styled from 'styled-components';
import STYLE from '../../constants/style';
import Menu from './Menu';

const StyledNav = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 60px;
  background-color: ${STYLE.NAVBAR_BG};
`;

type SidebarProps = {};

const Sidebar: React.FunctionComponent<SidebarProps> = () => {
  return (
    <StyledNav>
      <div>Siva</div>
      <Menu />
    </StyledNav>
  );
};

export default Sidebar;
