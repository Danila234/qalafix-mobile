import { useState } from 'react';

const activity = [
  { icon: '📄', title: 'Назначил ответственного по QF-4821', desc: 'На работает освещение, Наурызбай · Руслан Оспанов', time: 'Сегодня, 14:52' },
  { icon: '🔄', title: 'Изменил статус QF-4793 на «В работе»', desc: 'Яма на проезжей части, Ауэзовский район', time: 'Сегодня, 13:48' },
  { icon: '✏️', title: 'Редактировал пользователя Мұрат Қ.', desc: 'Изменён номер телефона и район', time: 'Сегодня, 12:05' },
  { icon: '✅', title: 'Отметил как «Решено» QF-4768', desc: 'Повреждение тротуара, Бостандыкский район', time: 'Вчера, 19:10' },
  { icon: '🚫', title: 'Заблокировал пользователя Руслан С.', desc: 'QF-4621 · Спам и ошибочные заявки', time: 'Вчера, 17:42' },
];

const sessions = [
  { device: 'MacBook Pro', desc: 'Chrome 128 · macOS · Алматы', status: 'Текущий', color: 'text-success' },
  { device: 'iPhone 15', desc: 'QalaFix iOS 2.4.1 · Алматы', status: 'Завершить', color: 'text-error' },
];

function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button onClick={onToggle} className="shrink-0">
      <div className={`w-11 h-6 rounded-full p-0.5 transition ${on ? 'bg-primary flex justify-end' : 'bg-border flex justify-start'}`}>
        <div className="w-5 h-5 rounded-full bg-white shadow" />
      </div>
    </button>
  );
}

