function downloadCV() {
    // Replace with your resume file URL
    const cvFile = "resume.pdf"; 
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Shrutu_Resume.pdf";
    link.click();
}
