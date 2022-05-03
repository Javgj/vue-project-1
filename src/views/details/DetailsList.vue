<template>
  <div>
    <!-- v-banner -->
    <VBanner
      :title="$t('details.title_list')"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-morty-season-5-finale-1631266872.jpg?crop=1.00xw:0.898xh;0,0&resize=1200:*"
      alt="img-1" />
    <!-- / v-banner -->
    <b-container>
      <!-- the-card-characters -->
      <TheCardCharacters :characters="information" @delete-character="deleteCharacter">
        <b-pagination
          v-model="pagination.currentPage"
          :total-rows="pagination.count"
          :per-page="information.length"
          @input="getListCharacters(pagination.currentPage)">
        </b-pagination>
      </TheCardCharacters>
       <!-- /the-card-characters -->
    </b-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import TheCardCharacters from '@/components/card-characters/TheCardCharacters'
export default {
  name: 'DetailsList',
  components: {
    TheCardCharacters
  },
  data () {
    return {
      information: []
    }
  },
  computed: {
    ...mapGetters({
      characters: 'characters',
      pagination: 'pagination'
    })
  },
  methods: {
    ...mapActions({
      fetchGetCharacters: 'fetchGetCharacters'
    }),

    async getListCharacters (id = 1) {
      if (!id) return
      const { data, success, error } = await this.fetchGetCharacters({ id })

      if (!data && !success) {
        return console.error('Error data' + error)
      }
      this.information = data.results

      window.scrollTo({ top: 0, behavior: 'smooth' })
    },

    deleteCharacter (id) {
      this.information = this.information.filter(val => val.id !== id)
    }
  },
  created () {
    if (!this.characters) return this.getListCharacters(this.pagination.currentPage)

    this.$watch('characters', (data) => {
      this.information = data.map(val => {
        return {
          id: val.id,
          name: val.name,
          status: val.status,
          species: val.species,
          gender: val.gender,
          image: val.image
        }
      })
    }, {
      immediate: true
    })
  }
}
</script>
