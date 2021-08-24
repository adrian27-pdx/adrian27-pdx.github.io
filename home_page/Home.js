let intro = document.createElement("p");
let prof_pic = document.createElement("img");

prof_pic.src = "../pictures/home_page_pic.jpg";
prof_pic.style.height = "400px";
prof_pic.style.width = "300px";

intro.textContent = "Hello, my name is Adrian Perez Gonzalez, and I am currently a Senior at Portland State University, I am studying Computer Science. This is my personal website to show case all the experience I have gained in my time at Portland State University and from previous jobs and internships. Here you can find an About Me page that will give you more information about myself, as well as a few previous projects that I have worked on, and lastly you will find a contact me form if you would like to get more information about me or my work."
intro.style.width  = "900px";
intro.style.textAlign = "center";
intro.style.marginLeft = "auto";
intro.style.marginRight = "auto";

document.body.append(prof_pic);
document.body.append(intro);