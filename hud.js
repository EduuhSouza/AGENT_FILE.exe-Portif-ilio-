// CODIGO FEITO COM APOIO DE IA

let agentUnlocked = false;

window.renderHUD = function () {
  const app = document.getElementById("app");

  if (!app) {
    console.error("App não encontrado");
    return;
  }

  app.innerHTML = `
    <div class="hud">
     <header class="system-bar">

      <div class="system-left">

        <span class="system-logo">
          HYDRA SYSTEM v3.2.1
        </span>

        <span class="system-info">
          USER: <strong>GUEST_ROOT</strong>
        </span>

        <span class="system-info">
          SECURITY LVL: <strong>ROOT</strong>
        </span>

        <span class="system-info">
          STATUS: <strong class="green">ONLINE</strong>
        </span>

      </div>

      <div class="system-actions">

        <span class="window-btn">—</span>
        <span class="window-btn close">✕</span>

      </div>

    </header>

    <!-- NAVIGATION -->
    <header class="hud-header">
      <nav class="hud-nav">

        <button class="nav-item active" data-tab="agente">
          AGENTE
        </button>

        <button class="nav-item" data-tab="sistema">
          SISTEMA
        </button>

        <button class="nav-item" data-tab="hardware">
          HARDWARE
        </button>

        <button class="nav-item" data-tab="arquivos">
          ARQUIVOS
        </button>

        <button class="nav-item" data-tab="logs">
          LOGS
        </button>

      </nav>
      </div>

     <!-- MOBILE HUD -->
<nav class="mobile-hud-nav">

    <button class="mobile-nav-item active" data-tab="agente">

      <span class="mobile-icon">
        ◉
      </span>

      <span class="mobile-label">
        AGENTE
      </span>

    </button>

    <button class="mobile-nav-item" data-tab="sistema">

      <span class="mobile-icon">
        ⌘
      </span>

      <span class="mobile-label">
        SISTEMA
      </span>

    </button>

    <button class="mobile-nav-item" data-tab="hardware">

      <span class="mobile-icon">
        ⬢
      </span>

      <span class="mobile-label">
        HARDWARE
      </span>

    </button>

    <button class="mobile-nav-item" data-tab="arquivos">

      <span class="mobile-icon">
        ▣
      </span>

      <span class="mobile-label">
        FILES
      </span>

    </button>

    <button class="mobile-nav-item" data-tab="logs">

      <span class="mobile-icon">
        ⌬
      </span>

      <span class="mobile-label">
        LOGS
      </span>

    </button>

  </nav>
    </header>

      <div class="hud-content" id="hud-content">
        ${renderTab("agente")} 
      </div>
    </div>
  `;

  initHUD();
};

