type ClassValue = string | number | boolean | null | undefined;

export default function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
