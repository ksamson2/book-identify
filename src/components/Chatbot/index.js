import React from 'react';
import Amplify from 'aws-amplify';
import { AmplifyChatbot } from '@aws-amplify/ui-react/legacy';

const Chatbot = () => {
	return (
		<div className='row'>
			<div className='col s12 m6 offset-m4'>
				<AmplifyChatbot
					botName='OrderFlowers_dev'
					botTitle='Order Flowers'
					welcomeMessage='Hello, how can I help you?'
				/>
			</div>
		</div>
	);
};

export default Chatbot;
