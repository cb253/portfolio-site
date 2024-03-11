window.onload = function() {
  const main = document.querySelector('#main');
  const headerContainer = document.createElement('div');
  main.appendChild(headerContainer);

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


  class workCard {
    constructor(name, logo) {
      this.name = name;
      this.logo = logo;
    }
  }

  class workCardExpanded {
    constructor(title, languages, image, bio) {
      this.title = title;
      this.languages = languages;
      this.image = image;
      this.bio = bio;
    }
  }

}