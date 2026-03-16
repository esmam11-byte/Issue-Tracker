let issues = []
let currentFilter = "all"

document.addEventListener("DOMContentLoaded", () => {

document.getElementById("loginBtn").addEventListener("click", login)
document.getElementById("allBtn").addEventListener("click", () => filterIssues("all"))
document.getElementById("openBtn").addEventListener("click", () => filterIssues("open"))
document.getElementById("closedBtn").addEventListener("click", () => filterIssues("closed"))
document.getElementById("searchInput").addEventListener("keyup", searchIssues)

document.getElementById("closeModal").addEventListener("click", () => {
document.getElementById("issueModal").close()
})

})

function login(){

let username = document.getElementById("username").value
let password = document.getElementById("password").value

if(username==="admin" && password==="admin123"){

document.getElementById("loginPage").classList.add("hidden")
document.getElementById("dashboard").classList.remove("hidden")

showLoading()

setTimeout(() => {
generateIssues()
renderIssues()
hideLoading()
}, 1200)

}else{
alert("Wrong username or password")
}

}

function generateIssues(){

issues = [
{"id":1,"title":"Fix navigation menu on mobile devices","desc":"The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.","status":"open","priority":"HIGH","name":"john_doe","assignee":"jane_smith","date":"2024-01-15","labels":["bug","help wanted"]},
{"id":2,"title":"Add dark mode support","desc":"Users are requesting a dark mode option. This would improve accessibility and user experience.","status":"open","priority":"MEDIUM","name":"sarah_dev","assignee":"","date":"2024-01-14","labels":["enhancement","good first issue"]},
{"id":3,"title":"Update README with installation instructions","desc":"The README file needs better installation instructions for new contributors.","status":"closed","priority":"LOW","name":"mike_docs","assignee":"sarah_dev","date":"2024-01-10","labels":["documentation"]},
{"id":4,"title":"Performance issues with large datasets","desc":"Application becomes slow when loading more than 1000 items. Need to implement pagination or virtual scrolling.","status":"open","priority":"HIGH","name":"alex_perf","assignee":"john_doe","date":"2024-01-18","labels":["bug","enhancement"]},
{"id":5,"title":"Add user authentication system","desc":"Implement JWT-based authentication with login, registration, and password reset functionality.","status":"open","priority":"HIGH","name":"security_sam","assignee":"john_doe","date":"2024-01-20","labels":["enhancement"]},
{"id":6,"title":"Fix broken image uploads","desc":"Users are unable to upload images larger than 5MB. Need to increase the file size limit or add compression.","status":"open","priority":"MEDIUM","name":"emma_ui","assignee":"","date":"2024-01-19","labels":["bug"]},
{"id":7,"title":"Improve search functionality","desc":"Add filters for advanced search including date ranges, status, and tags.","status":"open","priority":"LOW","name":"search_guru","assignee":"emma_ui","date":"2024-01-17","labels":["enhancement","good first issue"]},
{"id":8,"title":"Database migration fails on production","desc":"The latest migration script fails when running on production database. Works fine locally.","status":"open","priority":"HIGH","name":"db_admin","assignee":"alex_perf","date":"2024-01-21","labels":["bug"]},
{"id":9,"title":"Add export to PDF feature","desc":"Users want to export reports and dashboards to PDF format for sharing and printing.","status":"open","priority":"MEDIUM","name":"feature_fred","assignee":"","date":"2024-01-16","labels":["enhancement"]},
{"id":10,"title":"Update dependencies to latest versions","desc":"Several npm packages are outdated and have security vulnerabilities. Need to update and test.","status":"closed","priority":"MEDIUM","name":"security_sam","assignee":"john_doe","date":"2024-01-05","labels":["documentation"]},
{"id":11,"title":"Create API documentation","desc":"Generate comprehensive API documentation using Swagger or similar tool.","status":"open","priority":"MEDIUM","name":"mike_docs","assignee":"","date":"2024-01-22","labels":["documentation","help wanted"]},
{"id":12,"title":"Footer not displaying correctly on Safari","desc":"The footer overlaps with content on Safari browser. CSS issue with flexbox layout.","status":"open","priority":"LOW","name":"browser_bob","assignee":"emma_ui","date":"2024-01-18","labels":["bug"]},
{"id":13,"title":"Implement real-time notifications","desc":"Add WebSocket support for real-time notifications when issues are updated or commented on.","status":"open","priority":"HIGH","name":"realtime_ron","assignee":"alex_perf","date":"2024-01-23","labels":["enhancement"]},
{"id":14,"title":"Add unit tests for authentication module","desc":"Authentication module lacks proper test coverage. Need to add Jest unit tests.","status":"open","priority":"MEDIUM","name":"test_tina","assignee":"","date":"2024-01-12","labels":["documentation","good first issue"]},
{"id":15,"title":"Memory leak in dashboard component","desc":"Dashboard component causes memory leak after prolonged use. Need to investigate event listeners and cleanup.","status":"open","priority":"HIGH","name":"performance_pete","assignee":"john_doe","date":"2024-01-24","labels":["bug"]},
{"id":16,"title":"Add multi-language support","desc":"Internationalize the application to support multiple languages including Spanish, French, and German.","status":"open","priority":"LOW","name":"i18n_ivan","assignee":"","date":"2024-01-11","labels":["enhancement"]},
{"id":17,"title":"Email notifications not being sent","desc":"Users report not receiving email notifications. SMTP configuration might be incorrect.","status":"open","priority":"HIGH","name":"mail_mary","assignee":"security_sam","date":"2024-01-25","labels":["bug"]},
{"id":18,"title":"Refactor user settings page","desc":"User settings page code is messy and hard to maintain. Needs refactoring with better component structure.","status":"closed","priority":"MEDIUM","name":"clean_code_carl","assignee":"emma_ui","date":"2024-01-08","labels":["enhancement"]},
{"id":19,"title":"Add CSV export functionality","desc":"Allow users to export data tables to CSV format for analysis in spreadsheet applications.","status":"open","priority":"LOW","name":"data_dan","assignee":"","date":"2024-01-26","labels":["enhancement","good first issue"]},
{"id":20,"title":"Login page shows error on slow connections","desc":"Login page displays timeout error when internet connection is slow. Need better error handling.","status":"open","priority":"MEDIUM","name":"network_nancy","assignee":"security_sam","date":"2024-01-13","labels":["bug"]},
{"id":21,"title":"Implement two-factor authentication","desc":"Add 2FA support using TOTP for enhanced security on user accounts.","status":"open","priority":"HIGH","name":"security_sam","assignee":"","date":"2024-01-27","labels":["enhancement"]},
{"id":22,"title":"Fix chart rendering issues","desc":"Charts don't render correctly when window is resized. Need to add responsive chart logic.","status":"open","priority":"MEDIUM","name":"chart_charlie","assignee":"emma_ui","date":"2024-01-14","labels":["bug"]},
{"id":23,"title":"Add drag and drop file upload","desc":"Implement drag and drop functionality for file uploads to improve user experience.","status":"open","priority":"LOW","name":"ux_uma","assignee":"","date":"2024-01-28","labels":["enhancement","good first issue"]},
{"id":24,"title":"API rate limiting not working","desc":"Rate limiting middleware is not properly throttling API requests. Need to debug and fix.","status":"open","priority":"HIGH","name":"api_adam","assignee":"alex_perf","date":"2024-01-29","labels":["bug"]},
{"id":25,"title":"Create onboarding tutorial","desc":"New users need a guided tutorial to understand key features. Create interactive onboarding flow.","status":"open","priority":"MEDIUM","name":"tutorial_tom","assignee":"mike_docs","date":"2024-01-15","labels":["documentation","enhancement"]},
{"id":26,"title":"Session timeout too aggressive","desc":"Users are being logged out too frequently. Need to adjust session timeout settings.","status":"closed","priority":"MEDIUM","name":"session_steve","assignee":"security_sam","date":"2024-01-09","labels":["bug"]},
{"id":27,"title":"Add keyboard shortcuts","desc":"Implement keyboard shortcuts for common actions to improve productivity for power users.","status":"open","priority":"LOW","name":"shortcuts_shawn","assignee":"","date":"2024-01-30","labels":["enhancement"]},
{"id":28,"title":"Profile picture upload fails","desc":"Users cannot upload profile pictures. Getting 413 error (payload too large).","status":"open","priority":"MEDIUM","name":"avatar_alice","assignee":"john_doe","date":"2024-01-16","labels":["bug"]},
{"id":29,"title":"Implement caching strategy","desc":"Add Redis caching for frequently accessed data to improve performance.","status":"open","priority":"HIGH","name":"cache_chris","assignee":"alex_perf","date":"2024-01-31","labels":["enhancement"]},
{"id":30,"title":"Fix timezone display issues","desc":"Timestamps are showing in UTC instead of user's local timezone. Need to add timezone conversion.","status":"open","priority":"LOW","name":"time_tony","assignee":"","date":"2024-01-17","labels":["bug","good first issue"]},
{"id":31,"title":"Add webhook support","desc":"Implement webhooks to allow external services to receive notifications on events.","status":"open","priority":"MEDIUM","name":"webhook_wendy","assignee":"","date":"2024-02-01","labels":["enhancement"]},
{"id":32,"title":"Accessibility issues with form labels","desc":"Screen readers cannot properly identify form fields. Need to add proper ARIA labels.","status":"open","priority":"MEDIUM","name":"a11y_andy","assignee":"emma_ui","date":"2024-01-19","labels":["bug","help wanted"]},
{"id":33,"title":"Add bulk operations support","desc":"Allow users to perform bulk actions like delete, update status on multiple items at once.","status":"open","priority":"LOW","name":"bulk_barry","assignee":"","date":"2024-02-02","labels":["enhancement"]},
{"id":34,"title":"Broken links in documentation","desc":"Several links in the documentation are broken or pointing to outdated pages.","status":"closed","priority":"LOW","name":"link_larry","assignee":"mike_docs","date":"2024-01-07","labels":["documentation"]},
{"id":35,"title":"Add comment system for issues","desc":"Implement a commenting system so users can discuss and collaborate on issues.","status":"open","priority":"HIGH","name":"comment_cathy","assignee":"john_doe","date":"2024-02-03","labels":["enhancement"]},
{"id":36,"title":"Password reset email not received","desc":"Users are not receiving password reset emails. Email service might be down or misconfigured.","status":"open","priority":"HIGH","name":"reset_rita","assignee":"security_sam","date":"2024-01-20","labels":["bug"]},
{"id":37,"title":"Improve mobile responsiveness","desc":"Several pages are not mobile-friendly. Need to improve responsive design across the application.","status":"open","priority":"MEDIUM","name":"mobile_mike","assignee":"emma_ui","date":"2024-02-04","labels":["bug","help wanted"]},
{"id":38,"title":"Add version control for documents","desc":"Implement version history so users can track changes and revert to previous versions.","status":"open","priority":"MEDIUM","name":"version_vince","assignee":"","date":"2024-01-21","labels":["enhancement"]},
{"id":39,"title":"Fix sorting on data tables","desc":"Column sorting doesn't work correctly for numeric and date columns.","status":"open","priority":"LOW","name":"sort_sally","assignee":"","date":"2024-02-05","labels":["bug","good first issue"]},
{"id":40,"title":"Implement activity logging","desc":"Add comprehensive activity logs for audit trail and debugging purposes.","status":"open","priority":"MEDIUM","name":"logger_leo","assignee":"alex_perf","date":"2024-01-22","labels":["enhancement"]},
{"id":41,"title":"Dashboard widgets not loading","desc":"Some dashboard widgets fail to load intermittently. Getting CORS errors in console.","status":"open","priority":"HIGH","name":"widget_will","assignee":"john_doe","date":"2024-02-06","labels":["bug"]},
{"id":42,"title":"Add role-based access control","desc":"Implement RBAC system with different permission levels for users, moderators, and admins.","status":"open","priority":"HIGH","name":"rbac_rachel","assignee":"security_sam","date":"2024-01-23","labels":["enhancement"]},
{"id":43,"title":"Create docker deployment guide","desc":"Write comprehensive guide for deploying the application using Docker and docker-compose.","status":"closed","priority":"MEDIUM","name":"docker_dave","assignee":"mike_docs","date":"2024-01-06","labels":["documentation"]},
{"id":44,"title":"Add favorites/bookmarks feature","desc":"Allow users to bookmark frequently accessed pages or items for quick access.","status":"open","priority":"LOW","name":"fav_frank","assignee":"","date":"2024-02-07","labels":["enhancement","good first issue"]},
{"id":45,"title":"Search results pagination broken","desc":"Pagination controls don't work on search results page. Only first page is accessible.","status":"open","priority":"MEDIUM","name":"page_paul","assignee":"emma_ui","date":"2024-01-24","labels":["bug"]},
{"id":46,"title":"Implement data backup system","desc":"Set up automated daily backups of database with retention policy and restore procedures.","status":"open","priority":"HIGH","name":"backup_bruce","assignee":"db_admin","date":"2024-02-08","labels":["enhancement"]},
{"id":47,"title":"Add code syntax highlighting","desc":"Implement syntax highlighting for code blocks in comments and descriptions.","status":"open","priority":"LOW","name":"syntax_simon","assignee":"","date":"2024-01-25","labels":["enhancement","good first issue"]},
{"id":48,"title":"Browser console shows warnings","desc":"Multiple deprecation warnings appearing in browser console. Need to update deprecated code.","status":"open","priority":"LOW","name":"console_carol","assignee":"","date":"2024-02-09","labels":["bug"]},
{"id":49,"title":"Add Google Analytics integration","desc":"Integrate Google Analytics to track user behavior and improve product decisions.","status":"open","priority":"MEDIUM","name":"analytics_anna","assignee":"john_doe","date":"2024-01-26","labels":["enhancement"]},
{"id":50,"title":"Create automated testing pipeline","desc":"Set up CI/CD pipeline with automated tests running on every commit and pull request.","status":"open","priority":"HIGH","name":"ci_cd_cindy","assignee":"test_tina","date":"2024-02-10","labels":["enhancement","help wanted"]}
]

}

