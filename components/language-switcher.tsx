"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("en")}
        className={language === "en" ? "bg-secondary" : ""}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("id")}
        className={language === "id" ? "bg-secondary" : ""}
      >
        ID
      </Button>
    </div>
  )
}

