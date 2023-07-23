'use client'
import { useQuery, gql } from "@apollo/client";
import Image from "next/image";

const GET_CHARACTERS= gql`
  query {
    characters{
      results {
        id
        name
        image
      }
    }
  }
`;

const Queries = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return(
    <div className="items-collection">
        {
            data.characters.results.map(character=>{
                return(
                    <div className="every-item" key={character.id}>
                        <Image src={character.image} width={360} height={300} alt="character image" className=""/>
                        <h2>{character.name}</h2>
                    </div>
                )
            })
        }
    </div>
  )
};

export default Queries;