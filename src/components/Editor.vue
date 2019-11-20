<template>
    <div>
        <input type="text" :value="value" @input="updateValue($event.target.value)"/>
    </div>
</template>

<script>
export default {
   props: ['value'],

   methods: {
       updateValue(value) {
           this.$emit("input", value);
       }
   }
};
</script>