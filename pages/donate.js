document.addEventListener('DOMContentLoaded', function() {
  
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const address = this.getAttribute('data-address');
      
      // Use Clipboard API
      navigator.clipboard.writeText(address).then(function() {
        // Success Feedback
        const originalText = btn.textContent;
        btn.textContent = "Copied!";
        btn.classList.add('copied');

        // Reset after 2 seconds
        setTimeout(function() {
          btn.textContent = originalText;
          btn.classList.remove('copied');
        }, 2000);

      }).catch(function(err) {
        console.error('Copy failed:', err);
        // Fallback for older permissions or context issues
        alert('Please manually select and copy the address.');
      });
    });
  });

});
