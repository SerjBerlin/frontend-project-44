# Игры разума (JS)

[![hexlet-check](https://github.com/SerjBerlin/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/SerjBerlin/frontend-project-44/actions)

Описание проекта

«Игры разума» — набор из пяти консольных игр по мотивам популярных мобильных приложений для тренировки мозга. Каждая игра задаёт вопросы, на которые нужно дать правильные ответы. После трёх правильных ответов игра считается пройденной; неправильный ответ завершает игру и предлагает пройти её заново.

Игры:

- Калькулятор — вычисление арифметических выражений

- Прогрессия — поиск пропущенного числа в последовательности

- Чётное число — определение чётности числа

- НОД — наибольший общий делитель двух чисел

- Простое число — проверка числа на простоту

Пример игры:
```
brain-progression
Welcome to the Brain Games!
What number is missing in the progression?
May I have your name? Roman
Hello, Roman!
Question: 14 .. 18 20 22 24 26 28
Your answer: 16       # пользователь вводит ответ
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24
Correct!
Congratulations, Roman!
```

## Стек

- JavaScript

## Установка

<!-- Опишите установку: клонирование, зависимости, переменные окружения -->

```bash
git clone https://github.com/SerjBerlin/frontend-project-44.git
cd frontend-project-44
make install
npm link
```

## Использование
- brain-even:
[запись работы brain-even](https://asciinema.org/a/JMo8cK8UGFrAu6zW)
-brain-calc:
[Запись работы brain-calc](https://asciinema.org/a/85UFdEh0oIjZHLAV)
brain-gcd:
[Запись работы brain-gcd](https://asciinema.org/a/zA1ycB0Zhi4AT1TW)
brain-progression:
[Запись работы brain-progression](https://asciinema.org/a/2h3adPWV8C4mXwPs)
brain-prime:
[Запись работы brain-prime](https://asciinema.org/a/ktc1FWULgqNeM4ox)
<!-- Добавьте примеры запуска и запись asciinema — именно это смотрит работодатель -->

---

<details>
<summary>Автоматические тесты Хекслета</summary>

Тесты запускаются на каждый коммит. За запуск отвечает файл `.github/workflows/hexlet-check.yml` — не удаляйте и не переименовывайте ни его, ни репозиторий.

</details>

## О Хекслете

[Хекслет](https://ru.hexlet.io/) — школа программирования: авторские программы обучения с практикой, поддержкой наставников и реальными проектами, которые остаются в резюме. Этот репозиторий — один из таких проектов.
