const retrieve_saved_blogposts = localStorage.getItem("blogpost");
var blogposts;
//localStorage.removeItem("blogpost") //use to restore default values if there"s an error

if (retrieve_saved_blogposts) {
  blogposts = JSON.parse(retrieve_saved_blogposts);
} else {
  let default_blogposts = [
    {id: 1, title: "Mastering the Chemex: A Beginner's Guide", img: "../img/s1.jpeg", date: "May 2, 2024", content: `
        Introduction:
        Elegant, timeless, and capable of brewing an exceptionally clean and nuanced cup - the Chemex has earned a beloved place in the pour-over world. This iconic brewer's genius lies in its simple yet brilliant design featuring a wood collar, glass flask, and thick paper filters. While achieving mastery with the Chemex takes some practice, this beginner's guide will have you brewing delectable cups in no time.
        
        The Essentials:
        Before we dive into the brewing process, ensure you have the right gear:
        - Chemex Brewer (Whatever size suits your needs)
        - Chemex Bonded Filters
        - Quality Burr Grinder 
        - Gooseneck Kettle
        - Fresh Whole Bean Coffee
        
        Step 1: The Grind
        Grind your whole beans to a medium-coarse consistency, similar to kosher salt. Getting the right grind is crucial, as grounds that are too fine can lead to over-extraction and bitterness.
        
        Step 2: The Bloom  
        Place the thick Chemex filter in the brewer and rinse it with hot water to remove any papery taste. Dump that water and add your freshly ground coffee. Use a 1:16 coffee-to-water ratio as a starting point. Begin with just enough water to saturate the grounds, giving them a gentle swirl. Allow the coffee to "bloom" for 30-45 seconds before proceeding.
        
        Step 3: The Pour  
        Set a timer for the desired total brew time, around 4 minutes. Slowly pour the remaining hot water over the grounds in a gentle spiral motion. Pour steadily, avoiding aggressively pouring down the middle which can cause the grounds to get overly disturbed.
        
        Step 4: The Brew  
        Allow the coffee to brew untouched, resisting any urge to stir. As the level drops, you can add small pulse pours to keep the water level topped up until you reach your full water ratio.
        
        Step 5: The Removal
        Once your timer goes off, carefully remove the thick filter and spent grounds, giving the filter a gentle shake to extract any last delicious drops.
        
        Chemex Pro Tips:
        - Experiment with different brew times to find your sweet spot
        - Use hot, but not boiling, water around 200°F
        - Adjust your grind size if you experience underextraction or overextraction  
        - Preheating the Chemex helps maintain ideal brew temps
        - Enjoy your Chemex coffee neat to appreciate its clarity and clean flavors
        
        With some practice, you'll be brewing Chemex perfection. This elegant brewer rewards patience and precision with a delightfully clean, well-rounded, and flavorful cup of coffee. Stay tuned for more pour-over tips!`,
    },
    {id: 2, title: "Siphon Brewing: Brewing with Flare", img: "../img/s2.webp", date: "May 3, 2024", content: `
        Among the array of brew methods, few are as visually captivating and scientifically fascinating as siphon brewing. This theatrical technique combines elements of immersion and vacuum brewing to produce a remarkably clean and flavorful cup of coffee. If you're seeking a new brewing adventure that delights the senses, look no further than the siphon brewer.
        The Siphon Setup:
        At first glance, a siphon brewer resembles an elaborate scientific experiment with its two glass vessels connected by a narrow tube. Despite its complex appearance, the components are quite simple:
        Top Chamber: This globe contains the water reservoir.
        Bottom Chamber: The coffee grounds go into this carafe-like vessel.
        Filter Rod: Connects the two chambers and creates the vacuum seal.
        Rubber Gasket: Ensures an airtight seal between the chambers.
        Halogen Lamp/Butane Burner: Provides heat to initiate and maintain the vacuum siphon.
        The Brewing Process:
        
        Preparation: Insert the filter, add your coarse-ground coffee to the bottom chamber, and fill the top chamber with hot water just off the boil.
        Initiating the Siphon: Apply heat to the bottom chamber. As it heats, vapor pressure forces the water through the filter tube into the bottom chamber, immersing the grounds.
        Brewing: Once all the water has transferred, remove the heat source. The vapor cools, creating a vacuum that draws the freshly brewed coffee back through the filter tube into the top chamber.
        Serving: Once the bottom chamber is nearly empty, remove the top chamber to stop the siphoning process. Give it a gentle swirl and serve immediately for peak flavor.
        
        The siphon's signature feature is the vacuum brew that agitates and fully immerses the grounds, extracting maximum flavor while maintaining exceptional clarity and body.
        Siphon Brewing Tips:
        
        Use a burr grinder for an even, coarse grind similar to French press consistency
        Start with a 1:16 coffee-to-water ratio, adjusting to taste
        Don't rush! The entire process takes 5-10 minutes
        Preheat the vessel by filling the bottom chamber with hot water before brewing
        Consider the siphon's unique flavors when choosing your coffee beans
        
        While siphon brewing does require some patience and finesse, the rewarding taste and sheer entertainment value make it well worth exploring. Embrace your inner mad coffee scientist and give this fascinating brewing device a try!`,
    },
    {id: 3, title: "Creamy Homemade Coffee Liqueur Recipe", img: "../img/s3.jpeg", date: "May 5, 2024", content: `
        Introduction:
        There's nothing quite like sipping on a velvety, coffee-infused cocktail or dessert to satiate your caffeine cravings. But you don't need to splurge on pricey store-bought coffee liqueurs. With just a few simple ingredients, you can craft an exceptionally rich and creamy homemade coffee liqueur that rivals the best artisan brands. This easy recipe makes an indulgent addition to your favorite beverage or sweet treat.
        
        Coffee Liqueur Ingredients:
        • 1 cup brewed coffee or espresso, cooled 
        • 2 cups vodka or light rum
        • 1 cup white sugar
        • 1 cup brown sugar
        • 2 teaspoons vanilla extract
        • 1⁄2 cup heavy cream
        • 1⁄4 cup coffee liqueur (such as Kahlua) (optional)
        
        Instructions:
        
        1. Brew and Cool: Start by brewing a cup of your favorite bold coffee or a few shots of espresso. Allow it to cool completely.
        
        2. Mix the Spirits: In a large jar or bottle with a tight seal, combine the vodka or rum with the cooled coffee. Give it a good shake.
        
        3. Add the Sugars: Pour in the white and brown sugars. Seal tightly and shake vigorously until the sugars fully dissolve. 
        
        4. Infuse with Vanilla: Add the vanilla extract and shake again to incorporate.
        
        5. Rest and Steep: Allow the coffee-spirit mixture to steep for at least 2 weeks at room temperature, gently shaking every few days.
        
        6. Finishing Touches: After steeping, stir in the heavy cream and coffee liqueur (if using). The cream adds luxurious body.
        
        7. Strain and Bottle: Using a mesh strainer lined with a coffee filter or cheesecloth, strain the liqueur into bottles or swing-top jars to remove any undissolved particles.
        
        8. Enjoy! Your decadent homemade coffee liqueur is now ready to enjoy! Drizzle it over ice cream, mix it into coffee beverages, or sip it neat over ice.
        
        Notes:
        - This yields about 3 cups of liqueur that will keep for several months stored in an airtight container.  
        - Use your favorite coffee beans or espresso blend. A dark roast or espresso roast works beautifully.
        - Customize by adding extra flavorings like cinnamon, chocolate, hazelnut, or orange zest.
        - Allow at least 2 weeks for full flavor extraction, but steeping for up to 2 months produces an even richer liqueur.
        
        With this stellar recipe, you'll never need to buy overpriced coffee liqueurs again! Let us know if you try this creamy homemade version.`,
    },
  ];
  const jsonObjectString = JSON.stringify(default_blogposts);
  localStorage.setItem("blogpost", jsonObjectString);
  location.reload();
}

