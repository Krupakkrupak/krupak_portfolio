import SectionHeader from '../components/SectionHeader.jsx'

function Contact() {
  return (
    <section className="animate-fade-up">
      <SectionHeader
        overline="Contact"
        title="Let&apos;s work together"
        subtitle="Open to entry-level software development roles, internships, and freelance opportunities."
      />

      <div className="flex justify-center">
        <div className="space-y-4 rounded-2xl bg-white/80 p-6 text-sm text-slate-700 shadow-sm md:min-w-[320px]">
          <h2 className="text-base font-semibold text-slate-900">Contact Details</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <span className="font-semibold">Phone:</span> (+91) 7338297612
            </li>
            <li>
              <span className="font-semibold">Email:</span> krupakkrupak6@gmail.com
            </li>
            <li>
              <span className="font-semibold">Location:</span> Mysuru, Karnataka, India
            </li>
          </ul>
          <div className="mt-4 space-y-2 text-sm">
            <p className="font-semibold text-slate-900">LinkedIn</p>
            <a
              href="http://linkedin.com/in/krupak-s-3b1323231"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              <span>linkedin.com/in/krupak-s-3b1323231</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
