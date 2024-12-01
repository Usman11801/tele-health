import "../styles/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/icofont.min.css";
import "../styles/meanmenu.css";
import "react-tabs/style/react-tabs.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Global Style
import "../styles/style.css";
import "../styles/responsive.css";
// Global RTL Style
import "../styles/rtl.css";

import Layout from "../components/_App/Layout";
import { Provider } from 'react-redux';
import { wrapper } from '../store/store'; // Adjust the import path according to your project structure

const MyApp = ({ Component, pageProps }) => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

  return (
    <Provider store={wrapper.useWrappedStore(pageProps).store}>
      <Layout>
        <Elements stripe={stripePromise}>
          <Component {...pageProps} />
        </Elements>
      </Layout>
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);
