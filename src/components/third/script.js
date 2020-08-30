export default {
  data() {
    return {
      friends: [
        { image: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/afro_woman_female_person-512.png', checked: false, alt: 'woman'},
        { image: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/baby_kid_toddler_child-512.png', checked: false, alt: 'baby'},
      ],
      buttons:[
        { icon: 'done', color: 'success' },
        { icon: 'close', color: 'error' }
      ]
    }
  },
  methods: {
    checked(e) {
      if (e === 'done') this.friends.filter((e) => e.checked === false)[0].checked = true;
      else this.friends.filter((e) => e.checked === false)[0].checked = null;
    },
  },
  create() {
  }
}