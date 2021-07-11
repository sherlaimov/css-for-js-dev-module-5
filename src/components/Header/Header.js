import React from 'react';
import styled from 'styled-components/macro';
import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import {useMediaQuery} from '../../hooks/useMediaQuery';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(true);
  const isPhone = useMediaQuery(QUERIES.phoneAndDown);
  const isTablet = useMediaQuery(QUERIES.tabletAndDown);
  const isLaptop = useMediaQuery(QUERIES.laptopAndDown);
  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

const iconGap = isPhone ? 20 : 40;
  return (
    <header>
      <SuperHeader />
      <MainHeader isPhone={isPhone}>
        <Side>
          <Logo />
        </Side>
        {isPhone || isTablet ? 
        <MobileNav style={{'--icon-gap': `${iconGap}px`}}>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
          </UnstyledButton>

        </MobileNav> : 
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>}
    
        {!isLaptop && <Side /> }  
      </MainHeader>
        <MobileMenu
          isOpen={showMobileMenu}
          onDismiss={() => setShowMobileMenu(false)}
        />
    </header>
  );
};

const MobileNav = styled.div`
  display: flex;
  gap: var(--icon-gap);
`;

const MainHeader = styled.div`
  display: flex;
  align-items: ${(p) => p.isPhone ? 'normal' : 'baseline'};
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 8vw - 2rem, 5rem);
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
