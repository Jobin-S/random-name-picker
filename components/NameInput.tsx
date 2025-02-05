import { useState, useRef } from "react";
import {
  generateCSVTemplate,
  parseCSV,
  downloadCSV,
} from "../utils/csvHelpers";

interface NameInputProps {
  onAddName: (name: string) => void;
  onAddNames: (names: string[]) => void;
}

export default function NameInput({ onAddName, onAddNames }: NameInputProps) {
  const [name, setName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadText, setUploadText] = useState("Upload CSV");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAddName(name);
      setName("");
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadText(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const names = parseCSV(content);
      onAddNames(names);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setTimeout(() => setUploadText("Upload CSV"), 2000);
    };
    reader.readAsText(file);
  };

  const handleDownloadTemplate = () => {
    downloadCSV("raffle-names-template.csv", generateCSVTemplate());
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a name"
          className="flex-1 px-4 py-3 bg-card-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-gray-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-accent text-white rounded-xl hover:bg-blue-600 transition-colors font-medium"
        >
          Add Name
        </button>
      </form>

      <div className="flex gap-2">
        <div className="flex-1">
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            ref={fileInputRef}
            className="hidden"
            id="csv-upload"
          />
          <label
            htmlFor="csv-upload"
            className="block w-full px-4 py-3 text-center border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-accent transition-colors bg-card-background"
          >
            {uploadText}
          </label>
        </div>
        <button
          onClick={handleDownloadTemplate}
          className="px-6 py-3 text-accent border border-accent rounded-xl hover:bg-accent/10 transition-colors font-medium"
        >
          Download Template
        </button>
      </div>
    </div>
  );
}
