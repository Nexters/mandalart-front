import { gql } from 'apollo-boost';

export const ADD_MANDALART = gql`
  mutation addMandalart(
    $name: String!
    $goal: String!
    $startDate: String!
    $endDate: String!
  ) {
    AddMandalart(
      name: $name
      goal: $goal
      startDate: $startDate
      endDate: $endDate
    ) {
      ok
      error
    }
  }
`;
