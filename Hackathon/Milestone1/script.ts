function toggleSection(contentId: string): void {
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.toggle('hidden');
    }
}

export {}; 