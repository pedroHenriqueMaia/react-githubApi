import SimpleBar from "simplebar-react";
import useApi from "../../../useApi";
import Spinner from "../../Spinner/Spinner";
import RepositoryCard from "../Card/Card";
import "./List.css";

export default function RepositoryList({ username }) {
  const {data, error, loading} = useApi({
      url: `https://api.github.com/users/${username}/repos?per_page=10&page=1`
  })

  return (
    <div className="RepositoryList">
      <h3>
          Repositories
          {loading && <Spinner />}
      </h3>
      <SimpleBar style={{ maxHeight: 500 }}>
      <div className="RepositoryList__content">
         {error ? (
           <div>Algo de errado não esta certo!</div>
         ):(
          data?.map((repository) => (
            <RepositoryCard
            key={repository.full_name} 
            repo={repository} />
          ))
        )}
      </div>
      </SimpleBar>
    </div>
  );
}
