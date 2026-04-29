import clsx from "clsx";
import styles from "./ConsultationModal.module.css";
type CheckboxCardProps = {
  label: string;
  selected: boolean;
  onToggle: () => void;
};
export function CheckboxCard({ label, selected, onToggle }: CheckboxCardProps) {
  return (
    <div
      role="checkbox"
      aria-checked={selected}
      tabIndex={0}
      className={clsx(styles.chip, selected && styles.chipActive)}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      {label}
    </div>
  );
}
