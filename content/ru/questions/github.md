---
title: "GitHub"
description: "Здесь находятся ответы на вопросы, связанные с платформой GitHub"
weight: 1
_build:
  publishResources: True
---

# Ошибки deploy

## GitHub Pages не собирает сайт

Если Deploy Hugo site to Pages выдаёт ошибку: 

``Branch "main" is not allowed to deploy to github-pages due to environment protection rules.``

 <br>![I'm an image](/images/gh_1.png)<br clear="left"><br>

1. Убедитесь, что в настройках репозитория GitHub Pages разрешено публиковаться из ветки, выбранной в Workflow-файле (например, main):\
    **Settings** → **Environments** → **github-pages** → **Измените название разрешенной ветки**
    
    <br>![I'm an image](/images/gh_2.png)<br clear="left">

    <br>![I'm an image](/images/gh_3.png)<br clear="left">

    <br>![I'm an image](/images/gh_4.png)<br clear="left"><br>
2. Перейдите в настройки репозитория и проверьте, какая ветка выбрана для публикации на GitHub Pages:\
    **Settings** → **Pages** → **Установите источник публикации**

    <br>![I'm an image](/images/gh_5.png)<br clear="left"><br> 
3. Настройте автоматический деплой через Actions с другой ветки:

    При использывании GitHub Actions для деплоя, проверьте, чтобы Action был настроен на пуш в ветку, которая разрешена для деплоя. 
    Добавьте или измените команды в файле .yml для Actions.  

    <br>![I'm an image](/images/gh_6.png)<br clear="left"><br>

    ---



    