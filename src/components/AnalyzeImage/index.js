import React, { useState } from 'react';
import { Predictions } from '@aws-amplify/predictions';
import 'materialize-css';
import './style.css';

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
	const [loading, setLoading] = useState(false);
	const identifyCelebrity = async (event) => {
		setLoading(true);
		setEntitiesResponse('');
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
					setLoading(false);
				})
				.catch((err) => setEntitiesResponse(JSON.stringify(err, null, 2)));
		} else {
			setError(true);
			setLoading(false);
		}
	};

	const displayError = (error) => {
		const dismissError = () => {
			setError(false);
		};
		return (
			<div className='notification'>
				<button
					className='btn btn-small waves-effect waves-light'
					onClick={dismissError}
				>
					<i className='material-icons right'>close</i>
				</button>
				<p> {error} </p>
			</div>
		);
	};

	return (
		<div>
			{console.log(entitiesResponse)}
			<div className='row'>
				<div className='col s12 m6 offset-m3'>
					<div className='card teal lighten-2'>
						<div className='card-content white-text'>
							<span className='card-title'>Identify celebrity</span>
							<div className='file-field input-field'>
								{error
									? displayError('Please upload a jpeg or png file')
									: null}
								<br />
								<button className='upload-button'>
									<span>upload an image </span>
								</button>
								<input
									className='file-input'
									type='file'
									onChange={identifyCelebrity}
								/>
							</div>
							<div className='imageContainer'>
								<img className='image' src={imageSrc} />
							</div>
						</div>
						<span className='entity-header'> People in this image: </span>
						{loading ? (
							<div className='progress'>
								<div className='indeterminate'></div>
							</div>
						) : null}

						{entitiesResponse === ''
							? null
							: entitiesResponse.entities.map((entity) => {
									return (
										<div className='chip' key={entity.metadata.name}>
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
