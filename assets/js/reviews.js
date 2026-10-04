  // Only allow web links, so a review can't carry a javascript: URL
  var isWebURL = function(value){
    try {
      const url = new URL(value);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch (e) {
      return false;
    }
  }

  var add_review = function(){
     // Access form inputs
    const firstName = document.getElementById("first_name").value.trim();
    const lastName = document.getElementById("last_name").value.trim();
    const username = document.getElementById("username").value.trim();
    const websiteURL = document.getElementById("url").value.trim();
    const reviewText = document.getElementById("review_text").value.trim();
    const warning = document.getElementById("warning");
    warning.textContent = "";

    if (firstName === "" || lastName === "" || username === "" || websiteURL === "" || reviewText === "") {
      warning.textContent = "Please fill in all fields";
      return;
    }

    // adding more validation
    if (firstName.length < 2) {
      warning.textContent = "First name must be at least 2 characters long";
      return;
    }

    if (lastName.length < 2) {
      warning.textContent = "Last name must be at least 2 characters long";
      return;
    }

    if (username.length < 2) {
      warning.textContent = "Username must be at least 2 characters long";
      return;
    }

    if (!isWebURL(websiteURL)) {
      warning.textContent = "Website URL must be a full link starting with http:// or https://";
      return;
    }

    if (reviewText.length < 50) {
      warning.textContent = "Review must be at least 50 characters long";
      return;
    }

    document.getElementById("review_form").reset();

    // Build the same markup as the reviews already on the page
    const lst = document.querySelector(".reviews .team");
    const li = document.createElement("li");
    li.className = "member";
    const thumb_div = document.createElement("div");
    const thumb = document.createElement("img");
    thumb.src = "assets/images/avatar.svg";
    thumb.alt = "";
    thumb_div.appendChild(thumb);
    thumb_div.className = "thumb";

    const description_div = document.createElement("div");
    description_div.className = "description";

    const name = document.createElement("h3");
    name.textContent = firstName + " " + lastName;

    const review = document.createElement("p");
    review.textContent = reviewText;
    review.appendChild(document.createElement("br"));

    const user_url = document.createElement("a");
    user_url.href = websiteURL;
    user_url.textContent = "@" + username.replace(/^@/, "");
    review.appendChild(user_url);

    description_div.appendChild(name);
    description_div.appendChild(review);

    li.appendChild(thumb_div);
    li.appendChild(description_div);

    lst.appendChild(li);
  }

  // The Add button submits the form, so pressing Enter in a field also adds the review
  document.getElementById("review_form").addEventListener("submit", function(event){
    event.preventDefault();
    add_review();
  });


  var remove_review = function(){
    const lst = document.querySelector(".reviews .team");
    const warning = document.getElementById("warning");
    const last = lst.lastElementChild;
    if (!last) {
      warning.textContent = "No reviews to remove";
      return;
    }
    warning.textContent = "";
    last.remove();
  }

  document.getElementById("removeReviewButton").addEventListener("click", remove_review);
