<script lang="tsx">
import Vue, { CreateElement, VNode } from 'vue';

export default Vue.extend({
  name: 'EcosystemSection',
  props: {
    msg: String,
  },
  data() {
    return {
      contents: [
        { url: 'https://router.vuejs.org', text: 'vue-router' },
        { url: 'https://vuex.vuejs.org', text: 'vuex' },
        { url: 'https://github.com/vuejs/vue-devtools#vue-devtools', text: 'vue-devtools' },
        { url: 'https://vue-loader.vuejs.org', text: 'vue-loader' },
        { url: 'https://github.com/vuejs/awesome-vue', text: 'awesome-vue' },
      ],
    };
  },
  render(h: CreateElement): VNode {
    return (
      <div>
        <h3>{this.msg ? this.msg : 'Default'}</h3>
        <ul>
          {this.contents.map((content) => (
            <li><a href={content.url} target='_blank'>{content.text}</a></li>
          ))}
        </ul>
      </div>
    );
  },
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
