import { useState } from 'react';

const stats = [
  {
    icon: '🚨',
    value: '3',
    label: 'Несколько регистраций с одного устройства',
    accent: 'bg-error/10 text-error',
  },
  {
    icon: '⚠️',
    value: '42',
    label: 'Попытки подбора пароля',
    accent: 'bg-warning/10 text-warning',
  },
  {
    icon: '🚫',
    value: '18',
    label: 'Аккаунтов для блокировки',
    accent: 'bg-primary-light text-primary',
  },
  {
    icon: '✅',
    value: '99,82%',
    label: 'Безопасных сессий',
    accent: 'bg-success/10 text-success',
  },
];

const events = [
  {
    type: 'danger',
    icon: '🚨',
    title: 'Несколько регистраций с одного устройства',
    desc: 'Несколько регистраций с одного устройства · Устройство: Infinix X683 · Алматы',
    time: 'Сегодня, 16:42',
  },
  {
    type: 'success',
    icon: '✅',
    title: '17 подозрительных входов входа',
    desc: '17 подозрительных входов входа · Устройство: iPhone 14 Pro',
    time: 'Сегодня, 15:18',
  },
  {
    type: 'warning',
    icon: '⚠️',
    title: 'Массово жалоб на пользователя',
    desc: 'Жалоб: 3 · Всего за 24 часа',
    time: 'Сегодня, 14:35',
  },
  {
    type: 'warning',
    icon: '⚠️',
    title: 'Массовые обращения без фото',
    desc: 'Пользователь: qf-4820 · 8 обращений за 10 минут',
    time: 'Сегодня, 12:12',
  },
  {
    type: 'info',
    icon: '🆕',
    title: 'Новый аккаунт в профиле',
    desc: 'Аккаунт: qf-4022 · Тип: подозрительный вход',
    time: 'Сегодня, 12:44',
  },
  {
    type: 'danger',
    icon: '🚨',
    title: 'Попытка обращения',
    desc: 'Сессия: qf-4018 · 5 попыток за час',
    time: 'Сегодня, 11:03',
  },
];

const typeStyle: Record<string, { iconBg: string; dot: string }> = {
  danger: { iconBg: 'bg-error/10 text-error', dot: 'bg-error' },
  warning: { iconBg: 'bg-warning/10 text-warning', dot: 'bg-warning' },
  success: { iconBg: 'bg-success/10 text-success', dot: 'bg-success' },
  info: { iconBg: 'bg-primary-light text-primary', dot: 'bg-primary' },
};

const filters = ['Все события 294', 'Взломы 62', 'Регистрации 45', 'Жалобы 21', 'Попытки 74'];

