import "../styles/globals.css";
import withRedux from "next-redux-wrapper";
import { initStore } from "../redux/store";

// export default withRedux(initStore, { debug: true })(
//   class MyApp extends App {
//     static async getInitialProps({ Component, ctx }) {
//       return {
//         pageProps: {
//           ...(Component.getInitialProps
//             ? await Component.getInitialProps(ctx)
//             : {}),
//         },
//       };
//     }

//     render() {
//       const { Component, pageProps, store } = this.props;
//       return (
//         <Container>
//           {/* <Provider store={store}> */}
//             <Component {...pageProps} />
//           {/* </Provider> */}
//         </Container>
//       );
//     }
//   }
// );

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withRedux(initStore)(MyApp);
