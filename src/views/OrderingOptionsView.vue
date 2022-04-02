<template>
  <div class="ordering">
    <br>
    <div class='order-menu'>
      <div class = 'order-text'>Item and Description</div>
      <div class = 'order-price'>Price</div>
    </div>
    <br>
    <div class='order-menu'>
      <div class = 'order-text'>Single Item</div>
      <div class = 'order-price'>2.99</div>
    </div>
    <br>
    <div class='order-menu'>
    <div class = 'order-text'>Single Monster</div>
    <div class = 'order-price'>3.99</div>
    </div>
    <br>
    <div class='order-menu'>
      <div class = 'order-text'>Multiple Items or Set of Items</div>
      <div class = 'order-price'>1.99 per</div>
    </div>
    <br>
    <div class='order-menu'>
      <div class = 'order-text'>Multiple Monsters or Faction of Monsters</div>
      <div class = 'order-price'>2.99 per, Faction 5.99 extra</div>
    </div>
    <br>
    <div class='order-menu'>
      Each item or monster come with a full description, stat block and hand-drawn image.
      This will be sent via email as a .pdf document to the provided email upon purchasing.
      All prices are in bottles of juice, or snack.
      Size of bottle of juice or snack unimportant.
      An in-process .pdf will be sent upon request to ensure that the item follows the customer request.
      All sales are final.
    </div>
    <br>
    <div class='contact'>
      Welcome to a new addition!<br><br>
      Now you can we help generate ideas for potential magic items for you,
      if you're not quite sure what you might want yet. To do so, just type in a spell name or part of a name, and the name of an object.
      They don't have to be complete names, we'll come up with a list of objects based on what matches during the search.
      <br><br>
      <form v-on:submit.prevent="getItemsByNames()">
        Enter an item, or part of an item name in the first box, and the name for a spell, or part of one the second box!<br>
        <textarea v-model="itemText" placeholder="Item name here"></textarea>
        <textarea v-model="spellText" placeholder="Spell name here"></textarea>
        <br>
        <button class="auto">Get list!</button><br>
      </form>
      <br> <!-- need to find a way to pass the data over -->
      <form v-on:submit.prevent="getRandomItems()">
        Or, hit this button to get a randomly generated item!<br>
        <button class="auto">Get random items!</button><br>
      </form>
    </div>
    <br>
    <div class='order-menu'>
      <div id="itemTextBox" class='item-list'>Items will appear here!</div>
      <div id="spellTextBox" class='item-list'>Spells will appear here!</div>
    </div>
    <br>
    <div class='contact'>
      <div id="randomItemBox" class= 'item-list'> Random items will appear here!</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'orderingOptionsView',
    Components: {
      itemText: '',
      spellText: '',
    },
    data() {
      return {
        itemText: '',
        spellText: '',
      }
    },
    methods: {
      getRandomItems(){
        var itemURL = "https://www.dnd5eapi.co/api/equipment"; //these get us a list of items we can use
        var spellURL = "https://www.dnd5eapi.co/api/spells";
        var incompleteAdjURL = "https://api.datamuse.com/words?rel_jja=";

        var returnString = "Randomly generated items: <br>";
        returnString += "<ul>";
        for(let i = 0; i < 5; ++i) {
          let randomNameType = Math.floor(Math.random() * 6);
          if(randomNameType == 0) {
          fetch("/names.json")
            .then(function(response) {
          return response.json();
          }).then(function(json) { //we can get data, now to print the stuff?
            var nameNumber = Math.floor(Math.random() * 100);
            var nameJSON = json;
            fetch(itemURL)
            .then(function(response) {
              return response.json();
            }).then(function(json) { //we can get data, now to print the stuff?
                var itemNumber = Math.floor(Math.random() * 237);
                var itemJSON = json;
                fetch(spellURL)
                .then(function(response) {
                  return response.json();
                }).then(function(json) { //we can get data, now to print the stuff?
                    var spellNumber = Math.floor(Math.random() * 319);
                    returnString += "<li> " + nameJSON.names[nameNumber].name + "'s " + itemJSON.results[itemNumber].name + " of " + json.results[spellNumber].name;
                    returnString += "</ul>";
                    document.getElementById("randomItemBox").innerHTML = returnString;
                }); //spells
            });//items
            });//names
        }
        else if(randomNameType == 1) {
          fetch(itemURL)
          .then(function(response) {
            return response.json();
          }).then(function(json) { //we can get data, now to print the stuff?
              var itemNumber = Math.floor(Math.random() * 237);
              var itemJSON = json;
              fetch(spellURL)
              .then(function(response) {
                return response.json();
              }).then(function(json) { //we can get data, now to print the stuff?
                  var spellNumber = Math.floor(Math.random() * 319);
                  returnString += "<li> " +  itemJSON.results[itemNumber].name + " of " + json.results[spellNumber].name;
                  returnString += "</ul>";
                  document.getElementById("randomItemBox").innerHTML = returnString;
              }); //spells
          });//items
          //item of verbing
        }
        else if(randomNameType == 2) {
          //item of the noun
          fetch(itemURL)
          .then(function(response) {
            return response.json();
          }).then(function(json) { //we can get data, now to print the stuff?
              //var itemNumber = Math.floor(Math.random() * 237);
              var itemJSON = json;
              console.log(itemJSON);
              fetch(itemURL)
              .then(function(response) {
                return response.json();
              }).then(function(json) { //we can get data, now to print the stuff?
                  var itemNumber = Math.floor(Math.random() * 237);
                  var itemJSON = json;

                  fetch("/names.json")
                  .then(function(response) {
                    return response.json();
                  }).then(function(json) { //we can get data, now to print the stuff?
                      var nounNumber = Math.floor(Math.random() * 100);
                      returnString += "<li> " +  itemJSON.results[itemNumber].name + " of  the " + json.nouns[nounNumber].noun.charAt(0).toUpperCase() + json.nouns[nounNumber].noun.substr(1);
                      returnString += "</ul>";
                      document.getElementById("randomItemBox").innerHTML = returnString;
                  }); //spells
              });

          });
        }
        else if(randomNameType == 3) {
          //adj item
          fetch(itemURL)
          .then(function(response) {
            return response.json();
          }).then(function(json) { //we can get data, now to print the stuff?
            var itemNumber = Math.floor(Math.random() * 237);
            var itemJSON = json;
            //make adj url first?//maybe use a noun?
            fetch("/names.json")
            .then(function(response) {
              return response.json();
            }).then(function(json) { //we can get data, now to print the stuff?
                var nounNumber = Math.floor(Math.random() * 100); //this will be used to build a adj itemURL
                var completeAdjURL = incompleteAdjURL + json.nouns[nounNumber].noun
                //let's use the first 25 only.
                fetch(completeAdjURL)
                .then(function(response) {
                  return response.json();
                }).then(function(json) { //we can get data, now to print the stuff?
                    var adjNumber = Math.floor(Math.random() * 5);
                    returnString += "<li> " +  json[adjNumber].word.charAt(0).toUpperCase() + json[adjNumber].word.substring(1) + " " + itemJSON.results[itemNumber].name;
                    returnString += "</ul>";
                    document.getElementById("randomItemBox").innerHTML = returnString;
                });
            });
          });
        }
        else if(randomNameType == 4) {
          fetch(itemURL)
          .then(function(response) {
            return response.json();
          }).then(function(json) { //we can get data, now to print the stuff?
            var itemNumber = Math.floor(Math.random() * 237);
            var itemJSON = json;
            //make adj url first?//maybe use a noun?
            fetch("/names.json")
            .then(function(response) {
              return response.json();
            }).then(function(json) { //we can get data, now to print the stuff?
                var nounNumber = Math.floor(Math.random() * 100); //this will be used to build a adj itemURL
                var completeAdjURL = incompleteAdjURL + json.nouns[nounNumber].noun
                //let's use the first 25 only.
                fetch(completeAdjURL)
                .then(function(response) {
                  return response.json();
                }).then(function(json) { //we can get data, now to print the stuff?
                  var adjNumber = Math.floor(Math.random() * 5);
                  var firstAdj = json[adjNumber].word.charAt(0).toUpperCase() + json[adjNumber].word.substring(1);
                  var secondCompleteURL = incompleteAdjURL + firstAdj;
                  fetch(secondCompleteURL)
                  .then(function(response) {
                    return response.json();
                  }).then(function(json) { //we can get data, now to print the stuff?
                      var newAdjNumber = Math.floor(Math.random() * 5);
                      returnString += "<li> " + firstAdj + " " + json[newAdjNumber].word.charAt(0).toUpperCase() + json[newAdjNumber].word.substring(1) + " " + itemJSON.results[itemNumber].name;
                      returnString += "</ul>";
                      document.getElementById("randomItemBox").innerHTML = returnString;
                  });
                });
            });
          });
          //adj adj item
        }
        else if(randomNameType == 5) {
          //item of adj noun
          fetch(itemURL)
          .then(function(response) {
            return response.json();
          }).then(function(json) { //we can get data, now to print the stuff?
            var itemNumber = Math.floor(Math.random() * 237);
            var itemJSON = json;

            fetch("/names.json")
            .then(function(response) {
              return response.json();
            }).then(function(json) { //we can get data, now to print the stuff?
              var nounNumber = Math.floor(Math.random() * 100); //this will be used to build a adj itemURL
              var completeAdjURL = incompleteAdjURL + json.nouns[nounNumber].noun;
              var finalNoun = json.nouns[nounNumber].noun.charAt(0).toUpperCase() + json.nouns[nounNumber].noun.substring(1);
              //now fetch the adj
              fetch(completeAdjURL)
              .then(function(response) {
                return response.json();
              }).then(function(json) { //we can get data, now to print the stuff?
                  var newAdjNumber = Math.floor(Math.random() * 5);
                  var adjWord = json[newAdjNumber].word.charAt(0).toUpperCase() + json[newAdjNumber].word.substring(1);
                  //now have adj
                  returnString += "<li> " + itemJSON.results[itemNumber].name + " of " + adjWord + " " + finalNoun;
                  returnString += "</ul>";
                  document.getElementById("randomItemBox").innerHTML = returnString;
              });
            });
          });
        }
        //
    }
    returnString += "</ul>";
    document.getElementById("randomItemBox").innerHTML = returnString;
      },
      getItemsByNames(){
        document.getElementById("itemTextBox").innerHTML = "Currently getting matching items!";
        document.getElementById("spellTextBox").innerHTML = "Currently getting matching spells!";
        var itemId = this.itemText.toLowerCase();
        var returnString = "All items that match: <br>";
        returnString += "<ul>";
        var itemURL = "https://www.dnd5eapi.co/api/equipment";
        fetch(itemURL)
          .then(function(response) {
          return response.json();
          }).then(function(json) { //we can get data, now to print the stuff?
            for(var i = 0; i < json.count; ++i) {
              var text = json.results[i].name;
              text = text.toLowerCase();
              if(text.search(itemId) >= 0) {
                returnString += "<li> " + json.results[i].name;
              }
            }
            returnString += "</ul>";
            //console.log(returnString);
            document.getElementById("itemTextBox").innerHTML = returnString;
          });

        var spellId = this.spellText.toLowerCase();
        var spellURL = "https://www.dnd5eapi.co/api/spells";
        fetch(spellURL)
        .then(function(response) {
          return response.json();
        }).then(function(json) { //we can get data, now to print the stuff?
          var spellString =  "All spells that match: <br>";
          spellString += "<ul>";
          for(var i = 0; i < json.count; ++i) {
            var text = json.results[i].name;
            text = text.toLowerCase();
            if(text.search(spellId) >= 0) {
              spellString += "<li> " + json.results[i].name; //need to mod return string
            }
          }
          spellString += "</ul>";
          document.getElementById("spellTextBox").innerHTML = spellString;
          //console.log(spellURL, spellId);
          });
      },
      addItemToItems(){ //this will need to be some objects made in the end of each generated thing?
        console.log("yes?");
      },
    }
  }
</script>

<style scoped>

.ordering{
  background-color: #d3d3d3;
}

.contact {
  width: 60%;
  min-width: 350px;
  margin: auto;
  padding: 20px;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  background-color: #002b5c;
  color: #ffd700;
  box-shadow: inset 0 0 0 5px #ffd700;
  border: 15px solid #002b5c;
}

.order-menu {
  width: 60%;
  min-width: 350px;
  margin: auto;
  padding: 5px;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  background-color: #002b5c;
  color: #ffd700;
  box-shadow: inset 0 0 0 5px #ffd700;
  border: 15px solid #002b5c;
  display: flex;
  justify-content: space-between;
}

</style>
