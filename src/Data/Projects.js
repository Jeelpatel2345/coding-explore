import project1 from "../assets/projects/desi_kitchen.png";
import project2 from "../assets/projects/hand_gesture.png";
import project3 from "../assets/projects/vrudhseva.png";
import project4 from "../assets/projects/friday.png";

const projects = [
    {
        id: 1,
        title: "Desi Kitchen",
        subtitle: "Food Ordering App",
        description:
            "A modern food ordering application built with Flutter and Firebase featuring menu browsing, cart management, secure billing, and an admin dashboard.",

        image: project1,

        technologies: [
            "Flutter",
            "Firebase",
            "Provider",
            "REST API",
        ],

        features: [
            "Food Ordering",
            "Shopping Cart",
            "Firebase Backend",
            "Admin Dashboard",
        ],

        status: "OnGoing",

        featured: true,

        github: "https://github.com/Jeelpatel2345/Desi_Kitchen",

        demo: "#",
    },

    {
        id: 2,
        title: "Hand Gesture Detection",
        subtitle: "Computer Vision Project",
        description:
            "A real-time computer vision application that detects and recognizes hand gestures using OpenCV and Python for interactive human-computer communication.",

        image: project2,

        technologies: [
            "Python",
            "OpenCV",
            "Artificial Intelligence",
        ],

        features: [
            "Hand Tracking",
            "Gesture Recognition",
            "OpenCV Integration",
            "Real-Time Processing",
        ],

        status: "Completed",

        featured: false,

        github: "https://github.com/Jeelpatel2345/Hand-Gesture",

        demo: "#",
    },

    {
        id: 3,
        title: "VRUDHSEVA",
        subtitle: "Smart Elder Care Platform",
        description:
            "A smart elderly care platform designed to monitor health, track activities, share live location, and provide real-time alerts to family members and caregivers.",

        image: project3,

        technologies: [
            "Flutter",
            "MongoDB",
            "IoT",
            "UI/UX",
        ],

        features: [
            "Activity Monitoring",
            "Live Location Tracking",
            "Caretaker Access",
            "Heart Rate Monitoring",
        ],

        status: "OnGoing",

        featured: true,

        github: "https://github.com/Jeelpatel2345/VrudhSeva",

        demo: "#",
    },

    {
        id: 4,
        title: "FRIDAY",
        subtitle: "Virtual Assistant",
        description:
            "An intelligent virtual assistant capable of understanding voice commands, launching applications, and providing useful information such as weather updates and news.",

        image: project4,

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
        ],

        features: [
            "Voice Commands",
            "Application Launcher",
            "AI Assistant",
            "Weather & News",
        ],

        status: "Completed",

        featured: true,

        github: "https://github.com/Jeelpatel2345/FRIDAY",

        demo: "#",
    },
];

export default projects;