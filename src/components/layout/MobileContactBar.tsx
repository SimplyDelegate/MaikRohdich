import { Button } from "@/components/ui/Button";
import { contactActions } from "@/content/contact";

export function MobileContactBar() {
  return (
    <aside
      className="border-work-border fixed inset-x-0 bottom-0 z-50 border-t bg-white/95 p-3 shadow-[0_-12px_30px_rgb(37_42_39_/_12%)] backdrop-blur md:hidden"
      aria-label="Mobile Kontaktmöglichkeiten"
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <Button
          href={contactActions.phone.href}
          variant="secondary"
          ariaLabel={`${contactActions.phone.label}: ${contactActions.phone.pendingLabel}`}
        >
          {contactActions.phone.label}
        </Button>
        <Button
          href={contactActions.whatsapp.href}
          ariaLabel={`${contactActions.whatsapp.label}: ${contactActions.whatsapp.pendingLabel}`}
        >
          {contactActions.whatsapp.label}
        </Button>
      </div>
    </aside>
  );
}
