import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Nav from './components/Nav/Nav';
import Router from './router/Router';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Nav />
			<Router />
			<Footer />
		</BrowserRouter>
	);
};

export default App;
