import { IoCodeWorking, IoLogoFacebook, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5"
import img1 from "./assets/image/learning.png"
import movie from "./assets/image/movie.png"
import CV from "./assets/image/CV_Nguyen_Van_Cao_Frontend_Dev.pdf"

export const Experience = [
    {
        id:1,
        date:"2019 - 2022",
        iconsSrc : <IoCodeWorking />,
        title : "IT Support",
        location: "SaiGon, VietNam",
        description : "Join LZD support users about the network industry ",
    },

    {
        id:2,
        date:"2019 - 2022",
        iconsSrc : <IoCodeWorking />,
        title : "Learn ReactJS",
        location: "SaiGon, VietNam",
        description : "Learn HTML, CSS, JS, ReactJS",
    },
    {
        id:3,
        date:"2016 - 2019",
        iconsSrc : <IoCodeWorking />,
        title : "Student",
        location: "SaiGon, VietNam",
        description : "Student Colleges ITC HCM City",
    },
    
]

export const Project = [
    {
        id:1,
        name: "Fullstack MERN Learning Project",
        imgSrc: img1,
        techs:"ReactJS, MongoDB, Express, NodeJS",
        github: "https://github.com/taika123/MERN-STACK-LEARNING"
    },
    {
        id:2,
        name: "Movie",
        imgSrc: movie,
        techs:"ReactJS",
        github: "https://portflolio-bhmnil2i2-taika123.vercel.app"
    },
    {
        id:3,
        name: "Student",
        imgSrc: img1,
        techs:"ReactJS, Redux, MUI",
        github: "#"
    },
    {
        id:4,
        name: "Student",
        imgSrc: img1,
        techs:"ReactJS, Redux, MUI",
        github: "#"
    },
]

export const SocialLink = [
    {
        id:1,
        iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
        name:"Github",
        link: "#"
    },
    {
        id:2,
        iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
        name:"Youtube",
        link: "#"
    },
    {
        id:3,
        iconSrc: <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />,
        name:"Twitter",
        link: "#"
    },
    {
        id:4,
        iconSrc: <IoLogoLinkedin className="text-blue-500 text-3xl cursor-pointer" />,
        name:"Linked in",
        link: "#"
    },
    {
        id:5,
        iconSrc: <IoLogoFacebook className="text-blue-500 text-3xl cursor-pointer" />,
        name:"Facebook",
        link: "#"
    },
]


export const downCV = [
    {
        id:1, 
        link: CV
    }
]