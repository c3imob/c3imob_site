import Wrapper from "src/layouts/Wrapper";
import Home from "src/components/site/home";
import HomeProvider from "src/context/HomeContext";

export const metadata = {
  title: "C3 Imob",
};
const index = ({ Component, pageProps }: any) => {
  return (
    <Wrapper>
        <Home />
    </Wrapper>
  );
};

export default index;
