export default {
  data() {
    return {
      postContent: '',
      posts: [
        { image: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/boy_person_avatar_kid-512.png', alt: 'boy', name: 'Boy', like: 1, content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { image: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png', alt: 'girl', name: 'Girl', like: 3, content: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
        { image: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png', alt: 'batman', name: 'Batman', like: 2, content: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
      ]
    }
  },
  methods: {
    addLike(index) {
      this.posts[index].like ++;
    },
    addPost() {
      const post = {
        image: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/santa_clous_christmas-512.png',
        alt: 'guest',
        name: 'Guest',
        like: 0,
        content: this.postContent
      }
      this.posts.unshift(post);
      this.postContent = ''
    }
  },
  create() {
  }
}