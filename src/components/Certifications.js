import React from 'react';
import { motion } from "framer-motion";
import { BiBadgeCheck } from "react-icons/bi";
import "../styles/Certifications.css";

const Certifications = () => {
    const fade = {
        opacity: 1,
        transition: {
            duration: 1.4
        }
    };

    const certs = [
        {
            name: "DIPLOMA IN PYTHON WITH REACT AND DATASCIENCE",
            issuer: "STED COUNCIL GOVT. OF NCT, NEW DELHI",
            id: "Certificate No: 12840231062"
        },
        {
            name: "ANDROID USING FLUTTER",
            issuer: "SRISHTI INNOVATIVE EDUCATIONAL SERVICES, TRIVANDRUM",
            id: "Register Number: SIAC9245"
        },
        {
            name: "CERTIFIED CYBER SECURITY ANALYST",
            issuer: "REDTEAM HACKER ACADEMY, KOCHI",
            id: "Certificate No: RTXSTU11778"
        }
    ];

    return (
        <div className="certifications" id="certifications">
            <div className="container">
                <motion.div
                    whileInView={fade}
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    className="heading"
                >
                    <p className="heading-sub-text">What I verified</p>
                    <p className="heading-text">Certifications</p>
                </motion.div>

                <div className="certs-grid">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="cert-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <BiBadgeCheck className="cert-icon" />
                            <h3 className="cert-name">{cert.name}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                            <span className="cert-id">{cert.id}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certifications;
