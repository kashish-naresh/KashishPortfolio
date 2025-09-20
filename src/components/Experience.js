import styles from "../content.module.css";
import data from "../data.json";

const Experience = () => {
  return (
    <>
      <div className="mt-40 ml-5 btn-custom">Work Experience</div>
      <div
        className={`work experience-list grid  md:grid-cols-[150px_2px_0.8fr] my-8 ml-5 gap-4 ${styles.wrapper}`}
      >
        <ExperienceList />
      </div>
    </>
  );
};

const ExperienceList = () => {
  return data.experiences.map((exp, index) => (
    <>
      <div key={index} className="duration-work">
        <p>{exp.duration}</p>
      </div>
      <div className="relative hidden md:block">
        {/* Full vertical line */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-[50%] bg-black "></div>
        <div className="absolute top-16 bottom-0 left-1/2 transform -translate-x-1/2 w-[2.5px] bg-black"></div>
      </div>
      <div className="content-work  mt-10 flex flex-col gap-2">
        <b>{exp.role}</b>
        <i className="text-[#737373] font-medium">{exp.company}</i>
        <ul className="lg:ml-4">
          {exp.responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  ));
};

export default Experience;
