<template>
  <div class="hello">
    <div class="imageBox">
      <div class="oneRow">
        <div class="itemName">Obsidian Shard Thrower</div>
        <img class="img-transparent" src="/images/obsidian shard thrower guantlet.jpg">
      </div>
      <div class="twoRow">
        <div class="itemName">Sonic Lock Opener</div>
        <img class='img-transparent' src='/images/sonic lock opener.jpg'>
      </div>
      <div class="threeRow">
        <div class="itemName">Glow-Stab Sword</div>
        <img class='img-transparent' src='/images/Glow-Stab Sword.jpg'>
      </div>
    </div>
    <div class="reviewBox">Welcome to Generico's Magic Item Emporium!<br>
                          -<br>
                          We can make individual items, groups of items, armors, weapons, artifacts, tools and more to fit into your campaign or game!<br>
                          -<br>
                          Go ahead and contact us and let us know what you're looking for!
    </div>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.reviewBox {
max-width: 40%;
min-width: 350px;
background-color: #002b5c;
color: #FFD700;
font-family: 'Shadows Into Light', cursive;
font-size: 25px;
margin: auto;
display: flex;
justify-content: space-between;
position: absolute;
left: 0;
right: 0;
margin-left: auto;
margin-right: auto;
top: 330px;
  text-align: center;
  padding: 10px;
  box-shadow: inset 0 0 0 5px #ffd700;
  border: 15px solid #002b5c;
}
.imageBox {
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: space-between;
}

.oneRow {
  width: 30%;
}
.twoRow {
  width: 30%;
}
.threeRow {
  width: 30%;
}

.itemName {
  font-size: 25px;
  padding: 10px;
  font-weight: bold;
  text-align: center;
  font-family: 'Dancing Script', cursive;
}

.img-transparent {
  opacity: 0.5;
  max-width: 100%;
  min-width: 225px;
  max-height: 735px;
  min-height: 725px;
}



@media screen and (max-width: 960px) {
  .oneRow {
    width: 50%;
  }
  .twoRow {
    width: 50%;
  }
  .threeRow {
    display: none;
    visibility: hidden;
  }
}
@media screen and (max-width: 640px) {
  .oneRow {
    width: 100%;
  }
  .twoRow {
    display: none;
    visibility: hidden;
  }
  .threeRow {
    display: none;
    visibility: hidden;
  }
}

</style>
