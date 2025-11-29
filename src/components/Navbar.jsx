import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/education', label: 'Education' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-white/40 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="text-lg font-semibold tracking-tight text-slate-900">KRUPAK</div>
        </div>

        <nav className="hidden items-center gap-4 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-1 transition-colors ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-700 hover:bg-slate-100'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="https://drive.google.com/file/d/1TyxFKe931yTJdYm-H2iWH8ManoZXQcKN/view?usp=drivesdk"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-slate-800"
          >
            Download Resume
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="h-0.5 w-5 bg-slate-800" />
          <span className="mt-1 h-0.5 w-5 bg-slate-800" />
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white/95 px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 transition-colors ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://your-resume-link-here"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-lg bg-slate-900 px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white shadow-sm"
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
