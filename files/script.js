(function () {
  "use strict";

  const I18N = {
    en: {
      nav_how: "How it works",
      nav_more: "More tools",
      eyebrow: "Time · Duration Calculator",
      h1: "Time Between Two Times Calculator",
      sub: "Set a start and an end. The answer updates as you type — no calculate button, no clutter.",
      tab_time: "Two times, same day",
      tab_date: "Two dates",
      label_start: "Start",
      label_end: "End",
      swap_title: "Swap start and end",
      swap_aria_time: "Swap start and end times",
      swap_aria_date: "Swap start and end dates",
      chip_now_start: "Start = now",
      chip_now_end: "End = now",
      chip_overnight: "Ends next day",
      overnight_note: "Counted through midnight, into the next day.",
      stat_total_minutes: "total minutes",
      stat_total_seconds: "total seconds",
      stat_decimal_hours: "decimal hours",
      stat_weeks: "weeks",
      stat_total_hours: "total hours",
      btn_copy_result: "Copy result",
      btn_copy_link: "Copy shareable link",
      dst_note: "This span crosses a daylight saving time change — the hour count reflects the actual clock shift, not a flat 24-hour day.",
      date_error_note: "End is before start. Swap them, or check your dates.",
      how_heading: "How the calculation works",
      how_p1: "Both times are converted to seconds since midnight, then subtracted. If the end time is earlier than the start time, Between assumes the span crosses midnight and adds 24 hours automatically — so 22:00 to 03:00 correctly reads as 5 hours instead of throwing a negative number.",
      example_label: "Example",
      example_text: '<span class="mono">08:15</span> → <span class="mono">16:45</span> = <strong>8 hours 30 minutes</strong>',
      h3_12_24: "12-hour vs 24-hour time",
      p_12_24: "Your browser's time input follows your system settings, so it may show a 12-hour clock with AM/PM or a 24-hour clock — either way, the calculation underneath is identical.",
      h3_dst_leap: "Two dates: daylight saving and leap years",
      p_dst_leap: "The \"Two dates\" tab doesn't assume every day is 24 hours. It works out the real elapsed time between two exact moments, so if your span crosses a daylight saving change, the one day that's actually 23 or 25 hours long is counted correctly instead of silently losing or gaining an hour. Leap years are handled the same way — a range that includes February 29th counts that day like any other, and the calendar breakdown (years, months, days) is always based on real calendar lengths, not a fixed 30-day month.",
      faq_heading: "Frequently asked questions",
      faq_q1: "Does this handle overnight spans?",
      faq_a1: "Yes. If your end time is earlier in the day than your start time, Between treats it as ending the next day and calculates accordingly. You can also tick \"Ends next day\" explicitly if a span happens to start and end at the same clock time 24 hours apart.",
      faq_q2: "Does it include seconds?",
      faq_a2: "The main input works in hours and minutes, matching how most people think about a schedule. The result panel shows the total down to the second.",
      faq_q3: "Can I share a calculation with someone?",
      faq_a3: "Yes — use \"Copy shareable link.\" It saves your start and end time in the URL, so anyone who opens the link sees the same calculation.",
      faq_q4: "Is my data stored anywhere?",
      faq_a4: "No. Everything happens in your browser. Nothing is sent to a server or saved.",
      faq_q5: "Does the \"Two dates\" calculator account for daylight saving time?",
      faq_a5: "Yes. It compares two exact moments in your local time zone, so a span that crosses a spring-forward or fall-back change comes out as 23 or 25 hours for that one day rather than a flat 24 — you'll see a note when this happens.",
      faq_q6: "Does it handle leap years correctly?",
      faq_a6: "Yes. February 29th is counted like any other day, and the year/month/day breakdown always uses the real number of days in each month and year, so results stay accurate across leap years.",
      more_heading: "Related tools",
      more_p: "More calculators in this family are on the way: hours between two dates, days between two dates, age in days, and time-until countdowns — all built on the same simple, fast interface.",
      footer_text: "Between — a small, fast calculator. No account, no tracking of what you calculate.",
      copied: "Copied to clipboard.",
      link_copied: "Link copied.",
      copy_error: "Couldn't copy — try selecting manually.",
      unit_hour: "hour",
      unit_hours: "hours",
      unit_minute: "minute",
      unit_minutes: "minutes",
      unit_day: "day",
      unit_days: "days",
      cal_year: "year",
      cal_years: "years",
      cal_month: "month",
      cal_months: "months",
      cal_day: "day",
      cal_days: "days",
      calendar_line: "That's {sentence}, calendar-wise.",
      leap_one: "Includes a leap day (Feb 29).",
      leap_many: "Includes {n} leap days (Feb 29).",
      date_swapped: "Start was after end, so they've been read in swapped order.",
      copy_result_time: "{h}h {m}m ({start} to {end})",
      copy_result_date: "{d}d {h}h {m}m ({sentence})",
    },
    no: {
      nav_how: "Hvordan det fungerer",
      nav_more: "Flere verktøy",
      eyebrow: "Tid · Varighetskalkulator",
      h1: "Tid mellom to klokkeslett",
      sub: "Sett et start- og sluttidspunkt. Svaret oppdateres mens du skriver — ingen beregn-knapp, ingen rot.",
      tab_time: "To klokkeslett, samme dag",
      tab_date: "To datoer",
      label_start: "Start",
      label_end: "Slutt",
      swap_title: "Bytt start og slutt",
      swap_aria_time: "Bytt start- og sluttidspunkt",
      swap_aria_date: "Bytt start- og sluttdato",
      chip_now_start: "Start = nå",
      chip_now_end: "Slutt = nå",
      chip_overnight: "Slutter neste dag",
      overnight_note: "Beregnet gjennom midnatt, inn i neste dag.",
      stat_total_minutes: "minutter totalt",
      stat_total_seconds: "sekunder totalt",
      stat_decimal_hours: "desimaltimer",
      stat_weeks: "uker",
      stat_total_hours: "timer totalt",
      btn_copy_result: "Kopier resultat",
      btn_copy_link: "Kopier delbar lenke",
      dst_note: "Dette tidsrommet krysser en overgang til/fra sommertid — timetallet gjenspeiler den faktiske klokkeendringen, ikke en fast 24-timers dag.",
      date_error_note: "Slutt er før start. Bytt om, eller sjekk datoene.",
      how_heading: "Slik fungerer beregningen",
      how_p1: "Begge klokkeslettene konverteres til sekunder siden midnatt, og trekkes deretter fra hverandre. Hvis sluttidspunktet er tidligere enn starttidspunktet, antar Between at tidsrommet krysser midnatt og legger automatisk til 24 timer — så 22:00 til 03:00 gir riktig svar på 5 timer i stedet for et negativt tall.",
      example_label: "Eksempel",
      example_text: '<span class="mono">08:15</span> → <span class="mono">16:45</span> = <strong>8 timer 30 minutter</strong>',
      h3_12_24: "12-timers vs. 24-timers klokke",
      p_12_24: "Nettleserens tidsfelt følger systeminnstillingene dine, så det kan vise en 12-timers klokke med AM/PM eller en 24-timers klokke — uansett er beregningen bak identisk.",
      h3_dst_leap: "To datoer: sommertid og skuddår",
      p_dst_leap: "Fanen «To datoer» antar ikke at hver dag er 24 timer. Den beregner den faktiske tiden mellom to nøyaktige tidspunkt, så hvis tidsrommet krysser en sommertidsovergang, telles den ene dagen som faktisk er 23 eller 25 timer lang riktig, i stedet for å stille miste eller vinne en time. Skuddår håndteres på samme måte — et tidsrom som inkluderer 29. februar teller den dagen som en hvilken som helst annen, og kalenderoppdelingen (år, måneder, dager) er alltid basert på reelle kalenderlengder, ikke en fast 30-dagers måned.",
      faq_heading: "Ofte stilte spørsmål",
      faq_q1: "Håndterer dette tidsrom over midnatt?",
      faq_a1: "Ja. Hvis sluttidspunktet ditt er tidligere på dagen enn starttidspunktet, antar Between at det slutter neste dag og beregner deretter. Du kan også krysse av for «Slutter neste dag» eksplisitt hvis et tidsrom starter og slutter på nøyaktig samme klokkeslett 24 timer fra hverandre.",
      faq_q2: "Inkluderer det sekunder?",
      faq_a2: "Hovedfeltene fungerer i timer og minutter, slik de fleste tenker på en timeplan. Resultatpanelet viser totalen ned til sekundet.",
      faq_q3: "Kan jeg dele en beregning med noen?",
      faq_a3: "Ja — bruk «Kopier delbar lenke». Den lagrer start- og sluttidspunktet ditt i URL-en, slik at alle som åpner lenken ser samme beregning.",
      faq_q4: "Blir dataene mine lagret noe sted?",
      faq_a4: "Nei. Alt skjer i nettleseren din. Ingenting sendes til en server eller lagres.",
      faq_q5: "Tar «To datoer»-kalkulatoren hensyn til sommertid?",
      faq_a5: "Ja. Den sammenligner to nøyaktige tidspunkt i din lokale tidssone, så et tidsrom som krysser en overgang til eller fra sommertid gir 23 eller 25 timer for den ene dagen i stedet for et fast tall på 24 — du vil se en merknad når dette skjer.",
      faq_q6: "Håndterer det skuddår riktig?",
      faq_a6: "Ja. 29. februar telles som en hvilken som helst annen dag, og oppdelingen i år/måned/dag bruker alltid det faktiske antallet dager i hver måned og hvert år, slik at resultatene forblir nøyaktige på tvers av skuddår.",
      more_heading: "Relaterte verktøy",
      more_p: "Flere kalkulatorer i denne familien er på vei: timer mellom to datoer, dager mellom to datoer, alder i dager, og nedtelling til et tidspunkt — alle bygget på det samme enkle, raske grensesnittet.",
      footer_text: "Between — en liten, rask kalkulator. Ingen konto, ingen sporing av det du beregner.",
      copied: "Kopiert til utklippstavlen.",
      link_copied: "Lenke kopiert.",
      copy_error: "Kunne ikke kopiere — prøv å markere manuelt.",
      unit_hour: "time",
      unit_hours: "timer",
      unit_minute: "minutt",
      unit_minutes: "minutter",
      unit_day: "dag",
      unit_days: "dager",
      cal_year: "år",
      cal_years: "år",
      cal_month: "måned",
      cal_months: "måneder",
      cal_day: "dag",
      cal_days: "dager",
      calendar_line: "Det er {sentence}, kalendermessig.",
      leap_one: "Inkluderer en skuddag (29. februar).",
      leap_many: "Inkluderer {n} skuddager (29. februar).",
      date_swapped: "Start var etter slutt, så de er lest i motsatt rekkefølge.",
      copy_result_time: "{h}t {m}m ({start} til {end})",
      copy_result_date: "{d}d {h}t {m}m ({sentence})",
    },
  };

  let currentLang = localStorage.getItem("lang") === "no" ? "no" : "en";

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
  }

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
    flipboard.appendChild(renderFlipGroup(result.hours, result.hours === 1 ? t("unit_hour") : t("unit_hours"), hoursChanged));
    flipboard.appendChild(renderFlipGroup(pad(result.minutes), result.minutes === 1 ? t("unit_minute") : t("unit_minutes"), minutesChanged));

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
      flashFeedback(t("copy_error"));
    }
  }

  copyBtn.addEventListener("click", () => {
    const result = calculate();
    if (!result) return;
    const text = t("copy_result_time")
      .replace("{h}", result.hours)
      .replace("{m}", pad(result.minutes))
      .replace("{start}", startInput.value)
      .replace("{end}", endInput.value);
    copyToClipboard(text, t("copied"));
  });

  shareBtn.addEventListener("click", () => {
    copyToClipboard(window.location.href, t("link_copied"));
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
    if (showDate) {
      renderDate();
    } else {
      render();
    }
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
    if (cal.years) parts.push(`${cal.years} ${cal.years === 1 ? t("cal_year") : t("cal_years")}`);
    if (cal.months) parts.push(`${cal.months} ${cal.months === 1 ? t("cal_month") : t("cal_months")}`);
    parts.push(`${cal.days} ${cal.days === 1 ? t("cal_day") : t("cal_days")}`);
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
      dateErrorNote.textContent = t("date_swapped");
      dateErrorNote.classList.remove("error");
    } else {
      dateErrorNote.hidden = true;
    }

    const daysChanged = result.days !== lastRenderedDays;
    const hoursChanged = result.hours !== lastRenderedDateHours;

    flipboardDate.innerHTML = "";
    flipboardDate.appendChild(renderFlipGroup(result.days, result.days === 1 ? t("unit_day") : t("unit_days"), daysChanged));
    flipboardDate.appendChild(renderFlipGroup(result.hours, result.hours === 1 ? t("unit_hour") : t("unit_hours"), hoursChanged));
    flipboardDate.appendChild(renderFlipGroup(pad(result.minutes), result.minutes === 1 ? t("unit_minute") : t("unit_minutes"), false));

    lastRenderedDays = result.days;
    lastRenderedDateHours = result.hours;

    calendarLine.textContent = t("calendar_line").replace("{sentence}", calendarSentence(result.cal));

    dstNote.hidden = !result.crossesDst;

    if (result.leapDays > 0) {
      leapNote.hidden = false;
      leapNote.textContent = result.leapDays === 1
        ? t("leap_one")
        : t("leap_many").replace("{n}", result.leapDays);
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
      flashDateFeedback(t("copy_error"));
    }
  }

  copyDateBtn.addEventListener("click", () => {
    const result = calculateDate();
    if (!result) return;
    const text = t("copy_result_date")
      .replace("{d}", result.days)
      .replace("{h}", result.hours)
      .replace("{m}", pad(result.minutes))
      .replace("{sentence}", calendarSentence(result.cal));
    copyDateToClipboard(text, t("copied"));
  });

  shareDateBtn.addEventListener("click", () => {
    copyDateToClipboard(window.location.href, t("link_copied"));
  });

  startDateInput.addEventListener("input", renderDate);
  endDateInput.addEventListener("input", renderDate);
  swapDateBtn.addEventListener("click", swapDates);
  nowStartDateBtn.addEventListener("click", () => setNowDate(startDateInput));
  nowEndDateBtn.addEventListener("click", () => setNowDate(endDateInput));

  loadDateFromUrl();
  if (!panelDate.hidden) renderDate();

  // ---------------------------------------------------------------
  // Language toggle (English / Norwegian)
  // ---------------------------------------------------------------

  const langToggle = document.getElementById("langToggle");

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === "no" ? "nb" : "en-GB";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (I18N[lang][key] !== undefined) el.textContent = I18N[lang][key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (I18N[lang][key] !== undefined) el.innerHTML = I18N[lang][key];
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (I18N[lang][key] !== undefined) el.setAttribute("title", I18N[lang][key]);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria-label");
      if (I18N[lang][key] !== undefined) el.setAttribute("aria-label", I18N[lang][key]);
    });

    langToggle.textContent = lang === "no" ? "EN" : "NO";
    localStorage.setItem("lang", lang);

    render();
    if (!panelDate.hidden) renderDate();
  }

  langToggle.addEventListener("click", () => {
    applyLanguage(currentLang === "no" ? "en" : "no");
  });

  applyLanguage(currentLang);
})();
