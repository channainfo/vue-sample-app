<template>
  <div>
    Itemx: {{todo.title}} / {{todo.status}}
    <slot></slot>
  </div>

</template>

<script>
export default {
  name: 'TodoItemx',
  props: ['todo']
}
</script>
