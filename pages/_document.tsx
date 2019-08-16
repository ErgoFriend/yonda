// _documentはサーバーサイドのみでレンダリングされ、クライアントサイドでは使われません
// onClickのようなイベントハンドラはこのファイルには書けません

// ./pages/_document.js
import Document, {Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
      <html>
        <Head>
          <title> afAFSFAFFSAF </title>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
