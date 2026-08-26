"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { DEFAULT_CONTENT, SiteContent, STORAGE_KEY } from "@/lib/content";

type ContentContextValue = {
  content: SiteContent;
  update: (path: string, value: any) => void;
  updateSection: (section: Partial<SiteContent>) => void;
  reset: () => void;
  isLoaded: boolean;
};

const ContentContext = createContext<ContentContextValue>({
  content: DEFAULT_CONTENT,
  update: () => {},
  updateSection: () => {},
  reset: () => {},
  isLoaded: false,
});

// Deep set a value at a dotted path (e.g. "hero.line1" or "services[0].title")
function setByPath(obj: any, path: string, value: any): any {
  const clone = Array.isArray(obj) ? [...obj] : { ...obj };
  const match = path.match(/^([^.[\]]+)(\[(\d+)\])?\.?(.*)$/);
  if (!match) return obj;
  const [, key, , indexStr, rest] = match;
  if (indexStr !== undefined) {
    const idx = parseInt(indexStr, 10);
    const arr = [...(clone[key] || [])];
    if (rest) {
      arr[idx] = setByPath(arr[idx] || {}, rest, value);
    } else {
      arr[idx] = value;
    }
    clone[key] = arr;
  } else if (rest) {
    clone[key] = setByPath(clone[key] || {}, rest, value);
  } else {
    clone[key] = value;
  }
  return clone;
}

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(DEFAULT_CONTENT);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          setContent({ ...DEFAULT_CONTENT, ...parsed });
        }
      } catch (e) {
        console.warn("Failed to load content from localStorage:", e);
      }
      setIsLoaded(true);
    }, 0);
    return () => clearTimeout(t);
  }, []);

  const persist = useCallback((newContent: SiteContent) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
    } catch (e) {
      console.warn("Failed to persist content:", e);
    }
  }, []);

  const update = useCallback(
    (path: string, value: any) => {
      setContent((prev) => {
        const updated = setByPath(prev, path, value);
        persist(updated);
        return updated;
      });
    },
    [persist]
  );

  const updateSection = useCallback(
    (section: Partial<SiteContent>) => {
      setContent((prev) => {
        const updated = { ...prev, ...section };
        persist(updated);
        return updated;
      });
    },
    [persist]
  );

  const reset = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setContent(DEFAULT_CONTENT);
  }, []);

  return (
    <ContentContext.Provider value={{ content, update, updateSection, reset, isLoaded }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  return useContext(ContentContext);
}
