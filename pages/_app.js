import '../styles/bootstrap.min.css';
import '../styles/glightbox.min.css';
import '../styles/swiper-bundle.min.css';
import '../styles/style.css';

import TopBar from '../components/TopBar';
import Navbar from '../components/NavBar';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
