import SectionHeader from '../components/SectionHeader.jsx'

function Projects() {
  return (
    <section className="animate-fade-up">
      <SectionHeader
        overline="Projects"
        title="Selected Projects"
        subtitle="Real-world applications and ML projects built during internships and academics."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <article className="card-elevated flex flex-col justify-between rounded-2xl bg-white/80 p-5 shadow-sm">
          <div>
            <div className="mb-3 overflow-hidden rounded-xl bg-slate-100">
              <img
                src="https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Agriculture field with green crops"
                className="h-40 w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <h2 className="text-base font-semibold text-slate-900">
              Agri Sense – Agriculture Decision Support System
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              Machine learning-based system focused on crop maintenance, protection techniques, and seasonal
              planting to assist farmers and agricultural decision-makers.
            </p>
            <p className="mt-2 text-xs font-medium text-indigo-600">
              Achieved 86.4% accuracy in predictive analytics.
            </p>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-600">
            {['Machine Learning', 'Python', 'Data Analytics', 'Decision Support'].map((item) => (
              <span
                key={item}
                className="rounded-full bg-indigo-50 px-3 py-1 text-indigo-700"
              >
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className="card-elevated flex flex-col justify-between rounded-2xl bg-white/80 p-5 shadow-sm">
          <div>
            <div className="mb-3 overflow-hidden rounded-xl bg-slate-100">
              <img
                src="https://images.pexels.com/photos/799137/pexels-photo-799137.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cinema hall with movie reel and seats"
                className="h-40 w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <h2 className="text-base font-semibold text-slate-900">Movie Recommendation System</h2>
            <p className="mt-2 text-sm text-slate-700">
              Full stack web application developed during internship to provide personalized movie recommendations,
              enhancing user engagement through a clean and intuitive interface.
            </p>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-600">
            {['Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Full Stack'].map((item) => (
              <span
                key={item}
                className="rounded-full bg-indigo-50 px-3 py-1 text-indigo-700"
              >
                {item}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects
