export function submitContactToGoogleSheets({ name, phone, email, message }) {
  const scriptUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;

  if (!scriptUrl) {
    return Promise.reject(
      new Error(
        "Contact form is not configured. Add VITE_GOOGLE_SHEETS_URL to your .env file."
      )
    );
  }

  if (!scriptUrl.includes("script.google.com/macros/s/") || !scriptUrl.endsWith("/exec")) {
    return Promise.reject(
      new Error(
        "Invalid Google Script URL. It must end with /exec from Deploy → Web app."
      )
    );
  }

  // Use a hidden form POST (not fetch) — Google Apps Script blocks CORS from browsers.
  return new Promise((resolve, reject) => {
    const iframeName = "contact-form-target";

    let iframe = document.querySelector(`iframe[name="${iframeName}"]`);
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.name = iframeName;
      iframe.style.display = "none";
      document.body.appendChild(iframe);
    }

    const form = document.createElement("form");
    form.method = "POST";
    form.action = scriptUrl;
    form.target = iframeName;
    form.style.display = "none";

    const fields = { name, phone: phone || "", email, message };

    Object.entries(fields).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    const timeout = window.setTimeout(() => {
      cleanup();
      resolve({ result: "success" });
    }, 2500);

    function cleanup() {
      window.clearTimeout(timeout);
      iframe.removeEventListener("load", onLoad);
      form.remove();
    }

    function onLoad() {
      cleanup();
      resolve({ result: "success" });
    }

    iframe.addEventListener("load", onLoad);
    document.body.appendChild(form);
    form.submit();
  });
}
