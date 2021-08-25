let intro = document.createElement("p"); // Create a p element.
let prof_pic = document.createElement("img"); // Create a img Element

prof_pic.src = "../pictures/home_page_pic.jpg"; // Set the source of the img. 
prof_pic.style.height = "400px"; // Specify a height for the image.
prof_pic.style.width = "300px"; // Specify a width for the image. 

// Set the content of the p element. 
intro.textContent = "Hello, my name is Adrian Perez Gonzalez, and I am currently a Senior at Portland State University, I am studying Computer Science. This is my personal website to show case all the experience I have gained in my time at Portland State University and from previous jobs and internships. Here you can find an About Me page that will give you more information about myself, as well as a few previous projects that I have worked on, and lastly you will find a contact me form if you would like to get more information about me or my work."
intro.style.width  = "900px"; // Set a width for the paragraph 
intro.style.textAlign = "center"; // Set the text alignment of the element
intro.style.marginLeft = "auto"; // Center the element
intro.style.marginRight = "auto"; // Center the element

document.body.append(prof_pic); // Add the img element to the DOM
document.body.append(intro); // Add the p element to the DOM