function renderIssues(){

let container=document.getElementById("issuesContainer")
container.innerHTML=""

let filtered=issues.filter(issue=>{
if(currentFilter==="all") return true
return issue.status===currentFilter
})

document.getElementById("issueCount").innerText=filtered.length

filtered.forEach(issue=>{

let icon = issue.status==="open"
? "assets/Open-Status.png"
: "assets/Closed-Status.png"

let border = issue.status==="open"
? "border-t-4 border-green-500"
: "border-t-4 border-purple-500"

let priorityColor =
issue.priority==="HIGH"
? "bg-red-100 text-red-500"
: issue.priority==="MEDIUM"
? "bg-yellow-100 text-yellow-600"
: "bg-gray-200 text-gray-500"

let labels=""

issue.labels.forEach(label=>{
if(label==="bug"){
labels+=`<span class="text-xs bg-red-100 text-red-500 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
🐞 BUG
</span>`
}

if(label==="help wanted"){
labels+=`<span class="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
⚠ HELP WANTED
</span>`
}

if(label==="enhancement"){
labels+=`<span class="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full font-semibold">✧ ENHANCEMENT</span>`
}

if(label==="good first issue"){
labels+=`<span class="badge rounded-full bg-gray-200 text-gray-600 border border-gray-300 px-3 py-2 text-xs font-semibold">✧ GOOD FIRST ISSUE</span>`
}
if(label==="documentation"){
labels+=`<span class="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
DOCUMENTATION
</span>`
}

})

let card=document.createElement("div")

card.className=`bg-base-100 rounded-xl shadow hover:shadow-lg transition cursor-pointer ${border}`

card.innerHTML=`

<div class="p-4">

<div class="flex justify-between items-center mb-2">

<img src="${icon}" class="w-6">

<span class="px-3 py-1 text-xs font-semibold rounded-full ${priorityColor}">
${issue.priority}
</span>

</div>

<h2 class="font-semibold text-sm mb-1">
${issue.title}
</h2>

<p class="text-xs text-gray-500 mb-3">
${issue.desc}
</p>

<div class="flex gap-2 mb-3 flex-wrap">
${labels}
</div>

<hr class="mb-2">

<p class="text-xs text-gray-500">
#${issue.id} by ${issue.name}
</p>

<p class="text-xs text-gray-400">
${issue.date}
</p>

</div>
`

card.addEventListener("click",()=>openModal(issue))

container.appendChild(card)

})

}

