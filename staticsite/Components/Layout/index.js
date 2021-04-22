import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
