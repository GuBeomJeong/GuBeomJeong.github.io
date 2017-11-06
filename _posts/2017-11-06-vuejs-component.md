---
bg: ""
crawlertitle: "vue 컴포넌트"
summary: "vue 컴포넌트"
layout: post
title: " vue 컴포넌트"
date: "2017-11-06 16:00"
categories: posts
tags: ['vue.js']
author: jgb
---
vue.js 단일 파일 컴포넌트 적용

## vue 컴포넌트
```js
//chat.vue
<template>
    <div>
        <ul>
            <li v-for="item in items">
                <Speech :item="item" v-on:removeSpeech="deleteSpeech"></Speech>
            </li>
        </ul>
        <input v-model="message" v-on:keyup.enter="make" placeholder="">
        <button v-on:click="make">입력</button>
    </div>

</template>

<script>
    export default {
        data: function() {
            return {
                message:"",
                items:[

                ]
            }
        },
        methods:{
            make:function(e){
                this.items.push({
                    value:this.message
                });

                this.message = "";
            },
            deleteSpeech(item){
                this.items.splice(this.items.indexOf(item),1);
            }
        }
    }
</script>

<style>

</style>
```

```js
//speech.vue
<template>
    <div class="example">{{ item.value }}<button class="delete" v-on:click="del"></button></div>
</template>

<script>
    export default {
        props: ["item"],
        data : function() {
            return {}
        },
        methods : {
            del:function(){

                this.$emit("removeSpeech",this.item);

            }
        }
    }
</script>

<style>
    .example {
        color: blue;
    }


</style>
```

vue에서는 단일 파일 컴포넌트가 가능하다.
.vue로 끝나는 파일 하나가 컴포넌트이다.

만약 부모 컴포넌트가 자식 컴포넌트에게 data를 줄 때 v-bind:를 통해 줄 수있으며
줄여서 :만 쓴다.

또한 자식컴포넌트가 부모 컴포넌트와 교류하고 싶을 때는 부모가 자식에게 어떠한 이벤트가 발생했을 때
실행할 수 있는 함수를 물려준다. 자식은 그 이벤트를 emit시킴으로써 부모의 함수를 실행 시킬 수 있다.



```shell
npm install vue-template-compiler
```
단일 파일 컴포넌트를 이용하기 위해서 필요하다.
