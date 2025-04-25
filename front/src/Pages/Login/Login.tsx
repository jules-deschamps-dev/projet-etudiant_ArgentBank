import React from 'react';
import { Footer, Nav } from '../../Components/';
import { Formulaire } from './Components/';

const Login: React.FC = () => {
  return (
    <>
      <Nav />

      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Formulaire />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Login;
