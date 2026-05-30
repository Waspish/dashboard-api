# Dashboard API

## Установка и запуск

```bash
npm install
npm run build
npm start
```

Сервер запустится на `http://localhost:8000`

## Endpoints

| Метод | URL | Описание |
|-|-|-|
| GET | `/users` | Проверка работы |
| GET | `/users/login` | Логин |
| POST | `/users/register` | Регистрация |

## Примеры запросов

**PowerShell (Windows)**
```powershell
curl.exe http://localhost:8000/users
curl.exe http://localhost:8000/users/login
curl.exe -X POST http://localhost:8000/users/register
```

**Linux/macOS / curl**
```bash
curl http://localhost:8000/users/login
curl -X POST http://localhost:8000/users/register
```