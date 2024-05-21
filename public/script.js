//navbar hamburger menu
const mobileNavBtn = document.querySelector("#mobileMenuBtn");
const mobileNav = document.querySelector(".mobileMenu");

mobileNavBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("md:hidden");
});

function sendEmail(e){
  e.preventDefault();
  (function () {
    emailjs.init({
      publicKey: "fBrm2QucDoMpGt-qz",
    });
  })();
  let params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  if (params.email_id == "") {
    alert("Please field all the requirements!");
    return false;
  }

  emailjs
    .send("service_zey2njp", "template_ov22a9y", params)
    .then(function (res) {
      alert("Message Sent!");
    })
    .catch(function (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    });
}

const contact = document.getElementById("contacts");
contact.addEventListener("submit", sendEmail);