function filterIssues(type){

currentFilter=type

document.getElementById("allBtn").classList.remove("btn-primary")
document.getElementById("openBtn").classList.remove("btn-primary")
document.getElementById("closedBtn").classList.remove("btn-primary")

document.getElementById(type+"Btn").classList.add("btn-primary")

renderIssues()

}

function searchIssues(){

let text = document.getElementById("searchInput").value.toLowerCase()

let results = issues.filter(issue =>
issue.title.toLowerCase().includes(text) ||
issue.desc.toLowerCase().includes(text)
)

let container = document.getElementById("issuesContainer")
container.innerHTML=""

document.getElementById("issueCount").innerText = results.length


results.forEach(issue=>{

let icon = issue.status==="open"
? "assets/Open-Status.png"
: "assets/Closed-Status.png"

let border = issue.status==="open"
? "border-t-4 border-green-500"
: "border-t-4 border-purple-500"

let priorityColor =
issue.priority==="HIGH"
? "bg-red-500 text-white"
: issue.priority==="MEDIUM"
? "bg-yellow-400 text-black"
: "bg-gray-400 text-white"

let labels=""

issue.labels.forEach(label=>{

if(label==="bug"){
labels+=`<span class="bg-red-100 text-red-600 px-3 py-1 text-xs rounded-full font-semibold">🐞 BUG</span>`
}

if(label==="help wanted"){
labels+=`<span class="bg-orange-100 text-orange-600 px-3 py-1 text-xs rounded-full font-semibold">⚠ HELP WANTED</span>`
}

if(label==="enhancement"){
labels+=`<span class="bg-green-100 text-green-600 px-3 py-1 text-xs rounded-full font-semibold">✨ ENHANCEMENT</span>`
}

if(label==="good first issue"){
labels+=`<span class="badge rounded-full bg-gray-200 text-gray-600 border border-gray-300 px-3 py-2 text-xs font-semibold">✧ GOOD FIRST ISSUE</span>`
}
if(label==="documentation"){
labels+=`<span class="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
DOCUMENTATION
</span>`
}
})

let card=document.createElement("div")

card.className=`bg-base-100 rounded-xl shadow hover:shadow-lg transition cursor-pointer ${border}`

card.innerHTML=`

<div class="p-4">

<div class="flex justify-between items-center mb-2">

<img src="${icon}" class="w-6">

<span class="px-3 py-1 text-xs rounded-full ${priorityColor}">
${issue.priority}
</span>

</div>

<h2 class="font-semibold text-sm mb-1">
${issue.title}
</h2>

<p class="text-xs text-gray-500 mb-3">
${issue.desc}
</p>

<div class="flex gap-2 mb-3 flex-wrap">
${labels}
</div>

<hr class="mb-2">

<p class="text-xs text-gray-500">
#${issue.id} by ${issue.name}
</p>

<p class="text-xs text-gray-400">
${issue.date}
</p>

</div>
`

card.addEventListener("click",()=>openModal(issue))

container.appendChild(card)

})

}

