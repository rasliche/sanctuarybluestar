<template>
<div class="home">
    <nav class="program-portals">
        <router-link :to="{ name: 'diving-login', params: {} }">
            <div class="program-card bg-blue-light no-underline rounded my-8">
                <img src="#" alt="Blue Star Diving Logo">
                <h1>Blue Star Diving</h1>
            </div>
        </router-link>
        <router-link :to="{ name: 'fishing-login', params: {} }">
            <div class="program-card bg-blue-light no-underline rounded my-8">
                <img src="#" alt="Blue Star Fishing Guides Logo">
                <h1>Blue Star Fishing Guides</h1>
            </div>
        </router-link>
        <router-link :to="{ name: '', params: {} }">See all modules</router-link>
    </nav>
</div>
</template>

<script>
// @ is an alias to /src
export default {
    name: "home"
}
</script>

<style>
.program-portals {
    display: grid;
    grid-gap: 50px;
    grid-template-columns: 1fr 1fr;
}

</style>
