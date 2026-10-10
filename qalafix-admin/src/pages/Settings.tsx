import { useState } from 'react';

const roles = [
  { initials: 'АЕ', name: 'Айдана Ержанова', email: 'a.erzhanova@mail.kz', role: 'Администратор', color: 'bg-primary' },
  { initials: 'НС', name: 'Нурлан Салимов', email: 'n.salimov@mail.kz', role: 'Модератор', color: 'bg-success' },
  { initials: 'ЖТ', name: 'Жанар Таубаева', email: 'zh.t@mail.kz', role: 'Модератор', color: 'bg-warning' },
];

const categories = [
  { name: 'Мусор', icon: '🗑️', sla: '3 дня' },
  { name: 'Дороги', icon: '🛣️', sla: '7 дней' },
  { name: 'Освещение', icon: '💡', sla: '3 дня' },
  { name: 'Остановки', icon: '🚌', sla: '5 дней' },
  { name: 'Детские площадки', icon: '🎠', sla: '5 дней' },
];

function Toggle({ on }: { on: boolean }) {
  return (
    <div className={`w-11 h-6 rounded-full p-0.5 transition ${on ? 'bg-primary flex justify-end' : 'bg-border flex justify-start'}`}>
      <div className="w-5 h-5 rounded-full bg-white shadow" />
    </div>
  );
}

