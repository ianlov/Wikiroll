import Layout from "../layouts/Layout.jsx";
import CreateForm from "../components/CreateForm.jsx";

import { useEffect } from "react";

const Create = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout 
      setSearchResults={props.setSearchResults} 
      positions={props.positions}
    >
      <CreateForm positions={props.positions} />
    </Layout>
  )
}

export default Create;