export default function Activity() {
  const [activeFilter, setActiveFilter] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(0);

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-text-dark">Журнал активности и рисков</h1>
          <p className="text-sm text-text-gray mt-2">Событие последние 30 дней</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2.5 text-sm font-medium bg-white border border-border rounded-xl hover:bg-bg transition">
            ⇆ Правила риска
          </button>
          <button className="px-4 py-2.5 text-sm font-medium bg-white border border-border rounded-xl hover:bg-bg transition">
            ⬇ Экспорт журнала
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

      <div className="bg-white rounded-2xl border border-border mb-5 p-4">
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="Пользователь, IP-адрес, устройство или событие"
            className="flex-1 px-4 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:border-primary"
          />
          <select className="px-4 py-2.5 text-sm border border-border rounded-xl bg-white">
            <option>Уровень: все</option>
          </select>
          <select className="px-4 py-2.5 text-sm border border-border rounded-xl bg-white">
            <option>Тип события</option>
          </select>
          <select className="px-4 py-2.5 text-sm border border-border rounded-xl bg-white">
            <option>Статус</option>
          </select>
          <select className="px-4 py-2.5 text-sm border border-border rounded-xl bg-white">
            <option>Сегодня</option>
          </select>
          <button className="px-4 py-2.5 text-sm font-medium bg-bg border border-border rounded-xl">
            ⚙
          </button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {filters.map((f, i) => (
            <button
              key={f}
              onClick={() => setActiveFilter(i)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
                activeFilter === i
                  ? 'bg-primary text-white'
                  : 'bg-bg border border-border text-text-dark hover:border-primary hover:text-primary'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 bg-white rounded-2xl border border-border overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <h3 className="font-semibold text-text-dark">Последние события</h3>
            <span className="text-xs text-success flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              обновлено только что
            </span>
          </div>

          <div className="divide-y divide-border">
            {events.map((e, i) => {
              const style = typeStyle[e.type];
              const active = selectedEvent === i;
              return (
                <div
                  key={i}
                  onClick={() => setSelectedEvent(i)}
                  className={`flex items-start gap-4 px-5 py-4 cursor-pointer transition ${
                    active ? 'bg-primary-light/40' : 'hover:bg-bg/50'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${style.iconBg}`}>
                    <span className="text-sm">{e.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-dark">{e.title}</p>
                    <p className="text-xs text-text-gray mt-1 truncate">{e.desc}</p>
                  </div>
                  <span className="text-xs text-text-light whitespace-nowrap">{e.time}</span>
                  <span className="text-text-light">›</span>
                </div>
              );
            })}
          </div>

          <div className="px-5 py-3 border-t border-border text-center">
            <button className="text-sm text-primary font-medium hover:underline">
              Показать ещё 50 событий
            </button>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-border p-5">
            <div className="flex items-start justify-between mb-3">
              <p className="text-xs text-text-gray">СОБЫТИЕ 2026-03-22 16:42:18</p>
              <span className="text-xs text-error bg-error/10 px-2 py-0.5 rounded-full font-medium">
                ● Подтверждён
              </span>
            </div>
            <p className="text-sm text-text-dark font-medium mb-4">
              2 регистрации с одного устройства
            </p>
            <p className="text-xs text-text-gray mb-4">Серия: 5 попыток за час</p>

            <div className="mb-4">
              <p className="text-xs font-semibold text-text-gray uppercase tracking-wide mb-2">
                Технические данные
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-gray">Устройство</span>
                  <span className="text-text-dark font-medium">Android 14 · Pixel 8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-gray">Отпечаток устройства</span>
                  <span className="text-text-dark font-medium">B1F-2976-824-348c</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-gray">IP-адрес</span>
                  <span className="text-text-dark font-medium">185.100.87.1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-gray">Местоположение</span>
                  <span className="text-text-dark font-medium">Алматинская, А.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-gray">Сеть</span>
                  <span className="text-text-dark font-medium">Tele2 Казахстан</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-xs font-semibold text-text-gray uppercase tracking-wide mb-3">
                Связанные аккаунты
              </p>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-semibold">
                  РС
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-dark">Руслан Сейфуллин</p>
                  <p className="text-xs text-text-light">qf-4022@skala</p>
                </div>
                <span className="text-warning bg-warning/10 text-xs px-2 py-0.5 rounded-full font-medium">
                  ⚠ Заблокирован
                </span>
              </div>
              <div className="flex gap-4 text-xs text-text-gray">
                <span><strong className="text-text-dark">2</strong> аккаунта</span>
                <span><strong className="text-text-dark">4</strong> новых IP-адреса</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-border p-5">
            <p className="text-xs font-semibold text-text-gray uppercase tracking-wide mb-3">
              Решение администратора
            </p>
            <input
              type="text"
              placeholder="Добавить комментарий и решение..."
              className="w-full px-4 py-2.5 text-sm border border-border rounded-xl mb-3 focus:outline-none focus:border-primary"
            />
            <div className="space-y-2">
              <button className="w-full px-4 py-2.5 text-sm font-medium bg-primary text-white rounded-xl hover:bg-primary-dark transition text-left">
                🔓 Разблокировать аккаунт
              </button>
              <button className="w-full px-4 py-2.5 text-sm font-medium bg-error/10 text-error border border-error/20 rounded-xl hover:bg-error/20 transition text-left">
                🚫 Заблокировать навсегда
              </button>
              <button className="w-full px-4 py-2.5 text-sm font-medium text-text-dark hover:bg-bg rounded-xl transition text-left">
                ✓ Отметить как ложное срабатывание
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}