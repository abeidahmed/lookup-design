import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/logo/logo.svg';
import { Container } from 'components/container';

function Header() {
  return (
    <header
      className="sticky top-0 z-50 bg-white shadow"
      style={{
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(5px)',
      }}
    >
      <Container>
        <div className="flex items-center h-16">
          <Link to="/">
            <img className="w-auto h-10" src={Logo} alt="company logo" />
          </Link>
        </div>
      </Container>
    </header>
  );
}

export default Header;
