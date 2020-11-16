import '../styles/index.css';
import AuthProvider from './api/utils/AuthProvider';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className='container mx-auto my-10 max-w-2xl'>
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
