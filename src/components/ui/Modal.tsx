"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, PaperPlaneTilt, CircleNotch, CheckCircle } from "@phosphor-icons/react";
import { Button } from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
}

type FormState = "idle" | "loading" | "success";

export function Modal({ isOpen, onClose, title, subtitle }: ModalProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    
    try {
      await fetch("https://askydesign.app.n8n.cloud/webhook-test/300plus-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.contact,
          description: formData.description,
          form: title,
        }),
      });
    } catch {
      // Send even if webhook fails
    }
    setFormState("success");
    
    setTimeout(() => {
      onClose();
      setFormState("idle");
      setFormData({ name: "", contact: "", description: "" });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
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
              onClick={onClose}
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
                    Заявка отправлена
                  </h3>
                  <p className="text-[#6B7280]">
                    Мы свяжемся с вами в ближайшее время
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="font-headline italic text-3xl text-[#0A0A0A] mb-2">
                    {title}
                  </h2>
                  {subtitle && (
                    <p className="text-[#6B7280] mb-6">{subtitle}</p>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
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
                        Контакт (Telegram или Email) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) =>
                          setFormData({ ...formData, contact: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 focus:border-[#FF6B00] transition-all"
                        placeholder="@username или email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1">
                        Описание проекта
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                        rows={3}
                        className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 focus:border-[#FF6B00] transition-all resize-none"
                        placeholder="Расскажите кратко о вашей идее..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full"
                      icon={formState !== "loading"}
                    >
                      {formState === "loading" ? (
                        <CircleNotch className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          Отправить заявку
                          
                        </>
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
