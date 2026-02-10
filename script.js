function hideCookies() {
  document.querySelector(".cookies").style.display = "none";
}

function acceptPermissions() {
  document.querySelector(".permission-popup").style.display = "none";
  document.getElementById("cute").classList.remove("hidden");
}

function triggerHack() {
  document.body.className = "hacked";
  document.body.innerHTML = `
    <h1>⚠️ YOUR PHONE HAS BEEN HACKED ⚠️</h1>
    <p>Extracting contacts...</p>
    <p>Uploading photos...</p>
    <p>Tracking location...</p>
    <h2 id="timer">5</h2>
  `;

  let time = 5;
  const countdown = setInterval(() => {
    time--;
    document.getElementById("timer").innerText = time;

    if (time === 0) {
      clearInterval(countdown);
      revealTruth();
    }
  }, 1000);
}

function revealTruth() {
  document.body.className = "";
  document.body.innerHTML = `
    <h1 style="color:lime">وقف ✋</h1>
    <p>ولا صلاحية واحدة اتطلبت بجد.</p>
    <p>ولا بيانات اتسجلت.</p>

    <h3>إنت اتخدعت لأن:</h3>
    <ul style="list-style:none">
      <li>✔ اسم موقع بريء</li>
      <li>✔ طلب صلاحيات خطيرة</li>
      <li>✔ رسالة دينية مطمئنة</li>
      <li>✔ خوف مفاجئ</li>
    </ul>

    <p><strong>الهاكر الحقيقي هيعمل نفس السيناريو… بس بجد.</strong></p>
    <p style="color:orange">أي موقع يطلب منك بيانات أو صلاحيات = خطر 🚨</p>
  `;
}
