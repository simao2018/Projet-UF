<template>
  <div class="hero">
    <div class="form-box">
      <div class="button-box">
        <button type="button" v-on:click="goPageLogin" class="toggle-btn">Se Connecter</button>
        <button type="button" v-on:click="goPageRegister" class="toggle-btn btn-active">S'inscrire</button>
      </div>
      <form id="Register" class="input-group">
        <input
          type="text"
          name="Name"
          class="input-field"
          v-model="users_name"
          placeholder="Nom complet"
          required
        />
        <input
          type="email"
          name="email"
          class="input-field"
          v-model="email"
          placeholder="Adresse e-mail"
          required
        />
        <input
          type="password"
          name="password"
          class="input-field"
          v-model="password"
          placeholder="Mot de passe"
          required
        />
        <input type="checkbox" name="terms" class="check-box" />
        <div>j'accepte les termes et conditions</div>
        <button type="button" class="submit-btn" v-on:click="submitRegister">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "./firebaseInit";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      users_name: ""
    };
  },
  methods: {
    goPageLogin: function() {
      this.$router.push("login");
    },
    goPageRegister: function() {
      this.$router.push("register");
    },

    submitRegister: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            var userData = firebase.auth().currentUser;
            db.collection("users")
              .add({
                users_name: this.users_name,
                users_email: userData.email
              })
              .then(docRef => {
                console.log("Client added: ", docRef);
              })
              .catch(error => {
                console.error("Error adding users: ", error);
              });
            alert(`Account Created for ${user.email}`);
            this.$router.push("/");
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
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
.btn-active {
  background: linear-gradient(to right, #ff105f, #ffad06);
  border-radius: 30px;
  transition: 0.9s;
  width: 50%;
}
.social-icons {
  margin: 30px auto;
  text-align: center;
}
.social-icons img {
  margin: 0 12px;
  width: 30px;
  height: 30px;
  text-align: center;
  box-shadow: 0 0 20px 0 #7f7f7f3d;
  cursor: pointer;
  border-radius: 50%;
}
.input-group {
  width: 280px;
  transition: 0.5s;
  margin: auto;
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
  width: 85%;
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