import SectionHeader from '../components/SectionHeader.jsx'

function About() {
  return (
    <section className="animate-fade-up">
      <SectionHeader
        overline="About"
        title="Computer Science Engineering Undergraduate"
        subtitle="Passionate about full stack development, clean code, and building practical solutions."
      />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-sm text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">Career Objective</h2>
          <p>
            Seeking an entry-level software development position to apply my technical skills and training in a
            professional environment, contributing effectively to organizational goals and gaining valuable
            industry experience.
          </p>
          <h2 className="mt-6 text-base font-semibold text-slate-900">Professional Summary</h2>
          <p>
            Detail-oriented and proactive Computer Science Engineering undergraduate with over 1 year of hands-on
            experience in full stack web development and software engineering through multiple internships. Skilled
            in Python, PHP, SQL, Laravel framework, and MERN stack technologies. Proven ability to develop dynamic,
            responsive web applications and machine learning projects with a focus on practical solutions and
            performance optimization.
          </p>
        </div>
        <div className="space-y-4 rounded-2xl bg-white/80 p-5 text-sm text-slate-700 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">At a glance</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <span className="font-semibold">Location:</span> Mysuru, Karnataka, India
            </li>
            <li>
              <span className="font-semibold">Degree:</span> B.E. in Computer Science Engineering
            </li>
            <li>
              <span className="font-semibold">College:</span> Mysore College of Engineering and Management
            </li>
            <li>
              <span className="font-semibold">Graduation:</span> June 2025 (Expected)
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
