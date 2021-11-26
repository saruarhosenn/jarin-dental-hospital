import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "./ServiceDetails.css";

const ServiceDetails = () => {
	const { serviceID } = useParams();
	const [serviceDetails, setServiceDetails] = useState([]);
	const [details, setDetails] = useState([]);
	useEffect(() => {
		fetch("/services.json")
			.then(response => response.json())
			.then(data => setServiceDetails(data))
	}, []);
	useEffect(() => {
		const detailsData = serviceDetails.find(description => description?.id === parseInt(serviceID));
		setDetails(detailsData);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [serviceDetails]);

	return (
		<section className="pt-70 pb-70">
			<div className="container">
				<div className="text-center mb-5">
					<h1 className="size-50 t-color-23 fw-bold">Service <span className="t-color-00">Detials</span></h1>
				</div>
				<div className="">
					<div className="mb-4 service-details-img">
						<img src={details?.image} alt={details?.title} className="img-fluid" />
					</div>
					<div className="">
						<h3 className="size-25 t-color-23 fw-bold mb-3">{details?.title}</h3>
						<p>{details?.description}</p>
						<Link to="/apartments" className="mt-4 px-30 py-13 rounded-pill bg-23 text-white fw-500">Apartments →</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceDetails;