import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomeServices = () => {
	const [services, setServices] = useState([]);
	const [service, setService] = useState([]);
	useEffect(() => {
		fetch("/services.json")
			.then(response => response.json())
			.then(data => setServices(data))
	}, []);

	useEffect(() => {
		const data = services.filter(service => service.display);
		setService(data);
	}, [services]);

	return (
		<section className="pt-70 pb-70 bg-f2">
			<div className="container">
				<div className="text-center mb-5">
					<h1 className="size-50 t-color-23 fw-bold">Our <span className="t-color-00">Services</span></h1>
				</div>
				<div className="row g-3">
					{
						service.map(content => 
							<div className="col-lg-4 col-md-6">
								<div className="p-4 bg-white rounded shadow">
									<div className="mb-4">
										<img src={content?.image} alt={content?.title} className="img-fluid" />
									</div>
									<div className="">
										<h3 className="size-18 t-color-23 fw-bold mb-4">{content?.title}</h3>
										<Link to={`/service-details/${content?.id}`} className="px-30 py-13 rounded-pill bg-23 text-white fw-500">Details →</Link>
									</div>
								</div>
							</div>
						)
					}
				</div>
				<div className="text-center mt-5">
					<Link to="/services" className="px-30 py-13 rounded-pill bg-23 text-white fw-500">More Services →</Link>
				</div>
			</div>
		</section>
	);
};

export default HomeServices;