import { Outlet } from "react-router-dom";
import Nav from '../../src/components/nav/Nav';
import FooterContainer from '../../src/components/footer/Footer';

const LayoutPublic = () => {
  return (
    <>
    <Nav/>
      <Outlet/>
    <FooterContainer/>
    </>
  )
}

export default LayoutPublic;