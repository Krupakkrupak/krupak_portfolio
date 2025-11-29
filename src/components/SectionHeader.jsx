function SectionHeader({ overline, title, subtitle }) {
  return (
    <div className="mb-8 space-y-2">
      {overline && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
          {overline}
        </p>
      )}
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h1>
      {subtitle && <p className="max-w-2xl text-sm text-slate-600">{subtitle}</p>}
    </div>
  )
}

export default SectionHeader
