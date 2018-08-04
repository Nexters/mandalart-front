import ApolloClient from "apollo-boost";

// 그래프 ql을 쏴주는 주소
const client = new ApolloClient({
  // server url
  uri: "",
  // 로컬 스테이트 저장
  clientState: {
    
  }
});

export default client;
