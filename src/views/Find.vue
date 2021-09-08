<template>
    <div>
        <h3>Find</h3>

        <div>
            <router-link to="/find">findA</router-link> | 
            <router-link to="/find/findB">findB</router-link> | 
            <router-link to="/find/findC">findC</router-link> 

            <!-- <router-link :to="{name:'FindA'}">findA</router-link> | 
            <router-link :to="{name:'FindB'}">findB</router-link> | 
            <router-link :to="{name:'FindC'}">findC</router-link>  -->
        </div>

        <div>
            <router-view></router-view>

            <router-view name="findSlide"></router-view>
        </div>
    </div>
</template>