<template>
    <b-card style="max-width: 20rem;">
        <b-card-header>
            <slot name="header"></slot>
        </b-card-header>
        <b-card-body>
            <slot>Corps par défaut</slot>
        </b-card-body>
        <b-card-footer>
            <slot name="footer"></slot>
        </b-card-footer>
    </b-card>
</template>

<script>
export default {
    name: 'Client'
}
</script>

<style>

</style>
