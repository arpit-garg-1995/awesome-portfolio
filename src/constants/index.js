import {
    logo,
    backend,
    creator,
    mobile,
    ios,
    android,
    flutter,
    web,
    github,
    appstore,
    playstore,
    menu,
    close,
    swift,
    xcode,
    java,
    dart,
    sql,
    realm,
    aws,
    dotnet,
    firebase,
    docker,
    figma,
    git,
    javascript,
    contexdo,
    ezeiatech,
    duoserve,
    abhishek,
    naveen,
    yd,
    vidyasaarimg,
    takimg,
    famgramimg,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "iOS Developer",
        icon: mobile,
    },
    {
        title: "Android Java Developer",
        icon: android,
    },
    {
        title: "Fluter Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "Swift",
        icon: swift,
    },
    {
        name: "Xcode",
        icon: xcode,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Android",
        icon: android,
    },
    {
        name: "Dart",
        icon: dart,
    },
    {
        name: "sql",
        icon: sql,
    },
    {
        name: "Realm",
        icon: realm,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "Firebase",
        icon: firebase,
    },
    {
        name: "DotNet",
        icon: dotnet,
    },
    {
        name: "git",
        icon: git,
    },
    /*{
        name: "figma",
        icon: figma,
    },*/
    {
        name: "docker",
        icon: docker,
    },
    /*{
        name: "JavaScript",
        icon: javascript,
    }*/
];

const experiences = [
    {
        title: "Mobile Application Developer",
        company_name: "Contexdo LifeOS Pvt Ltd",
        icon: contexdo,
        iconBg: "#383E56",
        date: "April 2018 - Feb 2021",
        points: [
            "Reviewed project specifications and designed technology solutions that met or exceeded performance expectations.",
            "Worked with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability, and performance.",
            "Developed a complete Social Media mobile application using Swift.",
            "Research/Implementation of scalable architecture and state management solutions such as MVVM, MVC and utilizing popular frameworks(such as Combine) for the same.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Ezeiatech System Pvt Ltd",
        icon: ezeiatech,
        iconBg: "#E6DEDD",
        date: "Feb 2021 - March 2023",
        points: [
            "An iOS Technology Leader, working on the definition and implementation of technologies and development practices using Swift, REST integration, JSON and all kinds of integrations also helping people to grow their technical knowledge",
            "Created many applications with two being the 4.5+ rating on AppStore and userbase of more than 100k users with more than 40k daily active users.",
            "Managed and lead the team for the active and agile development for TV Today Group.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Senior Software Developer",
        company_name: "Duoserve",
        icon: duoserve,
        iconBg: "#E6DEDD",
        date: "August 2021 - Present",
        points: [
            "Developing and maintaining mobile applications using Swift, Java and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-devices compatibility.",
            "Developed cross-platform mobile application for iOS and Android using Flutter, reducing development time by 25 %, with an intuitive user interface and heightened user experience.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make an application as beautiful as our vision, but Arpit proved me wrong.",
        name: "Abhishek Sharma",
        designation: "General Manager",
        company: "TV Today Group",
        image: abhishek,
    },
    {
        testimonial:
            "I've never met a mobile developer who truly cares about their clients' success like Arpit does.",
        name: "Naveen Kumarasen",
        designation: "Sr Director",
        company: "Smartleap",
        image: naveen,
    },
    {
        testimonial:
            "After Arpit optimized our app, our retain count increased by 50%. We can't thank them enough!",
        name: "Yash Dahenkar",
        designation: "Co-founder & CEO",
        company: "Acknoledger",
        image: yd,
    },
];

const projects = [
    {
        name: "MyFamgram",
        description:
            "Famgram is a platform where we let different group of people to interact with each other in a more confined & personal view. It brings the social community together by sharing photos, videos and moments with each other. Connect with people to know what they are doing and share your thoughts, day highlights & moments. Like & Comment on the posts uploaded by the community.",
        tags: [
            {
                name: "Swift",
                color: "blue-text-gradient",
            },
            {
                name: "Realm",
                color: "green-text-gradient",
            },
            {
                name: "iOS",
                color: "pink-text-gradient",
            },
        ],
        image: famgramimg,
        source_code_link: "https://apps.apple.com/us/app/myfamgram/id1494088726",
    },
    {
        name: "Tak:Short",
        description:
            "It is a short Video news app, which offers news update in 30 second. It offers related video for the better and deeper understanding of the news event to the user.\nHome page offers curated top 5 video based on editorial preference and viewers consumption algorithms.\nSpotlight: Spotlight section has the profile and the content telecast through anchors.",
        tags: [
            {
                name: "Swift",
                color: "blue-text-gradient",
            },
            {
                name: "CoreData",
                color: "green-text-gradient",
            },
            {
                name: "iOS",
                color: "pink-text-gradient",
            },
        ],
        image: takimg,
        source_code_link: "https://apps.apple.com/in/app/tak-short-video-news-app/id1499767412",
    },
    {
        name: "VidyaSaar - NCERT Class 9 to12",
        description: "It is an online learning app that features interactive videos and Live sessions. It is designed to help students access videos, Live sessions, and notes. It aids them to grasp concepts better by offering powerfully designed online coaching programs delivered by a team of subject experts." ,
        tags: [
            {
                name: "Flutter",
                color: "blue-text-gradient",
            },
            {
                name: "Dart",
                color: "green-text-gradient",
            },
            {
                name: "Android",
                color: "pink-text-gradient",
            },
        ],
        image: vidyasaarimg,
        source_code_link: "https://play.google.com/store/apps/details?id=com.vidyasaar&hl=en&gl=US",
    },
];

export { services, technologies, experiences, testimonials, projects };