import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                options={{
                    max: 45,
                    scale: 2,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img
                    src={icon}
                    alt='web-development'
                    className='w-16 h-16 object-contain'
                />

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.span
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-xxl leading-[30px]'
            >
                5+ years of development experience with primary expertise into iOS mobile application development using Swift. Thrive to work in a challenging and a rewarding environment where my skills would be utilized productively to the best of my knowledge and to work across teams to achieve organizational goals.
                <ul style={{ listStyle: 'disc' }} >
                    <li>Strong experience with Swift 5, Objective C, Cocoa, Cocoa Touch, and Xcode 14.</li>
                    <li>Having good experience for iOS Provisioning portal, creating development certificates, adding devices for development, creating provisioning profiles for devices.</li>
                    <li>Experienced with deploying application to App Store.</li>
                    <li>Experience With Universal (iPhone & iPad) Application Development.</li>
                    <li>Having good experience with web services and JSON Parsing.</li>
                    <li>Ability to define server API requirements, hit RESTful web services and process the resulting JSON</li>
                    <li>Having good experience with MapKit and Location Services.</li>
                    <li>Experience on camera technology, accessing camera hardware within application using AVFoundation framework.</li>
                    <li>Have implemented in-app Purchase functionalities.</li>
                    <li>Have good experience on database for iOS applications using SQLite.</li>
                    <li>Having experience with Apple Push Notification Services.</li>
                    <li>Experience in Social Media integration</li>
                    <li>Experience with frameworks like UIKit, SwiftUI, Foundation, Contacts, PhotoKit, AVFoundation, Core Animation, Core Location , Core Audio, StoreKit, Mapkit, Combine</li>
                </ul>
            </motion.span>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
