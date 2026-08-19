(function () {
  "use strict";

  const startInput = document.getElementById("startTime");
  const endInput = document.getElementById("endTime");
  const swapBtn = document.getElementById("swapBtn");
  const nowStartBtn = document.getElementById("nowStartBtn");
  const nowEndBtn = document.getElementById("nowEndBtn");
  const overnightToggle = document.getElementById("overnightToggle");
  const flipboard = document.getElementById("flipboard");
  const overnightNote = document.getElementById("overnightNote");
  const statMinutes = document.getElementById("statMinutes");
  const statSeconds = document.getElementById("statSeconds");
  const statDecimal = document.getElementById("statDecimal");
  const copyBtn = document.getElementById("copyBtn");
  const shareBtn = document.getElementById("shareBtn");
  const copyFeedback = document.getElementById("copyFeedback");

  let lastRenderedHours = null;
  let lastRenderedMinutes = null;

  function toMinutes(value) {
    // value like "08:35"
    const [h, m] = value.split(":").map(Number);
    return h * 60 + m;
  }

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function calculate() {
    if (!startInput.value || !endInput.value) return null;

    const startMin = toMinutes(startInput.value);
    const endMin = toMinutes(endInput.value);

    let diff = endMin - startMin;
    let crossedMidnight = false;

    if (diff < 0 || overnightToggle.checked) {
      diff += 24 * 60;
      crossedMidnight = true;
    }

    // if overnight is forced but times are equal, treat as full 24h
    if (overnightToggle.checked && diff === 0) {
      diff = 24 * 60;
    }

    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    const totalMinutes = diff;
    const totalSeconds = diff * 60;
    const decimalHours = (diff / 60).toFixed(2);

    return { hours, minutes, totalMinutes, totalSeconds, decimalHours, crossedMidnight };
  }

  function renderFlipGroup(value, unit, isNew) {
    const group = document.createElement("div");
    group.className = "flip-group";

    const val = document.createElement("span");
    val.className = "flip-value";
    val.textContent = value;
    if (isNew) {
      // restart animation
      requestAnimationFrame(() => {
        val.classList.add("updating");
      });
    }

    const u = document.createElement("span");
    u.className = "flip-unit";
    u.textContent = unit;

    group.appendChild(val);
    group.appendChild(u);
    return group;
  }

  function render() {
    const result = calculate();
    if (!result) return;

    const hoursChanged = result.hours !== lastRenderedHours;
    const minutesChanged = result.minutes !== lastRenderedMinutes;

    flipboard.innerHTML = "";
    flipboard.appendChild(renderFlipGroup(result.hours, result.hours === 1 ? "hour" : "hours", hoursChanged));
    flipboard.appendChild(renderFlipGroup(pad(result.minutes), result.minutes === 1 ? "minute" : "minutes", minutesChanged));

    lastRenderedHours = result.hours;
    lastRenderedMinutes = result.minutes;

    statMinutes.textContent = result.totalMinutes.toLocaleString();
    statSeconds.textContent = result.totalSeconds.toLocaleString();
    statDecimal.textContent = result.decimalHours;

    overnightNote.hidden = !result.crossedMidnight;

    updateUrl();
  }

  function updateUrl() {
    const params = new URLSearchParams();
    params.set("start", startInput.value);
    params.set("end", endInput.value);
    if (overnightToggle.checked) params.set("overnight", "1");
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }

  function loadFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const start = params.get("start");
    const end = params.get("end");
    const overnight = params.get("overnight");
    if (start) startInput.value = start;
    if (end) endInput.value = end;
    if (overnight === "1") overnightToggle.checked = true;
  }

  function setNow(input) {
    const now = new Date();
    input.value = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
    render();
  }

  function swap() {
    const temp = startInput.value;
    startInput.value = endInput.value;
    endInput.value = temp;
    render();
  }

  function flashFeedback(message) {
    copyFeedback.textContent = message;
    setTimeout(() => {
      copyFeedback.textContent = "";
    }, 2200);
  }

  async function copyToClipboard(text, successMessage) {
    try {
      await navigator.clipboard.writeText(text);
      flashFeedback(successMessage);
    } catch (err) {
      flashFeedback("Couldn't copy — try selecting manually.");
    }
  }

  copyBtn.addEventListener("click", () => {
    const result = calculate();
    if (!result) return;
    const text = `${result.hours}h ${pad(result.minutes)}m (${startInput.value} to ${endInput.value})`;
    copyToClipboard(text, "Copied to clipboard.");
  });

  shareBtn.addEventListener("click", () => {
    copyToClipboard(window.location.href, "Link copied.");
  });

  startInput.addEventListener("input", render);
  endInput.addEventListener("input", render);
  overnightToggle.addEventListener("change", render);
  swapBtn.addEventListener("click", swap);
  nowStartBtn.addEventListener("click", () => setNow(startInput));
  nowEndBtn.addEventListener("click", () => setNow(endInput));

  loadFromUrl();
  render();

  // ---------------------------------------------------------------
  // Two-dates calculator (accounts for DST shifts and leap years)
  // ---------------------------------------------------------------

  const tabTimeBtn = document.getElementById("tabTimeBtn");
  const tabDateBtn = document.getElementById("tabDateBtn");
  const panelTime = document.getElementById("panel-time");
  const panelDate = document.getElementById("panel-date");

  const startDateInput = document.getElementById("startDate");
  const endDateInput = document.getElementById("endDate");
  const swapDateBtn = document.getElementById("swapDateBtn");
  const nowStartDateBtn = document.getElementById("nowStartDateBtn");
  const nowEndDateBtn = document.getElementById("nowEndDateBtn");
  const flipboardDate = document.getElementById("flipboardDate");
  const calendarLine = document.getElementById("calendarLine");
  const dstNote = document.getElementById("dstNote");
  const leapNote = document.getElementById("leapNote");
  const dateErrorNote = document.getElementById("dateErrorNote");
  const statWeeks = document.getElementById("statWeeks");
  const statTotalHours = document.getElementById("statTotalHours");
  const statTotalMinutesDate = document.getElementById("statTotalMinutesDate");
  const copyDateBtn = document.getElementById("copyDateBtn");
  const shareDateBtn = document.getElementById("shareDateBtn");
  const copyFeedbackDate = document.getElementById("copyFeedbackDate");

  let lastRenderedDays = null;
  let lastRenderedDateHours = null;

  function switchTab(which) {
    const showDate = which === "date";
    panelTime.hidden = showDate;
    panelDate.hidden = !showDate;
    tabTimeBtn.classList.toggle("active", !showDate);
    tabDateBtn.classList.toggle("active", showDate);
    tabTimeBtn.setAttribute("aria-selected", String(!showDate));
    tabDateBtn.setAttribute("aria-selected", String(showDate));
    if (showDate) renderDate();
  }

  tabTimeBtn.addEventListener("click", () => switchTab("time"));
  tabDateBtn.addEventListener("click", () => switchTab("date"));

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  // Real elapsed time in ms — since these are local Date objects, this
  // automatically accounts for DST transitions (a "23-hour" or "25-hour"
  // day) because the browser applies local timezone rules when converting
  // to a UTC timestamp.
  function elapsedBreakdown(start, end) {
    const diffMs = end.getTime() - start.getTime();
    const totalMinutes = Math.round(diffMs / 60000);
    const totalHours = totalMinutes / 60;
    const days = Math.floor(totalMinutes / 1440);
    const remMinutesAfterDays = totalMinutes - days * 1440;
    const hours = Math.floor(remMinutesAfterDays / 60);
    const minutes = remMinutesAfterDays % 60;
    const weeks = (totalMinutes / 60 / 24 / 7).toFixed(1);
    return { diffMs, totalMinutes, totalHours, days, hours, minutes, weeks };
  }

  // Calendar-style breakdown (years / months / days), leap-year safe
  // because it borrows from the actual number of days in the preceding
  // calendar month rather than assuming 30.
  function calendarDiff(start, end) {
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonthLastDay = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
      days += prevMonthLastDay;
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    return { years, months, days };
  }

  function leapDaysInRange(start, end) {
    let count = 0;
    for (let y = start.getFullYear(); y <= end.getFullYear(); y++) {
      if (!isLeapYear(y)) continue;
      const feb29 = new Date(y, 1, 29);
      if (feb29.getMonth() !== 1) continue; // safety: shouldn't happen if leap
      if (feb29 >= start && feb29 <= end) {
        count++;
      }
    }
    return count;
  }

  function calculateDate() {
    if (!startDateInput.value || !endDateInput.value) return null;
    const start = new Date(startDateInput.value);
    const end = new Date(endDateInput.value);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) return null;

    const negative = end.getTime() < start.getTime();
    const effStart = negative ? end : start;
    const effEnd = negative ? start : end;

    const elapsed = elapsedBreakdown(effStart, effEnd);
    const cal = calendarDiff(effStart, effEnd);
    const crossesDst = effStart.getTimezoneOffset() !== effEnd.getTimezoneOffset();
    const leapDays = leapDaysInRange(effStart, effEnd);

    return { ...elapsed, cal, crossesDst, leapDays, negative };
  }

  function calendarSentence(cal) {
    const parts = [];
    if (cal.years) parts.push(`${cal.years} ${cal.years === 1 ? "year" : "years"}`);
    if (cal.months) parts.push(`${cal.months} ${cal.months === 1 ? "month" : "months"}`);
    parts.push(`${cal.days} ${cal.days === 1 ? "day" : "days"}`);
    return parts.join(", ");
  }

  function renderDate() {
    const result = calculateDate();
    if (!result) {
      dateErrorNote.hidden = true;
      return;
    }

    if (result.negative) {
      dateErrorNote.hidden = false;
      dateErrorNote.textContent = "Start was after end, so they've been read in swapped order.";
      dateErrorNote.classList.remove("error");
    } else {
      dateErrorNote.hidden = true;
    }

    const daysChanged = result.days !== lastRenderedDays;
    const hoursChanged = result.hours !== lastRenderedDateHours;

    flipboardDate.innerHTML = "";
    flipboardDate.appendChild(renderFlipGroup(result.days, result.days === 1 ? "day" : "days", daysChanged));
    flipboardDate.appendChild(renderFlipGroup(result.hours, result.hours === 1 ? "hour" : "hours", hoursChanged));
    flipboardDate.appendChild(renderFlipGroup(pad(result.minutes), result.minutes === 1 ? "minute" : "minutes", false));

    lastRenderedDays = result.days;
    lastRenderedDateHours = result.hours;

    calendarLine.textContent = `That's ${calendarSentence(result.cal)}, calendar-wise.`;

    dstNote.hidden = !result.crossesDst;

    if (result.leapDays > 0) {
      leapNote.hidden = false;
      leapNote.textContent = result.leapDays === 1
        ? "Includes a leap day (Feb 29)."
        : `Includes ${result.leapDays} leap days (Feb 29).`;
    } else {
      leapNote.hidden = true;
    }

    statWeeks.textContent = result.weeks;
    statTotalHours.textContent = Math.round(result.totalHours).toLocaleString();
    statTotalMinutesDate.textContent = result.totalMinutes.toLocaleString();

    updateDateUrl();
  }

  function updateDateUrl() {
    if (panelDate.hidden) return;
    const params = new URLSearchParams();
    params.set("view", "date");
    params.set("start", startDateInput.value);
    params.set("end", endDateInput.value);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }

  function loadDateFromUrl() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("view") !== "date") return;
    const start = params.get("start");
    const end = params.get("end");
    if (start) startDateInput.value = start;
    if (end) endDateInput.value = end;
    switchTab("date");
  }

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  function toLocalDatetimeValue(date) {
    return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}T${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
  }

  function setNowDate(input) {
    input.value = toLocalDatetimeValue(new Date());
    renderDate();
  }

  function swapDates() {
    const temp = startDateInput.value;
    startDateInput.value = endDateInput.value;
    endDateInput.value = temp;
    renderDate();
  }

  function flashDateFeedback(message) {
    copyFeedbackDate.textContent = message;
    setTimeout(() => {
      copyFeedbackDate.textContent = "";
    }, 2200);
  }

  async function copyDateToClipboard(text, successMessage) {
    try {
      await navigator.clipboard.writeText(text);
      flashDateFeedback(successMessage);
    } catch (err) {
      flashDateFeedback("Couldn't copy — try selecting manually.");
    }
  }

  copyDateBtn.addEventListener("click", () => {
    const result = calculateDate();
    if (!result) return;
    const text = `${result.days}d ${result.hours}h ${pad(result.minutes)}m (${calendarSentence(result.cal)})`;
    copyDateToClipboard(text, "Copied to clipboard.");
  });

  shareDateBtn.addEventListener("click", () => {
    copyDateToClipboard(window.location.href, "Link copied.");
  });

  startDateInput.addEventListener("input", renderDate);
  endDateInput.addEventListener("input", renderDate);
  swapDateBtn.addEventListener("click", swapDates);
  nowStartDateBtn.addEventListener("click", () => setNowDate(startDateInput));
  nowEndDateBtn.addEventListener("click", () => setNowDate(endDateInput));

  loadDateFromUrl();
  if (!panelDate.hidden) renderDate();
})();
