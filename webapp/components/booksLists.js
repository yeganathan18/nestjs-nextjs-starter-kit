import { gql, useQuery } from "@apollo/client";

export const ALL_HOBBIES_QUERY = gql`
  query {
    hobbies {
      _id
      name
    }
  }
`;

function BooksList() {
  const { loading, error, data } = useQuery(ALL_HOBBIES_QUERY);

  if (error) return <div>Error loading Boooks.</div>;
  if (loading) return <div>Loading</div>;

  const { books } = data;

  console.log("data", data.hobbies);

  return <h2>Helo world!</h2>;
}

export default BooksList;
