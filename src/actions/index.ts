import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";

type SendSuggestionResult =
  | {
      success: true;
      message: string;
    }
  | {
      success: false;
      error: string;
    };

const DEFAULT_TO_EMAIL = "miguelrocha.osorio23@gmail.com";
const DEFAULT_FROM_EMAIL = "Anime Suggestions <onboarding@resend.dev>";

function getEnv(name: string) {
  return process.env[name] ?? import.meta.env[name];
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export const server = {
  sendSuggestion: defineAction({
    accept: "form",
    input: z.object({
      name: z
        .string()
        .trim()
        .min(2, "Ingresa tu nombre.")
        .max(80, "El nombre es demasiado largo."),
      email: z
        .string()
        .trim()
        .email("Ingresa un email válido.")
        .max(120, "El email es demasiado largo."),
      message: z
        .string()
        .trim()
        .min(10, "La sugerencia debe tener al menos 10 caracteres.")
        .max(2000, "La sugerencia es demasiado larga."),
    }),
    handler: async ({ name, email, message }): Promise<SendSuggestionResult> => {
      const resendApiKey = getEnv("RESEND_API_KEY");

      if (!resendApiKey) {
        return {
          success: false,
          error:
            "Falta configurar RESEND_API_KEY en las variables de entorno del servidor.",
        };
      }

      const resend = new Resend(resendApiKey);
      const from = getEnv("RESEND_FROM_EMAIL") ?? DEFAULT_FROM_EMAIL;
      const to = getEnv("RESEND_TO_EMAIL") ?? DEFAULT_TO_EMAIL;

      const safeName = escapeHtml(name);
      const safeEmail = escapeHtml(email);
      const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

      try {
        const { data, error } = await resend.emails.send({
          from,
          to,
          replyTo: email,
          subject: `Nueva sugerencia de ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.5; padding: 20px;">
              <h2 style="color: #8B5CF6; margin: 0 0 16px;">Nueva sugerencia de anime</h2>
              <p><strong>Nombre:</strong> ${safeName}</p>
              <p><strong>Email:</strong> ${safeEmail}</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
              <p><strong>Mensaje:</strong></p>
              <p>${safeMessage}</p>
            </div>
          `,
        });

        if (error) {
          return {
            success: false,
            error: error.message,
          };
        }

        if (!data?.id) {
          return {
            success: false,
            error: "Resend no devolvió confirmación del envío.",
          };
        }

        return {
          success: true,
          message: "Sugerencia enviada correctamente.",
        };
      } catch (error) {
        return {
          success: false,
          error:
            error instanceof Error
              ? error.message
              : "No se pudo enviar la sugerencia.",
        };
      }
    },
  }),
};
