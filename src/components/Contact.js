import { motion } from "framer-motion";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Contact.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
	const fade = {
		opacity: 1,
		transition: {
			duration: 1.5,
		},
	};

	const verticalLeft = {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1.5,
		},
	};

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		fetch(`https://formspree.io/f/${process.env.REACT_APP_FORMSPREE_FORM_ID}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				...formData,
				submittedAt: new Date().toLocaleString(),
				_subject: `New Contact from ${formData.name} - ${new Date().toLocaleString()}`,
			}),
		})
			.then((response) => {
				if (response.ok) {
					toast.success("Thanks for your message! I'll get back to you soon.", {
						position: "top-left",
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
					});
					setFormData({ name: "", email: "", message: "" });
					setIsSubmitting(false);
				} else {
					response.json().then((data) => {
						if (Object.hasOwn(data, 'errors')) {
							console.error(data["errors"].map(error => error["message"]).join(", "));
							toast.error(data["errors"].map(error => error["message"]).join(", "));
						} else {
							toast.error("Submission failed. Please try again.");
						}
						setIsSubmitting(false);
					});
				}
			})
			.catch((error) => {
				toast.error("Submission failed. Please try again.");
				console.error("Formspree Error:", error);
				setIsSubmitting(false);
			});
	};

	return (
		<>
			<div className='contact' id='contact'>
				<div className='container'>
					<motion.div
						className='heading'
						initial={{ opacity: 0 }}
						whileInView={fade}
						viewport={{ once: true }}>
						{/* <p className='heading-sub-text'>Hire Me</p> */}
						<p className='heading-text'>Get in Touch</p>
					</motion.div>
					<div className='contact-box'>
						<motion.div
							className='left-box'
							initial={{ opacity: 0, y: "-50px" }}
							whileInView={verticalLeft}>
							<div className='contact-heading'>
								<p>
									I’m interested in freelance opportunities – especially
									ambitious or large projects. However, if you have other
									request or question, don’t hesitate to use the form
								</p>
							</div>

							<div className='contact-socials'>
								<p>Follow Me</p>
								<div className='social-icons'>
									<a
										href='https://linkedin.com/in/abhishek-kulangara'
										target='_blank'
										rel='noreferrer'
										className='social-link'>
										<FaLinkedin />
									</a>
									<a
										href='https://github.com/abhishekalangad'
										target='_blank'
										rel='noreferrer'
										className='social-link'>
										<FaGithub />
									</a>
								</div>
							</div>
						</motion.div>
						<motion.div
							className='right-box'
							initial={{ opacity: 0, y: "50px" }}
							whileInView={verticalLeft}>
							<form
								name='contact-form'
								onSubmit={handleSubmit}>

								<div className='form-top'>
									<div className='name'>
										<label htmlFor='name'>Your Name</label>
										<input
											type='text'
											name='name'
											id='name'
											value={formData.name}
											onChange={handleChange}
											placeholder='Enter your name'
											required
										/>
									</div>

									<div className='email'>
										<label htmlFor='email'>Your Email</label>
										<input
											type='email'
											name='email'
											id='email'
											value={formData.email}
											onChange={handleChange}
											placeholder='Enter your email address'
											required
										/>
									</div>
								</div>

								<div className='form-mid'>
									<div className='message'>
										<label htmlFor='message'>Your message</label>
										<textarea
											type='text'
											name='message'
											id='message'
											value={formData.message}
											onChange={handleChange}
											placeholder='Enter your message'
											required></textarea>
									</div>
								</div>

								<div className='form-btn'>
									<button
										type='submit'
										disabled={isSubmitting}
										className='hero-contact'>
										{isSubmitting ? "Sending..." : "Send Message"}
									</button>
								</div>
							</form>
						</motion.div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default Contact;
