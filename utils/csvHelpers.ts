export const generateCSVTemplate = () => {
  const header = "Name\n";
  const example = "John Doe\nJane Smith";
  return header + example;
};

export const parseCSV = (csvContent: string): string[] => {
  return csvContent
    .split('\n')
    .slice(1) // Skip header row
    .map(line => line.trim())
    .filter(line => line.length > 0);
};

export const downloadCSV = (filename: string, content: string) => {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}; 