window.onload = function() {
  const main = document.querySelector('#main');
  const headerContainer = document.createElement('div');
  const workContainer = document.querySelector('#workContianer');
  //main.appendChild(headerContainer);

  class headerInfo {
    constructor (firstPart, lastPart) {
      this.firstPart = firstPart;
      this.lastPart = lastPart;
    }   

    render(container) {
      const element = document.createElement('div');
      element.textContent = `${this.firstPart} ${this.lastPart}`;
      container.appendChild(element);
    }
  }
  /*
  // Handling creation and rendering of header lines
  const lineOne = new headerInfo("name: ", "Christian Belarde");
  const lineTwo = new headerInfo("role: ", "Web Developer");
  const lineThree = new headerInfo("location: ", "Seattle, WA");
  const lineFour = new headerInfo("experience: ", "Over 2 years");
  const lineFive = new headerInfo("resume: ", "Here");
  lineOne.render(headerContainer);
  lineTwo.render(headerContainer);
  lineThree.render(headerContainer);
  lineFour.render(headerContainer);
  lineFive.render(headerContainer);

  const myGreeting = "Hello there!"
  main.appendChild(myGreeting);
  const myBio = `My name is Christian. I am 26 yeard old, and a big fan of tech. 
  I specialize in front-end development, IT Help Desk work, and general promgramming.
   My true passion is writing code to solve problems and build cool things.`
*/

  class workCard {
    constructor(title, url) {
      this.title = title;
      this.url = url;
    }
    createWorkCard() {
      //Method to create HTML structure
      const workContainer = document.getElementById('workContainer');
      const workCard = document.createElement('div');
      workCard.classList.add('workCard');

      //Create image and title elements and set their content 
      const image = document.createElement('img');
      image.src = this.url;
      const title = document.createElement('h3');
      title.textContent = this.title;

      //Append the content to the card
      workCard.appendChild(image);
      workCard.appendChild(title);

      workContainer.appendChild(workCard);
    }
  }
new workCard("DSP Enhancement Solutions", "Assets/dsp-solutions.svg").createWorkCard();
new workCard("Atera PowerShell Utility", "Assets/atera.svg").createWorkCard();
new workCard("Adopt-a-buddy", "Assets/adopt.svg").createWorkCard();
new workCard("Code snippets", "Assets/snippets.svg").createWorkCard();

  class workCardExpanded {
    constructor(title, languages, image, bio) {
      this.title = title;
      this.languages = languages;
      this.image = image;
      this.bio = bio;
    }
  }

}
