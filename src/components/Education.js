import React from 'react';
import { motion } from "framer-motion";
import { FaUserGraduate } from "react-icons/fa";
import "../styles/Education.css";

const Education = () => {
    const fade = {
        opacity: 1,
        transition: {
            duration: 1.4
        }
    };

    const education = [
        {
            degree: "MASTER OF COMPUTER APPLICATION",
            institution: "LEAD COLLEGE (AUTONOMOUS), PALAKKAD",
            date: "2024 – 2026",
            grade: "Pursuing",
            current: true
        },
        {
            degree: "BACHELOR OF COMPUTER APPLICATION",
            institution: "UNIVERSITY OF CALICUT",
            date: "2020 - 2023",
            grade: "CGPA: 6.71"
        },
        {
            degree: "HIGHER SECONDARY EDUCATION (COMPUTER SCIENCE)",
            institution: "GOVT. HIGHER SECONDARY SCHOOL, KADAMBUR",
            date: "2018 – 2020",
            grade: "Percentage: 74.1%"
        },
        {
            degree: "SECONDARY EDUCATION (CLASS X)",
            institution: "H.S. KATAMPAZHIPURAM",
            date: "2017 – 2018",
            grade: "Percentage: 89%"
        },
    ];

    return (
        <div className="education" id="education">
            <div className="container">
                <motion.div
                    whileInView={fade}
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    className="heading"
                >
                    <p className="heading-sub-text">Academic Background</p>
                    <p className="heading-text">Education</p>
                </motion.div>

                <div className="education-content">
                    <div className="timeline-line"></div>
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="education-card-wrapper"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2, type: "spring", bounce: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className={`timeline-dot ${edu.current ? 'current-dot' : ''}`}></div>
                            <div className="education-card">
                                <div className="edu-icon-box">
                                    <FaUserGraduate className="edu-icon" />
                                </div>
                                <div className="edu-details">
                                    <div className="edu-degree-row">
                                        <h3 className="edu-degree">{edu.degree}</h3>
                                        {edu.current && <span className="curr-badge">Present</span>}
                                    </div>
                                    <p className="edu-institution">{edu.institution}</p>
                                    <div className="edu-meta">
                                        <span className="edu-date">{edu.date}</span>
                                        {edu.grade && <span className="edu-grade">{edu.grade}</span>}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
