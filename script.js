// --- DOM ELEMENT REFERENCES ---
const searchInput = document.getElementById("search");
const projectList = document.getElementById("project-list");
const languagesList = document.getElementById("languages-list");
const toolsList = document.getElementById("tools-list");
const year = document.getElementById("year");
// The global variable "projects" is already defined in the HTML script

// --- SET STATIC VALUES ---
year.textContent = new Date().getFullYear(); // Display current year in footer

// --- SET DYNAMIC VALUES ---
let activeLanguage = null;
let activeTool = null;
let searchQuery = "";

// --- LANGUAGE FILTERS ---
function getUniqueLanguages() {
    const allLanguages = projects.flatMap(p => p.languages);
    const uniqueLanguages = [...new Set(allLanguages)].sort();
    return uniqueLanguages
}
function renderLanguages() {
    const uniqueLanguages = getUniqueLanguages();
    const languagesOptions = ["All", ...uniqueLanguages];
    const languagesButtonsHTML = languagesOptions
        .map(r => `<button data-language="${r}" 
            aria-pressed="${activeLanguage === r || (!activeLanguage && r === 'All')}">${r}</button>`)
        .join("");
    languagesList.innerHTML = languagesButtonsHTML;
}

// --- TECHNOLOGY AND TOOLS FILTERS ---
function getUniqueTools() {
    const allTools = projects.flatMap(p => p.toolsAndTechnologies);
    const uniqueTools = [...new Set(allTools)].sort();
    return uniqueTools
}
function renderTools() {
    const uniqueTools = getUniqueTools();
    const toolsOptions = ["All", ...uniqueTools];
    const toolsButtonsHTML = toolsOptions
        .map(t => `<button data-tool="${t}" 
            aria-pressed="${activeTool === t || (!activeTool && t == "All") }">${t}</button>`)
        .join("");
    toolsList.innerHTML = toolsButtonsHTML;
}

// --- RENDER PROJECTS ---
/*
    Projects need to be rendered through a function
    because it loads initially with no filter,
    then reloads multiple times later whenever a filter is applied.
*/
function renderProjects() {
  const filtered = projects.filter(p =>
    (!activeLanguage || p.languages.includes(activeLanguage)) &&
    (!activeTool || p.toolsAndTechnologies.includes(activeTool)) &&
    (!searchQuery ||
      p.title.toLowerCase().includes(searchQuery) ||
      p.summary.toLowerCase().includes(searchQuery))
  );

  if (filtered.length === 0) {
    projectList.innerHTML = `<p class="empty">No projects match your filters.</p>`;
    return;
  }

  projectList.innerHTML = filtered
    .map(
      p => `
    <article class="project-card">
      ${p.image ? `<img src="${p.image}" alt="${p.title}" class="project-hero">` : ""}
      <h3>${p.title}</h3>
      <p>${p.summary}</p>

      <p class="meta"><strong>Languages:</strong> ${p.languages.join(", ")}</p>
      <p class="meta"><strong>Tools:</strong> ${p.toolsAndTechnologies.join(", ")}</p>

      ${
        p.outputs
          ? `<div class="links">
              ${Object.entries(p.outputs)
                .map(([label, url]) => `<a href="${url}" target="_blank">${label}</a>`)
                .join(" | ")}
            </div>`
          : ""
      }
    </article>`
    )
    .join("");
}


languagesList.addEventListener("click", e => {
  if (!e.target.matches("button")) return;
  const value = e.target.dataset.language;
  activeLanguage = value === "All" ? null : value;
  renderProjects();
  renderLanguages();
});

toolsList.addEventListener("click", e => {
  if (!e.target.matches("button")) return;
  const value = e.target.dataset.tool;
  activeTool = value === "All" ? null : value;
  renderProjects();
  renderTools();
});

// Search bar event listener

searchInput.addEventListener("input", e => {
  searchQuery = e.target.value.toLowerCase().trim();
  renderProjects();
});

// --- THEME TOGGLE ---
const themeToggle = document.getElementById("theme-toggle");

// Load user's default saved theme (if any)
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  themeToggle.textContent = "☀️";
}

// When button is clicked, toggle theme
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
});

// --- INITIAL RENDER ---
renderLanguages();
renderTools();
renderProjects();