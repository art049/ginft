import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import basicAuthMiddleware from "nextjs-basic-auth-middleware";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

if (process.env.NEXT_PUBLIC_ENV === "preview") {
  MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    const initialProps = await Document.getInitialProps(ctx);
    if (!ctx.req || !ctx.res) {
      throw Error("Bypass Auth prerender");
    }
    await basicAuthMiddleware(ctx.req, ctx.res);
    return { ...initialProps };
  };
}

export default MyDocument;
