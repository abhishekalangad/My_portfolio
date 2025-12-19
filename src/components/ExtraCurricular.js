import React from 'react';
import { motion } from "framer-motion";
import { BiShield, BiStar } from "react-icons/bi";
import "../styles/ExtraCurricular.css";

const ExtraCurricular = () => {
    const fade = {
        opacity: 1,
        transition: {
            duration: 1.4
        }
    };

    const activities = [
        {
            title: "NCC (National Cadet Corps)",
            desc: "A CERTIFICATE HOLDER",
            icon: <BiShield className="activity-icon" />
        },
        {
            title: "SPC (Student Police Cadet)",
            desc: "Best Cadet Award",
            icon: <BiStar className="activity-icon" />
        }
    ];

    return (
        <div className="extra-curricular" id="extra-curricular">
            <div className="container">
                <motion.div
                    whileInView={fade}
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    className="heading"
                >
                    <p className="heading-sub-text">Beyond Work</p>
                    <p className="heading-text">Extra Curricular</p>
                </motion.div>

                <div className="activities-grid">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={index}
                            className="activity-card"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="icon-box">
                                {activity.icon}
                            </div>
                            <div className="activity-details">
                                <h3 className="activity-title">{activity.title}</h3>
                                <p className="activity-desc">{activity.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExtraCurricular;
