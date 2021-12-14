import '../assets/css/search.css';

import Layout from "../layouts/Layout.jsx";
import PTSCard from "../components/PTSCard.jsx";

import { Link } from "react-router-dom";

const Search = (props) => {
  return (
    <>
      <Layout
        setSearchResults={props.setSearchResults} 
        positions={props.positions}
      >
        <div className="search-container">
          {props.searchResults.map(result => (
            <Link
              style={{textDecoration: "none"}}
              to={`/detail/${result.id}`}
              key={result.id}
            >
              <PTSCard name={result.name} />
            </Link>
          ))}
        </div>
      </Layout>
    </>
  )
}

export default Search;