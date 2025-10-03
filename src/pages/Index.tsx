import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDay, setSelectedDay] = useState('Понедельник');

  const trainers = [
    {
      name: 'Алексей Волков',
      role: 'Главный тренер',
      achievements: 'Мастер спорта, Чемпион России 2018, 2019',
      experience: '15 лет опыта',
    },
    {
      name: 'Дмитрий Соколов',
      role: 'Тренер по технике',
      achievements: 'КМС, призёр чемпионата ЦФО 2020',
      experience: '10 лет опыта',
    },
    {
      name: 'Мария Петрова',
      role: 'Детский тренер',
      achievements: 'Чемпионка области 2021, КМС',
      experience: '7 лет опыта',
    },
  ];

  const schedule = {
    'Понедельник': [
      { time: '08:00 - 09:30', group: 'Взрослые начинающие', trainer: 'Дмитрий Соколов' },
      { time: '18:00 - 19:30', group: 'Взрослые продвинутые', trainer: 'Алексей Волков' },
      { time: '19:30 - 20:30', group: 'Детская группа', trainer: 'Мария Петрова' },
    ],
    'Среда': [
      { time: '08:00 - 09:30', group: 'Взрослые начинающие', trainer: 'Дмитрий Соколов' },
      { time: '18:00 - 19:30', group: 'Спарринги', trainer: 'Алексей Волков' },
      { time: '19:30 - 20:30', group: 'Детская группа', trainer: 'Мария Петрова' },
    ],
    'Пятница': [
      { time: '08:00 - 09:30', group: 'Взрослые все уровни', trainer: 'Алексей Волков' },
      { time: '18:00 - 19:30', group: 'Взрослые продвинутые', trainer: 'Дмитрий Соколов' },
      { time: '19:30 - 20:30', group: 'Детская группа', trainer: 'Мария Петрова' },
    ],
  };

  const prices = [
    {
      name: 'Разовое посещение',
      price: '800 ₽',
      features: ['1 тренировка', 'Доступ в зал', 'Консультация тренера'],
    },
    {
      name: '8 занятий',
      price: '5 600 ₽',
      popular: true,
      features: ['8 тренировок', 'Персональная программа', 'Скидка 12%'],
    },
    {
      name: 'Безлимит',
      price: '7 900 ₽',
      features: ['Без ограничений', 'Все тренировки', 'Личный план развития'],
    },
  ];

  const groups = [
    {
      name: 'Взрослые начинающие',
      description: 'Для тех, кто только начинает свой путь в тайском боксе',
      level: 'Новички',
      ages: '18-45 лет',
    },
    {
      name: 'Взрослые продвинутые',
      description: 'Интенсивные тренировки для опытных спортсменов',
      level: 'Продвинутый',
      ages: '18-45 лет',
    },
    {
      name: 'Детская группа',
      description: 'Развитие координации, дисциплины и уверенности',
      level: 'Все уровни',
      ages: '7-16 лет',
    },
  ];

  const reviews = [
    {
      name: 'Дмитрий К.',
      text: 'Занимаюсь уже полгода. Отличные тренеры, профессиональный подход. Скинул 8 кг и чувствую себя супер!',
      rating: 5,
    },
    {
      name: 'Анна С.',
      text: 'Привела сына на занятия - он в восторге! Тренер Мария умеет найти подход к детям. Рекомендую!',
      rating: 5,
    },
    {
      name: 'Игорь М.',
      text: 'Пробное занятие прошло на высшем уровне. Сразу записался на абонемент. Атмосфера в зале боевая и мотивирующая.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-primary text-2xl">🥊</div>
              <span className="text-xl font-bold text-white">ТАЙСКИЙ БОКС ТВЕРЬ</span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#home" className="text-white hover:text-primary transition-colors">Главная</a>
              <a href="#trainers" className="text-white hover:text-primary transition-colors">Тренеры</a>
              <a href="#schedule" className="text-white hover:text-primary transition-colors">Расписание</a>
              <a href="#prices" className="text-white hover:text-primary transition-colors">Цены</a>
              <a href="#groups" className="text-white hover:text-primary transition-colors">Группы</a>
              <a href="#reviews" className="text-white hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-white hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-[200px]">🥊</div>
          <div className="absolute bottom-20 right-10 text-[150px]">💪</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Стань<br />
                <span className="text-primary">Чемпионом</span>
              </h1>
              <p className="text-xl text-gray-300">
                Профессиональная школа тайского бокса в Твери.<br />
                Тренировки для взрослых и детей с опытными мастерами спорта.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Первая тренировка бесплатно
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg">
                  Узнать больше
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-4xl font-bold text-primary">150+</div>
                  <div className="text-sm text-gray-400">Учеников</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">15</div>
                  <div className="text-sm text-gray-400">Лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">30+</div>
                  <div className="text-sm text-gray-400">Наград</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="/img/71a20a63-f512-43df-a05a-5a426753f5e4.jpg"
                alt="Тренировка тайского бокса"
                className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="trainers" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши Тренеры</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Мастера спорта с многолетним опытом
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((trainer, idx) => (
              <Card key={idx} className="hover-scale border-2 hover:border-primary transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl text-white mx-auto">
                    {trainer.name.charAt(0)}
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold">{trainer.name}</h3>
                    <p className="text-primary font-semibold">{trainer.role}</p>
                    <p className="text-sm text-muted-foreground">{trainer.experience}</p>
                    <div className="pt-2">
                      <Icon name="Trophy" className="inline mr-2 text-accent" size={20} />
                      <span className="text-sm">{trainer.achievements}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Расписание</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите удобное время для тренировок
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 mb-8 justify-center flex-wrap">
              {Object.keys(schedule).map((day) => (
                <Button
                  key={day}
                  variant={selectedDay === day ? 'default' : 'outline'}
                  onClick={() => setSelectedDay(day)}
                  className={selectedDay === day ? 'bg-primary' : ''}
                >
                  {day}
                </Button>
              ))}
            </div>
            <div className="space-y-4">
              {schedule[selectedDay as keyof typeof schedule].map((session, idx) => (
                <Card key={idx} className="border-l-4 border-l-primary hover-scale">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-4 items-center">
                      <div className="flex items-center gap-3">
                        <Icon name="Clock" className="text-primary" size={24} />
                        <span className="font-bold text-lg">{session.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Users" className="text-accent" size={24} />
                        <span>{session.group}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="User" className="text-muted-foreground" size={24} />
                        <span className="text-sm text-muted-foreground">{session.trainer}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Цены</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите подходящий абонемент
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prices.map((plan, idx) => (
              <Card
                key={idx}
                className={`relative ${
                  plan.popular
                    ? 'border-2 border-primary shadow-xl scale-105'
                    : 'hover-scale'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="text-4xl font-extrabold text-primary">{plan.price}</div>
                    <p className="text-sm text-muted-foreground">/ месяц</p>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="text-6xl">🎁</div>
            <h2 className="text-4xl md:text-6xl font-extrabold">Пробное занятие БЕСПЛАТНО</h2>
            <p className="text-xl md:text-2xl text-white/90">
              Приходите на первую тренировку без оплаты!<br />
              Познакомитесь с тренером, попробуете тайский бокс и оцените атмосферу зала
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-4">
              <div className="flex items-center gap-3">
                <Icon name="CheckCircle2" size={32} />
                <span className="text-lg">Без предоплаты</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="CheckCircle2" size={32} />
                <span className="text-lg">Вся экипировка на месте</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="CheckCircle2" size={32} />
                <span className="text-lg">Любой уровень подготовки</span>
              </div>
            </div>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-6 h-auto mt-8">
              Записаться на пробное
            </Button>
          </div>
        </div>
      </section>

      <section id="groups" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Группы и направления</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Подберём подходящую группу для вашего уровня
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {groups.map((group, idx) => (
              <Card key={idx} className="hover-scale border-2 hover:border-primary transition-all">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto">
                    <Icon name="Users" className="text-white" size={32} />
                  </div>
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold">{group.name}</h3>
                    <p className="text-muted-foreground">{group.description}</p>
                    <div className="pt-2 space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <Icon name="Target" className="text-primary" size={20} />
                        <span className="font-semibold">{group.level}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Icon name="Calendar" className="text-accent" size={20} />
                        <span className="text-sm">{group.ages}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы учеников</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят о нас наши спортсмены
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover-scale">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                  <div className="pt-2">
                    <p className="font-bold">{review.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Приходите на бесплатную первую тренировку
          </p>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Тверь, ул. Спортивная, 15</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (4822) 123-456</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@thaibox-tver.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold mb-1">Режим работы</h3>
                      <p className="text-muted-foreground">Пн-Пт: 08:00 - 22:00<br />Сб-Вс: 10:00 - 20:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Запись на тренировку</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Комментарий (опционально)"
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-3xl">🥊</div>
            <span className="text-2xl font-bold">ТАЙСКИЙ БОКС ТВЕРЬ</span>
          </div>
          <p className="text-gray-400">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;