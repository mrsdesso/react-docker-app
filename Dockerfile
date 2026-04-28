# ==================== ЭТАП 1: СБОРКА ====================
FROM node:alpine AS build
WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production && npm cache clean --force

COPY . .

RUN npm run build

# ==================== ЭТАП 2: ПРОДАКШН ====================
FROM nginx:alpine AS production

# Копируем собранные файлы из первого этапа в папку nginx
COPY --from=build /app/build /usr/share/nginx/html

# Открываем порт 80 (nginx по умолчанию)
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]