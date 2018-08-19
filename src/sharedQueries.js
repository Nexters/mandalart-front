import { gql } from 'apollo-boost';

export const USER_PROFILE = gql`
  query userProfile {
    GetMyProfile {
      ok
      error
      user {
        id
        fullName
        email
        profileImage
      }
    }
  }
`;

export const GET_MANDALARTS = gql`
  query getMandalarts {
    GetMyMandalarts {
      ok
      error
      mandalarts {
        id
        name
        goal
        startDate
        endDate
      }
    }
  }
`;
