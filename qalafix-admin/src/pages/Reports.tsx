import { useState } from 'react';

const stats = [
  { icon: '🟡', value: '186', label: 'Новых обращений', accent: 'bg-warning/10 text-warning' },
  { icon: '🔵', value: '274', label: 'В обработке', accent: 'bg-primary-light text-primary' },
  { icon: '🟢', value: '786', label: 'Решено', accent: 'bg-success/10 text-success' },
  { icon: '🔴', value: '38', label: 'Отклонено', accent: 'bg-error/10 text-error' },
];

const reports = [
  { id: 'QF-4821', title: 'Не работает уличное освещение', address: 'ул. Кабанбай батыра, 12', user: 'Алия Досова', date: '30 мин, 14:32', status: 'new', priority: 'medium', executor: 'Не назначен' },
  { id: 'QF-4820', title: 'Яма на проезжей части', address: 'ул. Толеби, 59', user: 'Мұрат Қ.', date: '30 мин, 13:48', status: 'in_progress', priority: 'high', executor: 'Руслан Оспанов' },
  { id: 'QF-4819', title: 'Переполненный контейнер', address: 'ул. Саина, 5', user: 'Аружан С.', date: '30 мин, 12:56', status: 'new', priority: 'medium', executor: 'Не назначен' },
  { id: 'QF-4818', title: 'Сломанная скамейка в парке', address: 'пр. Аль-Фараби, 77', user: 'Нурлан Салимов', date: '29 мин, 11:28', status: 'new', priority: 'low', executor: 'Жанар Таубаева' },
  { id: 'QF-4817', title: 'Повреждение дорожного знака', address: 'ул. Гоголя, 86', user: 'Алия Досова', date: '29 мин, 10:15', status: 'in_progress', priority: 'medium', executor: 'Ильяс Болатов' },
  { id: 'QF-4816', title: 'Затопление после дождя', address: 'ул. Абая, 150', user: 'Алия Досова', date: '29 мин, 09:44', status: 'resolved', priority: 'high', executor: 'Руслан Оспанов' },
  { id: 'QF-4815', title: 'Повреждение покрытия тротуара', address: 'ул. Абая, 52', user: 'Алия Досова', date: '28 мин, 09:04', status: 'resolved', priority: 'low', executor: 'Жанар Таубаева' },
];

const statusConfig: Record<string, { label: string; color: string }> = {
  new: { label: 'Не рассмотрено', color: 'text-warning bg-warning/10' },
  in_progress: { label: 'В работе', color: 'text-primary bg-primary-light' },
  resolved: { label: 'Решено', color: 'text-success bg-success/10' },
  rejected: { label: 'Отклонено', color: 'text-error bg-error/10' },
};

const priorityConfig: Record<string, { label: string; color: string }> = {
  high: { label: 'Высокий', color: 'text-error' },
  medium: { label: 'Средний', color: 'text-warning' },
  low: { label: 'Низкий', color: 'text-text-gray' },
};

