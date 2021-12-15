import Layout from "../layouts/Layout.jsx";
import CreateForm from "../components/CreateForm.jsx";

const Create = (props) => {
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