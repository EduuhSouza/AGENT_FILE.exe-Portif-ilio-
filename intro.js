// CODIGO FEITO COM APOIO DE IA
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
let terminal;

// EFEITO DE DIGITAÇÃO
async function typeText(text, speed = 10) {
  for (let i = 0; i < text.length; i++) {
    terminal.textContent += text[i];
    await delay(speed);
  }

  terminal.textContent += "\n";
}

// LOGO
async function showLogo() {

  terminal.textContent = `
 ██╗  ██╗██╗   ██╗██████╗ ██████╗  █████╗ 
 ██║  ██║╚██╗ ██╔╝██╔══██╗██╔══██╗██╔══██╗
 ███████║ ╚████╔╝ ██║  ██║██████╔╝███████║
 ██╔══██║  ╚██╔╝  ██║  ██║██╔══██╗██╔══██║
 ██║  ██║   ██║   ██████╔╝██║  ██║██║  ██║
 ╚═╝  ╚═╝   ╚═╝   ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝

      [ HYDRA VER 3.1 SYS RECOVERY ]
  `;

  await delay(2000);

  terminal.textContent = "";
}

// BOOT
async function bootSequence() {

  await typeText(">> Initializing HYDRA core...");
  await delay(400);

  await typeText(">> Loading recovery protocols...");
  await delay(300);

  await typeText(">> Mounting system partitions...");
  await delay(300);

  await typeText(">> Checking integrity... [OK]");
  await delay(300);

  await typeText(">> Re-establishing secure channels...");
  await delay(300);

  await typeText(">> Network status: RECONNECTED");
  await delay(500);

  await typeText(">> Loading operator profile...");
  await delay(400);

  await typeText(">> Synchronizing interface...");
  await delay(400);

  await typeText(">> Preparing HUD environment...");
  await delay(400);

  await typeText(">> STATUS: READY");
}

// SEQUÊNCIA DE DECRYPT AUTOMÁTICA
async function decryptionSequence() {

  await typeText("\n>> Injecting exploit...");
  await delay(250);

  await typeText(">> Overriding firewall rules...");
  await delay(250);

  await typeText(">> Accessing secure memory blocks...");
  await delay(250);

  const codes = [
    "0xA3FF21 :: buffer.inject()",
    "node.override --system-access",
    "decrypt.layer(secure_protocol)",
    "kernel.exec --full-access",
    "memory.dump(0x000FFF)"
  ];

  for (const code of codes) {

    await typeText(">> " + code, 15);
    await delay(150);

  }

  await typeText("\n>> Decrypting agent file...");
  await delay(300);

  await typeText(">> FILE: AGENT_CH3ETAH.dat");
  await delay(250);

  await typeText(">> STATUS: UNLOCKED");
  await delay(500);

  await typeText("\n>> Welcome, Operator.");
}

// INICIALIZA SISTEMA
async function startSystem() {

  terminal = document.getElementById("terminal");

  if (!terminal) {
    console.error("Terminal não encontrado.");
    return;
  }

  // EXECUTA INTRO
  await showLogo();
  await bootSequence();
  await decryptionSequence();

  // FADE OUT
  const introContainer =
    document.querySelector(".screen") || terminal;

  if (introContainer) {

    introContainer.style.transition =
      "opacity 0.6s ease";

    introContainer.style.opacity = "0";
  }

  // CARREGA HUD
  setTimeout(() => {

    if (
      introContainer &&
      introContainer.parentNode
    ) {
      introContainer.remove();
    }

    // RENDER HUD
    if (typeof window.renderHUD === "function") {

      window.renderHUD();

    } else {

      console.error(
        "renderHUD não encontrado no escopo global."
      );
    }

  }, 600);
}

// START
window.onload = startSystem;