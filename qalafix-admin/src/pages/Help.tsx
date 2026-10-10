import { useState } from 'react';

const quickCards = [
  {
    icon: '📄',
    title: 'Работа с обращениями',
    desc: 'Обзор обращений по районам, назначение, смена ответственного и управление статусами.',
    link: 'Подробнее →',
  },
  {
    icon: '🏛️',
    title: 'Районы и городские службы',
    desc: 'Как связать обращения с конкретной службой и отслеживать сроки решения.',
    link: 'Подробнее →',
  },
  {
    icon: '📊',
    title: 'Отчёты и экспорт',
    desc: 'Выгрузка данных, показатели и экспорт отчётов в CSV и Excel.',
    link: 'Подробнее →',
  },
];

const steps = [
  {
    title: 'Откройте обращение',
    desc: 'Перейдите в раздел «Обращения» и найдите нужное обращение. Выберите фильтр по статусу, категории и району.',
  },
  {
    title: 'Выберите ответственного',
    desc: 'Назначьте ответственного, выбрав сотрудника из списка. Система отправит ему уведомление.',
  },
  {
    title: 'Измените статус и «В работе»',
    desc: 'Переведите обращение в работу или в другой статус. Изменение статуса отразится на карте города.',
  },
  {
    title: 'Завершите обращение',
    desc: 'После устранения проблемы отметьте обращение как «Решено». Житель получит уведомление об этом.',
  },
];

const faq = [
  {
    q: 'Что делать, если обращение долго не решается?',
    a: 'Проверьте, назначен ли ответственный, и его сроки. Если сроки нарушены — обратитесь к старшему администратору района.',
  },
  {
    q: 'Когда ждать ответа пользователю?',
    a: 'Пользователь получает уведомления при смене статуса. Если ожидание затягивается — отправьте сообщение через карточку обращения.',
  },
  {
    q: 'Можно ли отклонить обращение как недействительное?',
    a: 'Да, если обращение содержит некорректные данные или не относится к городу, отметьте его как «Отклонено» с обязательным комментарием.',
  },
  {
    q: 'Как связаться с разработчиками?',
    a: 'Через форму ниже или по email support@qalafix.kz. Технические вопросы обрабатываются в течение 24 часов.',
  },
];

export default function Help() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-text-dark">Помощь</h1>
          <p className="text-sm text-text-gray mt-2">
            Инструкции и поддержка сервиса QalaFix
          </p>
        </div>
        <button className="px-4 py-2.5 text-sm font-medium bg-white border border-border rounded-xl hover:bg-bg transition">
          💬 Связаться с поддержкой
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-border p-6 mb-6">
        <h2 className="text-xl font-bold text-text-dark mb-4">Как можем помочь?</h2>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light">🔍</span>
          <input
            type="text"
            placeholder="Поиск по базе знаний, инструкциям и ответам"
            className="w-full pl-11 pr-4 py-3 text-sm border border-border rounded-xl focus:outline-none focus:border-primary"
          />
        </div>
        <p className="text-xs text-text-gray mt-3">
          Популярные темы: смена статуса, экспорт отчётов, добавление пользователя.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-6">
        {quickCards.map((c) => (
          <div
            key={c.title}
            className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition cursor-pointer"
          >
            <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center text-xl mb-4">
              {c.icon}
            </div>
            <h3 className="text-base font-semibold text-text-dark mb-2">{c.title}</h3>
            <p className="text-sm text-text-gray leading-relaxed mb-4">{c.desc}</p>
            <span className="text-sm text-primary font-medium">{c.link}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-5 mb-6">
        <div className="col-span-2 space-y-5">
          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="text-lg font-semibold text-text-dark mb-5">
              Как начать ответственного и начать работу
            </h3>

            <div className="space-y-4">
              {steps.map((s, i) => (
                <div key={s.title} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-text-dark mb-1">{s.title}</p>
                    <p className="text-sm text-text-gray leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-warning/10 rounded-xl flex items-start gap-3">
              <span className="text-warning text-lg">⚠️</span>
              <div className="flex-1">
                <p className="text-sm text-text-dark leading-relaxed">
                  Помните: если обращение не будет обработано в течение 7 дней после назначения, ответственный получит уведомление.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <button className="px-3 py-1.5 text-xs font-medium bg-white border border-border rounded-lg">
                    Да
                  </button>
                  <button className="px-3 py-1.5 text-xs font-medium bg-white border border-border rounded-lg">
                    Нет
                  </button>
                </div>
              </div>
            </div>

            <button className="mt-4 text-sm text-primary hover:underline">
              Открыть руководство →
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="text-lg font-semibold text-text-dark mb-5">Частые вопросы</h3>

            <div className="space-y-2">
              {faq.map((f, i) => (
                <div key={i} className="border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 hover:bg-bg/50 transition text-left"
                  >
                    <span className="text-sm font-medium text-text-dark pr-4">{f.q}</span>
                    <span className="text-text-light text-lg shrink-0">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 text-sm text-text-gray leading-relaxed border-t border-border pt-3">
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="text-base font-semibold text-text-dark mb-4">Поддержка QalaFix</h3>
            <div className="space-y-3 mb-5">
              <div className="flex items-center gap-3">
                <span className="text-success">●</span>
                <span className="text-sm text-text-dark">Техподдержка онлайн</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">✉</span>
                <span className="text-sm text-text-dark">support@qalafix.kz</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">📞</span>
                <span className="text-sm text-text-dark">+7 (727) 355 50 50</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-text-light">🕐</span>
                <span className="text-sm text-text-gray">Пн–Пт, 09:00–18:00 · время Алматы</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="text-base font-semibold text-text-dark mb-4">Напишите в поддержку</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-text-gray block mb-1.5">Тема</label>
                <select className="w-full px-4 py-2.5 text-sm border border-border rounded-xl bg-white">
                  <option>Ошибка в системе</option>
                  <option>Вопрос по работе</option>
                  <option>Предложение</option>
                  <option>Другое</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-text-gray block mb-1.5">Опишите проблему</label>
                <textarea
                  rows={4}
                  placeholder="Опишите ситуацию и укажите, что вы ожидали увидеть..."
                  className="w-full px-4 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:border-primary resize-none"
                />
              </div>
              <div>
                <label className="text-xs text-text-gray block mb-1.5">Ваш email для ответа</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light text-sm">✉</span>
                  <input
                    type="email"
                    placeholder="your@company.kz"
                    className="w-full pl-11 pr-4 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
              <button className="w-full py-3 text-sm font-medium bg-primary text-white rounded-xl hover:bg-primary-dark transition">
                ✈ Отправить обращение
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}