//handles the mini CRUD system of the web app
let nextId = blogposts.length ? Math.max(...blogposts.map((post) => post.id)) + 1 : 1;
function addBlogpost() {
  event.preventDefault();
  const title = document.getElementById("addtitle").value;
  const content = document.getElementById("addcontent").value;
  const fileInput = document.getElementById("addimage");
  const date = getCurrentDate();

  const reader = new FileReader();

  reader.onload = function (event) {
    const img = event.target.result;

    const newpost = {
      id: nextId++,
      title,
      img,
      date,
      content,
    };
    blogposts.push(newpost);
    const jsonObjectString = JSON.stringify(blogposts);
    localStorage.setItem("blogpost", jsonObjectString);

    location.reload();
    alert("Added Successfully!");
  };

  if (fileInput.files && fileInput.files[0]) {
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    alert("Please select an image");
  }
}

function getCurrentDate() {
  const date = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

//list the blog posts on admin
if (location.pathname.split("/").pop() === "admin.html") {
  blogposts.forEach((blogpost) => renderBlogPostTable(blogpost));
}

function renderBlogPostTable(blogpost) {
  const tableRow = document.createElement("tr");
  tableRow.classList.add("border-b", "border-gray-200");
  const titleCell = document.createElement("td");
  titleCell.textContent = blogpost.title;
  const dateCell = document.createElement("td");
  dateCell.textContent = blogpost.date;
  const actionCell = document.createElement("td");
  actionCell.classList.add("h-12", "actions-column", "flex", "justify-center", "gap-3",);

  //edit/delete buttons
  const editButton = document.createElement("button");
  editButton.textContent = "Update";
  editButton.classList.add("h-8", "px-3", "py-1", "rounded", "text-white", "bg-blue-500", "hover:bg-blue-700",);
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("h-8", "px-4", "py-1", "rounded", "text-white", "bg-red-500", "hover:bg-red-700",);

  //handles edit functionality
  editButton.onclick = function () {
    openUpdatePostPopup(blogpost);
    edit_blogpost = blogpost.id;
  };
  //handles delete functionality
  deleteButton.onclick = function () {
    const delete_blogpost = blogpost.id;
    blogposts = blogposts.filter(
      (blogposts) => blogposts.id != delete_blogpost,
    );

    const jsonObjectString = JSON.stringify(blogposts);
    localStorage.setItem("blogpost", jsonObjectString);
    window.location.reload();
    alert("Deleted successfully!");
  };

  actionCell.appendChild(editButton);
  actionCell.appendChild(deleteButton);

  tableRow.appendChild(titleCell);
  tableRow.appendChild(dateCell);
  tableRow.appendChild(actionCell);

  const tableBody = document
    .getElementById("blog-posts-table")
    .querySelector("tbody");
  tableBody.prepend(tableRow);
}

function openUpdatePostPopup(blogpost) {
  const updatePostPopup = document.getElementById("update-post-popup");
  updatePostPopup.classList.remove("hidden"); // Make the popup visible

  //displays the current content of the selected blog post
  const updatePostTitle = document.getElementById("update-post-title");
  updatePostTitle.value = blogpost.title;
  const updatePostContent = document.getElementById("update-post-content");
  updatePostContent.value = blogpost.content;
}

function closeUpdatePostPopup() {
  const updatePostPopup = document.getElementById("update-post-popup");
  updatePostPopup.classList.add("hidden");
}

let edit_blogpost; //store the ID of the post to be updated
function editPost() {
  event.preventDefault();
  const updateBlogpost = (updatedData) => {
    const index = blogposts.findIndex((post) => post.id === edit_blogpost);
    if (index !== -1) {
      blogposts[index] = { ...blogposts[index], ...updatedData };
    }
  };
  closeUpdatePostPopup();

  const updatedTitle = document.getElementById("update-post-title").value;
  const updatedDescription = document.getElementById("update-post-content").value;

  const updatedImage = document.getElementById("update-post-image");
  const reader = new FileReader();

  reader.onload = function (event) {
    const img = event.target.result;
    updateBlogpost({id: edit_blogpost, title: updatedTitle, img: img });

    const jsonObjectString = JSON.stringify(blogposts);
    localStorage.setItem("blogpost", jsonObjectString);
  };
  if (updatedImage.files && updatedImage.files[0]) {
    reader.readAsDataURL(updatedImage.files[0]); // Read the file as data URL
  }

  updateBlogpost({id: edit_blogpost, title: updatedTitle, content: updatedDescription,});

  const jsonObjectString = JSON.stringify(blogposts);
  localStorage.setItem("blogpost", jsonObjectString);
  location.reload();
  alert("Edited sucessully!");
}

//manages the contents of the main ui
const blogsContainer = document.querySelectorAll(".blogs");
function renderBlogPost(blogpost) {
  const blogElement = document.createElement("div");
  blogElement.classList.add("blog", "2xl:w-[90%]", "xs:max-w-[80%]");
  blogElement.setAttribute("data-id", blogpost.id);

  blogElement.innerHTML = `
        <div id="dailystories" class="cursor-pointer p-4 text-sm font-light border border-s-[#d9d9d9] rounded-bl-[40px] rounded-tr-[96px] hover:shadow-lg xl:text-xs xl:p-3 sm:mx-10 xs:m-0">
          
            <div class="grid place-items-center max-w-96 h-96 overflow-hidden rounded-tr-[80px] rounded-bl-[80px] mb-4 2xl:h-80 xl:h-64 lg:h-48 md:h-60">
                <img src="${blogpost.img}" alt="Stories" class="w-full h-full object-cover">
            </div>
           
            <div class="gap-32 2xl:gap-24 grid grid-flow-col justify-center xl:gap-10 lg:gap-0 md:gap-10">
                <div class="grid grid-flow-col gap-3">
                    <svg class="w-[17px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                    </svg>
                    <p id="admin">Admin-Coffee</p> 
                </div>                     
                <div class="grid grid-flow-col gap-3">
                    <svg class="w-[17px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
                    </svg>             
                    <p>${blogpost.date}</p>
                </div>
            </div>
            <div class="max-w-[363px] h-[90px] font-plusjakartaSans font-semibold text-2xl mx-auto mt-3 flex items-start 2xl:text-lg xl:text-base xl:h-20 lg:text-sm">
                <h1>${blogpost.title}</h1>
            </div>
            <div class="flex justify-end">
                <button class="justify-self-end px-3 py-2" type="button">View details
                    <svg class="w-4 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    `;

  if(window.location.hash !== "#readMoreBlogs"){
    blogsContainer[0].appendChild(blogElement.cloneNode(true));
    blogsContainer[2].appendChild(blogElement.cloneNode(true));
  }
  if(window.location.hash === "#readMoreBlogs"){
    blogsContainer[1].appendChild(blogElement.cloneNode(true));
  }
}
if(window.location.hash !== "#readMoreBlogs"){
  for (let i = blogposts.length - 1; i > blogposts.length - 4; i--) {
    renderBlogPost(blogposts[i]);
  }
} 


const clickedPost = sessionStorage.getItem("storedId");
if (clickedPost) {
  const blogId = clickedPost;
  const blogpost = blogposts.find((post) => post.id == blogId);
  if (blogpost) {
    readBlog(blogpost);
  }
}

document.addEventListener("click", function (event) {
  const blogElement = event.target.closest(".blog");
  if (blogElement) {
    const blogId = blogElement.getAttribute("data-id");
    const blogpost = blogposts.find((post) => post.id == blogId);
    if (blogpost) {
      sessionStorage.setItem("storedId", blogId);
      readBlog(blogpost);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }
});

var lasthash;
window.addEventListener("hashchange", function () {
  const history = window.location.hash;
  if (lasthash === "#dailystories" && history !== "#dailystories") {
    sessionStorage.removeItem("storedId");
    sessionStorage.removeItem("readmore");
    document.getElementById("home").classList.remove("hidden");
    document.getElementById("readBlog").classList.add("hidden");
  }
  if (lasthash === "#readMoreBlogs" && history !== "#readMoreBlogs") {
    sessionStorage.removeItem("readmore");
    document.getElementById("readMoreBlogs").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
  }
  if (history == "#dailystories") {
    window.scrollTo({ top: 0, behavior: "instant" });
  }
  if (history === "#readMoreBlogs") {
    sessionStorage.setItem("readmore", history);
    storiesReadMore();
  }
});

//updates blogpost template depending on user's clicked blog post
function readBlog(blogopen) {
  document.querySelector("#title").textContent = blogopen.title;
  document.querySelector("#date").textContent = blogopen.date;
  document.querySelector("#banner").setAttribute("src", `${blogopen.img}`);

  const post = blogopen.content;
  const formattedPost = post ? post.replace(/\n/g, "<br>") : "";
  document.querySelector("#postcontent").innerHTML = formattedPost;

  document.querySelector("#home").classList.add("hidden");
  document.querySelector("#readMoreBlogs").classList.add("hidden");
  document.querySelector("#readBlog").classList.remove("hidden");

  lasthash = "#dailystories";
  window.scrollTo({ top: 0, behavior: "instant" });
}

//shows other posts available
function storiesReadMore() {
  for (let i = blogposts.length - 1; i >= 0; i--) {
    renderBlogPost(blogposts[i]);
  }
  document.getElementById("readMoreBlogs").classList.remove("hidden");
  document.getElementById("home").classList.add("hidden");
  lasthash = "#readMoreBlogs";
  window.scrollTo({ top: 0, behavior: "instant" });
}

const readmore = sessionStorage.getItem("readmore");
if(readmore && window.location.hash === "#readMoreBlogs") {
  storiesReadMore();
}
