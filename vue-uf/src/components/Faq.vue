<template>
  <div class="hero">
    <div class="form-box">
      <h1 class="title">FAQ</h1>
      <h2 class="subtitle is-4">La réponse au questions que vous vous posez</h2>

      <div class="columns" v-if="faqs && faqs.length">
        <div class="column is-one-third accordion" id="accordionExample">
          <div class="card" v-for="(faq, index) in faqs" :key="index">
            <div class="card-header" :id="'heading-'+index">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  :data-target="'#collapse-' + index"
                  :aria-controls="'collapse-' + index"
                  aria-expanded="false"
                >{{ faq.title }}</button>
              </h2>
            </div>

            <div
              :id="'#collapse-' + index"
              class="collapse show"
              :aria-labelledby="'heading-'+ index"
              data-parent="#accordionExample"
            >
              <div class="card-body">{{ faq.body }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "faq",
  data: () => ({
    faqs: [],
    errors: []
  }),

  created() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.faqs = response.data.slice(0, 5);
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style scoped>
.hero {
  height: 170px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(livre.jpg);
  background-position: center;
  background-size: cover;
  position: absolute;
}
.form-box {
  width: 70%;

  position: relative;
  margin: 6% auto;
  background: #fff;
  padding: 5px;
  overflow: hidden;
  border-radius: 10px;
}
</style>