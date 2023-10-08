import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  height: 600px;
  margin: 50px auto;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.25), 0 5px 10px rgba(0, 0, 0, 0.22);
  border: 1px solid #00000070;
`;
const Header = styled.div`
  padding: 4%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #1f1f1f;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const Heading = styled.h1`
  text-align: center;
  font-size: 20px;
  width: 75%;
`;
const Button = styled.button`
  background: #0f5b7c;
  border: 1px solid transparent;
  width: 65px;
  font-weight: bold;
  font-family: inherit;
  cursor: pointer;
  height: 35px;
  border-radius: 2px;
  &:hover {
    border: 1px solid #1795cb;
  }
`;
const ExpanseListContainer = styled.div`
  width: 100%;
  height: 450px;
`;
const Footer = styled.div`
  position: absolute;
  bottom: 0;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #1f1f1f;
`;
const CategoryButton = styled(Button)`
  width: 45%;
  height: 70%;
  background: #7c7c7c;
  &.active {
    background: #0f5b7c;
  }
`;
function App() {
  return (
    <>
      <Container>
        <Header>
          <Heading>Expanse Tracking</Heading>
          <Button>Add</Button>
        </Header>
        <ExpanseListContainer>Expanse</ExpanseListContainer>
        <Footer>
          <CategoryButton className="active">Expanse</CategoryButton>
          <CategoryButton>Category</CategoryButton>
        </Footer>
      </Container>
    </>
  );
}

export default App;
