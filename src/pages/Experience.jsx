import SectionHeader from '../components/SectionHeader.jsx'

function Experience() {
  return (
    <section className="animate-fade-up">
      <SectionHeader
        overline="Experience"
        title="Internship Experience"
        subtitle="Hands-on experience in Laravel, full stack, and MERN stack development on live projects."
      />
      <div className="space-y-5">
        <article className="card-elevated rounded-2xl bg-white/80 p-5 shadow-sm">
          <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Saas Cloud Softeqs Pvt Ltd, Bangalore, KA
              </h2>
              <p className="text-xs text-slate-600">Intern – Laravel &amp; PHP Developer</p>
            </div>
            <p className="text-xs font-medium text-indigo-600">July 2025 – Present</p>
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
            <li>Developing and maintaining live SaaS-based web applications using the Laravel framework.</li>
            <li>Optimizing MySQL database schemas with Eloquent ORM for institution management modules.</li>
            <li>Following MVC architecture, Git version control, and agile methodologies for quality and delivery.</li>
          </ul>
        </article>

        <article className="rounded-2xl bg-white/80 p-5 shadow-sm">
          <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
            <div>
              <h2 className="text-base font-semibold text-slate-900">Mandamus, Bangalore, KA</h2>
              <p className="text-xs text-slate-600">Intern – Full Stack Developer</p>
            </div>
            <p className="text-xs font-medium text-indigo-600">October 2024 – December 2024</p>
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
            <li>
              Gained hands-on experience in full stack web development using Python, SQL, HTML, CSS, and
              JavaScript.
            </li>
            <li>
              Developed a movie recommendation system project focusing on recommendation accuracy and user
              experience.
            </li>
          </ul>
        </article>

        <article className="rounded-2xl bg-white/80 p-5 shadow-sm">
          <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
            <div>
              <h2 className="text-base font-semibold text-slate-900">Thanya Technologies, Mangalore, KA</h2>
              <p className="text-xs text-slate-600">Intern – MERN Stack Developer</p>
            </div>
            <p className="text-xs font-medium text-indigo-600">February 2024 – May 2024</p>
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
            <li>
              Worked on live projects using HTML, CSS, JavaScript, React, Node.js, and MongoDB as part of MERN
              stack development.
            </li>
            <li>
              Developed full stack applications, strengthening understanding of end-to-end development and
              deployment.
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Experience
