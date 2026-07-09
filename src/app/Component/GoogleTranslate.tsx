const STORAGE_KEY = "preferred_lang";
const COOKIE_NAME = "googtrans";

export function getStoredLanguage(): string {
  if (typeof window === "undefined") return "en";
  return window.localStorage.getItem(STORAGE_KEY) || "en";
}

function setStoredLanguage(code: string) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, code);
}

/**
 * Switches the page language by driving the hidden <select class="goog-te-combo">
 * that Google's translate script injects. Retries briefly in case the widget
 * script hasn't finished mounting yet.
 */
export function changeLanguage(code: string, attempt = 0) {
  if (typeof window === "undefined") return;

  setStoredLanguage(code);

  // "en" is the page's source language — there's nothing to translate to,
  // so just clear any existing translation and reload with the original text.
  if (code === "en") {
    document.cookie = `${COOKIE_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    window.location.reload();
    return;
  }

  const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");

  if (select) {
    // Persist for a year so the choice survives new sessions, not just reloads.
    document.cookie = `${COOKIE_NAME}=/en/${code};path=/;max-age=31536000`;
    select.value = code;
    select.dispatchEvent(new Event("change"));
    return;
  }

  // Google's script can take a moment to inject the <select>. Give it a
  // few short retries rather than failing silently on a fast click.
  if (attempt < 10) {
    setTimeout(() => changeLanguage(code, attempt + 1), 300);
  }
}