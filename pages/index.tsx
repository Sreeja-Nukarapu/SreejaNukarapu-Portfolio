import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Publications from "../components/Publications";
import BackToTop from "../components/BackToTop";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperience } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experience,
  skills,
  projects,
  socials,
}: Props) {
  return (
    <div className="bg-cream text-black h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar-none">
      <Head>
        <title>Sreeja Nukarapu - Machine Learning Engineer</title>
        <meta
          name="description"
          content="Sreeja Nukarapu - Machine Learning Engineer & Data Analyst"
          key="desc"
        />
        <meta
          property="og:title"
          content="Sreeja Nukarapu - Machine Learning Engineer"
        />
        <meta
          property="og:description"
          content="Machine Learning Engineer & Data Analyst"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Sreeja Nukarapu" />
      </Head>

      {/* Cream background */}
      <div
        style={{
          position: "fixed",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#F5EEE6",
          zIndex: -1,
        }}
      />

      <Header socials={socials} pageInfo={pageInfo} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="education" className="snap-center">
        <Education />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experience} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="publications" className="snap-center">
        <Publications />
      </section>

      <footer>
        <BackToTop />
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experience: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experience,
      skills,
      projects,
      socials,
    },
    revalidate: 300,
  };
};
