import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInit from "../Firebase/Firebase.Init";

FirebaseInit();
const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();
	const facebookProvider = new FacebookAuthProvider();

	const textValue = event => {
		setName(event.target.value);
	};
	const emailValue = event => {
		setEmail(event.target.value);
	};
	const passwordValue = event => {
		setPassword(event.target.value);
	};
	const stopReload = event => {
		event.preventDefault();
	};
	const clearValue = () => {
		document.getElementById("email").value ="";
		document.getElementById("password").value ="";
	};
	
	// Create Account
	const handleSignUp = event => {
		document.getElementById("name").value ="";
		stopReload(event);
		clearValue();
		createUserWithEmailAndPassword(auth, email, password, name)
		.then(result => {
			const user = result.user;
			setUser(user);
			emailVerify();
			setError("");
		})
		.catch((error) => {
			const errorMessage = error.message;
			setError(errorMessage);
		});
	};

	// Sign In
	const handleSignIn = event => {
		stopReload(event);
		signInWithEmailAndPassword(auth, email, password)
		.then(result => {
			const user = result.user;
			setUser(user);
			setError("");
		})
		.catch((error) => {
			const errorMessage = error.message;
			setError(errorMessage);
		});
	};

	// Sign In With Google
	const signInGoogle = () => {
		return signInWithPopup(auth, googleProvider);
	};

	// Sign In With Facebook
	const signInFacebook = () => {
		return signInWithPopup(auth, facebookProvider);
	};

	// Log Out 
	const logOut = () => {
		signOut(auth).then(() => {
			// Sign-out successful.
			setUser({});
			setError("");
		})
		.catch((error) => {
			// An error happened.
			const errorMessage = error.message;
			setError(errorMessage);
		});
	};

	// Show Sign In & Sign Up 
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			};
		  });
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Email Verify
	const emailVerify = () => {
		sendEmailVerification(auth.currentUser)
		.then(() => {
			// Email verification sent!
		});
	};

	// Forget Password
	const forgetPassword = () => {
		sendPasswordResetEmail(auth, email)
		.then(result => {
			// Password reset email sent!
			setError("");
			console.log(result);
		})
		.catch((error) => {
			const errorMessage = error.message;
			setError(errorMessage);
		});
	};

	return {
		handleSignIn,
		handleSignUp,
		signInGoogle,
		signInFacebook,
		logOut,
		textValue,
		emailValue,
		passwordValue,
		forgetPassword,
		user,
		error,
	};
};

export default useFirebase;