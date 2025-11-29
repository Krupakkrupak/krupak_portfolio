import SectionHeader from '../components/SectionHeader.jsx'

const skillIcons = {
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  SQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  Laravel: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  Bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
}

function Skills() {
  const renderChip = (item) => (
    <span
      key={item}
      className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      {skillIcons[item] && (
        <img
          src={skillIcons[item]}
          alt={`${item} logo`}
          className="h-3.5 w-3.5"
          loading="lazy"
        />
      )}
      <span>{item}</span>
    </span>
  )

  return (
    <section className="animate-fade-up">
      <SectionHeader
        overline="Skills"
        title="Technical Skills"
        subtitle="A blend of backend, frontend, and data-focused skills built through projects and internships."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-slate-900">Programming Languages</h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {['Python', 'PHP', 'SQL', 'HTML', 'CSS', 'JavaScript'].map((item) => renderChip(item))}
          </div>

          <h2 className="mt-6 text-sm font-semibold text-slate-900">Frameworks & Libraries</h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {['Laravel', 'React', 'Node.js', 'MERN Stack'].map((item) => renderChip(item))}
          </div>

          <h2 className="mt-6 text-sm font-semibold text-slate-900">Web Technologies</h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {['HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'].map((item) => renderChip(item))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-slate-900">Databases</h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {['MySQL'].map((item) => renderChip(item))}
          </div>

          <h2 className="mt-6 text-sm font-semibold text-slate-900">Tools & Concepts</h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              'Git',
              'Composer',
              'MVC Architecture',
              'Agile Development',
              'Eloquent ORM',
              'Migrations',
              'Seeders',
            ].map((item) => renderChip(item))}
          </div>

          <h2 className="mt-6 text-sm font-semibold text-slate-900">Core Concepts</h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              'Object-Oriented Programming',
              'Exception Handling',
              'Data Structures',
              'Machine Learning',
              'Data Analytics',
            ].map((item) => renderChip(item))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
