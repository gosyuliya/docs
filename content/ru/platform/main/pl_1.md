---
title: "Список инстансов для передачи заказчикам"
slug: "pl_1"
#description: ""
weight: 1
---

# Список

1. `https://edu.olymponline.ru/`
    * Основной домен платформы, предназначенной для реализации образовательных проектов. На этом домене расположены ключевые функциональные страницы и пользовательские интерфейсы.

2. `https://cdn-edu.olymponline.ru/`
    * Поддомен, предназначенный для распространения контента через сеть доставки (CDN). Используется для загрузки и ускоренной доставки мультимедийных и статических ресурсов, таких как изображения, скрипты и стили, на платформе.

3. `https://assets-edu.olymponline.ru/`
    * Поддомен, используемый для хранения и доставки статических ресурсов, таких как изображения, стили и скрипты, применяемых на платформе. Он способствует ускорению загрузки страниц и снижению нагрузки на основной сервер

4.  `https://fonts.gstatic.com/`
    * Домен Google Fonts, применяемый для загрузки веб-шрифтов на сайты. Использование данного домена необходимо для правильного отображения текста на страницах, использующих шрифты из библиотеки Google Fonts.

5. `https://storage.yandexcloud.net/`
    * Домен облачного хранилища Яндекс (Яндекс.Облако), используемый для хранения и доставки разнообразного контента, такого как видео, документы и данные, загруженные на платформу.

6. `https://secure.usedesk.ru/`
    * Основной домен системы поддержки клиентов Usedesk, используемой для оказания помощи пользователям, ответов на их вопросы и решения технических проблем, связанных с образовательной платформой.

7. `https://lib.usedesk.ru/`
    * Поддомен с библиотекой документации Usedesk, где представлены справочные материалы и инструкции, полезные для работы с системой поддержки.

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

* `https://edu.olymponline.ru/` (ссылка 1) — перейти по адресу **{{< staticref "https://edu.olymponline.ru/" >}}https://edu.olymponline.ru/{{< /staticref >}}** и увидеть главную страницу платформы.

    <br>![](/images/edu.png)<br clear="left"><br>

* `https://cdn-edu.olymponline.ru/` (ссылка 2) — перейти по адресу **{{< staticref "https://cdn-edu.olymponline.ru/" >}}https://cdn-edu.olymponline.ru/{{< /staticref >}}** и увидеть текст формата XML.

    <br>![](/images/cnd.png)<br clear="left"><br>

* `https://assets-edu.olymponline.ru/` (ссылка 3) — перейти по адресу **{{< staticref "https://assets-edu.olymponline.ru/favicons/edu/favicon.ico" >}}https://assets-edu.olymponline.ru/favicons/edu/favicon.ico{{< /staticref >}}** и увидеть логотип Цифриума.

    <br>![](/images/ass.png)<br clear="left"><br>

* `https://fonts.gstatic.com/` (ссылка 4) — перейти по адресу **{{< staticref "https://fonts.gstatic.com/" >}}https://fonts.gstatic.com/{{< /staticref >}}** и увидеть ошибку 404 с логотипом Google.

    <br>![](/images/g_404.png)<br clear="left"><br>

* `https://storage.yandexcloud.net/` (ссылка 5) — перейти по адресу **{{< staticref "https://storage.yandexcloud.net/" >}}https://storage.yandexcloud.net/{{< /staticref >}}** и увидеть текст формата XML.

    <br>![](/images/cnd.png)<br clear="left"><br>

* `https://secure.usedesk.ru/` (ссылка 6) — перейти по адресу **{{< staticref "https://secure.usedesk.ru/" >}}https://secure.usedesk.ru/{{< /staticref >}}** и увидеть страницу авторизации пользователя сервиса Юздеск.

    <br>![](/images/usd_m.png)<br clear="left"><br>

* `https://lib.usedesk.ru/` (ссылка 7) — перейти по адресу **{{< staticref "https://lib.usedesk.ru/secure.usedesk.ru/widget_158958_25184.js" >}}https://lib.usedesk.ru/secure.usedesk.ru/widget_158958_25184.js{{< /staticref >}}** и увидеть код javascript.

    <br>![](/images/usd_l.png)<br clear="left"><br>

* `https://math.ngcdn.ru/` (ссылка 10) — перейти по адресу **{{< staticref "https://math.ngcdn.ru/" >}}https://math.ngcdn.ru/{{< /staticref >}}** и увидеть "error".

    <br>![](/images/error_i.png)<br clear="left"><br>

---
