function downloadResume() {
  const btn = document.querySelector('.btn-dl');

  btn.innerHTML =
    '<i class="ti ti-loader" aria-hidden="true"></i> Downloading...';

  btn.style.background = '#0339A6';

  setTimeout(() => {
    const a = document.createElement('a');

    a.href = 'assets/YuvaRajResume.pdf';

    a.download = 'YuvaRajResume.pdf';

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    btn.innerHTML =
      '<i class="ti ti-check" aria-hidden="true"></i> Downloaded!';

    btn.style.background = '#16A34A';

    setTimeout(() => {
      btn.innerHTML =
        '<i class="ti ti-download" aria-hidden="true"></i> Download Resume PDF';

      btn.style.background = '#054ADA';
    }, 2500);
  }, 1000);
}