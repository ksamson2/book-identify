import AnalyzeImage from './components/AnalyzeImage';
import { Auth, Amplify } from 'aws-amplify';
import {
	Predictions,
	AmazonAIPredictionsProvider,
} from '@aws-amplify/predictions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import awsconfig from './aws-exports';
import Chatbot from './components/Chatbot';
import { Navbar } from 'react-materialize';

Auth.configure(awsconfig);
Amplify.configure(awsconfig);
Predictions.addPluggable(new AmazonAIPredictionsProvider());

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route path='/' element={<AnalyzeImage />} />
					<Route path='/chatbot' element={<Chatbot />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
