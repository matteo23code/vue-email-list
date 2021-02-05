new Vue({
  el: '#app',
  data:{
    mailList:[

    ]
  },
  mounted() {
    const self = this;

    for(var i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(function(elem) {
      self.mailList.push(elem.data.response)
    });
  }
  }
});
Vue.config.devtools = true
