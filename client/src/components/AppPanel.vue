<template>
    <v-flex>
      <v-card fluid class="white elevation-2">
        <v-toolbar flat dense class="indigo" dark>
          <v-toolbar-title>{{title}}</v-toolbar-title>


            <slot name="toolbar-left">
            </slot>

          <v-spacer></v-spacer>

            <slot name="toolbar-right">
            </slot>

        </v-toolbar>

        <slot name="content">
          No content.
        </slot>
      </v-card>
    </v-flex>
</template>

<script>

export default {
  name: 'AppPanel',
  props: [
    'title',
  ],
}
</script>

<style scoped>
</style>
