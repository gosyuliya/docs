---
title: "GitHub"
description: "Здесь находятся ответы на вопросы, связанные с платформой GitHub"
weight: 1
_build:
  publishResources: True
---

# Ошибки deploy

## GitHub Pages не собирает сайт

**Вводные:**

Deploy Hugo site to Pages выдаёт ошибку: 

``Branch "main" is not allowed to deploy to github-pages due to environment protection rules.``

 <br>![I'm an image](/images/gh_1.png)<br clear="left"><br>

**Решение:**

1. **Проверьте разрешения для GitHub Pages**

    Убедитесь, что в настройках репозитория GitHub Pages разрешено публиковаться с ветки, выбранной в Workflow-файле (например, main).

    Настройки репозитория **Settings** → **Environments** → **github-pages** → Измените название разрешенной ветки. 
    
    <br>![I'm an image](/images/gh_2.png)<br clear="left">

    <br>![I'm an image](/images/gh_3.png)<br clear="left">

    <br>![I'm an image](/images/gh_4.png)<br clear="left"><br>

2. **Измените источник для деплоя GitHub Pages**

    Перейдите в настройки репозитория и проверьте, какая ветка выбрана для публикации на GitHub Pages:

    Настройки репозитория **Settings** → **Pages** → Установите источник публикации.

    <br>![I'm an image](/images/gh_5.png)<br clear="left"><br> 

3. **Настройте автоматический деплой через Actions с другой ветки**

    При использывании GitHub Actions для деплоя, проверьте, чтобы Action был настроен на пуш в ветку, которая разрешена для деплоя. 
    Добавьте или измените команды в файле .yml для Actions.  

    <br>![I'm an image](/images/gh_6.png)<br clear="left"><br>



    