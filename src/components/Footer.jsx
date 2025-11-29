function Footer() {
  return (
    <footer className="border-t border-white/40 bg-white/70 py-4 text-sm text-slate-600 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 md:flex-row">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} KRUPAK. All rights reserved.
        </p>
        <p className="text-center text-xs text-slate-500 md:text-right">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer
