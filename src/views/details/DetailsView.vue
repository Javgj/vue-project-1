<template>
  <div>
    <!-- v-banner -->
    <v-banner
      :title="$t('details.title_view')"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-morty-season-5-finale-1631266872.jpg?crop=1.00xw:0.898xh;0,0&resize=1200:*"
      alt="img-1" />
    <!-- / v-banner -->
    <b-container class="p-5 offset-lg-4 offset-md-3">
      <!-- card-character-item -->
      <card-character-item :character="character">
        <template #actions>
          <div class="text-center">
            <b-button
              variant="outline-primary"
              @click="$router.push({ name: 'details-list' })">
              {{ $t('details.button_actions.back_to_list') }}
            </b-button>
          </div>
        </template>
      </card-character-item>
      <!-- /card-character-item -->
    </b-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import CardCharacterItem from '@/components/card-characters/components/CardCharacterItem'
export default {
  name: 'details-view',
  components: {
    CardCharacterItem
  },
  data () {
    return {
      character: {}
    }
  },
  computed: {
    ...mapGetters({
      getCharacters: 'getCharacters'
    }),
    characters () {
      return this.getCharacters
    }
  },
  methods: {
    ...mapActions({
      fetchGetCharacter: 'fetchGetCharacter'
    }),

    async getCharacter (id) {
      const { data, success, error } = await this.fetchGetCharacter({ id })

      if (!data && !success) {
        return console.error('Error data' + error)
      }

      this.character = data
    }
  },
  created () {
    if (this.$route.params.id && this.characters) {
      const [character] = this.characters.filter(val => val.id === this.$route.params.id)
      localStorage.setItem('id', this.$route.params.id)
      this.character = character
    } else {
      this.getCharacter(localStorage.getItem('id'))
    }
  }
}
</script>
