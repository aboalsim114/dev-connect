const stacks = [
    {
      dot: '#3B82F6',
      label: 'Frontend',
      items: ['React 18', 'Vite', 'Zustand', 'React Router v6', 'React Query', 'Tailwind CSS'],
    },
    {
      dot: '#8B5CF6',
      label: 'Backend',
      items: ['Django', 'DRF', 'SimpleJWT', 'django-allauth', 'Celery', 'PostgreSQL 16'],
    },
    {
      dot: '#14B8A6',
      label: 'Temps réel',
      items: ['Django Channels', 'Daphne', 'Redis 7', 'Socket.io', 'Channel layer'],
    },
    {
      dot: '#F59E0B',
      label: 'Infra & DevOps',
      items: ['Docker Compose', 'AWS S3', 'django-storages', 'GitHub Actions', 'Nginx'],
    },
  ]
  
  export default function Stack() {
    return (
      <section id="stack" className="py-[90px]">
        <div className="mx-auto max-w-[1200px] px-8">
  
          <div className="max-w-[680px]">
            <span className="font-mono text-[13px] font-semibold uppercase tracking-[.04em] text-[#7A8190]">// Stack technique</span>
            <h2 className="mt-[14px] font-display text-[44px] font-semibold leading-[1.08] tracking-[-0.03em]">
              Construit avec des outils modernes.
            </h2>
            <p className="mt-4 text-[18px] leading-relaxed text-[#525968]">
              Une architecture containerisée, du front au temps réel, orchestrée par Docker Compose.
            </p>
          </div>
  
          <div className="mt-[46px] grid grid-cols-2 gap-[18px] lg:grid-cols-4">
            {stacks.map(({ dot, label, items }) => (
              <div key={label} className="rounded-2xl border border-[#ECEEE8] bg-white p-[22px]">
                <div className="mb-4 flex items-center gap-[9px]">
                  <span className="h-[9px] w-[9px] rounded-full" style={{ background: dot }} aria-hidden="true" />
                  <span className="font-display text-[15px] font-semibold">{label}</span>
                </div>
                <div className="flex flex-col gap-[9px] font-mono text-[13px] text-[#3D4453]">
                  {items.map(item => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    )
  }
  