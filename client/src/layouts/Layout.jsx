import Nav from "../components/Nav.jsx";

const Layout = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  )
}

export default Layout;