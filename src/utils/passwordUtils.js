// Utility function for password validation and navigation
export const validatePassword = (password, targetPath, navigate) => {
    if (password === "signal") {
      navigate(targetPath); // Navigate to the target path on successful password validation
    } else {
      alert("Incorrect password. Access denied.");
    }
  };