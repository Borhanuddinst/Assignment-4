const cards = document.querySelectorAll(".job-card");
const tabs = document.querySelectorAll(".tab");

const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const sectionCount = document.getElementById("sectionCount");
const noJobs = document.getElementById("noJobs");

function updateCounts(){
  const total = document.querySelectorAll(".job-card").length;
  const interview = document.querySelectorAll(".job-card.interview").length;
  const rejected = document.querySelectorAll(".job-card.rejected").length;

  totalCount.textContent = total;
  interviewCount.textContent = interview;
  rejectedCount.textContent = rejected;
  sectionCount.textContent = total + " jobs";
}

cards.forEach(card => {

  const interviewBtn = card.querySelector(".interview-btn");
  const rejectedBtn = card.querySelector(".rejected-btn");
  const badge = card.querySelector(".status-badge");
  const deleteBtn = card.querySelector(".delete-btn");

  interviewBtn.addEventListener("click", () => {
    card.classList.remove("rejected");
    card.classList.add("interview");
    badge.textContent = "INTERVIEW";
    badge.className = "status-badge interview";
    updateCounts();
  });

  rejectedBtn.addEventListener("click", () => {
    card.classList.remove("interview");
    card.classList.add("rejected");
    badge.textContent = "REJECTED";
    badge.className = "status-badge rejected";
    updateCounts();
  });

  deleteBtn.addEventListener("click", () => {
    card.remove();
    updateCounts();
  });

});

tabs.forEach(tab=>{
  tab.addEventListener("click", () => {

    tabs.forEach(t=>t.classList.remove("active"));
    tab.classList.add("active");

    const type = tab.dataset.tab;
    let visible = 0;

    document.querySelectorAll(".job-card").forEach(card => {

      if(type === "all"){
        card.style.display="flex";
        visible++;
      }
      else if(card.classList.contains(type)){
        card.style.display="flex";
        visible++;
      }
      else{
        card.style.display="none";
      }

    });

    if(visible === 0){
      noJobs.style.display="block";
    }else{
      noJobs.style.display="none";
    }

  });
});

