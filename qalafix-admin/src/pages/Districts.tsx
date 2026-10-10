import { useState } from 'react';

const stats = [
  { icon: '🏙️', value: '1 284', label: 'Всего обращений по районам', accent: 'bg-primary-light text-primary' },
  { icon: '⏱️', value: '460', label: 'Средний срок решения', accent: 'bg-warning/10 text-warning' },
  { icon: '📈', value: '3,7 дня', label: 'Средний срок решения', accent: 'bg-success/10 text-success' },
  { icon: '⚠️', value: '24', label: 'Срок активных', accent: 'bg-error/10 text-error' },
];

const districtStats = [
  { name: 'Бостандыкский', reports: 284, newR: 36, inProgress: 92, resolved: 148, rejected: 8, pct: 72, avgTime: '3,2 дн.' },
  { name: 'Алмалинский', reports: 220, newR: 24, inProgress: 90, resolved: 100, rejected: 6, pct: 78, avgTime: '2,4 дн.' },
  { name: 'Медеуский', reports: 195, newR: 20, inProgress: 40, resolved: 129, rejected: 6, pct: 66, avgTime: '3,4 дн.' },
  { name: 'Ауэзовский', reports: 180, newR: 26, inProgress: 30, resolved: 110, rejected: 14, pct: 61, avgTime: '4,1 дн.' },
  { name: 'Турксибский', reports: 132, newR: 30, inProgress: 30, resolved: 76, rejected: 5, pct: 58, avgTime: '4,4 дн.' },
  { name: 'Жетысуский', reports: 128, newR: 18, inProgress: 30, resolved: 76, rejected: 4, pct: 59, avgTime: '4,2 дн.' },
  { name: 'Наурызбайский', reports: 84, newR: 14, inProgress: 26, resolved: 44, rejected: 3, pct: 52, avgTime: '4,8 дн.' },
  { name: 'Алатауский', reports: 61, newR: 18, inProgress: 44, resolved: 44, rejected: 7, pct: 80, avgTime: '2,9 дн.' },
];