export default function Reports() {
  const [selectedId, setSelectedId] = useState('QF-4821');
  const selected = reports.find((r) => r.id === selectedId) || reports[0];

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-text-dark">Обращения</h1>
          <p className="text-sm text-text-gray mt-2">48 290 аккаунтов · 12 846 активных сегодня</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2.5 text-sm font-medium bg-white border border-border rounded-xl hover:bg-bg transition">
            ⬇ Экспорт в CSV
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

      <div className="bg-white rounded-2xl border border-border mb-5 p-5">
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="Поиск обращений: адрес, ФИО или номер заявки"
            className="flex-1 px-4 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:border-primary"
          />
          <select className="px-4 py-2.5 text-sm border border-border rounded-xl bg-white">
            <option>Категория: все</option>
          </select>
          <select className="px-4 py-2.5 text-sm border border-border rounded-xl bg-white">
            <option>Приоритет: все</option>
          </select>
          <select className="px-4 py-2.5 text-sm border border-border rounded-xl bg-white">
            <option>Статус: все</option>
          </select>
          <select className="px-4 py-2.5 text-sm border border-border rounded-xl bg-white">
            <option>1–30 сентября 2026</option>
          </select>
          <button className="px-4 py-2.5 text-sm font-medium bg-bg border border-border rounded-xl hover:bg-border transition">
            Обновить
          </button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {['Новые 186', 'В работе 274', 'На проверке 12', 'Просрочено 8'].map((f) => (
            <button
              key={f}
              className="px-3 py-1.5 text-xs font-medium bg-bg border border-border rounded-lg hover:border-primary hover:text-primary transition"
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-border overflow-hidden mb-5">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-bg/50">
              <th className="px-5 py-3 text-left">
                <input type="checkbox" className="w-4 h-4 accent-primary" />
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Обращение</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Адрес / место</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Автор</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Дата</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Статус</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Приоритет</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Исполнитель</th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-text-gray uppercase tracking-wide">Действия</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r) => {
              const sc = statusConfig[r.status];
              const pc = priorityConfig[r.priority];
              const active = selectedId === r.id;
              return (
                <tr
                  key={r.id}
                  onClick={() => setSelectedId(r.id)}
                  className={`border-b border-border last:border-0 cursor-pointer transition ${
                    active ? 'bg-primary-light/40' : 'hover:bg-bg/50'
                  }`}
                >
                  <td className="px-5 py-4">
                    <input type="checkbox" className="w-4 h-4 accent-primary" />
                  </td>
                  <td className="px-3 py-4">
                    <p className="text-sm font-medium text-text-dark">{r.id}</p>
                    <p className="text-xs text-text-gray mt-0.5 truncate max-w-55">{r.title}</p>
                  </td>
                  <td className="px-3 py-4 text-sm text-text-dark">{r.address}</td>
                  <td className="px-3 py-4 text-sm text-text-dark">{r.user}</td>
                  <td className="px-3 py-4 text-sm text-text-gray whitespace-nowrap">{r.date}</td>
                  <td className="px-3 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full ${sc.color}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {sc.label}
                    </span>
                  </td>
                  <td className="px-3 py-4">
                    <span className={`text-xs font-medium ${pc.color}`}>{pc.label}</span>
                  </td>
                  <td className="px-3 py-4 text-sm text-text-dark">{r.executor}</td>
                  <td className="px-3 py-4">
                    <button className="text-text-light hover:text-text-dark text-lg">⋯</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-5 py-4 border-t border-border">
          <span className="text-sm text-text-gray">Показано 1–8 из 48 290</span>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-bg">Назад</button>
            <button className="w-9 h-9 text-sm font-medium bg-primary text-white rounded-lg">1</button>
            <button className="w-9 h-9 text-sm border border-border rounded-lg hover:bg-bg">2</button>
            <button className="w-9 h-9 text-sm border border-border rounded-lg hover:bg-bg">3</button>
            <button className="w-9 h-9 text-sm border border-border rounded-lg hover:bg-bg">4</button>
            <span className="px-2 self-center text-text-light">...</span>
            <button className="w-12 h-9 text-sm border border-border rounded-lg hover:bg-bg">604</button>
            <button className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-bg">Далее</button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-border p-6">
        <h3 className="text-lg font-semibold text-text-dark mb-5">
          Выбранное обращение: <span className="text-primary">{selected.id}</span>
        </h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="rounded-xl overflow-hidden mb-4 bg-bg h-48 flex items-center justify-center text-text-gray text-sm">
              📷 Фото обращения
            </div>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full mb-3 ${statusConfig[selected.status].color}`}>
              ● {statusConfig[selected.status].label}
            </span>
            <p className="text-base font-semibold text-text-dark mb-2">{selected.title}</p>
            <p className="text-sm text-text-gray mb-3">
              Уличный фонарь возле дома не работает уже 3 дня. Наблюдается темнота на проезжей части в вечернее время. Проходить мимо невозможно.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-text-gray">
              <span className="flex items-center gap-1.5">👤 <strong className="text-text-dark">{selected.user}</strong></span>
              <span className="flex items-center gap-1.5">📍 {selected.address}</span>
              <span className="flex items-center gap-1.5">📅 Создано: {selected.date}</span>
              <span className="flex items-center gap-1.5">🔄 Обновлено: 15 октября 2026</span>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-text-gray uppercase tracking-wide mb-1.5 block">
                Ответственный
              </label>
              <select className="w-full px-4 py-2.5 text-sm border border-border rounded-xl bg-white">
                <option>Ерлан Даулет · Дорожное службы</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-text-gray uppercase tracking-wide mb-1.5 block">
                Изменить статус
              </label>
              <select className="w-full px-4 py-2.5 text-sm border border-border rounded-xl bg-white">
                <option>В работе</option>
                <option>Решено</option>
                <option>Отклонено</option>
              </select>
            </div>
            <button className="w-full py-3 text-sm font-semibold bg-primary text-white rounded-xl hover:bg-primary-dark transition">
              Обновить обращение
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}