import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main";
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";

function HomePage() {
  // state ------------
  const [searchParams] = useSearchParams();
  const userName = searchParams.get("userName");
  console.log("value of userName :", userName);
  // comportements ------------

  return (
    <HomePageStyled>
      <Banner name={userName} />
      <Main />
      <Footer />
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #1f201f;
`;

export default HomePage;
