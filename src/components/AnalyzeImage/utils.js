export const isValidFileType = (image) => {
	if (
		image.type === 'image/png' ||
		image.type === 'image/jpeg' ||
		image.type === 'image/jpg'
	)
		return true;
	else return false;
};
