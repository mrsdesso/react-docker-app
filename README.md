# React Counter App в Docker

Минимальное React-приложение (счётчик кликов), упакованное в Docker‑образ с использованием многоступенчатой сборки (Node.js → nginx:alpine).

![Скриншот работающего приложения](работа_счетчика.png)

---

## Сборка Docker‑образа

```bash
docker build -t react-counter-app .