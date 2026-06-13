import { Github, Instagram, Linkedin, Mail, type LucideIcon } from "lucide-react";
import type { IconName } from "@/data/site";

const icons: Record<IconName, LucideIcon> = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
};

export function SocialIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden />;
}
