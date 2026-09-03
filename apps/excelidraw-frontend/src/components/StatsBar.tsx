const stats = [
  { value: '120K+', label: 'Active creators' },
  { value: '2.4M', label: 'Diagrams drawn' },
  { value: '180+', label: 'Countries' },
  { value: '4.9/5', label: 'Average rating' },
];

export function StatsBar() {
  return (
    <section className="border-y border-ink-200 bg-ink-100/50 py-10">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 sm:px-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-extrabold text-ink-900 sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-sm font-medium text-ink-500">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}