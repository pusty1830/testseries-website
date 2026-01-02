import ContactUsPage from "@/components/About/Contact";
import Leader from "@/components/About/Leader";
import About from "@/components/Home/About";
import Exam from "@/components/Home/Exam";
import Hero from "@/components/Home/Hero";
import Resource from "@/components/Home/Resource";
import Student from "@/components/Home/Student";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Leader/>
      
      <Student/>
      <Testimonial/>
      <ContactUsPage/>
     
      {/* other sections */}
    </>
  );
}
