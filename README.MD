# Shipili Color Blind (CB) Lens 🎨👁️

> *A modern, GPU-accelerated browser extension designed to assist users with Color Vision Deficiency (CVD)*

**Shipili CB-Lens** applies real-time color correction filters to web pages, enabling users with various types of color blindness to distinguish colors more effectively. Built with performance, accessibility, and privacy at its core.

---

## 📦 Installation

### Install from Browser Stores

<table>
<tr>
<td align="center" width="50%">
<a href="https://chromewebstore.google.com/detail/shipili-cb-lens/kgaldpdafbndppmgfmnhmjnnphcpfemd?authuser=0&hl=en">
<img src="https://img.shields.io/badge/Chrome-Available-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Chrome Web Store"/>
</a>
<br/>
<sub>Chrome, Edge, Brave & Chromium browsers</sub>
</td>
<td align="center" width="50%">
<a href="https://addons.mozilla.org/en-US/firefox/addon/shipili-cb-lens/">
<img src="https://img.shields.io/badge/Firefox-Available-FF7139?style=for-the-badge&logo=firefox&logoColor=white" alt="Firefox Add-ons"/>
</a>
<br/>
<sub>Firefox & Firefox-based browsers</sub>
</td>
</tr>
</table>

### Install Manually (Developer Mode)

For developers or users who prefer to install from source:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/shipili-cb-lens.git
   cd shipili-cb-lens
   ```

2. **Load in Chrome/Edge/Brave:**
   - Navigate to `chrome://extensions/`
   - Enable **"Developer mode"** (top right corner)
   - Click **"Load unpacked"**
   - Select the cloned repository folder

3. **Load in Firefox:**
   - Navigate to `about:debugging#/runtime/this-firefox`
   - Click **"Load Temporary Add-on"**
   - Select the `manifest.json` file from the repository

---

## 🚀 Features

### ✨ Comprehensive Color Vision Support
- **Protanopia (Red-Blind):** Corrects red-green confusion by enhancing red channel perception
- **Deuteranopia (Green-Blind):** Adjusts green channel to improve red-green differentiation
- **Tritanopia (Blue-Blind):** Modifies blue-yellow perception for clearer color distinction
- **Achromatopsia (Monochromacy):** Enhances luminance contrast for grayscale vision

### 🎚️ Customizable Intensity Control
Fine-tune correction strength from 0-100% with a real-time slider, allowing personalized adjustment based on your specific color vision needs.

### 🎨 Modern, Accessible Interface
- Clean, minimalist design prioritizing usability
- **WCAG 2.1 AA compliant** for maximum accessibility
- High contrast UI elements for easy navigation
- Intuitive controls requiring no technical knowledge

### ⚡ Zero Performance Impact
- **GPU-accelerated rendering** via SVG filters ensures smooth 60fps scrolling
- No canvas manipulation or CPU-intensive processing
- Instant filter application with zero latency
- Works seamlessly on image-heavy and dynamic websites

### 🔒 Privacy-First Design
- **100% local processing** - all corrections happen in your browser
- **Zero data collection** - no analytics, tracking, or telemetry
- **No external servers** - your browsing activity remains completely private
- **Open source** - fully auditable codebase

---

## 🛠️ Technical Architecture

### Built on Modern Web Standards

#### 1. **Manifest V3 Architecture**
We leverage Chrome's latest extension platform for enhanced security and performance:
- **Remote code prohibition:** All code is bundled locally, preventing injection attacks
- **Service worker architecture:** Efficient background processing with automatic lifecycle management
- **Strict Content Security Policy (CSP):** Protection against XSS and code injection vulnerabilities
- **Declarative permissions:** Minimal permission requests with clear user consent

#### 2. **SVG feColorMatrix Technology**
Unlike traditional pixel manipulation approaches, we use mathematical color space transformation:
- **Matrix-based correction:** Each CVD type uses a scientifically-validated transformation matrix
- **Real-time interpolation:** The intensity slider smoothly blends between identity matrix (normal vision) and correction matrix
- **GPU hardware acceleration:** Browsers offload filter processing to the graphics card, ensuring:
  - Consistent 60fps performance on all page types
  - No frame drops during scrolling or animations
  - Minimal battery impact on mobile devices
- **Dynamic DOM injection:** Filters are applied as reusable SVG elements, avoiding redundant processing

#### 3. **WCAG 2.1 Level AA Compliance**
Accessibility is not just for users—it's built into the tool itself:
- **Minimum 4.5:1 contrast ratios** for all text elements
- **Keyboard navigation support** for all interactive controls
- **Screen reader compatibility** with proper ARIA labels
- **Focus indicators** for clear navigation feedback

---

## 🎯 How It Works

1. **Detection:** The extension monitors active tabs for user activation
2. **Filter Selection:** User selects CVD type and adjusts intensity via popup interface
3. **Matrix Calculation:** JavaScript interpolates between identity and correction matrices based on intensity
4. **SVG Injection:** A lightweight SVG filter is injected into the page's DOM
5. **CSS Application:** The filter is applied to the entire page via CSS `filter` property
6. **GPU Rendering:** The browser's graphics engine applies the transformation in real-time

---

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and development process.

---

## 💖 Support the Project

**Shipili CB-Lens** is free and open-source, maintained by volunteers who are passionate about web accessibility. Your support helps us:
- Keep the extension compatible with the latest browser updates
- Add new features and CVD correction modes
- Improve accuracy through ongoing research
- Maintain hosting and development infrastructure

### 🪙 Cryptocurrency Donations

If this tool has improved your browsing experience, please consider supporting its development:

| Currency | Network | Address |
|:---------|:--------|:--------|
| **Bitcoin (BTC)** | Bitcoin | `bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh` |
| **Tether (USDT)** | TRC20 (Tron) | `TGCVbSSJbwfV5stNjuXpAVLcdxUQo1KfNL` |
| **Tether (USDT)** | ERC20 (Ethereum) | `0x8b99F3660622e21f2910ECCA7fBe51d654a1517D` |
| **Tether (USDT)** | BEP20 (Binance Smart Chain) | `0x8b99F3660622e21f2910ECCA7fBe51d654a1517D` |

> ⚠️ **Important:** Always verify the correct network before sending cryptocurrency. Transactions cannot be reversed!

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for full details.

**TL;DR:** You can freely use, modify, and distribute this software, even for commercial purposes, as long as you include the original license and copyright notice.

---

## 🙏 Acknowledgments

- Color correction matrices based on research from [Vischeck](http://www.vischeck.com/) and [Coblis](https://www.color-blindness.com/coblis-color-blindness-simulator/)
- Special thanks to the CVD community for feedback and testing
- Built with love for a more inclusive web

---

## 📞 Contact & Support

- **Issues:** [GitHub Issues](https://github.com/yourusername/shipili-cb-lens/issues)
- **Discussions:** [GitHub Discussions](https://github.com/yourusername/shipili-cb-lens/discussions)


---

<div align="center">

**Made with ❤️ for a more accessible web**

⭐ *If this project helps you, please consider giving it a star on GitHub!* ⭐

</div>