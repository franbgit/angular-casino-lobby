import gql from 'graphql-tag';

export const LOBBY_QUERY = gql`
  query {
    lobby(slug: "casino") {
      slug
      games {
        name
        thumbnail
      }
    }
  }
`;
