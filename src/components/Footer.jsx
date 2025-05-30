import { Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="flex gap-4 justify-center text-white p-6">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <Instagram className="w-6 h-6 hover:text-orange-400" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-6 h-6 hover:text-orange-400" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <Github className="w-6 h-6 hover:text-orange-400" />
      </a>
    </footer>
  );
}
