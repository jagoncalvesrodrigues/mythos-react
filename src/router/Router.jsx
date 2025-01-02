import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import { MITOLOGY } from '../constants/mitology';
import Mythos from '../pages/mythos/Mythos';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			{MITOLOGY.map(mith => (
				<Route
					key={mith.id}
					path={`/${mith.name}`}
					element={<Mythos name={mith.name} mith={mith.info} img={mith.img} />}
				/>
			))}
		</Routes>
	);
};

export default Router;
