(function($) {
  "use strict";

  // Obsługa pól formularza
  $("body")
    .on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass(
        "floating-label-form-group-with-value",
        !!$(e.target).val()
      );
    })
    .on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    })
    .on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });

  // Nagłówek i navbar
  var $window = $(window);
  var $header = $("header.mastheadv2");
  var $navbar = $("#mainNav");

  function updateHeader() {
    var scrolled = $window.scrollTop() > 50;

    $header.toggleClass("header-small", scrolled);

    // Wyłącz stary efekt Clean Blog
    $navbar.removeClass("is-fixed is-visible");
    $navbar.toggleClass("navbar-small", scrolled);
  }

  $window.on("scroll", updateHeader);
  updateHeader();

})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("themeToggle");
  const logoColor = document.getElementById("logoColor");
  const logo = document.querySelector("#mainNav .brand-logo");

  if (logoColor && logo) {
    const savedLogoColor = localStorage.getItem("logoColor");

    if (savedLogoColor && /^#[0-9a-fA-F]{6}$/.test(savedLogoColor)) {
      logoColor.value = savedLogoColor;
      logo.style.setProperty("--logo-color", savedLogoColor);
    }

    logoColor.addEventListener("input", function() {
      logo.style.setProperty("--logo-color", logoColor.value);
      localStorage.setItem("logoColor", logoColor.value);
    });
  }

    if (!toggle) return;

    // Odczytaj zapamiętany motyw
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    function updateButton() {
        const darkMode = document.body.classList.contains("dark-mode");

        toggle.innerHTML = darkMode
          ? '<i class="fa fa-sun-o" aria-hidden="true"></i>'
          : '<i class="fa fa-moon-o" aria-hidden="true"></i>';
        toggle.setAttribute(
            "aria-label",
            darkMode ? "Włącz tryb jasny" : "Włącz tryb ciemny"
        );
        toggle.title = darkMode ? "Włącz tryb jasny" : "Włącz tryb ciemny";
    }

    updateButton();

    toggle.addEventListener("click", function() {
        const darkMode = document.body.classList.toggle("dark-mode");

        localStorage.setItem("theme", darkMode ? "dark" : "light");

        updateButton();
    });
});