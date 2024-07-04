<template>
    <div class="library-card">
        <TitleGeneral title="Digital Library Cards"/>
        <LibraryCardWrapper/>
    </div>
</template>

<script>
import TitleGeneral from '@/components/shared/TitleGeneral'
import LibraryCardWrapper from '@/components/librarycard/LibraryCardWrapper'

    export default {
        components: {
            TitleGeneral,
            LibraryCardWrapper
        }
    }
</script>

<style lang="scss" scoped>
.library-card {
    max-height: 614px;
	text-align: center;
    margin-top: 50px;
    padding: 20px;
}    

@include tablet {
    .library-card {
        max-height: 857px;
    }
}
</style>