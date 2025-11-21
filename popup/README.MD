# Shipili CB-Lens 👁️🎨

> *A modern, GPU-accelerated browser extension to assist users with Color Vision Deficiency (CVD).*

*Shipili CB-Lens* applies real-time color correction filters to web pages, allowing users with various types of color blindness to distinguish colors more effectively. It is built with performance and accessibility at its core.

---

* 🚀 Features*

*   *Full Spectrum Support:* Correction modes for *Protanopia* (Red-Blind), *Deuteranopia* (Green-Blind), *Tritanopia* (Blue-Blind), and *Achromatopsia* (Monochromacy).
*   *Adjustable Intensity:* A 0-100% slider to fine-tune the correction strength based on user preference.
*   *Modern UI:* A clean, minimalist interface designed with accessibility in mind (WCAG compliant).
*   *Zero Latency:* Uses SVG filters for GPU-accelerated rendering, ensuring no impact on page scroll performance.
*   *Privacy First:* Runs entirely locally. No data is collected or sent to external servers.

---

* 🛠️ Technical Standards*

This project adheres to the latest web development standards to ensure security, performance, and longevity:

* 1. Chrome Manifest V3*
We utilize the latest *Manifest V3* architecture, which offers:
*   Enhanced security by disallowing remotely hosted code.
*   Better performance through service workers.
*   Strict Content Security Policy (CSP) compliance.

* 2. SVG feColorMatrix Technology*
Instead of processing pixels via Canvas (which is slow), we inject an SVG filter into the DOM.
*   *Matrix Interpolation:* The intensity slider mathematically interpolates between the identity matrix (normal vision) and the color-correction matrix.
*   *GPU Acceleration:* The browser handles these filters on the GPU, ensuring smooth 60fps scrolling.

* 3. WCAG 2.1 Compliance*
The extension's popup and settings pages are designed following *Web Content Accessibility Guidelines (WCAG)* to ensure high contrast and readability.

---

* 📥 Installation (Developer Mode)*

Since this is an open-source project, you can load it directly into Chrome/Edge/Brave:

1.  *Clone the repository:*
2.  Open your browser and navigate to chrome://extensions/.
3.  Enable *"Developer mode"* in the top right corner.
4.  Click *"Load unpacked"*.
5.  Select the folder where you cloned this repository.

---

* 🤝 Support the Project*

Shipili CB-Lens is free and open-source. Maintaining the project, keeping it compatible with browser updates, and adding new features requires time and resources.

If this tool helps you see the world better, please consider supporting its development. *Your support keeps the project alive!* ❤️

* 🪙 Crypto Donations*

Please ensure you select the correct *Network* before sending.

| Currency | Network | Address |
| :--- | :--- | :--- |
| *Bitcoin (BTC)* | Bitcoin | bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh |
| *Tether (USDT)* | *TRC20* (Tron) | TGCVbSSJbwfV5stNjuXpAVLcdxUQo1KfNL |
| *Tether (USDT)* | *ERC20* (Ethereum) | 0x8b99F3660622e21f2910ECCA7fBe51d654a1517D |
| *Tether (USDT)* | *BEP20* (BSC) | 0x8b99F3660622e21f2910ECCA7fBe51d654a1517D |

---

* 📄 License*

This project is licensed under the *MIT License* - see the [LICENSE](LICENSE) file for details.

---

*Made with ❤️ for a more accessible web.*
