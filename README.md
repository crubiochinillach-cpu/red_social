# red_social
 Red Social de Aficiones — Proyecto Django

## 1. Crear entorno virtual

Windows:
    python -m venv venv
    venv\Scripts\activate

macOS/Linux:
    python3 -m venv venv
    source venv/bin/activate

## 2. Instalar dependencias

    pip install -r requirements.txt

## 3. Crear migraciones

    python manage.py makemigrations
    python manage.py migrate

## 4. Crear administrador

    python manage.py createsuperuser

## 5. Ejecutar

    python manage.py runserver

Abrir http://127.0.0.1:8000/

Admin: http://127.0.0.1:8000/admin/

## Funcionalidades

- Registro, login y logout
- Perfil y edición de perfil
- Avatar
- Publicaciones con texto e imagen
- Feed con publicaciones propias y de usuarios seguidos
- Seguir/dejar de seguir
- Likes con AJAX sin recargar
- Comentarios
- Notificaciones de follow, like y comentario
- Administración desde Django Admin