export default function Settings() {
  const [notifications, setNotifications] = useState({
    new: true,
    status: true,
    resolved: true,
    urgent: true,
    daily: false,
  });

  const [activeTab, setActiveTab] = useState('Общее');

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-text-dark">Настройки</h1>
          <p className="text-sm text-text-gray mt-2">
            Параметры работы сервиса, роли и уведомления
          </p>
        </div>
        <button className="px-4 py-2.5 text-sm font-medium bg-primary text-white rounded-xl hover:bg-primary-dark transition">
          ⚙ Системные параметры
        </button>
      </div>

      <div className="flex gap-6 px-1 mb-5 border-b border-border">
        {['Общее', 'Роли и права', 'Уведомления', 'Категории'].map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`pb-3 text-sm font-medium transition border-b-2 -mb-px ${
              activeTab === t
                ? 'text-primary border-primary'
                : 'text-text-gray border-transparent hover:text-text-dark'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-5 mb-6">
        <div className="col-span-2 space-y-5">
          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="text-lg font-semibold text-text-dark mb-5">Общие параметры сервиса</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-text-gray block mb-1.5">Название сервиса</label>
                <input
                  type="text"
                  defaultValue="QalaFix"
                  className="w-full px-4 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="text-xs text-text-gray block mb-1.5">Город</label>
                <select className="w-full px-4 py-2.5 text-sm border border-border rounded-xl bg-white">
                  <option>Алматы</option>
                  <option>Астана</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-text-gray block mb-1.5">Язык сервиса</label>
                <select className="w-full px-4 py-2.5 text-sm border border-border rounded-xl bg-white">
                  <option>Русский</option>
                  <option>Казахский</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-text-gray block mb-1.5">Часовой пояс</label>
                <select className="w-full px-4 py-2.5 text-sm border border-border rounded-xl bg-white">
                  <option>Алматы, GMT+6</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-text-gray block mb-1.5">Режим работы сервиса</label>
                <select className="w-full px-4 py-2.5 text-sm border border-border rounded-xl bg-white">
                  <option>Пользовательский</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-text-gray block mb-1.5">Обработка обращений</label>
                <select className="w-full px-4 py-2.5 text-sm border border-border rounded-xl bg-white">
                  <option>Автоматическая</option>
                  <option>Ручная</option>
                </select>
              </div>
            </div>

            <div className="mt-5 p-4 bg-success/10 rounded-xl flex items-start gap-3">
              <span className="text-success text-lg">✅</span>
              <div>
                <p className="text-sm font-medium text-success">Приём обращений включён</p>
                <p className="text-xs text-text-gray mt-1">
                  Жители могут отправлять новые обращения в обычном режиме.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="text-lg font-semibold text-text-dark mb-5">Роли и права администраторов</h3>

            <div className="space-y-3 mb-5">
              <div className="flex items-start justify-between p-3 bg-bg/50 rounded-xl">
                <div>
                  <p className="text-sm font-medium text-text-dark">Старший администратор</p>
                  <p className="text-xs text-text-gray mt-0.5">Полный доступ ко всем данным и настройкам</p>
                </div>
                <span className="text-xs text-primary bg-primary-light px-2 py-1 rounded-lg font-medium">Владелец</span>
              </div>
              <div className="flex items-start justify-between p-3 bg-bg/50 rounded-xl">
                <div>
                  <p className="text-sm font-medium text-text-dark">Администратор</p>
                  <p className="text-xs text-text-gray mt-0.5">Управление обращениями и категориями</p>
                </div>
                <span className="text-xs text-text-gray bg-bg px-2 py-1 rounded-lg font-medium">Ограничен</span>
              </div>
              <div className="flex items-start justify-between p-3 bg-bg/50 rounded-xl">
                <div>
                  <p className="text-sm font-medium text-text-dark">Модератор</p>
                  <p className="text-xs text-text-gray mt-0.5">Проверка и одобрение обращений</p>
                </div>
                <span className="text-xs text-text-gray bg-bg px-2 py-1 rounded-lg font-medium">Базовый</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-text-dark">Администраторы — 12</p>
              <button className="text-sm text-primary hover:underline flex items-center gap-1">
                + Добавить
              </button>
            </div>

            <div className="space-y-2">
              {roles.map((r) => (
                <div key={r.email} className="flex items-center gap-3 p-3 rounded-xl hover:bg-bg/50 transition">
                  <div className={`w-9 h-9 rounded-full ${r.color} text-white flex items-center justify-center text-xs font-semibold`}>
                    {r.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-dark">{r.name}</p>
                    <p className="text-xs text-text-gray truncate">{r.role} · {r.email}</p>
                  </div>
                  <button className="text-text-light hover:text-text-dark">⋯</button>
                </div>
              ))}
            </div>

            <button className="mt-4 text-sm text-primary hover:underline">
              Все администраторы →
            </button>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-border p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold text-text-dark">Уведомления</h3>
            </div>
            <p className="text-xs text-text-gray mb-4">
              Выберите события, о которых система будет уведомлять вас и ваших администраторов.
            </p>

            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-dark">Новые обращения</p>
                  <p className="text-xs text-text-gray mt-0.5">Уведомлять о каждом новом обращении</p>
                </div>
                <button onClick={() => setNotifications((n) => ({ ...n, new: !n.new }))}>
                  <Toggle on={notifications.new} />
                </button>
              </div>

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-dark">Изменение статусов обращений</p>
                  <p className="text-xs text-text-gray mt-0.5">При смене статуса обращения</p>
                </div>
                <button onClick={() => setNotifications((n) => ({ ...n, status: !n.status }))}>
                  <Toggle on={notifications.status} />
                </button>
              </div>

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-dark">Новые отзывы и оценки</p>
                  <p className="text-xs text-text-gray mt-0.5">Когда пользователи оценивают решения</p>
                </div>
                <button onClick={() => setNotifications((n) => ({ ...n, resolved: !n.resolved }))}>
                  <Toggle on={notifications.resolved} />
                </button>
              </div>

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-dark">Смена статуса для жителей</p>
                  <p className="text-xs text-text-gray mt-0.5">Уведомлять жителей об изменениях</p>
                </div>
                <button onClick={() => setNotifications((n) => ({ ...n, urgent: !n.urgent }))}>
                  <Toggle on={notifications.urgent} />
                </button>
              </div>

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-dark">Ежедневные отчёты</p>
                  <p className="text-xs text-text-gray mt-0.5">Сводка по обращениям за день</p>
                </div>
                <button onClick={() => setNotifications((n) => ({ ...n, daily: !n.daily }))}>
                  <Toggle on={notifications.daily} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-border p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold text-text-dark">Категории обращений</h3>
            </div>
            <p className="text-xs text-text-gray mb-4">
              Управляйте категориями обращений и SLA (сроком решения).
            </p>

            <div className="space-y-2">
              {categories.map((c) => (
                <div key={c.name} className="flex items-center gap-3 p-3 rounded-xl hover:bg-bg/50 transition">
                  <div className="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center text-base">
                    {c.icon}
                  </div>
                  <p className="text-sm font-medium text-text-dark flex-1">{c.name}</p>
                  <span className="text-xs text-text-gray bg-bg px-2 py-1 rounded-lg">{c.sla}</span>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-2.5 text-sm font-medium bg-bg border border-border rounded-xl hover:bg-border transition">
              + Добавить категорию
            </button>

            <p className="text-xs text-text-light mt-3 leading-relaxed">
              Сроки указаны в рабочих днях, без учёта выходных и праздничных дней.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between p-5 bg-white rounded-2xl border border-border">
        <div className="flex items-center gap-3">
          <span className="text-error text-lg">ⓘ</span>
          <div>
            <p className="text-sm font-medium text-text-dark">Есть несохранённые изменения</p>
            <p className="text-xs text-text-gray mt-0.5">Проверьте изменения и не забудьте сохранить.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 text-sm font-medium text-text-gray hover:text-text-dark transition">
            Отменить
          </button>
          <button className="px-5 py-2.5 text-sm font-medium bg-primary text-white rounded-xl hover:bg-primary-dark transition">
            💾 Сохранить изменения
          </button>
        </div>
      </div>
    </div>
  );
}