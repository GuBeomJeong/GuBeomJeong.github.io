---
bg: "event-loop.jpg"
crawlertitle: "자바스크립트 비동기"
summary: "Event 처리 방법"
layout: post
title: "Javascript event loop"
date: "2017-09-04 16:52"
categories: posts
tags: ['front-end']
author: jgb
---
JS 비동기에 대해 설명하고자 합니다.
JS 비동기 처리에 앞서 JS에서 비동기가 브라우저에서
어떠한 방법으로 처리하는지를 포스트하고자 합니다.

## Broweser의 event 처리 방법
### callback
자바스크립트는 callback함수를 이용할 수 있습니다.
[![railroad]({{ site.images | relative_url }}/rails.jpg)]({{ site.images | relative_url }}/rails.jpg)
