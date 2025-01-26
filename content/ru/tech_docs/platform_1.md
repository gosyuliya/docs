---
title: "Шаблоны для конфигурации backend сервисов с OPA"
slug: "pl_1"
#description: ""
weight: 1
---

# HELM chart c шаблонами для ACR PDP sidecar

*Этот Helm Chart содержит шаблоны для конфигурации backend-сервисов с Open Policy Agent (OPA), работающим как sidecar для Policy Decision Point (PDP).*

## Настройка зависимости HELM-CHART

Для подключения зависимости добавьте в `Chart.yaml` следующую конфигурацию:

```yaml
dependencies:
  - name: acr-pdp
  version: ^1.0.0-0
  repository: "@dbp"
```

## Содержимое `values.yaml`

```yaml
pdpSidecar:
  policiesFilePath: "files/policies/**"
```

* **policiesFilePath** — указывает путь к файлам политик для OPA (чаще всего файлы форматов `.rego` или `.json`).

Все остальные параметры можно переопределить по мере необходимости: порт сервиса, параметры контейнера Docker, таймауты и другие настройки.

## Конфигурация ConfigMap

Для хранения политик OPA создайте отдельный шаблон **ConfigMap**. 
Включите следующий код в шаблон ConfigMap:

```yaml
{{- include "acr-pdp.configmap" . -}}
```

Этот шаблон будет автоматически генерировать ConfigMap с содержимым из файлов политик OPA, расположенных по указанному пути.

## Конфигурация портов сервиса

Для объявления порта, используемого контейнером PDP, добавьте следующий код в шаблон сервиса в раздел с массивом портов (`ports`):

```yaml
{{- include "acr-pdp.sidecar.port" . | nindent 4}}
```

## Конфигурация контейнеров

### Добавление аннотаций`

В секции `metadata` шаблона будущих Pod (например, в шаблоне Deployment или StatefulSet) добавьте аннотации с помощью `acr-pdp.sidecar.label-logging` следующим образом:

```yaml
spec:
  template:
      metadata:
          annotations:
              {{- include "acr-pdp.sidecar.label-logging" . | nindent 8 }}
```

### Включение контейнера PDP

В раздел `containers` (внутри `spec.template.spec.containers` в шаблоне Pod) добавьте следующий код, чтобы включить sidecar-контейнер с OPA:

```yaml
{{- acr-pdp.sidecar.container" . | nindent 8 }}
```
Этот код добавит контейнер с конфигурацией PDP в качестве sidecar, используя параметры, заданные в `values.yaml`.

---

# Таблица Markdown

| Наименование |  | Фактическое значение |  | Плановое значение |  | Итоговое значение |
| --- | --- | --- | --- | --- |  --- | --- |
|  |  | А | В | А | В |  |
| Позиция 1 |  | 5 | 5 | 10 | 5 | 25 |
| NOTE | Важное примечание |  |
| Позиция 2  |  | 5 | 5 | 10 | 5 | 25 |
| Позиция 3 |  | 0 | 5 | 10 | 5 | 20 |
| Итого: |  | 25 |  | 45 |  | 70 |

---

# Таблица HTML

<table>
    <tr>
        <th rowspan="2" colspan="2" style="text-align: center; vertical-align: center;">Наименование</th>
        <th colspan="2" style="text-align: center; vertical-align: center;">Фактическое значение</th>
        <th colspan="2" style="text-align: center; vertical-align: center;">Плановое значение</th>
        <th rowspan="2" style="text-align: center; vertical-align: center;">Итоговое значение</th>
    </tr>
    <tr>
        <th style="text-align: center; vertical-align: center;">А</th>
        <th style="text-align: center; vertical-align: center;">В</th>
        <th style="text-align: center; vertical-align: center;">А</th>
        <th style="text-align: center; vertical-align: center;">В</th>
    </tr>
    <tr>
        <td colspan="2">Позиция 1 </td>
        <td rowspan="2">5</td>
        <td rowspan="2">5</td>
        <td rowspan="2">10</td>
        <td rowspan="2">5</td>
        <td rowspan="2">25</td>
    </tr>
    <tr>
        <td>NOTE</td>
        <td>Важное примечание</td>
    </tr>
    <tr>
        <td colspan="2">Позиция 2</td>
        <td>5</td>
        <td>5</td>
        <td>10</td>
        <td>5</td>
        <td>25</td>
    </tr>
    <tr>
        <td colspan="2">Позиция 3</td>
        <td>5</td>
        <td>5</td>
        <td>10</td>
        <td>5</td>
        <td>25</td>
    </tr>
    <tr>
        <td colspan="2">Итого:</td>
        <td colspan="2">5</td>
        <td colspan="2">5</td>
        <td>25</td>
    </tr>
</table>

---
