import React from 'react';
import CountUp from 'react-countup';

const CounterUp = () => {
	return (
		<section className="pt-70 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-6 mb-4 mb-md-0">
						<div className="text-center">
							<CountUp end={4} duration={.5} className="size-40 fw-bold t-color-23" />
							<h2 className="size-18 fw-bold t-color-23 mt-2">PROFESSIONAL DENTISTS</h2>
						</div>
					</div>
					<div className="col-md-3 col-6 mb-4 mb-md-0">
						<div className="text-center">
							<CountUp end={4280} decimal="," duration={5} className="size-40 fw-bold t-color-23" />
							<h2 className="size-18 fw-bold t-color-23 mt-2">SETISFIED PATIENT</h2>
						</div>
					</div>
					<div className="col-md-3 col-6">
						<div className="text-center">
							<CountUp end={5265} duration={5} className="size-40 fw-bold t-color-23" />
							<h2 className="size-18 fw-bold t-color-23 mt-2">ROOT CANAL TREATMENT</h2>
						</div>
					</div>
					<div className="col-md-3 col-6">
						<div className="text-center">
							<CountUp end={700} duration={5} className="size-40 fw-bold t-color-23" />
							<h2 className="size-18 fw-bold t-color-23 mt-2">IMPLANT PLACEMENT</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CounterUp;