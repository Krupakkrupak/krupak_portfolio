import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="animate-fade-up grid gap-10 md:grid-cols-[3fr,2fr] md:items-center">
      <div className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
          Portfolio of
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          KRUPAK
        </h1>
        <h2 className="text-lg font-medium text-indigo-700 sm:text-xl">
          Full Stack Web Developer • MERN & Laravel
        </h2>
        <p className="max-w-xl text-sm text-slate-600 sm:text-base">
          Detail-oriented and proactive Computer Science Engineering undergraduate with
          hands-on experience in full stack web development and software engineering.
          Skilled in Python, PHP, SQL, Laravel, and MERN stack technologies.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5"
          >
            View Projects
          </Link>
          <a
            href="https://your-resume-link-here"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm backdrop-blur transition hover:border-indigo-300 hover:text-indigo-700 hover:shadow-lg hover:-translate-y-0.5"
          >
            Download Resume
          </a>
          <Link
            to="/contact"
            className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 backdrop-blur transition hover:border-indigo-300 hover:text-indigo-700 hover:shadow-lg hover:-translate-y-0.5"
          >
            Contact Me
          </Link>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-slate-500">
          <span className="rounded-full bg-white/80 px-3 py-1 shadow-sm">
            React & MERN Stack
          </span>
          <span className="rounded-full bg-white/80 px-3 py-1 shadow-sm">Laravel & PHP</span>
          <span className="rounded-full bg-white/80 px-3 py-1 shadow-sm">Machine Learning</span>
        </div>
      </div>
      <div className="relative hidden h-full md:block">
        <div className="animate-float-soft absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-400 opacity-90" />
        <div className="relative flex h-full flex-col justify-between rounded-3xl border border-white/40 bg-white/10 p-6 text-sm text-white shadow-xl backdrop-blur-lg">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-14 w-14 overflow-hidden rounded-full border border-white/40 bg-white/10 shadow-md">
              <img
                src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Developer illustration"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide text-indigo-100">Profile</p>
              <p className="text-sm font-semibold">KRUPAK</p>
              <p className="text-xs text-indigo-100">Full Stack Developer</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100">
              Quick Details
            </p>
            <p className="mt-3 text-lg font-semibold">Computer Science Engineering</p>
            <p className="text-indigo-100">Mysore College of Engineering and Management</p>
            <p className="mt-1 text-sm text-indigo-100">Mysuru, Karnataka, India</p>
          </div>
          <div className="space-y-2 text-xs">
            <p>
              <span className="font-semibold">Phone:</span> (+91) 7338297612
            </p>
            <p>
              <span className="font-semibold">Email:</span> krupakkrupak6@gmail.com
            </p>
            <p>
              <span className="font-semibold">LinkedIn:</span>{' '}
              <a
                href="http://linkedin.com/in/krupak-s-3b1323231"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                /krupak-s-3b1323231
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
