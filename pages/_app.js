import '../styles/base.css';
import '../styles/prism-theme.css';
import { LiveChatLoaderProvider, Intercom } from 'react-live-chat-loader';

export default function App({ Component, pageProps }) {
  return (
    <LiveChatLoaderProvider provider="intercom" providerKey="otpo7g1i">
      <Component {...pageProps} />
      <Intercom color="#333333" />
    </LiveChatLoaderProvider>
  );
}
