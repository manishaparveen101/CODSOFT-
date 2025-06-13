const searchInput = document.getElementById('searchInput');
const jobList = document.getElementById('jobList');
const jobCards = jobList.getElementsByClassName('job-card');

searchInput.addEventListener('input', function () {
  const keyword = this.value.toLowerCase();
  for (let job of jobCards) {
    const title = job.querySelector('h2').innerText.toLowerCase();
    const company = job.querySelector('p').innerText.toLowerCase();
    if (title.includes(keyword) || company.includes(keyword)) {
      job.style.display = "block";
    } else {
      job.style.display = "none";
    }
  }
});
