import React from 'react';
import { motion } from "framer-motion";
import "../styles/Experience.css";

const Experience = () => {
    const fade = {
        opacity: 1,
        transition: {
            duration: 1.4
        }
    };

    const experiences = [
        {
            role: "ERP NEXT DEVELOPER INTERN",
            company: "ASSIMILATE TECHNOLOGIES, PUNE",
            date: "SEPTEMBER 2025 – FEBRUARY 2026",
            desc: [
                "Customized multiple ERPNext print formats for sales and logistics documents.",
                "Worked with HTML, CSS, and Jinja templating for dynamic document generation.",
                "Configured and tested Sales, Accounting, HRMS, Asset, and Inventory modules.",
                "Supported HRMS setup with employee data, role configuration, and attendance testing.",
                "Performed UAT testing, bug fixing, and deployment support for live client projects.",
                "Collaborated with developers and consultants on client-based ERP requirements and revisions."
            ]
        },
        {
            role: "PYTHON DEVELOPER INTERN",
            company: "RIGHT SOFT OPTIONS, KOCHI",
            date: "APRIL 2023 – APRIL 2024",
            desc: [
                "Worked on backend logic using Python and Django.",
                "Collaborated in team projects and client-side scripting tasks.",
                "Participated in debugging and REST API integration."
            ]
        }
    ];

    return (
        <div className="experience" id="experience">
            <div className="container">
                <motion.div
                    whileInView={fade}
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    className="heading"
                >
                    <p className="heading-sub-text">My Journey</p>
                    <p className="heading-text">Work Experience</p>
                </motion.div>

                <div className="experience-content">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="experience-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="exp-header">
                                <h3 className="exp-role">{exp.role}</h3>
                                <span className="exp-company">{exp.company}</span>
                                <span className="exp-date">{exp.date}</span>
                            </div>
                            <ul className="exp-list">
                                {exp.desc.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
