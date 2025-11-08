// --- DOM ELEMENT REFERENCES ---
const searchInput = document.getElementById("search"); // Search Bar
const projectList = document.getElementById("project-list"); /// Project Display
const rolesList = document.getElementById("roles-list"); // Role Filters
const tagsList = document.getElementById("tags-list"); // Tag Filters
const year = document.getElementById("year");
// The global variable "projects" is already defined in the HTML script

// --- SET STATIC VALUES ---
year.textContent = new Date().getFullYear(); // Display current year in footer

// --- SET DYNAMIC VALUES ---
let activeRole = null;
let activeTag = null;
let searchQuery = "";

// --- ROLE FILTERS ---
// // One-liner Version
// rolesList.innerHTML = `
// ${[... new Set(projects.map(p => p.roles).flat())].join(", ")}
// `
function getUniqueRoles() {
    const allRoles = projects.flatMap(p => p.roles);
    const uniqueRoles = [...new Set(allRoles)].sort();
    return uniqueRoles
}
function renderRoles() {
    const uniqueRoles = getUniqueRoles();
    const rolesOptions = ["All", ...uniqueRoles];
    const rolesButtonsHTML = rolesOptions
        .map(r => `<button data-role="${r}" 
            aria-pressed="${activeRole === r || (!activeRole && r === 'All')}">${r}</button>`)
        .join("");
    rolesList.innerHTML = rolesButtonsHTML;
}
renderRoles();

// --- TAG FILTERS ---
function getUniqueTags() {
    const allTags = projects.flatMap(p => p.tags);
    const uniqueTags = [...new Set(allTags)].sort();
    return uniqueTags
}
function renderTags() {
    const uniqueTags = getUniqueTags();
    const tagsOptions = ["All", ...uniqueTags];
    const tagsButtonsHTML = tagsOptions
        .map(t => `<button data-tag="${t}" 
            aria-pressed="${activeTag === t || (!activeTag && t == "All") }">${t}</button>`)
        .join("");
    tagsList.innerHTML = tagsButtonsHTML;
}
renderTags();

// --- RENDER PROJECTS ---
/*
    Projects need to be rendered through a function
    because it loads initially with no filter,
    then reloads multiple times later whenever a filter is applied.
*/
function renderProjects() {
    const filteredProjects = projects.filter(p =>
        (!activeRole || p.roles.includes(activeRole)) &&
        (!activeTag || p.tags.includes(activeTag)) && 
        (!searchQuery || 
            p.title.toLowerCase().includes(searchQuery) ||
            p.summary.toLowerCase().includes(searchQuery)
        )
    );
    if (filteredProjects.length === 0) {
        projectList.innerHTML = `<p class="empty">No projects match your current filters.</p>`;
        return;
    }
    projectList.innerHTML = filteredProjects.map(p => `
        <article class="project-card">
            ${p.image ? `<img src="${p.image}" alt="${p.title}" class="project-hero">` : ""}
            <h3>${p.title}</h3>
            <p>${p.summary}</p>
            <p class="meta"><strong>Tags:</strong> ${p.tags.join(", ")}</p>
            ${p.outputs ? `
            <div class="links">
                ${Object.entries(p.outputs)
                .map(([label, url]) => `<a href="${url}" target="_blank">${label}</a>`)
                .join(" | ")}
            </div>
            ` : ""}
        </article>
        `).join("");
};
renderProjects();

rolesList.addEventListener("click", e => {
    if (!e.target.matches("button")) return; // guard clause for non-button clicks i.e. whitespace
    activeRole = (e.target.dataset.role === "All") ? null : e.target.dataset.role;
    renderProjects();
    renderRoles();
});

tagsList.addEventListener("click", e => {
    if (!e.target.matches("button")) return;
    activeTag = (e.target.dataset.tag === "All") ? null : e.target.dataset.tag;
    renderProjects();
    renderTags();
})

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
