import SectionHeader from '../components/SectionHeader.jsx'

function Education() {
  return (
    <section className="animate-fade-up">
      <SectionHeader
        overline="Education"
        title="Academic Background"
        subtitle="Formal education that built my foundation in Computer Science and problem solving."
      />
      <div className="space-y-4">
        <article className="card-elevated rounded-2xl bg-white/80 p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">
            Bachelor of Engineering in Computer Science Engineering
          </h2>
          <p className="mt-1 text-sm text-slate-700">
            Mysore College of Engineering and Management, Mysuru, Karnataka
          </p>
          <p className="mt-1 text-xs text-slate-500">December 2021 – June 2025 (Expected)</p>
          <p className="mt-2 text-xs font-medium text-indigo-600">CGPA: 7.8 / 10</p>
        </article>

        <article className="rounded-2xl bg-white/80 p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Higher Secondary Education (12th Grade)</h2>
          <p className="mt-1 text-sm text-slate-700">JSS PU College, Mysuru, Karnataka</p>
          <p className="mt-1 text-xs text-slate-500">June 2019 – May 2021</p>
          <p className="mt-2 text-xs font-medium text-indigo-600">Percentage: 64%</p>
        </article>

        <article className="rounded-2xl bg-white/80 p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Secondary Education (10th Grade)</h2>
          <p className="mt-1 text-sm text-slate-700">JSS High School, Mysuru, Karnataka</p>
          <p className="mt-1 text-xs text-slate-500">June 2016 – May 2019</p>
          <p className="mt-2 text-xs font-medium text-indigo-600">Percentage: 73%</p>
        </article>
      </div>
    </section>
  )
}

export default Education
