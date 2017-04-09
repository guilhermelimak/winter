<template>
<div class="tweet">
  <div class="tweet__container">
    <div class="avatar__wrapper">
      <img :src="author.profile_image_url_https" class="avatar">
    </div>

    <div>
      <strong class="name">
        {{ author.name }}
      </strong>

      <span class="datetime">
       {{ date }}
      </span>

      <div class="content" v-html="content">
      </div>
    </div>
  </div>

  <div class="controls flex">
    <span class="reply__button pull-right">
      <i class="glyphicon glyphicon-share-alt"></i>
    </span>
    <span class="retweet__button pull-right">
      <i class="glyphicon glyphicon-retweet" @click="retweetStatus(tweet.id)"></i>
    </span>
    <span class="favorite__button pull-right">
      <i
        class="glyphicon"
        :class="{ 'glyphicon-star-empty': !tweet.favorited,'glyphicon-star': tweet.favorited }">
      </i>
    </span>
  </div>
</div>
</template>

<script>
import fecha from 'fecha'
import { mapActions } from 'vuex'
import 'linkifyjs'
import linkifyHtml from 'linkifyjs/html'

export default {
  computed: {
    content() {
      return linkifyHtml(this.tweet.text)
    },
    date() {
      return fecha.format(new Date(this.tweet.created_at), 'DD/MM HH:mm')
    },
    author() {
      return this.tweet.user
    },
  },
  methods: {
    ...mapActions([
      'retweetStatus',
    ]),
  },
  props: {
    tweet: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.tweet {
  margin: $grid-gutter-width / 3 0;
  border: 1px solid #AAA;
  border-radius: 1px;
  padding: $grid-gutter-width / 3;

  &__container {
    display: flex;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  .avatar {
    margin-right: $grid-gutter-width / 3;
  }

  .controls {
    display: flex;
    justify-content: flex-end;
    margin-top: $grid-gutter-width / 5;

    span {
      margin-right: $grid-gutter-width / 2;
    }
  }
}
</style>
