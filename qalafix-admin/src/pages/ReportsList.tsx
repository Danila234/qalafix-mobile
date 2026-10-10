const stats = [
  { icon: '🏙️', value: '1 284', label: 'Всего обращений', accent: 'bg-primary-light text-primary' },
  { icon: '✅', value: '786', label: 'Решено', accent: 'bg-success/10 text-success' },
  { icon: '📈', value: '61,2%', label: 'Доля решённых', accent: 'bg-warning/10 text-warning' },
  { icon: '⏱️', value: '3,7 дня', label: 'Средний срок решения', accent: 'bg-secondary/10 text-secondary' },
];

const chartData = [
  { month: 'Июль', total: 168, resolved: 84 },
  { month: 'Август', total: 112, resolved: 84 },
  { month: 'Сентябрь', total: 220, resolved: 122 },
  { month: 'Октябрь', total: 180, resolved: 114 },
  { month: 'Ноябрь', total: 192, resolved: 130 },
  { month: 'Декабрь', total: 190, resolved: 156 },
];

const byCategory = [
  { name: 'Мусор', value: 450, pct: 100 },
  { name: 'Дороги', value: 370, pct: 82 },
  { name: 'Уличное освещение', value: 246, pct: 55 },
  { name: 'Остановки', value: 125, pct: 28 },
  { name: 'Другие', value: 125, pct: 28 },
];

const byDistrict = [
  { name: 'Бостандыкский', value: 284, pct: 100 },
  { name: 'Алмалинский', value: 220, pct: 78 },
  { name: 'Медеуский', value: 195, pct: 69 },
  { name: 'Ауэзовский', value: 180, pct: 63 },
  { name: 'Турксибский', value: 132, pct: 47 },
  { name: 'Жетысуский', value: 128, pct: 45 },
  { name: 'Наурызбайский', value: 84, pct: 30 },
  { name: 'Алатауский', value: 61, pct: 22 },
];

const districtTable = [
  { name: 'Бостандыкский', total: 284, resolved: 148, rejected: 8, avg: '3,2 дня', pct: 52 },
  { name: 'Алмалинский', total: 220, resolved: 100, rejected: 6, avg: '2,4 дня', pct: 45 },
  { name: 'Медеуский', total: 195, resolved: 122, rejected: 6, avg: '3,4 дня', pct: 63 },
  { name: 'Ауэзовский', total: 180, resolved: 84, rejected: 14, avg: '4,1 дня', pct: 47 },
  { name: 'Турксибский', total: 132, resolved: 78, rejected: 5, avg: '4,4 дня', pct: 59 },
  { name: 'Жетысуский', total: 128, resolved: 60, rejected: 4, avg: '4,2 дня', pct: 47 },
  { name: 'Наурызбайский', total: 84, resolved: 24, rejected: 3, avg: '4,8 дня', pct: 29 },
  { name: 'Алатауский', total: 61, resolved: 44, rejected: 4, avg: '2,9 дня', pct: 72 },
];

