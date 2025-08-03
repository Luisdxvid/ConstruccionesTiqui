window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
  
    if (!id) return;
  
    fetch("data/projects.json")
      .then((res) => res.json())
      .then((projects) => {
        const project = projects.find((p) => p.id === id);
  
        if (!project) {
          document.body.innerHTML = "<p>Project not found</p>";
          return;
        }
  

        document.getElementById("title-project").textContent = project.title;
        document.getElementById("subtitle-project").textContent = project.subtitle;
        document.getElementById("description-project").textContent = project.description;
        document.getElementById("image-project").src = "assets/images/" + project.image;
  
        const gallery = document.getElementById("galeria-proyecto");
        project.gallery.forEach((img) => {
          const imgEl = document.createElement("img");
          imgEl.src = "assets/images/" + img;
          imgEl.className = "img-fluid rounded mb-2";
          gallery.appendChild(imgEl);
        });
      });
  });
  