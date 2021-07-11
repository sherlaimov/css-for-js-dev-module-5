/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, COLORS, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlay 
      isOpen={isOpen}
      onDismiss={onDismiss}
      style={{
        background: "hsla(0, 100%, 100%, 0.9)",
        position: "absolute",
        top: 0,
        right: 0,}}
      >
       <DialogContent>
          <MenuWrapper>
            <CloseButton onClick={onDismiss}>
              <VisuallyHidden>Dismiss menu</VisuallyHidden>
              <Icon id="close" strokeWidth={1} />
            </CloseButton>
            <Nav>
              <NavLink href="/sale">Sale</NavLink>
              <NavLink href="/new">New&nbsp;Releases</NavLink>
              <NavLink href="/men">Men</NavLink>
              <NavLink href="/women">Women</NavLink>
              <NavLink href="/kids">Kids</NavLink>
              <NavLink href="/collections">Collections</NavLink>
            </Nav>
            <Footer>
              <FoterLink href="/terms">Terms and Conditions</FoterLink>
              <FoterLink href="/privacy">Privacy Policy</FoterLink>
              <FoterLink href="/contact">Contact Us</FoterLink>
            </Footer>
          </MenuWrapper>
        </DialogContent>
    </DialogOverlay>
  );
};

const CloseButton = styled(UnstyledButton)`
  margin-left: auto;
`
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FoterLink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-size: 0.875rem;
`

const MenuWrapper = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffff;
  padding: 32px 0px 32px 32px;
`

export default MobileMenu;
