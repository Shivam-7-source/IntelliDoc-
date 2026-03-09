const toggleTheme = () => {
  document.body.classList.toggle("light-theme");
  updateThemeButton();
  
  // save preference
  if(document.body.classList.contains("light-theme")){
    localStorage.setItem("theme","light");
  }else{
    localStorage.setItem("theme","dark");
  }
}

const updateThemeButton = () => {
  const themeBtn = document.querySelector(".theme-btn");
  const isDarkMode = !document.body.classList.contains("light-theme");
  
  if(isDarkMode) {
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    themeBtn.title = "Switch to Light Mode";
  } else {
    themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    themeBtn.title = "Switch to Dark Mode";
  }
}

// apply saved theme on load
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  
  if(savedTheme === "light"){
    document.body.classList.add("light-theme");
  }
  
  // Update button icon after a short delay to ensure DOM is ready
  setTimeout(updateThemeButton, 100);
}
