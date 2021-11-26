import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
	const { id, image, title } = service;
	const url = `/service-details/${id}`;
	return (
		<div className="col-lg-4 col-md-6">
			<div className="p-4 bg-white shadow rounded">
				<div className="mb-4">
					<img src={image} alt={title} className="img-fluid" />
				</div>
				<div className="">
					<h3 className="size-18 t-color-23 fw-bold mb-4">{title}</h3>
					<Link to={url} className="px-30 py-13 rounded-pill bg-23 text-white fw-500">Details →</Link>
				</div>
			</div>
		</div>
	);
};

export default Service;