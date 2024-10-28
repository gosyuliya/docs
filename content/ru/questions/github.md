---
title: "GitHub"
description: "Здесь находятся ответы на вопросы, связанные с платформой GitHub"
weight: 1
_build:
  publishResources: false
---

# Ошибки deploy

## GitHub Pages не собирает сайт

**Вводные:**

Deploy Hugo site to Pages выдаёт ошибку: 

``Branch "main" is not allowed to deploy to github-pages due to environment protection rules.``

 <br><img src="/images/gh_1.png" align="left" /><br clear="left"><br>

**Решение:**

1. **Проверьте разрешения для GitHub Pages**

    Убедитесь, что в настройках репозитория GitHub Pages разрешено публиковаться с ветки, выбранной в Workflow-файле (например, main).

    Настройки репозитория **Settings** → **Environments** → **github-pages** → Измените название разрешенной ветки. 
    
    <br><img src="/images/gh_2.png" alt="альтернативный текст" align="left" /><br clear="left">

    <br><img src="/images/gh_3.png" alt="альтернативный текст" align="left" /><br clear="left">

    <br><img src="/images/gh_4.png" alt="альтернативный текст" align="left" /><br clear="left"><br>

2. **Измените источник для деплоя GitHub Pages**

    Перейдите в настройки репозитория и проверьте, какая ветка выбрана для публикации на GitHub Pages:

    Настройки репозитория **Settings** → **Pages** → Установите источник публикации. 
    
    <br><img src="/images/gh_5.png" alt="альтернативный текст" align="left" /><br clear="left"><br>

3. **Настройте автоматический деплой через Actions с другой ветки**

    При использывании GitHub Actions для деплоя, проверьте, чтобы Action был настроен на пуш в ветку, которая разрешена для деплоя. 
    Добавьте или измените команды в файле .yml для Actions.  
    
    <br><img src="/images/gh_6.png" alt="альтернативный текст" align="left" /><br clear="left">



    