(() => {

  //variables
  const hotspots = document.querySelectorAll(".Hotspot");
  const materialTemplate = document.querySelector("#material-template");
  const materialList = document.querySelector("#material-list");

  
  //This information needs to be removed then pulled with an AJAX Call using the Fetch API
  //this is the api url https://swiftpixel.com/earbud/api/materials"


  //functions
  function loadInfoBoxes() {
    
 loader.classList.toggle("hidden");

    //make AJAX call here
    fetch("https://swiftpixel.com/earbud/api/infoboxes")
    .then(response => response.json())
    .then(infoBoxes => {
      console.log(infoBoxes);
      infoBoxes.forEach((infoBox, index) => {
        let selected = document.querySelector(`#hotspot-${index + 1}`);
  
        const titleElement = document.createElement('h2');
        titleElement.textContent = infoBox.heading;
  
        const textElement = document.createElement('p');
        textElement.textContent = infoBox.description;
  
        selected.appendChild(titleElement);
        selected.appendChild(textElement);
      })

      loader.classList.toggle("hidden");

    })
    .catch(error =>{
      console.log(error);
      const errorMsg= document.createElement("p");
      errorMsg.textContent = "Oops! something went wrong";
      materialList.appendChild(errorMsg);
    }) //error message here

  }
  loadInfoBoxes();

  function loadMaterialInfo() {

    loader.classList.toggle("hidden");

    fetch("https://swiftpixel.com/earbud/api/materials")
    .then(response => response.json())
    .then( materials =>{
      console.log(materials);

      materials.forEach(material => {
      
        //clone the template
        const clone = materialTemplate.content.cloneNode(true);
      
        //populate the data
        const materialHeading = clone.querySelector('.material-heading');
        materialHeading.textContent = material.heading;
      
        const materialDescription = clone.querySelector('.material-description');
        materialDescription.textContent = material.description;
      
        //append the clone to the list
        materialList.appendChild(clone);  
      })
      loader.classList.toggle("hidden");
    } )
    .catch(error =>{
      console.log(error);
      const errorMsg= document.createElement("p");
      errorMsg.textContent = "Oops! something went wrong";
      materialList.appendChild(errorMsg);
    })
     

}

  loadMaterialInfo()

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();

