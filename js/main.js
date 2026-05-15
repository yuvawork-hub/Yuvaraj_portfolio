function openLink(url) {
  window.open(url, '_blank');
}

function downloadResume() {
  const btn = document.querySelector('.btn-dl');
  btn.innerHTML = '<i class="ti ti-loader" aria-hidden="true"></i> Generating PDF...';
  btn.style.background = '#0339A6';

  setTimeout(() => {
    const content = `ARJUN SHARMA
Senior Flutter Developer
arjun.sharma@email.com | +91 98765 43210 | Bangalore, India
github.com/arjun-sharma | linkedin.com/in/arjun-sharma-flutter

EXPERIENCE
─────────────────────────────────────────────────────
Senior Flutter Developer — Zephyr Technologies, Bangalore
Jan 2023 – Present
• Lead developer for fintech super-app (800K+ MAU)
• Architected BLoC state management & Hive local storage
• Built custom design system used by 3 product squads

Flutter Developer — Nexlab Solutions, Chennai
Jul 2021 – Dec 2022
• Built & maintained 6 client apps (e-commerce, healthcare)
• Integrated Stripe payments, Firebase Cloud Messaging

Mobile App Intern — Frizz Studio, Remote
Jan 2021 – Jun 2021
• Developed features for social media Flutter app
• MVVM architecture, unit & widget tests, App Store CI/CD

SKILLS
─────────────────────────────────────────────────────
Languages: Dart, Kotlin, Python, JavaScript
Frameworks: Flutter, React Native, Node.js
State Mgmt: BLoC, Riverpod, Provider, GetX
Backend: Firebase, Supabase, REST API, GraphQL
Tools: Git, Fastlane, GitHub Actions, Figma, Postman

PROJECTS
─────────────────────────────────────────────────────
PayMint — Fintech App (github.com/arjun-sharma/paymint)
HealthTraq — Fitness Tracker (github.com/arjun-sharma/healthtraq)
ShopWave — E-Commerce (github.com/arjun-sharma/shopwave)
Chatty — Realtime Messenger (github.com/arjun-sharma/chatty)
Learnly — EdTech Platform (github.com/arjun-sharma/learnly)
FlutterShell — OSS Template 340+ ⭐ (github.com/arjun-sharma/fluttershell)

EDUCATION
─────────────────────────────────────────────────────
B.Tech Computer Science — VIT University (2017–2021)`;

    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'Yuvaraj_Flutter_Developer_Resume.txt';
    a.click();

    btn.innerHTML = '<i class="ti ti-check" aria-hidden="true"></i> Downloaded!';
    btn.style.background = '#16A34A';

    setTimeout(() => {
      btn.innerHTML = '<i class="ti ti-download" aria-hidden="true"></i> Download Resume PDF';
      btn.style.background = '#054ADA';
    }, 2500);
  }, 1200);
}