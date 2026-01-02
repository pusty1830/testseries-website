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
      <About />
      <Exam />
      <Resource />
      <Student />
      <Testimonial />
      {/* other sections */}
    </>
  );
}
