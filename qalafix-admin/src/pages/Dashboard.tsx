import { events } from '../data/mock';

const stats = [
  { label: 'Всего пользователей', value: '48 290', change: '+0.8%', icon: '👥', positive: true },
  { label: 'Активных сегодня', value: '12 846', change: '+6.4%', icon: '⚡', positive: true },
  { label: 'Новых за неделю', value: '1 284', change: '+12%', icon: '✨', positive: true },
  { label: 'Заблокированные', value: '126', change: '-2.4%', icon: '🚫', positive: false },
];

const chartData = [280, 420, 380, 520, 460, 580, 620, 540, 690, 710, 650, 780];

const geo = [
  { name: 'Алматинский', value: 9840, pct: 100 },
  { name: 'Бостандыкский', value: 8160, pct: 83 },
  { name: 'Медеуский', value: 7320, pct: 74 },
  { name: 'Ауэзовский', value: 6984, pct: 71 },
  { name: 'Наурызбайский', value: 4925, pct: 50 },
];

export default function Dashboard() {
  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-text-dark">Обзор пользователей</h1>
          <p className="text-sm text-text-gray mt-2">
            Собрано 30 дней · Данные обновлены 2 минуты назад
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2.5 text-sm font-medium bg-white border border-border rounded-xl hover:bg-bg transition">
            📅 Последние 30 дней
          </button>
          <button className="px-4 py-2.5 text-sm font-medium bg-white border border-border rounded-xl hover:bg-bg transition">
            ⬇ Экспорт
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 mb-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-2xl">
                {s.icon}
              </div>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  s.positive ? 'text-success bg-success/10' : 'text-error bg-error/10'
                }`}
              >
                {s.change}
              </span>
            </div>
            <p className="text-3xl font-bold text-text-dark tracking-tight">{s.value}</p>
            <p className="text-sm text-text-gray mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-5 mb-6">
        <div className="col-span-2 bg-white rounded-2xl p-6 border border-border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-text-dark">Регистрации и активность</h2>
            <span className="text-sm text-success bg-success/10 px-3 py-1 rounded-full font-medium">
              ↗ +14.2%
            </span>
          </div>
          <div className="flex items-end gap-3 h-56 px-2">
            {chartData.map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                <div
                  className="w-full bg-primary rounded-t-lg hover:bg-primary-dark transition"
                  style={{ height: `${(v / 800) * 100}%`, minHeight: 8 }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-text-light font-medium">
            <span>1 окт</span>
            <span>8 окт</span>
            <span>15 окт</span>
            <span>22 окт</span>
            <span>30 окт</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-border">
          <h2 className="text-lg font-semibold text-text-dark mb-6">География пользователей</h2>
          <div className="space-y-4">
            {geo.map((d) => (
              <div key={d.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-text-dark font-medium">{d.name}</span>
                  <span className="text-text-gray">{d.value.toLocaleString()}</span>
                </div>
                <div className="h-2 bg-bg rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${d.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl p-6 border border-border">
          <h2 className="text-lg font-semibold text-text-dark mb-5">Требуют внимания</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-error/5 rounded-xl border border-error/10">
              <div className="w-8 h-8 rounded-lg bg-error/10 flex items-center justify-center shrink-0">
                <span className="text-error text-sm">⚠</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-text-dark">
                  Всплеск регистраций с одного устройства
                </p>
                <p className="text-xs text-text-gray mt-1">6 минут назад</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-warning/5 rounded-xl border border-warning/10">
              <div className="w-8 h-8 rounded-lg bg-warning/10 flex items-center justify-center shrink-0">
                <span className="text-warning text-sm">⚠</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-text-dark">Рост негативных отзывов</p>
                <p className="text-xs text-text-gray mt-1">2 часа назад</p>
              </div>
            </div>
            <button className="w-full py-3 text-sm font-medium text-primary hover:bg-primary-light rounded-xl transition mt-2">
              Открыть журнал рисков →
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-border">
          <h2 className="text-lg font-semibold text-text-dark mb-5">Последние события</h2>
          <div className="space-y-4">
            {events.map((e) => (
              <div key={e.id} className="flex items-start gap-3">
                <span
                  className="w-2.5 h-2.5 rounded-full mt-2 shrink-0"
                  style={{ backgroundColor: e.color }}
                />
                <div className="flex-1">
                  <p className="text-sm text-text-dark">{e.text}</p>
                  <p className="text-xs text-text-light mt-1">{e.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}