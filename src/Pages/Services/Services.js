import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("/services.json")
			.then(response => response.json())
			.then(data => setServices(data))
	}, []);
	return (
		<section className="pt-70 pb-70">
			<div className="container">
				<div className="text-center mb-5">
					<h1 className="size-50 t-color-23 fw-bold">Our <span className="t-color-00">Services</span></h1>
				</div>
				<div className="row g-3">
					{
						services.map(service => <Service service={service} kry={service.id} />)
					}
				</div>
			</div>
		</section>
	);
};

export default Services;