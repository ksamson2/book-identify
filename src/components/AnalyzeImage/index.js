import React, { useState } from 'react';
import { Predictions } from '@aws-amplify/predictions';
import 'materialize-css';

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
	const getEntityValue = (entitiesResponse) => {
		if (entitiesResponse != '') {
			console.log(entitiesResponse.entities[0].metadata.name);
			return entitiesResponse.entities[0].metadata.name;
		}
	};
	return (
		<div>
			{console.log(entitiesResponse)}
			<div className='row'>
				<div className='col s12 m6'>
					<div className='card blue-grey darken-1'>
						<div className='card-content white-text'>
							<span className='card-title'>Identify celebrity</span>
							<div className='file-field input-field'>
								<span>Upload an image </span>
								<input
									className='file-input'
									type='file'
									onChange={identifyCelebrity}
								/>
							</div>
							<img src={imageSrc} />
						</div>
						<span> People in this image: </span>
						{entitiesResponse === ''
							? null
							: entitiesResponse.entities.map((entity) => {
									return (
										<div className='chip' key={entity}>
											{entity.metadata.name}{' '}
										</div>
									);
							  })}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AnalyzeImage;
