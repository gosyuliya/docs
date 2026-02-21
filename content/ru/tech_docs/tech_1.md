---
title: "Шаблоны для конфигурации backend сервисов с OPA"
description: "Господарик Юлия"
slug: "tech_1"
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
