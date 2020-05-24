<template>
  <div class="form-box">
    <form @submit.prevent="saveUser" class="input-group" id="login">
      <h3>Ajouter un utilisateur</h3>
      <input type="name" class="input-field" placeholder="Name" v-model="users_name" required />
      <input type="email" class="input-field" placeholder="Email" v-model="users_email" required />
      <input
        type="text"
        class="input-field"
        placeholder="Password"
        v-model="users_password"
        required
      />

      <button type="submit" class="submit-btn">Ajouter</button>
      <router-link to="/backoffice" class="submit-btn">Cancel</router-link>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "./firebaseInit";

export default {
  name: "new-user",
  data() {
    return {
      users_name: null,
      users_email: null,
      users_password: null
    };
  },
  methods: {
    saveUser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.users_email, this.users_password)
        .then(
          user => {
            console.log(user);
            db.collection("users")
              .add({
                users_name: this.users_name,
                users_email: this.users_email,
                users_password: this.users_password
              })
              .then(docRef => {
                console.log("Client added: ", docRef.id);
                this.$router.push("/backoffice");
              })
              .catch(error => {
                console.error("Error adding users: ", error);
              });
            this.$router.push("/");
          },
          err => {
            alert(err.message);
          }
        );
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.hero {
  height: 580px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../assets/livre.jpg");
  background-position: center;
  background-size: cover;
  position: absolute;
}
.form-box {
  width: 380px;
  height: 430px;
  position: relative;
  margin: 6% auto;
  background: #fff;
  padding: 5px;
  overflow: hidden;
  border-radius: 30px;
}
.button-box {
  width: 320px;
  margin: 35px auto;
  position: relative;
  box-shadow: 0 0 20px 9px #ff61241f;
  border-radius: 30px;
}
.toggle-btn {
  padding: 10px 30px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
}

.input-group {
  width: 280px;
  transition: 0.5s;
}
.input-field {
  width: 100%;
  padding: 10px 0;
  margin: 5px 0;
  border-left: 0;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #999;
  outline: none;
  background: transparent;
}
.submit-btn {
  width: 100px;
  padding: 10px 30px;
  cursor: pointer;
  margin: 30px 10px;
  background: linear-gradient(to right, #ff105f, #ffad06);
  border: 0;
  outline: none;
  border-radius: 30px;
}
.check-box {
  margin: 5px;
}
.spn {
  color: #777;
  font-size: 12px;
  bottom: 68px;
  position: absolute;
}
#login {
  left: 50px;
}
#register {
  left: 450px;
}
</style>