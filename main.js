document.querySelector('#app').innerHTML = `
  <div class="header">
    <div class="brand"><i class="fa-solid fa-brain"></i> Smart Decision Helper</div>
  </div>
  <div class="hero">
    <h1>Make Smarter Decisions</h1>
    <p>Compare multiple options side by side, see live compatibility scores, and get a clear best-choice recommendation. Pick a helper below to get started.</p>
    <div class="cards">
      <a href="/laptop-helper.html" class="tool-card">
        <div class="icon laptop"><i class="fa-solid fa-laptop"></i></div>
        <h2>Laptop Selection Helper</h2>
        <p>Compare laptops by budget, performance, RAM, battery and storage to find your best match.</p>
        <span class="go">Open Helper <i class="fa-solid fa-arrow-right"></i></span>
      </a>
      <a href="/college-helper.html" class="tool-card">
        <div class="icon college"><i class="fa-solid fa-graduation-cap"></i></div>
        <h2>College Selection Helper</h2>
        <p>Compare colleges by fees, placements, courses, infrastructure and faculty ratings.</p>
        <span class="go">Open Helper <i class="fa-solid fa-arrow-right"></i></span>
      </a>
      <a href="/job-helper.html" class="tool-card">
        <div class="icon job"><i class="fa-solid fa-briefcase"></i></div>
        <h2>Job Offer Comparison</h2>
        <p>Compare job offers by salary, career growth, work-life balance, company rating and work mode.</p>
        <span class="go">Open Helper <i class="fa-solid fa-arrow-right"></i></span>
      </a>
    </div>
  </div>
  <div class="footer">
    Smart Decision Helper &middot; Built with HTML, CSS &amp; Vanilla JavaScript &middot; Sample data for demonstration.
  </div>
`
