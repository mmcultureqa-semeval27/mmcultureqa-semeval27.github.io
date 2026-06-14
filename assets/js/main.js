(function () {
  "use strict";

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Build table of contents from h2 headings ---------- */
  var content = document.querySelector(".doc-main .content");
  var tocList = document.querySelector(".toc-list");
  var aside = document.querySelector(".doc-toc");

  if (content && tocList) {
    var heads = [].slice.call(content.querySelectorAll("h2"));

    if (heads.length < 2) {
      if (aside) aside.style.display = "none";
    } else {
      var ol = document.createElement("ol");
      heads.forEach(function (h) {
        if (!h.id) {
          h.id = h.textContent.trim().toLowerCase()
            .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
        }
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "#" + h.id;
        a.textContent = h.textContent;
        li.appendChild(a);
        ol.appendChild(li);
      });
      tocList.appendChild(ol);

      /* Scrollspy: highlight the current section */
      var links = {};
      [].slice.call(tocList.querySelectorAll("a")).forEach(function (a) {
        links[a.getAttribute("href").slice(1)] = a;
      });
      if ("IntersectionObserver" in window) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              Object.keys(links).forEach(function (id) { links[id].classList.remove("active"); });
              if (links[entry.target.id]) links[entry.target.id].classList.add("active");
            }
          });
        }, { rootMargin: "0px 0px -78% 0px" });
        heads.forEach(function (h) { io.observe(h); });
      }
    }
  }

  /* ---------- Back to top ---------- */
  var btt = document.getElementById("back-to-top");
  if (btt) {
    window.addEventListener("scroll", function () {
      btt.classList.toggle("show", window.scrollY > 400);
    }, { passive: true });
    btt.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
