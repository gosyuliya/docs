---
title: "Список инстансов для передачи заказчикам"
slug: "pl_1"
#description: ""
weight: 1
---

# Список

1. `https://edu.olymponline.ru/`
    * Основной домен платформы, предназначенный для реализации образовательных проектов. На этом домене расположены ключевые функциональные страницы и пользовательские интерфейсы.

2. `https://cdn-edu.olymponline.ru/`
    * Поддомен, предназначенный для распространения контента через сеть доставки (CDN). Используется для загрузки и ускоренной доставки мультимедийных и статических ресурсов, таких как изображения, скрипты и стили.

3. `https://assets-edu.olymponline.ru/`
    * Поддомен используется для хранения и доставки статических ресурсов, таких как изображения, скрипты и стили, применяемых на платформе. Он способствует ускорению загрузки страниц и снижению нагрузки на основной сервер.

4.  `https://fonts.gstatic.com/`
    * Домен Google Fonts применяется для загрузки веб-шрифтов на сайты. Использование данного домена позволяет правильно отображать текст на страницах.

5. `https://storage.yandexcloud.net/`
    * Домен облачного хранилища Яндекс (Яндекс.Облако) используется для хранения и доставки разнообразного контента, такого как видео, документы и данные, загруженные на платформу.

6. `https://secure.usedesk.ru/`
    * Основной домен системы поддержки клиентов Usedesk используется для оказания помощи пользователям, ответов на их вопросы и решения технических проблем, связанных с образовательной платформой.

7. `https://lib.usedesk.ru/`
    * Поддомен с библиотекой документации Usedesk, где представлены справочные материалы и инструкции, полезные для работы системы поддержки.

8. **{{< staticref "https://vimeo.com/" >}}https://vimeo.com/{{< /staticref >}}**
    * Онлайн-платформа, предназначенная для размещения, просмотра и обмена видеоконтентом.

9. **{{< staticref "https://kinescope.io/" >}}https://kinescope.io/{{< /staticref >}}**
    * Видеоплатформа, предназначенная для хостинга, стриминга и управления видеоконтентом.

10. `https://math.ngcdn.ru/`
    * Сервис для отрисовки математических символов.

<br>{{< alert type="info" >}}
Первая, вторая и третья ссылки изменяются в зависимости от образовательной платформы.
{{< /alert >}}

# Проверки на корректное добавление ссылок

* `https://edu.olymponline.ru/` (ссылка 1) — перейдите по адресу **{{< staticref "https://edu.olymponline.ru/" >}}https://edu.olymponline.ru/{{< /staticref >}}**. При правильной работы сервиса откроется главная страница платформы.

    <br>![](/images/edu.png)<br clear="left"><br>

* `https://cdn-edu.olymponline.ru/` (ссылка 2) — перейдите по адресу **{{< staticref "https://cdn-edu.olymponline.ru/" >}}https://cdn-edu.olymponline.ru/{{< /staticref >}}**. При правильной работе сервиса откроется страница с текстом формата XML.

    <br>![](/images/cnd.png)<br clear="left"><br>

* `https://assets-edu.olymponline.ru/` (ссылка 3) — перейдите по адресу **{{< staticref "https://assets-edu.olymponline.ru/favicons/edu/favicon.ico" >}}https://assets-edu.olymponline.ru/favicons/edu/favicon.ico{{< /staticref >}}**. При правильной работе сервиса откроется страница с логотипом Цифриума.

    <br>![](/images/ass.png)<br clear="left"><br>

* `https://fonts.gstatic.com/` (ссылка 4) — передите по адресу **{{< staticref "https://fonts.gstatic.com/" >}}https://fonts.gstatic.com/{{< /staticref >}}**. При правильной работе сервиса откроется страница, содержащая ошибку 404 с логотипом Google.

    <br>![](/images/g_404.png)<br clear="left"><br>

* `https://storage.yandexcloud.net/` (ссылка 5) — перейдите по адресу **{{< staticref "https://storage.yandexcloud.net/" >}}https://storage.yandexcloud.net/{{< /staticref >}}**. При правильной работе сервиса откроется страница с текстом формата XML.

    <br>![](/images/cnd.png)<br clear="left"><br>

* `https://secure.usedesk.ru/` (ссылка 6) — перейдите по адресу **{{< staticref "https://secure.usedesk.ru/" >}}https://secure.usedesk.ru/{{< /staticref >}}**. При правильной работе сервиса откроется страница авторизации пользователя сервиса Юздеск.

    <br>![](/images/usd_m.png)<br clear="left"><br>

* `https://lib.usedesk.ru/` (ссылка 7) — перейдите по адресу **{{< staticref "https://lib.usedesk.ru/secure.usedesk.ru/widget_158958_25184.js" >}}https://lib.usedesk.ru/secure.usedesk.ru/widget_158958_25184.js{{< /staticref >}}**. При правильной работе сервиса откроется страница, содержащая код javascript.

    <br>![](/images/usd_l.png)<br clear="left"><br>

* `https://math.ngcdn.ru/` (ссылка 10) — перейдите по адресу **{{< staticref "https://math.ngcdn.ru/" >}}https://math.ngcdn.ru/{{< /staticref >}}**. При правильной работе сервиса на открывшейся странице отобразится «error».

    <br>![](/images/error_i.png)<br clear="left"><br>

---
