<template>
  <div class="hero">
    <div class="form-box">
      <div class="button-box">
        <div id="btn"></div>
        <button type="button" class="toggle-btn" onclick="login()">Log in</button>
        <button type="button" class="toggle-btn" onclick="register()">register</button>
      </div>
      <div class="social-icons">
        <img src="fb.png" />
        <img src="tw.png" />
        <img src="gp.png" />
      </div>
      <form id="login" class="input-group">
        <input type="test" class="input-field" placeholder="User Id" required />
        <input type="test" class="input-field" placeholder="Enter Password" required />
        <input type="checkbox" class="chech-box" />
        <span>Remember Password</span>
        <button type="submit" class="submit-btn">Log In</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.hero {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(livre.jpg);
  background-position: center;
  background-size: cover;
  position: absolute;
}
.form-box {
  width: 380px;
  height: 480px;
  position: relative;
  margin: 6% auto;
  background: #fff;
  padding: 5px;
  overflow: hidden;
  border-radius: 30px;
}
.button-box {
  width: 220px;
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
#btn {
  top: 0;
  left: 0;
  position: absolute;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, #ff105f, #ffad06);
  border-radius: 30px;
  transition: 0.5s;
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
  top: 180px;
  position: absolute;
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
  width: 85%;
  padding: 10px 30px;
  cursor: pointer;
  margin: 30px 25px;
  background: linear-gradient(to right, #ff105f, #ffad06);
  border: 0;
  outline: none;
  border-radius: 30px;
}
.check-box {
  padding: 10px 30px;
  margin: 30px 25px;
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