function openModal(issue){

let statusClass
let statusText

if(issue.status==="open"){
statusClass = "bg-green-600 text-white"
statusText = "Opened"
}else{
statusClass = "bg-purple-600 text-white"
statusText = "Closed"
}

document.getElementById("modalStatus").className =
`px-4 py-1 text-sm rounded-full font-semibold ${statusClass}`

document.getElementById("modalStatus").innerText = statusText

document.getElementById("modalMeta").innerText=`Opened by ${issue.name} • ${issue.date}`

document.getElementById("modalTitle").innerText=issue.title
document.getElementById("modalDesc").innerText=issue.desc
document.getElementById("modalAssignee").innerText=issue.assignee || "Unassigned"

let priorityClass =
issue.priority==="HIGH"
? "bg-red-500 text-white"
: issue.priority==="MEDIUM"
? "bg-yellow-400 text-black"
: "bg-gray-400 text-white"

document.getElementById("modalPriority").className=`px-3 py-1 rounded-full text-xs font-semibold ${priorityClass}`
document.getElementById("modalPriority").innerText=issue.priority

let labels=""

issue.labels.forEach(label=>{
if(label==="bug"){
labels+=`<span class="text-xs bg-red-100 text-red-500 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
🐞 BUG
</span>`
}

if(label==="help wanted"){
labels+=`<span class="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
⚠ HELP WANTED
</span>`
}

if(label==="enhancement"){
labels+=`<span class="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full font-semibold">✧ ENHANCEMENT</span>`
}

if(label==="good first issue"){
labels+=`<span class="badge rounded-full bg-gray-200 text-gray-600 border border-gray-300 px-3 py-2 text-xs font-semibold">✧ GOOD FIRST ISSUE</span>`
}
if(label==="documentation"){
labels+=`<span class="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
DOCUMENTATION
</span>`
}
})

document.getElementById("modalLabels").innerHTML=labels

document.getElementById("issueModal").showModal()

}
function showLoading(){

document.getElementById("loadingSpinner").classList.remove("hidden")
document.getElementById("issuesContainer").classList.add("hidden")

}

function hideLoading(){

document.getElementById("loadingSpinner").classList.add("hidden")
document.getElementById("issuesContainer").classList.remove("hidden")

}