export default function MyProfile() {
  const [notifications, setNotifications] = useState({
    newReports: true,
    assignments: true,
    resolved: true,
    mentions: false,
    dailyDigest: true,
  });

  const [name, setName] = useState('Айдана');
  const [surname, setSurname] = useState('Ержанова');
  const [email, setEmail] = useState('a.erzhanova@qalafix.kz');
  const [phone, setPhone] = useState('+7 701 234 56 78');

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-text-dark">Мой профиль</h1>
          <p className="text-sm text-text-gray mt-2">
            Ваш аккаунт, личные настройки и безопасность
          </p>
        </div>
        <button className="px-4 py-2.5 text-sm font-medium bg-white border border-border rounded-xl hover:bg-bg transition">
          ← Выйти из аккаунта
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-border p-6 mb-5">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
            АЕ
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-text-dark">Айдана Ержанова</h2>
              <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-primary-light text-primary">
                Старший администратор
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full text-success bg-success/10">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                В сети
              </span>
            </div>
            <p className="text-sm text-text-gray">a.erzhanova@qalafix.kz · Алмалинский район, Алматы</p>
            <p className="text-xs text-text-light mt-1">В системе с 12 марта 2024 · Последний вход 6 окт, 13:30</p>
          </div>
          <span className="text-xs text-text-light">ID: ADM-0001</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-5">
        <div className="col-span-2 space-y-5">
          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="text-lg font-semibold text-text-dark mb-1">Данные профиля</h3>
            <p className="text-xs text-text-gray mb-5">Эти данные видны администраторам сервиса.</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs text-text-gray block mb-1.5">Имя</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="text-xs text-text-gray block mb-1.5">Фамилия</label>
                <input
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="text-xs text-text-gray block mb-1.5">Электронная почта</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="text-xs text-text-gray block mb-1.5">Телефон</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="text-xs text-text-gray block mb-1.5">Район</label>
                <select className="w-full px-4 py-2.5 text-sm border border-border rounded-xl bg-white">
                  <option>Алмалинский</option>
                  <option>Бостандыкский</option>
                  <option>Медеуский</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-text-gray block mb-1.5">Роль</label>
                <input
                  type="text"
                  value="Старший администратор"
                  disabled
                  className="w-full px-4 py-2.5 text-sm border border-border rounded-xl bg-bg text-text-gray"
                />
              </div>
            </div>

            <p className="text-xs text-text-light mb-4">Изменение роли только через главного администратора.</p>

            <div className="flex gap-3">
              <button className="px-5 py-2.5 text-sm font-medium text-text-gray hover:text-text-dark transition">
                Отменить
              </button>
              <button className="px-5 py-2.5 text-sm font-medium bg-primary text-white rounded-xl hover:bg-primary-dark transition">
                Сохранить профиль
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-border p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold text-text-dark">Мои последние действия</h3>
              <button className="text-sm text-primary hover:underline">Все 24 →</button>
            </div>
            <p className="text-xs text-text-gray mb-5">Здесь ваши действия, изменение их пользователей.</p>

            <div className="space-y-4">
              {activity.map((a, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-bg flex items-center justify-center shrink-0">
                    <span className="text-sm">{a.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-text-dark">{a.title}</p>
                    <p className="text-xs text-text-gray mt-1">{a.desc}</p>
                  </div>
                  <span className="text-xs text-text-light whitespace-nowrap">{a.time}</span>
                </div>
              ))}
            </div>

            <button className="mt-5 text-sm text-primary hover:underline">
              Показать все действия пользователей →
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="text-lg font-semibold text-text-dark mb-1">Пароль</h3>
            <p className="text-xs text-text-gray mb-5">Последнее изменение — 18 августа 2026</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs text-text-gray block mb-1.5">Текущий пароль</label>
                <input
                  type="password"
                  placeholder="Введите текущий пароль"
                  className="w-full px-4 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:border-primary"
                />
              </div>
              <div></div>
              <div>
                <label className="text-xs text-text-gray block mb-1.5">Новый пароль</label>
                <input
                  type="password"
                  placeholder="Введите новый пароль"
                  className="w-full px-4 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="text-xs text-text-gray block mb-1.5">Подтвердите новый пароль</label>
                <input
                  type="password"
                  placeholder="Введите пароль ещё раз"
                  className="w-full px-4 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <p className="text-xs text-text-light mb-4">Не менее 8 символов, включая цифры и буквы.</p>
            <p className="text-xs text-text-light mb-4">После смены пароля другие активные сессии завершатся.</p>

            <button className="px-5 py-2.5 text-sm font-medium bg-primary text-white rounded-xl hover:bg-primary-dark transition">
              🔒 Изменить пароль
            </button>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="text-base font-semibold text-text-dark mb-1">Роли и доступ</h3>
            <p className="text-xs text-text-gray mb-4">Старший администратор имеет все 6 прав доступа.</p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-primary mt-0.5">✅</span>
                <div>
                  <p className="text-sm font-medium text-text-dark">Обработка всех заявок</p>
                  <p className="text-xs text-text-gray">Просмотр и изменение статусов обращений</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-0.5">✅</span>
                <div>
                  <p className="text-sm font-medium text-text-dark">Пользователи</p>
                  <p className="text-xs text-text-gray">Просмотр, редактирование и блокировка</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-0.5">✅</span>
                <div>
                  <p className="text-sm font-medium text-text-dark">Районы и службы</p>
                  <p className="text-xs text-text-gray">Добавление и удаление служб города</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-0.5">✅</span>
                <div>
                  <p className="text-sm font-medium text-text-dark">Настройки и администраторы</p>
                  <p className="text-xs text-text-gray">Изменение прав и ролей</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-text-light mt-4 leading-relaxed">
              Только старший администратор может добавить других администраторов и изменить их права.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="text-base font-semibold text-text-dark mb-1">Личные уведомления</h3>
            <p className="text-xs text-text-gray mb-4">Только для вас, не влияет на других пользователей сервиса.</p>

            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-dark">Новые обращения</p>
                  <p className="text-xs text-text-gray mt-0.5">Появились новые обращения в районе</p>
                </div>
                <Toggle on={notifications.newReports} onToggle={() => setNotifications((n) => ({ ...n, newReports: !n.newReports }))} />
              </div>

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-dark">Назначение на меня</p>
                  <p className="text-xs text-text-gray mt-0.5">Вас назначили ответственным</p>
                </div>
                <Toggle on={notifications.assignments} onToggle={() => setNotifications((n) => ({ ...n, assignments: !n.assignments }))} />
              </div>

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-dark">Срок решения истекает</p>
                  <p className="text-xs text-text-gray mt-0.5">За 24 часа до конца срока</p>
                </div>
                <Toggle on={notifications.resolved} onToggle={() => setNotifications((n) => ({ ...n, resolved: !n.resolved }))} />
              </div>

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-dark">Жалобы на пользователей</p>
                  <p className="text-xs text-text-gray mt-0.5">Новые жалобы от пользователей</p>
                </div>
                <Toggle on={notifications.mentions} onToggle={() => setNotifications((n) => ({ ...n, mentions: !n.mentions }))} />
              </div>

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-dark">Еженедельная сводка на почте</p>
                  <p className="text-xs text-text-gray mt-0.5">Отчёт по вашим действиям, каждый понедельник</p>
                </div>
                <Toggle on={notifications.dailyDigest} onToggle={() => setNotifications((n) => ({ ...n, dailyDigest: !n.dailyDigest }))} />
              </div>
            </div>

            <div className="flex items-center justify-between mt-5">
              <p className="text-xs text-text-light">Другие настройки — <span className="text-primary cursor-pointer hover:underline">в разделе «Уведомления»</span></p>
              <button className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-xl hover:bg-primary-dark transition">
                Сохранить настройки
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="text-base font-semibold text-text-dark mb-1">Активные сессии</h3>
            <p className="text-xs text-text-gray mb-4">Устройства с доступом к аккаунту.</p>

            <div className="space-y-3">
              {sessions.map((s) => (
                <div key={s.device} className="flex items-center gap-3 p-3 rounded-xl bg-bg/50">
                  <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center shrink-0">
                    💻
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-dark">{s.device}</p>
                    <p className="text-xs text-text-gray truncate">{s.desc}</p>
                  </div>
                  <span className={`text-xs font-medium ${s.color}`}>{s.status}</span>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-2.5 text-sm font-medium bg-bg border border-border rounded-xl hover:bg-border transition">
              🔄 Завершить другие сессии
            </button>

            <p className="text-xs text-text-light mt-3">
              После смены пароля все сессии, кроме текущей, завершатся.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between p-5 bg-white rounded-2xl border border-border">
        <div>
          <p className="text-sm font-medium text-text-dark">Завершить работу в QalaFix?</p>
          <p className="text-xs text-text-gray mt-0.5">Вы выйдете из аккаунта. Вам придётся войти заново.</p>
        </div>
        <button className="px-5 py-2.5 text-sm font-medium bg-error/10 text-error border border-error/20 rounded-xl hover:bg-error/20 transition">
          🚪 Выйти из аккаунта
        </button>
      </div>
    </div>
  );
}