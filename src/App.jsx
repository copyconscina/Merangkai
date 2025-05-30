const page = window.location.pathname;

let content;
if (page.includes("about")) {
  content = <AboutPage />;
} else if (page.includes("services")) {
  content = <ServicesPage />;
} // and so on
