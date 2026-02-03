const img = ["img/nkar1.jpg","img/nkar2.avif",
  "img/nkar3.jpg","img/nkar4.jpg","img/nkar5.jpg"];

 let index = 0;
  const imgElement = document.getElementById("img");

  setInterval(() => {
      index++;
      if (index >= img.length) {
       index = 0;
    }
    imgElement.src = img[index];
  }, 2500);
   