"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CircleNotch, CheckCircle } from "@phosphor-icons/react";
import { Button } from "./Button";
import { captureUtmParams, getUtmParams, getEffectiveSource } from "@/utils/utm";
import { trackLead } from "@/utils/vk-pixel";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  source?:
    | "discuss_hero"
    | "discuss_nav"
    | "discuss_package3"
    | "consult_idea"
    | "launch_brand"
    | "order_start"
    | "order_sprint"
    | "footer_cta";
  intents?: { label: string; value: string }[];
}

type FormState = "idle" | "loading" | "success";

const CONSENT_TEXT = "Я согласен на обработку персональных данных в соответствии с Политикой конфиденциальности";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  let countryCode = "";
  let area = "";
  let prefix = "";
  let line1 = "";
  let line2 = "";

  if (digits.length > 0) {
    countryCode = digits[0] === "7" || digits[0] === "8" ? "+7" : `+${digits[0]}`;
  }
  if (digits.length > 1) {
    area = digits.slice(1, 4);
  }
  if (digits.length > 4) {
    prefix = digits.slice(4, 7);
  }
  if (digits.length > 7) {
    line1 = digits.slice(7, 9);
  }
  if (digits.length > 9) {
    line2 = digits.slice(9, 11);
  }

  if (line2) return `${countryCode} (${area}) ${prefix}-${line1}-${line2}`;
  if (line1) return `${countryCode} (${area}) ${prefix}-${line1}`;
  if (prefix) return `${countryCode} (${area}) ${prefix}`;
  if (area) return `${countryCode} (${area})`;
  if (countryCode) return countryCode;
  return "";
}

const WEBHOOK_URL = "https://askydesign.app.n8n.cloud/webhook/300plus-form";
const CALENDLY_URL = "https://calendly.com/askybwoy/30min";
const CALENDLY_SOURCES = ["consult_idea", "order_sprint", "discuss_package3"];

const BOT_LINKS: Record<string, string> = {
  discuss_hero:     "https://t.me/its300plus_bot?start=discuss",
  discuss_nav:      "https://t.me/its300plus_bot?start=discuss",
  discuss_package3: "https://t.me/its300plus_bot?start=discuss",
  consult_idea:     "https://t.me/its300plus_bot?start=consult",
  launch_brand:     "https://t.me/its300plus_bot?start=launch",
  order_start:      "https://t.me/its300plus_bot?start=audit",
  order_sprint:     "https://t.me/its300plus_bot?start=sprint",
  footer_cta:       "https://t.me/its300plus_bot?start=discuss",
};

