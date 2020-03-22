import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import STYLE from '../../constants/style';
import { ROUTES } from '../../constants/util';

const StyledNav = styled.nav`
  position: relative;
  top: 30%;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: ${STYLE.MENU_ICON_COLOR};
  text-decoration: none;
  width: 100%;
  margin-top: 30px;
  display: block;

  &.active {
    color: ${STYLE.PRIMARY_COLOR};
  }
`;

type MenuProps = {};

const Menu: React.FunctionComponent<MenuProps> = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const renderLinks = (): Array<JSX.Element> => {
    return ROUTES.map((route, index) => {
      return (
        <StyledLink
          key={index}
          to={route.path}
          className={`${index === selectedIndex ? 'active' : ''}`}
          onClick={(): void => setSelectedIndex(index)}
        >
          <FontAwesomeIcon icon={route.icon} size="lg" />
        </StyledLink>
      );
    });
  };

  return <StyledNav>{renderLinks()}</StyledNav>;
};

export default Menu;
