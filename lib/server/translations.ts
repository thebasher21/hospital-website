import fs from 'fs';
import path from 'path';
import { getBasePath } from '@/lib/utils';

// Use unknown to avoid circular references
export type TranslationData = Record<string, unknown>;

interface CarouselSlide {
  title: string;
  description: string;
  image: string;
}

interface TranslationsStructure {
  hero?: {
    carousel?: {
      slides?: CarouselSlide[];
    };
  };
  [key: string]: unknown;
}

// Default translations for fallback
const defaultTranslations: TranslationsStructure = {
  hero: {
    carousel: {
      slides: [
        {
          title: "Your health is our priority",
          description: "Care · Compassion · Empathy",
          image: "/images/infrastructure/hospitalBuilding.jpg"
        },
        {
          title: "24 x 7 Open",
          description: "Emergency services available round the clock",
          image: "/images/services/24x7Open.jpg"
        }
      ]
    }
  }
};

/**
 * Load translations from JSON file based on language preference
 * This is a server-side function that loads translations from the file system
 */
export async function getTranslations(language = 'en'): Promise<{ 
  translations: TranslationData; 
  language: string;
}> {
  try {
    // In server components, we can read from the file system directly
    const filePath = path.join(process.cwd(), 'public', 'translations', `${language}.json`);
    
    // Check if file exists
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileContents) as TranslationData;
      
      // Process any URLs in the translation data to add base path
      const processedData = processTranslationImages(data);
      
      return {
        translations: processedData,
        language
      };
    } else {
      // If requested language file doesn't exist, fall back to English
      const fallbackPath = path.join(process.cwd(), 'public', 'translations', 'en.json');
      const fileContents = fs.readFileSync(fallbackPath, 'utf8');
      const data = JSON.parse(fileContents) as TranslationData;
      
      // Process any URLs in the translation data to add base path
      const processedData = processTranslationImages(data);
      
      return {
        translations: processedData,
        language: 'en'
      };
    }
  } catch (error) {
    console.error('Error loading translations:', error);
    // Return default translations as fallback
    return {
      translations: processDefaultTranslations(),
      language: 'en'
    };
  }
}

/**
 * Process default translations to add base path to images
 */
function processDefaultTranslations(): TranslationData {
  const processedData = { ...defaultTranslations } as TranslationsStructure;
  
  // Apply base path to hero carousel slides
  if (processedData.hero?.carousel?.slides) {
    processedData.hero.carousel.slides = processedData.hero.carousel.slides.map(slide => ({
      ...slide,
      image: getBasePath(slide.image)
    }));
  }
  
  return processedData;
}

/**
 * Process images in translation data to add base path
 */
function processTranslationImages(data: TranslationData): TranslationData {
  // Deep clone to avoid mutating the original
  const processedData = JSON.parse(JSON.stringify(data)) as TranslationsStructure;
  
  // Apply base path to hero carousel slides
  if (processedData.hero?.carousel?.slides) {
    processedData.hero.carousel.slides = processedData.hero.carousel.slides.map(slide => ({
      ...slide,
      image: slide.image.startsWith('http') ? slide.image : getBasePath(slide.image)
    }));
  }
  
  return processedData;
}

/**
 * Helper function to get a specific translation by key
 */
export function getTranslationValue(translations: TranslationData, key: string): unknown {
  if (!key) return '';
  
  const keys = key.split('.');
  let current: unknown = translations;
  
  for (const k of keys) {
    if (!current || typeof current !== 'object' || current === null) return '';
    current = (current as Record<string, unknown>)[k];
    if (current === undefined) return '';
  }
  
  return current;
} 