import React from "react";
import Header from "Containers/Layout/Header/Header";
import ContainerContent from 'Containers/ContainerContent'
const Layout = ({ children }) => {
  const logged = false;
  return (
    <div className="layout">
     {logged && <Header />}
      <ContainerContent>
          {children}
      </ContainerContent>    
    </div>
  );
};

export default Layout;
