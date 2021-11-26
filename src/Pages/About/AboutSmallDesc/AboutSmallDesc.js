import React from 'react';
import { Link } from 'react-router-dom';

const AboutSmallDesc = () => {
	return (
		<section className="pt-70 pb-70">
			<div className="container">
				<div className="text-center mb-5">
					<h1 className="size-50 t-color-23 fw-bold">About <span className="t-color-00">Me</span></h1>
				</div>
				<div className="">
					<p>
						Jarin Dental Center is the best & leading dental treatment provider in Sunamganj, Sylhet, Bangladesh, with a specialized, Dental implant, Endodontic, Pediatric operative, Prosthodontic, oral surgery, and Orthodontic Center. The Living Legend in Bangladesh dental practice Prof. Dr. Kazi Mehdih Ul Alam establish Jarin dental center in 1977. From that time to till now, Jarin dental center is a center of excellence and house of trust in the section of dental practice in Bangladesh. Our philosophy is simple. We provide excellence in dental care, with a focus on patient comfort, satisfaction, and dental health, in line with our company’s core value, ‘Creating Happy Smiles’. Here at Dental Aspects, YOU are the number one priority. 
					</p>
					<p className="my-3">
						We have encompassed the latest tools and technology to give you the best possible treatment in a modern, friendly environment. Most of our new patients join our practice through the recommendation of our existing happy and extremely satisfied patients. This speaks volumes for the service we provide. We pride ourselves on having a friendly, helpful, and dedicated team We are all trained to the highest standards and are familiar with all the latest dental techniques and procedures. We will provide the best care possible and look after you through every stage of your Jarin Dental center journey. Nervous patients handled with care. Our team of Dental Professionals selected from among the best after a stringent quality check for their clinical skills and expertise. Our mission is to provide all our patients excellence in Dental Care with the highest ethical standards in a friendly and professional environment.
					</p>
					<p>
						Jarin dental center is proud to announce our new state-of-the-art facility!  Our new clinic is designed and constructed to the highest industry standards with the latest technology and progressive design; all to make your visit safe, comfortable, and affordable.
					</p>
				</div>
				<div className="mt-4">
					<h3 className="size-25 mb-3 t-color-23 fw-bold">Why you should choose us?:</h3>
					<p className="size-18 mb-2 t-color-23 fw-500">44+ years of experience.</p>
					<p className="size-18 mb-2 t-color-23 fw-500">Already Served More Than 45,000 Patients.</p>
					<p className="size-18 mb-2 t-color-23 fw-500">Located at Easily and well-communicated area in the middle of Dhaka city.</p>
					<p className="size-18 mb-2 t-color-23 fw-500">More than 52 thousand Root canal treatments and more than 700+ implant placement and prosthesis.</p>
					<p className="size-18 mb-2 t-color-23 fw-500">FDA & CE Certified Sterilization System.</p>
					<p className="size-18 t-color-23 fw-500">Latest Laser Technology: Less Pain-Less Discomfort.</p>
				</div>
				<div className="mt-4">
					<Link to="/about" className="px-30 py-13 rounded-pill bg-23 text-white fw-500">See More →</Link>
				</div>
			</div>
		</section>
	);
};

export default AboutSmallDesc;