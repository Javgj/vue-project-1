<template>
  <div>
    <b-card
      :title="character.name"
      :img-src="character.image"
      :sub-title="$t(`details.cards.status.${character.status.toLowerCase()}`)"
      :img-alt="`${character.name}`"
      img-top
      class="my-2"
      style="max-width: 20rem;">
      <b-list-group class="my-2" flush>
        <b-list-group-item>
          <b>{{ $t(`details.cards.title_species`)}}</b>
          {{ $t(`details.cards.species.${character.species.toLowerCase()}`) }}
        </b-list-group-item>
        <b-list-group-item>
          <b>{{ $t(`details.cards.title_gender`)}}</b>
          {{ $t(`details.cards.gender.${character.gender.toLowerCase()}`) }}
        </b-list-group-item>
      </b-list-group>

      <slot name="actions"></slot>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CardCharacterItem',
  props: {
    character: {
      type: Object,
      required: true
    }
  }
}
</script>