function renderTab(tab) {
  switch (tab) {

// ABA AGENTE
case "agente":
  if (!agentUnlocked) {
    return `
    <section class="agent-screen">

      <!-- MAIN GRID -->
      <div class="agent-main-grid">

        <!-- LEFT PANEL -->
        <div class="agent-card">

          <div class="agent-image-box">
            <div class="corner tl"></div>
            <div class="corner tr"></div>
            <div class="corner bl"></div>
            <div class="corner br"></div>

            <img src="imgs/foto.perfil.agent.jpeg" alt="agent"class="agent-photo"/>

            <div class="photo-overlay"></div>
          </div>

          <div class="agent-barcode"></div>

          <div class="agent-id">
            ID: M15N1L25JK24
          </div>

        </div>

        <!-- CENTER PANEL -->
        <div class="agent-info-panel">

          <div class="agent-info-line">
            <span>CODINOME</span>
            <strong>CH3ETAH</strong>
          </div>

          <div class="agent-info-line">
            <span>CLASSIFICAÇÃO</span>
            <strong>ELITE TECH OPERATIVE</strong>
          </div>

          <div class="agent-info-line">
            <span>STATUS</span>

            <div class="status-wrapper">
              <strong class="red">ATIVA</strong>
              <div class="status-dot"></div>
            </div>
          </div>

          <div class="agent-info-line">
            <span>ACESSO</span>
            <strong>NÍVEL OMEGA</strong>
          </div>

        </div>

        <!-- RIGHT PANEL -->
        <div class="agent-data-panel">

          <div class="panel-top">

            <span class="panel-title">
              ARQUIVO CONFIDENCIAL
            </span>

            <span class="encrypted-status">
              ● ENCRYPTED
            </span>

          </div>

          <div class="panel-divider"></div>
          <div class="agent-text">
            Apaixonada por tecnologia, infraestrutura e tudo o que a computação pode transformar no dia a dia. Tenho conhecimentos em hardware, suporte técnico, instalação de sistemas, redes e programação web. Gosto tanto da parte física quanto da lógica da tecnologia, sempre buscando aprender algo novo e evoluir minhas habilidades

          </div>

          <div class="panel-divider"></div>
          <div class="skills-section">
            <h3>ESPECIALIDADES</h3>
            <div class="skill-grid">

              <span>LINUX</span>
              <span>HARDWARE</span>
              <span>REDES</span>
              <span>SERVERS</span>
              <span>SECURITY</span>

            </div>
          </div>

          <div class="panel-divider"></div>
          <div class="status-section">
            <h3>STATUS OPERACIONAL</h3>
            <div class="status-progress">
              <div class="progress-bar">

                ${Array(35).fill(`<span></span>`).join("")}

              </div>
              <strong>98%</strong>
            </div>
            <small>SINCRONIA: 98%</small>
          </div>
        </div>
      </div>

      <!-- ACTION -->
      <div class="agent-action">

        <button id="decode-btn" class="decode-btn">
          DESCODIFICAR
        </button>

      </div>

      <!-- MODAL -->
      <div class="decode-modal hidden" id="decode-modal">
        <div class="decode-window">
          <div class="decode-header">
            <span>SECURE_ACCESS.exe</span>
            <button id="close-modal"> X </button>

          </div>
          <div class="decode-body">

            <p class="decode-warning"> >> autenticação necessária </p>

            <div class="terminal-input">
              <span>></span>
              <input type="text" id="agent-id" placeholder="ID AGENTE"autocomplete="off"/>
            </div>

            <div class="terminal-input">
              <span>></span>
              <input type="password" id="agent-password" placeholder="SENHA"autocomplete="off"/>

            </div>

            <button id="unlock-btn">
              VALIDAR
            </button>

            <p id="error-msg" class="error-msg"></p>
          </div>
        </div>
      </div>

    </section>
    `;
  } else {
    return `
    <section class="agent-screen unlocked">

      <div class="agent-main-grid">

        <!-- FOTO -->
        <div class="agent-card">

          <div class="agent-image-box real">

            <div class="corner tl"></div>
            <div class="corner tr"></div>
            <div class="corner bl"></div>
            <div class="corner br"></div>

            <img 
              src="imgs/perfil.real.jpeg" 
              alt="Eduarda Souza"
              class="agent-photo"
            />

            <div class="photo-overlay green"></div>

          </div>

          <div class="agent-barcode green"></div>

          <div class="agent-id green">
            ACCESS_GRANTED
          </div>

        </div>

        <!-- INFO -->
        <div class="agent-info-panel">

          <div class="agent-info-line">
            <span>NOME REAL</span>
            <strong>EDUARDA SOUZA</strong>
          </div>

          <div class="agent-info-line">
            <span>IDADE</span>
            <strong>21 ANOS</strong>
          </div>

          <div class="agent-info-line">
            <span>CIDADE</span>
            <strong>PORTO ALEGRE - RS</strong>
          </div>

          <div class="agent-info-line">
            <span>SITUAÇÃO</span>
            <strong class="green">DECODIFICADO</strong>
          </div>

        </div>

        <!-- DADOS -->
        <div class="agent-data-panel real-panel">

          <div class="panel-top">

            <span class="panel-title green">
              SISTEMA DECRYPTADO
            </span>

            <span class="encrypted-status green">
              ● UNLOCKED
            </span>

          </div>

          <div class="panel-divider"></div>

          <div class="agent-text">

            Além da tecnologia, também gosto muito de design e da parte criativa/visual das coisas. Tenho quatro cachorras, uma irmã gêmea e sempre curti preto e vermelho, cores que inspiraram toda a estética do projeto.
<br>
            No tempo livre gosto de jogar e ficar com a família. Meus jogos favoritos são Resident Evil, Wolfenstein, Red Dead Redemption Online, GTA Online e Minecraft.
<br>
            Em 2024 comecei minha jornada na Programação Web Full Stack, experiência que aumentou ainda mais meu interesse por tecnologia. Hoje sigo evoluindo em hardware, suporte, manutenção e redes, sempre buscando aprender algo novo.
<br>
            Sou uma pessoa calma, focada e gosto de ambientes mais silenciosos para trabalhar.

          </div>

          <div class="panel-divider"></div>
          <div class="skills-section">
            <h3>HABILIDADES</h3>

            <div class="skill-grid">

              <span>LINUX</span>
              <span>SUPORTE</span>
              <span>WEB DEV</span>
              <span>REDES</span>
              <span>DESIGN</span>

            </div>
          </div>

          <div class="panel-divider"></div>
          <div class="status-section">
            <h3>INTEGRIDADE</h3>
            <div class="status-progress">
              <div class="progress-bar green-bar">

                ${Array(35).fill(`<span></span>`).join("")}

              </div>
              <strong class="green">100%</strong>
            </div>

            <small class="green">
              CONEXÃO ESTÁVEL
            </small>

          </div>
        </div
      </div>
      <div class="agent-action">
        <button id="lock-btn" class="decode-btn lock">
          CODIFICAR ARQUIVO
        </button>

      </div>
    </section>
    `;
  }

  // ABA SISTEMA
    case "sistema":
      return `
      <div class="tech-bg-grid"></div>
        <div class="skills-container">
          <div class="system-summary">
            <div class="summary-item"><span>STATUS:</span> <span class="green" style="color: #00FF9C;">ONLINE</span></div>
            <div class="summary-item"><span> USER ID:</span> <span> M15N1L25JK24 </span></div>
          </div>

          <div class="skills-list">
            ${renderSkillRow("SISTEMAS OPERACIONAIS", 80, "AVANÇADO", ["Windows", "Unix Architecture", "File Systems"])}
            ${renderSkillRow("LINUX DISTROS", 50, "INTERMEDIÁRIO", ["Debian/Ubuntu", "Ubunto Server", "Package Management", "Permissions"])}
            ${renderSkillRow("TERMINAL DE COMANDO", 42, "INTERMEDIÁRIO", ["Bash Scripting", "SSH/Telnet", "CMD", "Linux"])}
            ${renderSkillRow("FERRAMENTAS & UTILITÁRIOS", 60, "INTERMEDIÁRIO", ["Git/Version Control", "Monitoring"])}
          </div>
        </div>
      `;

      // ABA HARDWARE
 case "hardware":
  const hardwareAttrs = [
    { nome: "INFRA DATA CENTER", val: 4, pos: "top", desc: "Gestão de Racks e Cabeamento" },
    { nome: "MONTAGEM & SETUP", val: 9, pos: "top-right", desc: "Arquitetura de Hardware Custom" },
    { nome: "MANUTENÇÃO", val: 8, pos: "bottom-right", desc: "Diagnóstico de Nível 3" },
    { nome: "REDES & CONECTIVIDADE", val: 6, pos: "bottom-left", desc: "Topologia e Protocolos" },
    { nome: "CONFIG. LINUX", val: 7, pos: "top-left", desc: "Kernel e Otimização" }
  ];

  const attrHtml = hardwareAttrs.map(a => `
    <div class="hw-node ${a.pos}">
      <div class="node-bracket"></div>
      <div class="node-content">
        <span class="node-label">${a.nome}</span>
        <div class="node-value-bar">
          <span class="node-number">${a.val}</span>
          <div class="mini-dots">${'<span></span>'.repeat(10)}</div>
        </div>
        <span class="node-desc">${a.desc}</span>
      </div>
    </div>
  `).join("");

  return `
    <div class="hardware-tech-root">
    <div class="tech-bg-grid"></div>
      
      <div class="hw-tech-header">
        <div class="glitch-box">IDENTIFICAÇÃO: CH3ETAH_SPECIALIST_V3</div>
        <div class="status-line">SINCRONIA NEURAL: <span class="green">98.4%</span></div>
      </div>

      <div class="hw-core-wrapper">
        <div class="central-hex">
          <div class="hex-inner">
            <span class="hex-title">NÍVEL</span>
            <span class="hex-value">ROOT</span>
          </div>
          <div class="hex-scanner"></div>
        </div>
        ${attrHtml}
        
        <svg class="hw-connections" viewBox="0 0 500 500">
           <path d="M250 100 L250 200 M380 180 L300 230 M330 380 L280 280 M170 380 L220 280 M120 180 L200 230" stroke="#FF2A2A" stroke-width="0.5" fill="none" opacity="0.4"/>
        </svg>
      </div>

      <div class="hw-side-panel">
  <div class="panel-section">
    <h3>SISTEMAS CRÍTICOS</h3>

    <div class="log-entry">UPTIME: 1028h 12m</div>
    <div class="log-entry">TEMP_CPU: 42°C</div>
    <div class="log-entry">BUS_SPEED: 6000MHz</div>

    <!-- DICA ESCONDIDA -->
    <div class="log-entry glitch-hint">
      SYS_KEY_PART: <span class="glitch-text" data-text="CH3">CH3</span>
    </div>

  </div>
</div>
  `;
      // ABA 
    case "arquivos":
      return `<div class="tab-content"><h1>DRONE SYSTEM</h1></div>
      <div class="tech-bg-grid"></div>
      `;

    // ABA LOGS
case "logs":

return `
<div class="logs-root">

  <div class="logs-header">

    <div class="logs-title">
      SYSTEM LOGS // CAPACITAÇÕES
    </div>

    <div class="logs-status">
      DATABASE_SYNC: <span class="green">ONLINE</span>
    </div>

  </div>

  <div class="logs-container">

    <!-- LOG 01 -->
    <div class="log-card">

      <div class="log-top">
        <span class="log-tag">[ FULL STACK ]</span>
        <span class="log-date">2025 - 2026</span>
      </div>

      <h2>
        Programação Web Full Stack (Java)
      </h2>

      <p>
        Formação focada em desenvolvimento web,
        lógica de programação, backend com Java
        e construção de aplicações completas.
      </p>

      <div class="log-footer">
        CESMAR
      </div>

    </div>

    <!-- LOG 02 -->
    <div class="log-card">

      <div class="log-top">
        <span class="log-tag">[ HARDWARE ]</span>
        <span class="log-date">2024 - 2025</span>
      </div>

      <h2>
        Manutenção de Computadores
      </h2>

      <p>
        Capacitação voltada para diagnóstico,
        montagem, manutenção preventiva e
        infraestrutura computacional.
      </p>

      <div class="log-footer">
        Fundação O Pão dos Pobres de Santo Antônio
      </div>

    </div>

    <!-- LOG 03 -->
    <div class="log-card">

      <div class="log-top">
        <span class="log-tag">[ INFORMÁTICA ]</span>
        <span class="log-date">2025</span>
      </div>

      <h2>
        Informática Básica
      </h2>

      <p>
        Introdução ao Pacote Office,
        ferramentas digitais e fundamentos
        computacionais.
      </p>

      <div class="log-footer">
        Centro da Juventude Rubem Berta
      </div>

    </div>

    <!-- LOG 04 -->
    <div class="log-card">

      <div class="log-top">
        <span class="log-tag">[ WEB DEV ]</span>
        <span class="log-date">2023 - 2024</span>
      </div>

      <h2>
        Programação Web Full Stack
      </h2>

      <p>
        Desenvolvimento de aplicações web,
        frontend, backend e integração
        de sistemas.
      </p>

      <div class="log-footer">
        Instituto da Oportunidade Social - IOS
      </div>

    </div>

  </div>

</div>
`;

    default:
      return `<div class="tab-content"><h1>UNKNOWN_MODULE</h1></div>`;
  }
}