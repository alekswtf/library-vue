<template>
    <div class="contacts-container">
        <TitleGeneral title="Our Contacts"/>
        <ContactsInformation/>
    </div>
</template>

<script>
import TitleGeneral from '@/components/shared/TitleGeneral'
import ContactsInformation from '@/components/contacts/ContactsInformation.vue'

    export default {
            components: {
            TitleGeneral,
            ContactsInformation
        }
    }
</script>

<style lang="scss" scoped>
.contacts-container {
    max-height: 575px;
	text-align: center;
    margin-top: 55px;
    padding: 20px;
}    

@include tablet {
    .contacts-container {
        max-height: 1055px;
    }
}
</style>