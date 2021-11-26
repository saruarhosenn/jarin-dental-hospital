import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/Form.css";
import { useHistory, useLocation } from 'react-router';
import useAouth from '../../Hooks/useAouth';
import fb from "../../Images/Icon/facebook.png";
import google from "../../Images/Icon/google.png";

const SignUp = () => {
	const { handleSignUp, signInGoogle, signInFacebook, textValue, emailValue, passwordValue, error } = useAouth();
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || "/";
	const signInWithGoogle = () => {
		signInGoogle().then(() => {
			history.push(redirect_uri);
		});
	};
	const signInWithFacebook = () => {
		signInFacebook().then(() => {
			history.push(redirect_uri);
		});
	};
	return (
		<section className="pt-70 pb-70">
			<div className="container">
				<div className="mx-auto form-area">
					<div className="form border p-5 mb-4">
						<div className="mb-4">
							<h1 className="size-50 t-color-23 fw-bold mb-3">Sign Up</h1>
						</div>
						<form onSubmit={handleSignUp}>
							<div class="mb-4">
								<input type="text" class="form-control" id="name" onChange={textValue} placeholder="Full Name *" required />
							</div>
							<div class="mb-4">
								<input type="email" class="form-control" id="email" onChange={emailValue} placeholder="Your Email *" required />
							</div>
							<div class="mb-4">
								<input type="password" class="form-control" id="password" onChange={passwordValue} placeholder="Your Password *" required />
							</div>
							<div className="mb-4 text-center">
								<p className="mb-3 text-danger">{error}</p>
								<input type="submit" value="Create An Account →" className="fw-500 text-white bg-23 w-100 rounded" />
							</div>
						</form>
						<div className="">
							<p className="text-dark text-center">
								<span>Already have an account?</span>
								<Link to="/signin" className="underline ms-2">Sign In</Link>
							</p>
						</div>
					</div>
					<div className="">
						<div className="line text-center mb-3">
							<span className="position-relative f-size-18">Or</span>
						</div>
						<div className="signin-icon">
							<button onClick={signInWithFacebook} className="mb-3 mx-auto d-table rounded-pill border d-flex align-items-center  justify-content-center p-2">
								<img src={fb} alt="fb" className="rounded-circle me-2" />
								<p className="">Continue With Facebook</p>
							</button>
							<button onClick={signInWithGoogle} className="mx-auto d-table rounded-pill border d-flex align-items-center  justify-content-center p-2">
								<img src={google} alt="google" className="rounded-circle me-2" />
								<p className="">Continue With Google</p>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;