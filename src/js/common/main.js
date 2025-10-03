function renderReview() {
  // client data
  const clientReviews = [
    {
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      name: "Rahul Sharma",
      role: "Startup Founder",
      dec: "Working with Yolopment was a fantastic experience. They delivered our website on time with a clean and modern design.",
    },
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sophia Dutta",
      role: "Marketing Manager",
      dec: "The team understood our needs perfectly and created a digital marketing strategy that boosted our sales.",
    },
    {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Arjun Mehta",
      role: "Small Business Owner",
      dec: "Great communication and professional work. I highly recommend them for web development and branding services.",
    },
  ];

  const renderDiv = document.getElementById("review-cards");

  let renderCard = "";

  clientReviews.forEach((card) => {
    renderCard += `   <div
            class="bg-[#1a0b24] flex flex-col items-center text-center border border-slate-800 rounded-2xl p-10 md:w-80 w-full shadow-lg shadow-purple-900/30 hover:bg-[#241032] hover:scale-[1.02] transition-transform duration-300 ease-in-out "
          >
            <!-- Profile Image -->
            <img
              class="h-20 w-20 rounded-full border-4 border-purple-600 shadow-md mb-4"
              src="${card.img}"
              alt="Profile"
            />

            <!-- Name -->
            <h3 class="text-white text-lg font-semibold">${card.name}</h3>

            <!-- Role -->
            <h4 class="text-slate-400 text-sm mb-3">${card.role}</h4>

            <!-- Rating -->
            <div class="flex space-x-1 text-yellow-400 mb-4">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
              <i class="fa-regular fa-star"></i>
            </div>

            <!-- Description -->
            <p class="text-slate-300 text-sm leading-relaxed">
             ${card.dec}
            </p>
          </div>`;
  });

  renderDiv.innerHTML = renderCard;
}

document.addEventListener("DOMContentLoaded", renderReview);
