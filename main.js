window.onload = function() {
    allUsers();
  };

const newArray = [];
function get(){
    fetch('https://randomuser.me/api/')
      .then( response => response.json())
        .then(data => {
            newArray.push(data.results["0"])
            console.log(newArray);
        })
        document.getElementById("contacts").innerHTML = " ";

// list users name and picture
        newArray.map(person => {
            console.log(person);
            let createLi = document.createElement("li");
            let contactList = document.getElementById("contacts");
            let image = document.createElement("img");
            image.src = person.picture.thumbnail;
            createLi.appendChild(image);
            createLi.appendChild(document.createTextNode(person.name.first + " " + person.name.last));
            contactList.append(createLi);
        });
}

//multiple users one array
function allUsers() {
    let multipleArray = null;
    fetch('https://randomuser.me/api/?results=5')
    .then (response => response.json())
    .then (data => {
        multipleArray = data.results
        multipleArray.map(person => {
        console.log(person);
        let createAllLi = document.createElement("li");
        let allContactsList = document.getElementById("allContacts");
        let allImage = document.createElement("img");
        let button = document.createElement('button');
        button.addEventListener("click",(e) => {
            let textBox = document.createElement('p');
            let pText = document.createTextNode("Cell: " + person.cell + " " + "Age: " + person.dob.age);
            textBox.appendChild(pText);
            createAllLi.appendChild(textBox);
        })
        allImage.src = person.picture.thumbnail;
        createAllLi.appendChild(allImage);
        createAllLi.appendChild(document.createTextNode(person.name.first + " " + person.name.last));
        createAllLi.appendChild(button);
        let buttonText = document.createTextNode("click this to creep on em");
        button.appendChild(buttonText);
        allContactsList.append(createAllLi);
    })
      console.log(multipleArray);
    })
    document.getElementById("allContacts").innerHTML = " ";
}


//Project 1: Adding Unit Test to your Fetch Requests
//Last week you paired-up and built an app that fetches data from an API.
//Today you're going to add unit test for multiple situations:

//Miss typed address
//Out of range request
//Wrong api key
//Hypothetical 4
//Hypothetical 5
//Unit Test Instructions
//Move to be able to pair program with your partner
//git status to make sure you each have pushed up and merge all of your changes
//Work on one computer and add the 5 unit tests mentioned about. You will have to refactor
//your request a bit to added in fetch as a dependency.







describe("missTypedaddress", () => {
  it("wrong address", () => {
    const testFetch = url => {
      assert(url === "https://randomuser.me/api/?results=5");
      return new Promise(function() {});
    };
    missTypedaddress(testFetch, "wrong address");
  });
  describe("outofRangerequest", () => {
    it("request is out of range", () => {
      const testFetch = url => {
        assert(url === "https://randomuser.me/api/?results=5");
        return new Promise(function() {});
      };
      outofRangerequest(testFetch, "request is out of range");
    });
    describe("wrongAPIkey", () => {
      it("wrong API key", () => {
        const testFetch = url => {
          assert(url === "https://randomuser.me/api/?results=5");
          return new Promise(function() {});
        };
        wrongAPIkey(testFetch, "wrong API key");
      });
      describe("getRandomUser", () => {
        it("tests fetch and random users endpoint", () => {
          const testFetch = url => {
            assert(url === "https://randomuser.me/api/?results=5");
            return new Promise(function() {});
          };
          getRandomUser(testFetch, "random user");
        });
        describe("test5users", () => {
  it("tests 5 random users", () => {
    const testFetch = url => {
      assert(url === "https://randomuser.me/api/?results=5");
      return new Promise(function() {});
    };
    test5usersr(testFetch, "?results=5");
  });
});
