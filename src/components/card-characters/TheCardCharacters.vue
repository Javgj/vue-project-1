<template>
  <div>
    <b-row>
      <b-col
        v-for="character of characters"
        :key="character.id"
        sm="6"
        md="4"
        lg="3"
        xl="3">
        <!-- card-character-item -->
        <CardCharacterItem :character="character">
          <template #actions>
            <b-button
              size="sm"
              variant="outline-primary"
              @click="$router.push({ name: 'details-view', params: { id: character.id }})">
              {{ $t('details.button_actions.information') }}
            </b-button>
            <b-button
              class="float-right"
              size="sm"
              variant="danger"
              @click="$emit('delete-character', character.id)">
              {{ $t('details.button_actions.delete') }}
            </b-button>
          </template>
        </CardCharacterItem>
        <!-- /card-character-item -->
      </b-col>
    </b-row>
    <slot></slot>
  </div>
</template>

<script>
import CardCharacterItem from '@/components/card-characters/components/CardCharacterItem'
export default {
  name: 'TheCardCharacters',
  props: {
    characters: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  components: {
    CardCharacterItem
  }
}
</script>
