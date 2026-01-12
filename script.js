// document.addEventListener("DOMContentLoaded", () => {
//   const toggleBtn = document.getElementById("toggleBtn");
//   const leftPanel = document.getElementById("leftPanel");

//   if (!toggleBtn || !leftPanel) return;

//   toggleBtn.addEventListener("click", () => {
//     leftPanel.classList.toggle("expanded");
//     leftPanel.classList.toggle("collapsed");
//   });
// });

// function addSubThread() {
//   const container = document.getElementById("subThreads");

//   const div = document.createElement("div");
//   div.className = "sub-thread";

//   div.innerHTML = `
//     <textarea placeholder="Sub thread"></textarea>
//     <textarea placeholder="Sub Interpretation"></textarea>
//     <div class="actions">
//       <select><option>Select Categ</option></select>
//       <select><option>Select Process</option></select>
//     </div>
//   `;

//   container.appendChild(div);
// }

// function toggle4SA() {
//   document.getElementById("fourSA").classList.toggle("hidden");
// }
// document.addEventListener("DOMContentLoaded", () => {
//   const noticeBoard = document.getElementById("noticeBoard");

//   if (!noticeBoard) return;

//   noticeBoard.addEventListener("click", () => {
//     noticeBoard.classList.toggle("expanded");
//     noticeBoard.classList.toggle("collapsed");
//   });
// });




/* =========================================
   DOM READY
========================================= */
document.addEventListener("DOMContentLoaded", () => {

  /* -------- LEFT PANEL TOGGLE -------- */
  const toggleBtn = document.getElementById("toggleBtn");
  const leftPanel = document.getElementById("leftPanel");

  if (toggleBtn && leftPanel) {
    toggleBtn.addEventListener("click", () => {
      leftPanel.classList.toggle("expanded");
      leftPanel.classList.toggle("collapsed");
    });
  }

  /* -------- NOTICE BOARD TOGGLE -------- */
  const noticeBoard = document.getElementById("noticeBoard");
  if (noticeBoard) {
    noticeBoard.addEventListener("click", () => {
      noticeBoard.classList.toggle("expanded");
      noticeBoard.classList.toggle("collapsed");
    });
  }

  /* -------- RENDER VIDEO ASSET FROM JSON -------- */
  renderVideoAsset();

  /* -------- SUBMIT TASK -------- */
  const submitBtn = document.getElementById("submitTaskBtn");
  if (submitBtn) {
    submitBtn.addEventListener("click", submitTask);
  }
});

/* =========================================
   LOCAL JSON (TASK-2)
========================================= */

const projectJSON = {
  taskID: "TASK_001",
  assets: [
    {
      assetID: "A1",
      assetTitle: "Technical Project Management",
      assetDescription:
        "Story of Alignment Scope of Agility Specific Accountable Staggering Approach",
      assetContent:
        "https://www.youtube.com/embed/gdO3sGd-Shg"
    }
  ]
};

/* =========================================
   RENDER VIDEO INTO EXISTING CARD
========================================= */

function renderVideoAsset() {
  const asset = projectJSON.assets[0];

  // Update card header
  document.querySelector(".card-header").innerText = asset.assetTitle;

  // Update description
  document.querySelector(".card-body .desc").innerHTML =
    `<b>Description:</b> ${asset.assetDescription}`;

  // Update video iframe
  const iframe = document.querySelector(".video-box iframe");
  iframe.src = asset.assetContent;
}

/* =========================================
   THREAD BUILD
========================================= */
function addSubThread() {
  const container = document.getElementById("subThreads");

  const div = document.createElement("div");
  div.className = "sub-thread";

  div.innerHTML = `
    <textarea placeholder="Sub thread"></textarea>
    <textarea placeholder="Sub Interpretation"></textarea>
    <div class="actions">
      <select><option>Select Categ</option></select>
      <select><option>Select Process</option></select>
    </div>
  `;

  container.appendChild(div);
}

/* =========================================
   4SA TOGGLE
========================================= */
function toggle4SA() {
  document.getElementById("fourSA").classList.toggle("hidden");
}

/* =========================================
   SUBMIT TASK (VALIDATED)
========================================= */
function submitTask() {

  const subThreads = [];
  let invalid = false;

  document.querySelectorAll("#subThreads .sub-thread").forEach(st => {
    const t = st.querySelectorAll("textarea");
    if (!t[0].value.trim() || !t[1].value.trim()) {
      invalid = true;
    }
    subThreads.push({
      subThread: t[0].value,
      interpretation: t[1].value
    });
  });

  const summary = document.querySelector(".summary").value.trim();
  const title = document.querySelector(".input").value.trim();
  const content = document.querySelector(".editor").value.trim();

  if (invalid || !summary || !title || !content) {
    alert("Please complete all fields before submitting.");
    return;
  }

  const payload = {
    taskID: projectJSON.taskID,
    response: {
      threadBuild: subThreads,
      summary,
      article: { title, content }
    }
  };

  console.log("✅ Submitted Payload:", payload);
  alert("Task submitted successfully!");
}
function toggleAccordion(header) {
  const content = header.nextElementSibling;

  header.classList.toggle("active");
  content.classList.toggle("show");
}
