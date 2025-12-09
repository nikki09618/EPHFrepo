export function createFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <hr>
    <p>&copy; 2025 MyApp. All rights reserved.</p>
  `;
  return footer;
}
