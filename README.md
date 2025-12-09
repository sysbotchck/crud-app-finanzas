# 💰 Sistema de Gestión Financiera Personal

Aplicación CRUD completa para gestionar finanzas personales siguiendo la regla 50/30/20.

## 🚀 Características

- ✅ **Dashboard General** con visualización de la regla 50/30/20
- ✅ **Gestión de Sueldo** con actualización de fecha y hora
- ✅ **Ingresos** - Registro de ingresos adicionales
- ✅ **Gastos (50%)** - Necesidades básicas (vivienda, alimentación, transporte, etc.)
- ✅ **Gastos Extras (30%)** - Deseos (entretenimiento, restaurantes, compras, etc.)
- ✅ **Tarjetas de Crédito** - Control de transacciones y pagos
- ✅ **Yape/Plin** - Registro de transferencias digitales
- ✅ **Préstamos** - Seguimiento de deudas y pagos mensuales
- ✅ **Streaming** - Gestión de suscripciones (Netflix, Disney+, etc.)

## 📋 Requisitos Previos

- Node.js (v18 o superior)
- MongoDB Atlas (ya configurado)
- npm o yarn

## 🛠️ Instalación

### Backend

```bash
cd backend
npm install
npm start
```

El servidor se ejecutará en `http://localhost:3000`

### Frontend

```bash
cd frontend
npm install
npm start
```

La aplicación se ejecutará en `http://localhost:4200`

## 📁 Estructura del Proyecto

```
crud-app-finanzas/
├── backend/
│   ├── models/          # Modelos de MongoDB
│   ├── routes/          # Rutas de la API
│   ├── server.js        # Servidor Express
│   └── .env             # Variables de entorno
│
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── components/    # Componentes de Angular
    │   │   ├── services/      # Servicios HTTP
    │   │   ├── models/        # Interfaces TypeScript
    │   │   └── app.routes.ts  # Configuración de rutas
    │   └── styles.css         # Estilos globales
    └── angular.json
```

## 🎨 Diseño

La aplicación utiliza un diseño moderno con:
- Paleta de colores vibrante
- Gradientes y efectos glassmorphism
- Animaciones suaves
- Diseño responsive
- Fuente Inter de Google Fonts

## 📊 API Endpoints

### Salary
- `GET /api/salary` - Obtener sueldo actual
- `POST /api/salary` - Crear/actualizar sueldo

### Income
- `GET /api/income` - Listar todos los ingresos
- `POST /api/income` - Crear ingreso
- `PUT /api/income/:id` - Actualizar ingreso
- `DELETE /api/income/:id` - Eliminar ingreso

### Expenses
- `GET /api/expenses` - Listar gastos
- `POST /api/expenses` - Crear gasto
- `PUT /api/expenses/:id` - Actualizar gasto
- `DELETE /api/expenses/:id` - Eliminar gasto

### Extra Expenses
- `GET /api/extra-expenses` - Listar gastos extras
- `POST /api/extra-expenses` - Crear gasto extra
- `PUT /api/extra-expenses/:id` - Actualizar gasto extra
- `DELETE /api/extra-expenses/:id` - Eliminar gasto extra

### Credit Cards
- `GET /api/credit-cards` - Listar tarjetas
- `POST /api/credit-cards` - Crear transacción
- `PUT /api/credit-cards/:id` - Actualizar transacción
- `DELETE /api/credit-cards/:id` - Eliminar transacción

### Yape/Plin
- `GET /api/yape-plin` - Listar transacciones
- `POST /api/yape-plin` - Crear transacción
- `PUT /api/yape-plin/:id` - Actualizar transacción
- `DELETE /api/yape-plin/:id` - Eliminar transacción

### Loans
- `GET /api/loans` - Listar préstamos
- `POST /api/loans` - Crear préstamo
- `PUT /api/loans/:id` - Actualizar préstamo
- `DELETE /api/loans/:id` - Eliminar préstamo

### Streaming
- `GET /api/streaming` - Listar servicios
- `POST /api/streaming` - Crear servicio
- `PUT /api/streaming/:id` - Actualizar servicio
- `DELETE /api/streaming/:id` - Eliminar servicio

### Dashboard
- `GET /api/dashboard` - Obtener resumen completo con cálculos 50/30/20

## 🔧 Configuración de MongoDB

La conexión a MongoDB está configurada en `backend/.env`:

```
MONGODB_URI=mongodb+srv://sysbotchck:sysbotchck@sysbotchck.ezxmpd8.mongodb.net/finanzas?retryWrites=true&w=majority&appName=sysbotchck
PORT=3000
```

## 📝 Notas de Desarrollo

### Componentes Completados
- ✅ Dashboard (con gráfico 50/30/20)
- ✅ Income (CRUD completo)

### Componentes Pendientes
Los siguientes componentes siguen el mismo patrón que Income:
- Expenses
- Extra Expenses
- Credit Cards
- Yape/Plin
- Loans
- Streaming

Para crear cada componente, copia la estructura de `income.component.ts/html/css` y ajusta:
1. El nombre del modelo
2. Los campos del formulario
3. El endpoint de la API
4. Los colores del tema

## 🎯 Regla 50/30/20

- **50% Necesidades**: Gastos esenciales (vivienda, alimentación, transporte, servicios, salud)
- **30% Deseos**: Gastos discrecionales (entretenimiento, restaurantes, compras, hobbies, streaming)
- **20% Ahorro**: Lo que queda después de gastos (calculado automáticamente)

## 🐛 Solución de Problemas

### El backend no se conecta a MongoDB
- Verifica que las credenciales en `.env` sean correctas
- Asegúrate de tener conexión a internet
- Verifica que tu IP esté en la lista blanca de MongoDB Atlas

### El frontend no se conecta al backend
- Verifica que el backend esté corriendo en el puerto 3000
- Revisa la consola del navegador para errores CORS
- Asegúrate de que `apiService` apunte a `http://localhost:3000/api`

### Error de PowerShell al ejecutar npm
Si tienes problemas con la política de ejecución de PowerShell:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## 📄 Licencia

Este proyecto es de uso personal.

## 👨‍💻 Autor

Desarrollado con ❤️ para gestión financiera personal