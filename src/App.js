import styled from "../node_modules/styled-components/";

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function App() {
  return (
    <div>
      <Wrapper>
        <Title>It's gonna be awesome</Title>
      </Wrapper>
    </div>
  );
}

export default App;