export function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  source = "discuss_hero",
  intents = [],
}: ModalProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [intent, setIntent] = useState("");
  const [contactType, setContactType] = useState<"telegram" | "phone">("telegram");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    description: "",
  });
  const [consentGiven, setConsentGiven] = useState(false);

  const botLink = BOT_LINKS[source] ?? BOT_LINKS["discuss_hero"];
  const showCalendly = CALENDLY_SOURCES.includes(source);

  // Capture UTM params from URL on mount (idempotent — only stores if URL has UTM)
  useEffect(() => {
    captureUtmParams();
  }, []);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setFormState("idle");
      setIntent("");
      setContactType("telegram");
      setFormData({ name: "", contact: "", description: "" });
      setConsentGiven(false);
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    const utm = getUtmParams();
    const effectiveSource = getEffectiveSource(source);

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          username: contactType === "telegram" ? formData.contact.replace("@", "") : "",
          phone: contactType === "phone" ? formData.contact : "",
          contactType,
          message: formData.description,
          source: effectiveSource,
          intent,
          utm_source: utm.utm_source || "",
          utm_medium: utm.utm_medium || "",
          utm_campaign: utm.utm_campaign || "",
          utm_content: utm.utm_content || source,
          utm_term: utm.utm_term || "",
          page: window.location.pathname,
          referrer: document.referrer,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch {
      // Не блокируем UX если webhook недоступен
    }

    trackLead();
    setFormState("success");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-2xl p-8 z-50 shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-[#6B7280] hover:text-[#0A0A0A] transition-colors cursor-pointer"
            >
              <X weight="bold" className="w-5 h-5" />
            </button>

            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15, delay: 0.1 }}
                  >
                    <CheckCircle
                      weight="fill"
                      className="w-16 h-16 text-[#FF6B00] mx-auto mb-4"
                    />
                  </motion.div>
                  <h3 className="font-headline italic text-2xl text-[#0A0A0A] mb-2">
                    Заявка отправлена!
                  </h3>

                  {showCalendly ? (
                    <>
                      <p className="text-[#6B7280] mb-6">
                        Выберите удобное время для звонка — обсудим детали.
                      </p>
                      <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#FF6B00] hover:bg-[#E65C00] text-white px-6 py-3 rounded-xl font-medium transition-colors"
                      >
                        Выбрать время для звонка
                      </a>
                    </>
                  ) : contactType === "telegram" ? (
                    <>
                      <p className="text-[#6B7280] mb-6">
                        Пока ждёте — бот сделает быстрый разбор вашего сайта.
                      </p>
                      <a
                        href={botLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#FF6B00] hover:bg-[#E65C00] text-white px-6 py-3 rounded-xl font-medium transition-colors"
                      >
                        Получить быстрый разбор сайта в боте
                      </a>
                    </>
                  ) : (
                    <p className="text-[#6B7280]">
                      Алексей позвонит вам в течение 2 часов.
                    </p>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-6">
                    <h2 className="font-headline text-3xl text-[#0A0A0A] mb-2 leading-tight">
                      {title || "Обсудить проект"}
                    </h2>
                    {subtitle && (
                      <p className="text-[#6B7280]">{subtitle}</p>
                    )}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">

                    {intents.length > 0 && (
                      <div className="flex flex-col gap-2">
                        {intents.map((i) => (
                          <button
                            key={i.value}
                            type="button"
                            onClick={() => setIntent(i.value)}
                            className={`px-4 py-2.5 rounded-xl border text-left text-sm transition-all ${
                              intent === i.value
                                ? "border-[#FF6B00] bg-[#FF6B00]/5 text-[#FF6B00]"
                                : "border-[#E5E7EB] hover:border-[#FF6B00]/40 text-[#374151]"
                            }`}
                          >
                            {i.label}
                          </button>
                        ))}
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1">
                        Имя *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 focus:border-[#FF6B00] transition-all"
                        placeholder="Как вас зовут?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1">
                        Способ связи *
                      </label>
                      <div className="flex gap-2 mb-2">
                        <button
                          type="button"
                          onClick={() => setContactType("telegram")}
                          className={`flex-1 py-2 rounded-xl border text-sm font-medium transition-all ${
                            contactType === "telegram"
                              ? "border-[#FF6B00] bg-[#FF6B00]/5 text-[#FF6B00]"
                              : "border-[#E5E7EB] text-[#6B7280] hover:border-[#FF6B00]/40"
                          }`}
                        >
                          Telegram
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setContactType("phone");
                            setFormData((prev) => ({
                              ...prev,
                              contact: /^\+?\d/.test(prev.contact) ? prev.contact : "+7",
                            }));
                          }}
                          className={`flex-1 py-2 rounded-xl border text-sm font-medium transition-all ${
                            contactType === "phone"
                              ? "border-[#FF6B00] bg-[#FF6B00]/5 text-[#FF6B00]"
                              : "border-[#E5E7EB] text-[#6B7280] hover:border-[#FF6B00]/40"
                          }`}
                        >
                          Телефон
                        </button>
                      </div>
                      {contactType === "telegram" ? (
                        <input
                          type="text"
                          required
                          value={formData.contact}
                          onChange={(e) =>
                            setFormData({ ...formData, contact: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 focus:border-[#FF6B00] transition-all"
                          placeholder="@username"
                        />
                      ) : (
                        <input
                          type="tel"
                          required
                          value={formData.contact}
                          onChange={(e) =>
                            setFormData({ ...formData, contact: formatPhone(e.target.value) })
                          }
                          className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 focus:border-[#FF6B00] transition-all"
                          placeholder="+7 (999) 000-00-00"
                        />
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1">
                        Описание проекта
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({ ...formData, description: e.target.value })
                        }
                        rows={3}
                        className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 focus:border-[#FF6B00] transition-all resize-none"
                        placeholder="Расскажите кратко о вашей идее..."
                      />
                    </div>

                    {/* Consent Checkbox */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        checked={consentGiven}
                        onChange={(e) => setConsentGiven(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-[#E5E7EB] text-[#FF6B00] focus:ring-[#FF6B00]/20 cursor-pointer"
                      />
                      <label htmlFor="consent" className="text-xs text-[#6B7280] leading-relaxed cursor-pointer">
                        {CONSENT_TEXT.split("Политикой конфиденциальности")[0]}
                        <a
                          href="/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#FF6B00] hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Политикой конфиденциальности
                        </a>
                      </label>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full"
                      icon={formState !== "loading"}
                      disabled={!consentGiven || formState === "loading"}
                    >
                      {formState === "loading" ? (
                        <CircleNotch className="w-5 h-5 animate-spin" />
                      ) : (
                        "Отправить заявку"
                      )}
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}