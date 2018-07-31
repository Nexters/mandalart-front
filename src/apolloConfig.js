import ApolloClient from "apollo-boost";

// 그래프 ql을 쏴주는 주소
const client = new ApolloClient({
  // server url
  uri: "",
});

export default client;
