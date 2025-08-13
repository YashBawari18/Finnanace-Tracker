// Languages
const LANGS = {
    en: {
      uploadTitle: "Expense Data Input",
      uploadBank: "Upload Bank Statement (CSV)",
      pasteSms: "Paste SMS/WhatsApp Transaction Text",
      manualEntry: "Manual Expense Entry",
      amount: "Amount",
      description: "Description",
      date: "Date",
      add: "Add",
      dashboard: "Insights Dashboard",
      categorySplit: "Category Split",
      smartAlerts: "Smart Alerts",
      savings: "Savings Recommendations",
      goalTracking: "Goal Tracking",
      goalAmount: "Goal Amount",
      goalName: "Goal Name",
      targetDate: "Target Date",
      setGoal: "Set Goal",
      progress: "Progress"
    }
  };
  
  let currentLang = "en";
  
  // Populate language select
  const langSelect = document.getElementById("languageSelect");
  Object.keys(LANGS).forEach(code => {
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = code.toUpperCase();
    langSelect.appendChild(opt);
  });
  langSelect.addEventListener("change", e => {
    currentLang = e.target.value;
    setTexts();
  });
  
  function setTexts() {
    const t = LANGS[currentLang];
    document.getElementById("uploadTitle").textContent = t.uploadTitle;
    document.getElementById("pasteSmsLabel").textContent = t.pasteSms;
    document.getElementById("manualEntryTitle").textContent = t.manualEntry;
    document.getElementById("amountLabel").textContent = t.amount;
    document.getElementById("descriptionLabel").textContent = t.description;
    document.getElementById("dateLabel").textContent = t.date;
    document.getElementById("addManualBtn").textContent = t.add;
    document.getElementById("dashboardTitle").textContent = t.dashboard;
    document.getElementById("categorySplitTitle").textContent = t.categorySplit;
    document.getElementById("recommendationsTitle").textContent = t.savings;
    document.getElementById("goalTrackingTitle").textContent = t.goalTracking;
    document.getElementById("goalNameLabel").textContent = t.goalName;
    document.getElementById("goalAmountLabel").textContent = t.goalAmount;
    document.getElementById("goalDateLabel").textContent = t.targetDate;
    document.getElementById("setGoalBtn").textContent = t.setGoal;
    document.getElementById("progressLabel").textContent = t.progress;
  }
  setTexts();
  
  // Sample data
  let transactions = [
    { date: "2025-08-01", amount: 320, category: "Food" },
    { date: "2025-08-02", amount: 1000, category: "Travel" }
  ];
  
  // Charts
  function updateCharts() {
    const ctx1 = document.getElementById("monthlyChart").getContext("2d");
    new Chart(ctx1, {
      type: "bar",
      data: {
        labels: ["Aug 2025"],
        datasets: [{ label: "Spend", data: [1320], backgroundColor: "#6ea8ff" }]
      }
    });
  
    const ctx2 = document.getElementById("categoryChart").getContext("2d");
    new Chart(ctx2, {
      type: "pie",
      data: {
        labels: ["Food", "Travel"],
        datasets: [{ data: [320, 1000], backgroundColor: ["#6ea8ff", "#f59e0b"] }]
      }
    });
  }
  updateCharts();
  
  // Manual add
  document.getElementById("addManualBtn").addEventListener("click", () => {
    const amt = parseFloat(document.getElementById("manualAmount").value);
    const desc = document.getElementById("manualDescription").value;
    const date = document.getElementById("manualDate").value;
    if (amt && desc && date) {
      transactions.push({ amount: amt, category: "Other", date });
      updateCharts();
    }
  });
  