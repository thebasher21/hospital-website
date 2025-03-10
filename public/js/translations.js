// Translations handler
document.addEventListener('DOMContentLoaded', async function() {
  // Get preferred language from local storage or detect from browser
  let preferredLanguage = localStorage.getItem('preferredLanguage');
  
  if (!preferredLanguage) {
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    preferredLanguage = browserLang.includes('hi') ? 'hi' : 'en';
    localStorage.setItem('preferredLanguage', preferredLanguage);
  }
  
  // Set HTML lang attribute
  document.documentElement.lang = preferredLanguage;
  
  // Load translations
  let translations;
  try {
    const response = await fetch(`/translations/${preferredLanguage}.json`);
    if (!response.ok) throw new Error('Failed to load translations');
    translations = await response.json();
  } catch (error) {
    console.error('Error loading translations:', error);
    translations = {};
  }
  
  // Apply translations to all elements with data-i18n attribute
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const text = getNestedValue(translations, key);
    if (text) {
      element.textContent = text;
    }
  });
  
  // Handle parameterized translations
  const paramElements = document.querySelectorAll('[data-i18n-key]');
  paramElements.forEach(element => {
    const key = element.getAttribute('data-i18n-key');
    const paramsAttr = element.getAttribute('data-i18n-params');
    
    if (key && paramsAttr) {
      try {
        const params = JSON.parse(paramsAttr);
        const template = getNestedValue(translations, key);
        
        if (template) {
          let translatedText = template;
          // Replace each parameter in the template
          Object.keys(params).forEach(paramKey => {
            translatedText = translatedText.replace(`{${paramKey}}`, params[paramKey]);
          });
          
          element.textContent = translatedText;
        }
      } catch (e) {
        console.error('Error applying parameterized translation:', e);
      }
    }
  });
  
  // Helper function to get nested value from object using dot notation
  function getNestedValue(obj, path) {
    if (!obj || !path) return '';
    
    const keys = path.split('.');
    let current = obj;
    
    for (const key of keys) {
      if (current[key] === undefined) return '';
      current = current[key];
    }
    
    return current;
  }
}); 