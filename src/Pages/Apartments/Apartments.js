import React from 'react';
import "../../css/Form.css";

const Apartments = () => {
	return (
		<section className="pt-70 pb-70">
			<div className="container">
				<div className="mx-auto form-area">
					<div className="form border p-5">
						<div className="mb-4">
							<h1 className="size-50 t-color-23 fw-bold mb-3">Apartments</h1>
							<p>Clinic health are available 24/7</p>
						</div>
						<form>
							<div class="mb-4">
								<select class="form-select select-form" aria-label="Default select example">
									<option selected>Patient *</option>
									<option value="1">New Patient</option>
									<option value="2">Old Patient</option>
								</select>
							</div>
							<div class="mb-4">
								<select class="form-select select-form" aria-label="Default select example">
									<option selected>Patient Gender *</option>
									<option value="1">Male</option>
									<option value="2">Female</option>
									<option value="2">Others</option>
								</select>
							</div>
							<div class="mb-4">
								<input type="tel" class="form-control" id="name" placeholder="Phone Number *" required />
							</div>
							<div class="mb-4">
								<input type="text" class="form-control" id="name" placeholder="Subject *" required />
							</div>
							<div className="text-center">
								<input type="submit" value="Submit Request →" className="fw-500 text-white bg-23 w-100 rounded" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Apartments;