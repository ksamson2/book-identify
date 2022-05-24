import React, { useState } from 'react';
import { Predictions } from '@aws-amplify/predictions';

export const isValidFileType = (image) => {
	if (
		image.type === 'image/png' ||
		image.type === 'image/jpeg' ||
		image.type === 'image/jpg'
	)
		return true;
	else return false;
};

const AnalyzeImage = () => {
	const [imageSrc, setImageSrc] = useState('');
	const [error, setError] = useState(false);
	const [entitiesResponse, setEntitiesResponse] = useState('');
	const identifyCelebrity = async (event) => {
		const files = event.target.files;
		const file = files[0];
		if (isValidFileType(file)) {
			setImageSrc(URL.createObjectURL(file));
			await Predictions.identify({
				entities: {
					source: {
						file,
					},
					celebrityDetection: true,
				},
			})
				.then((response) => {
					setEntitiesResponse(response);
				})
				.catch((err) => setEntitiesResponse(JSON.stringify(err, null, 2)));
		} else setError(true);
	};
	return (
		<div>
			More test data
			<input className='file-input' type='file' onChange={identifyCelebrity} />
			{console.log(entitiesResponse)}
			<button className='icon-button mt-4'>Test data</button>
		</div>
	);
};

export default AnalyzeImage;
