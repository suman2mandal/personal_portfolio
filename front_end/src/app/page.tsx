import React from 'react';
import Banner from "@/components/Portfolio/Banner/Banner";
import Footer from "@/components/Portfolio/Footer/Footer";
import VerticalStepper from "@/components/Portfolio/Education/VerticalStepper";
import ContactMe from "@/components/Portfolio/Contact/ContactMe";
import ContactForm from "@/components/Portfolio/Contact/ContactForm";
import KnownFrameworks from "@/components/Portfolio/Technologies and Frameworks/KnownFrameworks";
// import AllCirtificates from "@/components/Cirtificates/AllCirtificates";
import Education from "@/components/Portfolio/Education/Education";
import BlogHeader from "@/components/Blog/Banner/BlogHeader";
import Projects from "@/components/Portfolio/Projects/Projects";
import Pagination from "@/components/Blog/Pagination/Pagination";
import Navbar from "@/components/Nav/Navbar";
import Projects2 from "@/components/Portfolio/Projects/Projects2";
import KnownTechnologies from "@/components/Portfolio/Technologies and Frameworks/KnownTechnologies";
import ToolStack from "@/components/Portfolio/Technologies and Frameworks/ToolStack";
import Myskills from "@/components/Portfolio/Techstack/page";
import MyProjects from "@/components/MyProjects/page";
import AllCirtificates from "@/components/Portfolio/Certificates/AllCertificates";

function Page({props}:any) {
    return (
        <div className="bg-white/40 text-black dark:text-white dark:bg-white/10 " style={{scrollBehavior: "smooth"}}>
            <Navbar/>
            <Banner/>
            <Education/>
            {/*<Projects/>*/}
            {/* <Projects2/> */}
            <MyProjects/>
            {/*<KnownFrameworks/>*/}
            {/* <KnownTechnologies/> */}
            <Myskills/>
            {/*<ToolStack/>*/}
            <AllCirtificates/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export default Page;