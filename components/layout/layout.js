import { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

function Layout(props) {
  return (
    <>
      <div className="relative min-h-screen md:flex">
        <Sidebar/>
        <div className="flex-1 ">
          <Header/>
          <main>{props.children}</main>
          <Footer/>
        </div>
      </div>
    </>

      
  );
}

export default Layout;

