window.onload = function() {
  const main = document.querySelector('#main');
  const headerStarters = ["name:", "role:", "location:", "experience:", "resume:"];
  const headerEnders = ["Christian Belarde", "Web Developer", "Seattle, WA", "Over 2 years", "Here"];  
  main.innerHTML = `
  <div>${headerStarters[0]}${headerEnders[0]}</div>
  <div>${headerStarters[1]}${headerEnders[1]}</div>
  <div>${headerStarters[2]}${headerEnders[2]}</div>
  <div>${headerStarters[3]}${headerEnders[3]}</div>
  <div>${headerStarters[4]}${headerEnders[4]}</div>
  <div>${headerStarters[5]}${headerEnders[5]}</div>
  `;
};
console.log(headerStarters);