export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 64; // Adjust this based on your navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}; 