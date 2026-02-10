function hideCookies() {
  document.querySelector(".cookies").style.display = "none";
}

function acceptPermissions() {
  document.getElementById("permissions").classList.add("hidden");
  document.getElementById("data").classList.remove("hidden");
}

function triggerHack() {
  document.body.className = "hacked";
  document.body.innerHTML = `
    <div class="spy-center">
      <div class="spy-box">
        <h1>DEVICE COMPROMISED</h1>
        <div id="log"></div>
        <p style="color:orange; margin-top:15px">Do not close this page</p>
      </div>
    </div>
  `;

  const logs = [
    "[ SYSTEM ] Initializing background service...",
    "[ SYSTEM ] Process ID: 8821",
    "[ SYSTEM ] Session status: ACTIVE",
    "[ SYSTEM ] Device fingerprint collected",
    "[ INFO ] Reading stored metadata...",
    "[ INFO ] Contacts database: ACCESS GRANTED",
    "[ INFO ] Media storage: ACCESS GRANTED",
    "[ INFO ] Clipboard buffer synced",
    "[ WARNING ] Encryption status: DISABLED",
    "[ WARNING ] Remote access channel established",
    "[ WARNING ] User interaction no longer required"
  ];

  let index = 0;
  const logDiv = document.getElementById("log");

  const interval = setInterval(() => {
    if (index < logs.length) {
      const p = document.createElement("p");
      p.className = "spy-line";
      p.textContent = logs[index];
      logDiv.appendChild(p);
      index++;
    } else {
      clearInterval(interval);
      setTimeout(revealTruth, 2000);
    }
  }, 700);
}

function revealTruth() {
  document.body.className = "cute-theme";
  document.body.innerHTML = `
    <div class="wrapper">
      <div class="card">
        <h1 style="color:#4caf50">خد بالك ✋</h1>

        <p>ولا سطر من اللي شوفته كان حقيقي.</p>
        <p>ولا صلاحية اتطلبت بجد.</p>
        <p>ولا بيانات اتسجلت.</p>

        <h3>بس…</h3>
        <p>كل سطر شوفته <strong>ممكن يحصل بجد</strong><br>
        لو الموقع كان حقيقي.</p>

        <ul style="list-style:none; padding:0">
          <li>🎁 اسم بريء وشكل كيوت</li>
          <li>🙏 رسالة تطمين</li>
          <li>⚠️ طلب صلاحيات خطيرة</li>
          <li>🧠 كلام تقني يخوّف</li>
        </ul>

        <p style="color:#e53935">
          أي موقع يطلب بيانات أو صلاحيات بدون سبب واضح = خطر 🚨
        </p>
      </div>
    </div>
  `;
}
