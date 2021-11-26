import React, { useEffect, useState } from 'react';
import Dentist from './Dentist/Dentist';

const Dentists = () => {
	const [dentists, setDentists] = useState([]);
	useEffect(() => {
		fetch("/dentists.json")
			.then(response => response.json())
			.then(data => setDentists(data))
	}, []);
	return (
		<section className="pt-70 pb-70">
			<div className="container">
				<div className="text-center mb-5">
					<h1 className="size-50 t-color-23 fw-bold">Our <span className="t-color-00">Dentists</span></h1>
				</div>
				<div className="row g-3">
					{
						dentists.map(dentist => <Dentist dentist={dentist} key={dentist.id} />)
					}
				</div>
			</div>
		</section>
	);
};

export default Dentists;