
// FUNÇÃO DE SKILLS
function renderSkillRow(name, percent, rank, subSkills) {
  const modulesHtml = subSkills.map(skill => `<span class="module-tag">${skill}</span>`).join("");

  return `
    <div class="skill-row">
      <div class="skill-identity">
        <div class="skill-name-wrapper">
          <span class="skill-name">${name}</span>
          <span class="skill-rank-label">${rank}</span>
        </div>
        <div class="skill-modules">
          ${modulesHtml}
        </div>
      </div>

      <div class="skill-progress-focus">
        <div class="progress-info">
          <span class="percent-val">${percent}%</span>
          <div class="bar-container">
            <div class="bar-fill" style="width: ${percent}%">
              <div class="bar-glitch"></div>
            </div>
          </div>
        </div>
        <div class="status-indicator">
          <span class="dot pulse"></span> MODULE_ACTIVE
        </div>
      </div>
    </div>
  `;
}

// INIT HUD
function initHUD() {

  const tabs = document.querySelectorAll(".nav-item");
  const content = document.getElementById("hud-content");

  initAgentLock();

  tabs.forEach(tab => {

    tab.addEventListener("click", () => {

      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.dataset.tab;

      content.innerHTML = renderTab(target);

      if (target === "agente") {
        initAgentLock();
      }
    });
  });
}


// SISTEMA AGENTE (SEM SENHA)
function initAgentLock() {

  const content = document.getElementById("hud-content");

  // BOTÕES
  const openBtn = document.getElementById("decode-btn");
  const lockBtn = document.getElementById("lock-btn");

  // DESBLOQUEAR PERFIL
  if (openBtn) {

    openBtn.addEventListener("click", () => {

      // TELA DE DECRYPT
      content.innerHTML = `
        <div class="decrypt-loading-container">

          <div class="decrypt-box">

            <div class="decrypt-glitch-title">
              DECRYPTING_DATA...
            </div>

            <div class="decrypt-status">
              STATUS: DISRUPTING FIREWALL
            </div>

            <div class="decrypt-bar">
              <div class="decrypt-progress"></div>
            </div>

            <div class="decrypt-percentage">
              0%
            </div>

          </div>

        </div>
      `;

      const progressBar = content.querySelector(".decrypt-progress");

      const percentText = content.querySelector(".decrypt-percentage");

      const statusText = content.querySelector(".decrypt-status");

      let progress = 0;

      const interval = setInterval(() => {

        progress += 2;

        if (progressBar) {
          progressBar.style.width = progress + "%";
        }

        if (percentText) {
          percentText.textContent = progress + "%";
        }

        // STATUS DINÂMICOS
        if (progress === 40 && statusText) {
          statusText.textContent =
            "STATUS: BYPASSING OMEGA SECURITY";
        }

        if (progress === 76 && statusText) {
          statusText.textContent =
            "STATUS: EXTRACTING REAL_IDENTITY.DAT";
        }

        // FINALIZA
        if (progress >= 100) {

          clearInterval(interval);

          agentUnlocked = true;

          document.body.classList.add("state-unlocked");

          content.innerHTML = renderTab("agente");

          initAgentLock();
        }

      }, 30);
    });
  }

  // RETRANCAR PERFIL
  if (lockBtn) {

    lockBtn.addEventListener("click", () => {

      agentUnlocked = false;

      document.body.classList.remove("state-unlocked");

      content.innerHTML = renderTab("agente");

      initAgentLock();
    });
  }
}