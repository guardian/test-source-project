import { globalStyles } from '../shared/styles';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
	<>
		{globalStyles}
		<Component {...pageProps} />
	</>
);

export default App;
