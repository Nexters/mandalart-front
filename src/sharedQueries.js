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

export const getTodosByMandalartId = gql`
  query GetTodosByMandalartId($mandalartId: Int!) {
    GetTodosByMandalartId(mandalartId: $mandalartId) {
      ok
      error
      todos {
        id
        title
        startDate
        endDate
        comments
        isAchieved
        user {
          email
          fullName
        }
        mandalart {
          name
          goal
        }
        subTodos {
          id
          title
          startDate
          endDate
          comments
          isAchieved
        }
      }
    }
  }
`;

export const getMandalart = gql`
  query GetMandalart($mandalartId: Int!) {
    GetMandalart(mandalartId: $mandalartId) {
      ok
      error
      mandalart {
        id
        name
        goal
        startDate
        endDate
        achievementRate
        user {
          fullName
          email
        }
        todos {
          id
          title
          isAchieved
          startDate
          endDate
          comments
          subTodos {
            id
            title
            isAchieved
            startDate
            endDate
            comments
          }
        }
      }
    }
  }
`;
