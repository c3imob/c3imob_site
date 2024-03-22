import HeroBanner from './HeroBanner';
import Category from './Category';
import Brand from './Brand';
import Footer from '../Footer';
import PropertyTwo from './PropertyTwo';
import Header from 'src/components/site/Header';
import HomeProvider from 'src/context/HomeContext';

const Home = () => {
  return (
    <HomeProvider>
      <Header />
      <HeroBanner />
      <Category style={false} />
      <PropertyTwo style={false} />
      <Brand />
      <Footer />
    </HomeProvider>
  );
};

export default Home;