export default function Districts() {
  const [selected, setSelected] = useState('Бостандыкский');

  const current = districtStats.find((s) => s.name === selected) || districtStats[0];

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-text-dark">Районы</h1>
          <p className="text-sm text-text-gray mt-2">
            К обращению внимания и поделены по районам города
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2.5 text-sm font-medium bg-white border border-border rounded-xl hover:bg-bg transition">
            📅 Сентябрь 2026
          </button>
          <button className="px-4 py-2.5 text-sm font-medium bg-white border border-border rounded-xl hover:bg-bg transition">
            ⬇ Экспорт
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-border p-5">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-3 ${s.accent}`}>
              {s.icon}
            </div>
            <p className="text-2xl font-bold text-text-dark">{s.value}</p>
            <p className="text-xs text-text-gray mt-1 leading-snug">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-5 mb-6">
        <div className="col-span-2 bg-white rounded-2xl border border-border p-6">
          <h3 className="text-lg font-semibold text-text-dark mb-5">Районы Алматы</h3>

          <div className="rounded-xl bg-linear-to-br from-bg/60 to-primary-light/30 p-8 min-h-95">
            <div className="flex flex-wrap gap-x-3 gap-y-6 justify-center items-center">
              {districtStats.map((d) => {
                const active = selected === d.name;
                const size = d.reports > 200 ? 'lg' : d.reports > 100 ? 'md' : 'sm';

                const sizeClasses = {
                  lg: 'px-7 py-5 min-w-[150px]',
                  md: 'px-6 py-4 min-w-[120px]',
                  sm: 'px-5 py-3 min-w-[100px]',
                }[size];

                const textSize = {
                  lg: 'text-base',
                  md: 'text-sm',
                  sm: 'text-xs',
                }[size];

                const numSize = {
                  lg: 'text-sm',
                  md: 'text-xs',
                  sm: 'text-[11px]',
                }[size];

                return (
                  <button
                    key={d.name}
                    onClick={() => setSelected(d.name)}
                    className="transition-all duration-200 hover:-translate-y-1 relative"
                    style={{ transform: 'skewX(-8deg) rotate(-2deg)' }}
                  >
                    <div
                      className={`${sizeClasses} rounded-xl border-2 transition-all ${
                        active
                          ? 'bg-primary border-primary shadow-xl'
                          : 'bg-primary-light border-primary/20 hover:border-primary/60 hover:shadow-md'
                      }`}
                      style={{ transform: 'skewX(8deg) rotate(2deg)' }}
                    >
                      <div className={`font-semibold ${textSize} ${active ? 'text-white' : 'text-text-dark'}`}>
                        {d.name}
                      </div>
                      <div className={`mt-1 ${numSize} ${active ? 'text-white/80' : 'text-text-gray'}`}>
                        {d.reports}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex justify-start">
              <div className="bg-white/95 backdrop-blur rounded-xl px-4 py-3 shadow-lg border border-border">
                <p className="text-xs text-text-gray mb-0.5">Выбранный район</p>
                <p className="text-sm font-semibold text-primary">{selected}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 mt-5 text-xs">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-primary" /> Больше обращений
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-primary-light border border-primary/20" /> Меньше обращений
            </span>
            <span className="text-text-light ml-auto">Нажмите на район для деталей</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-text-dark">{selected} район</h3>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-primary-light rounded-xl p-3">
              <p className="text-2xl font-bold text-primary">{current.reports}</p>
              <p className="text-xs text-text-gray mt-1">Всего обращений</p>
            </div>
            <div className="bg-success/10 rounded-xl p-3">
              <p className="text-2xl font-bold text-success">{current.resolved}</p>
              <p className="text-xs text-text-gray mt-1">Решено</p>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-text-gray">Не рассмотрено</span>
              <span className="font-medium text-text-dark">{current.newR}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-gray">В работе</span>
              <span className="font-medium text-text-dark">{current.inProgress}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-gray">Отклонено</span>
              <span className="font-medium text-text-dark">{current.rejected}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-gray">Срок активных</span>
              <span className="font-medium text-text-dark">{current.avgTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-gray">Средний срок решения</span>
              <span className="font-medium text-text-dark">{current.avgTime}</span>
            </div>
          </div>

          <div className="mt-5 pt-5 border-t border-border">
            <p className="text-xs text-text-gray mb-1">Контакт ответственного</p>
            <p className="text-sm font-medium text-text-dark">Ахметов Кенес</p>
            <p className="text-xs text-text-gray">+7 702 234 56 78 · inner@mail.kz</p>
          </div>

          <button className="w-full mt-5 py-2.5 text-sm font-medium bg-bg border border-border rounded-xl hover:bg-border transition text-center">
            📊 Открыть данные района
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-border overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h3 className="font-semibold text-text-dark">Работа по районам</h3>
          <select className="px-3 py-1.5 text-xs border border-border rounded-lg bg-white">
            <option>Все районы</option>
          </select>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-bg/50">
              <th className="px-6 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Район</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Всего</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Новых</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">В работе</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Решено</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Отклонено</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">% решённых</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Срок решения</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Действия</th>
            </tr>
          </thead>
          <tbody>
            {districtStats.map((d) => (
              <tr
                key={d.name}
                onClick={() => setSelected(d.name)}
                className={`border-b border-border last:border-0 cursor-pointer transition ${
                  selected === d.name ? 'bg-primary-light/40' : 'hover:bg-bg/50'
                }`}
              >
                <td className="px-6 py-4 text-sm font-medium text-text-dark">{d.name}</td>
                <td className="px-3 py-4 text-sm text-text-dark">{d.reports}</td>
                <td className="px-3 py-4 text-sm text-text-dark">{d.newR}</td>
                <td className="px-3 py-4 text-sm text-text-dark">{d.inProgress}</td>
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
                <td className="px-3 py-4 text-sm text-text-dark">{d.avgTime}</td>
                <td className="px-3 py-4">
                  <button className="text-text-light hover:text-text-dark text-lg">⋯</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-4 border-t border-border text-xs text-text-gray">
          Показано 1–8 из 8 районов
        </div>
      </div>
    </div>
  );
}