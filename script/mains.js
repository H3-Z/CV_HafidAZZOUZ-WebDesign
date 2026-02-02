/**
 * Main JS - Animations et interactions
 * Timeline, sections, listes
 */

document.addEventListener("DOMContentLoaded", () => {
  const timelineDiv = document.getElementById("deuxiemeTrait");

  /** Timeline : Création des marqueurs de date */
  if (timelineDiv) {
    const additionalYears = [2025, 2023, 2021, 2019, 2017, 2015,
                             2013, 2011, 2009, 2007, 2005,
                             2003, 2002, 2001];
    timelineDiv.style.position = "relative";

    const count = additionalYears.length;
    additionalYears.forEach((year, index) => {
      const marker = document.createElement("span");
      marker.classList.add("date-marker");
      marker.setAttribute("aria-hidden", "true");
      marker.textContent = year;
      const topPercent = ((index + 1) / (count + 1)) * 100;
      marker.style.top = topPercent + "%";
      marker.style.left = "100%";
      marker.style.marginLeft = "10px";
      timelineDiv.appendChild(marker);
    });

    /** Timeline : Effet "Voyage dans le temps" au survol */
    const maxDistance = 50;
    const minOpacityTopFive = 0.3;
    let isUpdating = false;
    let lastMouseY = 0;

    /**
     * Met à jour l'opacité et l'échelle des marqueurs selon la position souris
     * @param {number} mouseY - Position Y relative à la timeline
     */
    const updateMarkers = (mouseY) => {
      const rect = timelineDiv.getBoundingClientRect();
      const markersData = Array.from(timelineDiv.querySelectorAll(".date-marker")).map(marker => {
        const markerRect = marker.getBoundingClientRect();
        const markerCenterY = (markerRect.top - rect.top) + (markerRect.height / 2);
        return { marker, distance: Math.abs(mouseY - markerCenterY) };
      });
      markersData.sort((a, b) => a.distance - b.distance);

      const topFive = markersData.slice(0, 5);
      topFive.forEach(data => {
        let factor = Math.max(0, 1 - data.distance / maxDistance);
        let factorSquared = factor * factor;
        const newOpacity = minOpacityTopFive + (1 - minOpacityTopFive) * factorSquared;
        data.marker.style.opacity = newOpacity;
        let newScale = 1 + 0.3 * factorSquared;
        data.marker.style.transform = `translateX(0) scale(${newScale})`;
      });

      const others = markersData.slice(5);
      others.forEach(data => {
        let factor = Math.max(0, 1 - data.distance / (maxDistance * 1.5));
        let factorSquared = factor * factor;
        data.marker.style.opacity = factorSquared * 0.1;
        data.marker.style.transform = "translateX(0) scale(1)";
      });
    };

    document.addEventListener("mousemove", (e) => {
      const rect = timelineDiv.getBoundingClientRect();
      lastMouseY = e.clientY - rect.top;
      if (!isUpdating) {
        isUpdating = true;
        window.requestAnimationFrame(() => {
          updateMarkers(lastMouseY);
          isUpdating = false;
        });
      }
    });

    document.addEventListener("mouseleave", () => {
      const markers = timelineDiv.querySelectorAll(".date-marker");
      markers.forEach(marker => {
        marker.style.opacity = 0;
        marker.style.transform = "translateX(0) scale(1)";
      });
    });
  }

  /** Sections : Révélation progressive au scroll */
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  };

  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    if (isElementInViewport(section)) {
      section.classList.add("visible");
    }
  });

  const sectionsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => sectionsObserver.observe(section));

  /** Listes : Animation progressive des éléments */
  const listItems = document.querySelectorAll("ul li");
  listItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("visible");
    }, index * 200);
  });

  /** Listes : Symboles dynamiques au survol */
  const listItemsForSymbols = document.querySelectorAll("ul li");
  listItemsForSymbols.forEach(item => {
    item.addEventListener("mouseover", () => {
      const symbols = ["♣", "✦"];
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      item.style.setProperty("--dynamic-content", `'${randomSymbol}'`);
    });
    item.addEventListener("mouseout", () => {
      item.style.setProperty("--dynamic-content", "'✦'");
    });
  });
});