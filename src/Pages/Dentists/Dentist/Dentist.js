import React from 'react';

const Dentist = ({dentist}) => {
	const {image, name} = dentist;
	return (
		<div className="col-lg-3 col-sm-6">
			<div className="p-4 bg-23 rounded">
				<div className="mb-4">
					<img src={image} alt={name} className="w-100" />
				</div>
				<div className="text-center">
					<h3 className="size-18 text-white fw-bold">{name}</h3>
				</div>
			</div>
		</div>
	);
};

export default Dentist;