export default function ReportsList() {
  const maxChart = Math.max(...chartData.map((d) => d.total));

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-text-dark">Отчёты</h1>
          <p className="text-sm text-text-gray mt-2">
            Аналитика обращений, решений и активность за выбранный период
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2.5 text-sm font-medium bg-white border border-border rounded-xl hover:bg-bg transition">
            ⬇ Экспорт в CSV
          </button>
          <button className="px-4 py-2.5 text-sm font-medium bg-primary text-white rounded-xl hover:bg-primary-dark transition">
            + Создать отчёт
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-border mb-5 p-5">
        <div className="flex gap-3 items-center">
          <div>
            <label className="text-xs text-text-gray block mb-1.5">Период</label>
            <select className="px-4 py-2.5 text-sm border border-border rounded-xl bg-white min-w-50">
              <option>1–30 сентября 2026</option>
              <option>1–31 октября 2026</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-text-gray block mb-1.5">Район</label>
            <select className="px-4 py-2.5 text-sm border border-border rounded-xl bg-white min-w-45">
              <option>Все районы Алматы</option>
            </select>
          </div>
          <button className="mt-5 px-5 py-2.5 text-sm font-medium bg-primary text-white rounded-xl hover:bg-primary-dark transition">
            ⚙ Сформировать отчёт
          </button>
          <button className="mt-5 px-4 py-2.5 text-sm text-text-gray hover:text-primary transition">
            Сбросить
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-border p-5">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-3 ${s.accent}`}>
              {s.icon}
            </div>
            <p className="text-3xl font-bold text-text-dark">{s.value}</p>
            <p className="text-xs text-text-gray mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-5 mb-6">
        <div className="col-span-2 bg-white rounded-2xl border border-border p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-text-dark">Обращения и решения</h3>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-primary" /> Поступило
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-success" /> Решено
              </span>
            </div>
          </div>
          <div className="flex items-end gap-6 h-56 px-4">
            {chartData.map((d) => (
              <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex items-end justify-center gap-2 h-full">
                  <div className="flex flex-col items-center gap-2 w-full">
                    <span className="text-xs font-medium text-primary">{d.total}</span>
                    <div
                      className="w-full max-w-9.5 bg-primary rounded-t-lg"
                      style={{ height: `${(d.total / maxChart) * 180}px` }}
                    />
                  </div>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <span className="text-xs font-medium text-success">{d.resolved}</span>
                    <div
                      className="w-full max-w-9.5 bg-success rounded-t-lg"
                      style={{ height: `${(d.resolved / maxChart) * 180}px` }}
                    />
                  </div>
                </div>
                <span className="text-xs text-text-gray mt-2">{d.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-border p-6">
          <h3 className="text-lg font-semibold text-text-dark mb-5">По категориям</h3>
          <div className="space-y-4">
            {byCategory.map((c) => (
              <div key={c.name}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-text-dark font-medium">{c.name}</span>
                  <span className="text-text-gray">
                    {c.value} <span className="text-text-light">({c.pct}%)</span>
                  </span>
                </div>
                <div className="h-1.5 bg-bg rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${c.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-6">
        <div className="col-span-2 bg-white rounded-2xl border border-border overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <h3 className="text-lg font-semibold text-text-dark">Итоги по районам</h3>
            <span className="text-xs text-text-gray">
              Период: 1–30 сентября 2026
            </span>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-bg/50">
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Район</th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Поступило</th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Решено</th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Отклонено</th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Доля решённых</th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Срок</th>
              </tr>
            </thead>
            <tbody>
              {districtTable.map((d) => (
                <tr key={d.name} className="border-b border-border last:border-0 hover:bg-bg/50 transition">
                  <td className="px-6 py-4 text-sm font-medium text-text-dark">{d.name}</td>
                  <td className="px-3 py-4 text-sm text-text-dark">{d.total}</td>
                  <td className="px-3 py-4 text-sm text-text-dark">{d.resolved}</td>
                  <td className="px-3 py-4 text-sm text-text-dark">{d.rejected}</td>
                  <td className="px-3 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-text-dark">{d.pct}%</span>
                      <div className="w-16 h-1.5 bg-bg rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${d.pct}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4 text-sm text-text-dark">{d.avg}</td>
                </tr>
              ))}
              <tr className="bg-bg/30 font-semibold">
                <td className="px-6 py-4 text-sm text-text-dark">Итого</td>
                <td className="px-3 py-4 text-sm text-text-dark">1 284</td>
                <td className="px-3 py-4 text-sm text-text-dark">786</td>
                <td className="px-3 py-4 text-sm text-text-dark">50</td>
                <td className="px-3 py-4 text-sm text-text-dark">61,2%</td>
                <td className="px-3 py-4 text-sm text-text-dark">3,7 дня</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-2xl border border-border p-6">
          <h3 className="text-lg font-semibold text-text-dark mb-5">По районам</h3>
          <div className="space-y-3">
            {byDistrict.map((d) => (
              <div key={d.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-text-dark">{d.name}</span>
                  <span className="text-text-gray font-medium">{d.value}</span>
                </div>
                <div className="h-1.5 bg-bg rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${d.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 p-3 bg-primary-light rounded-xl">
            <p className="text-xs text-primary leading-relaxed">
              Больше всего обращений в Бостандыкском районе — 284 обращения
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}