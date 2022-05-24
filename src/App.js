import AnalyzeImage from './components/AnalyzeImage';
import { Auth, Amplify } from 'aws-amplify';
import {
	Predictions,
	AmazonAIPredictionsProvider,
} from '@aws-amplify/predictions';

import awsconfig from './aws-exports';

Auth.configure(awsconfig);
Amplify.configure(awsconfig);
Predictions.addPluggable(new AmazonAIPredictionsProvider());

function App() {
	return (
		<div className='App'>
			<AnalyzeImage />
		</div>
	);
}

export default App;
