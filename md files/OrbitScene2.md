<!DOCTYPE html>
<html lang="bg">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI Growth Stack</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; }
  html, body {
    margin: 0; padding: 0;
    background: #050409;
    font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  }
  body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 28px 16px;
  }

  .wrap { width: 100%; display: flex; justify-content: center; }

  .stage {
    position: relative;
    width: 640px;
    height: 566px;
    flex-shrink: 0;
    transform-origin: top center;
    border-radius: 22px;
    overflow: hidden;
    background:
      radial-gradient(560px 420px at 18% -6%, rgba(107,74,226,0.30), rgba(107,74,226,0) 60%),
      radial-gradient(520px 420px at 88% 104%, rgba(90,64,220,0.26), rgba(90,64,220,0) 60%),
      linear-gradient(160deg, #110f1f 0%, #0a0914 45%, #0c0a18 100%);
    border: 1px solid rgba(255,255,255,0.07);
    box-shadow: 0 40px 90px rgba(0,0,0,0.55);
  }

  .noise-vignette {
    position: absolute; inset: 0;
    box-shadow: inset 0 0 120px rgba(0,0,0,0.45);
    pointer-events: none;
  }

  svg.connectors { position: absolute; inset: 0; width: 640px; height: 566px; }
  .center-icon { position: absolute; left: 200px; top: 140px; width: 240px; height: 220px; }

  .card {
    position: absolute;
    background: rgba(21,19,34,0.66);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    padding: 14px 18px 16px;
    box-shadow: 0 14px 34px rgba(0,0,0,0.35);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .card .icon-box {
    width: 38px; height: 38px;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 11px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  }
  .card .icon-box svg { width: 19px; height: 19px; }
  .card h3 {
    margin: 0 0 4px;
    font-size: 15.5px;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: -0.01em;
  }
  .card p {
    margin: 0;
    font-size: 12.5px;
    line-height: 1.45;
    font-weight: 400;
    color: #9791ac;
  }

  .ic-green   { background: #26c46a; }
  .ic-slate   { background: #262f4c; }
  .ic-violet  { background: #241f3d; }
  .ic-coral   { background: #e6566f; }

  /* --- card placements --- */
  #card-ai      { left: 214px; top: 24px;  width: 210px; }
  #card-lead    { left: 6px;   top: 176px; width: 188px; }
  #card-out     { left: 428px; top: 176px; width: 206px; }
  #card-ugc     { left: 48px;  top: 354px; width: 214px; }
  #card-pp      { left: 378px; top: 354px; width: 214px; }
</style>
</head>
<body>

<div class="wrap">
  <div class="stage" id="stage">

    <svg class="connectors" viewBox="0 0 640 566" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="#8f7ce8" stroke-opacity="0.1" stroke-width="1">
        <polygon points="320,150 540,266 320,382 100,266"/>
        <polygon points="320,190 460,266 320,342 180,266"/>
      </g>
      <g fill="none" stroke="#8f7ce8" stroke-opacity="0.4" stroke-width="1.4">
        <path d="M320,140 L320,198"/>
        <path d="M194,220 L213,220 L213,242 L232,242"/>
        <path d="M430,220 L418,220 L418,242 L408,242"/>
        <path d="M266,398 L252,398 L252,290 L232,290"/>
        <path d="M374,398 L388,398 L388,290 L408,290"/>
      </g>
    </svg>

    <div class="center-icon">
      <svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <linearGradient id="diamondGrad" x1="0" y1="50" x2="0" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#f2ecff"/>
            <stop offset="30%" stop-color="#b9a0f7"/>
            <stop offset="65%" stop-color="#7c5cf0"/>
            <stop offset="100%" stop-color="#4433b8"/>
          </linearGradient>
          <filter id="glowBlur" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="10"/>
          </filter>
          <clipPath id="topFacetClip">
            <polygon points="120,58 208,102 120,146 32,102"/>
          </clipPath>
        </defs>

        <g filter="url(#glowBlur)" opacity="0.7">
          <polygon points="120,58 208,102 120,146 32,102" fill="#8b5cf6"/>
          <polygon points="120,82 208,126 120,170 32,126" fill="#7c4dff"/>
          <polygon points="120,106 208,150 120,194 32,150" fill="#6d4fe0"/>
        </g>

        <polygon points="120,106 208,150 120,194 32,150" fill="url(#diamondGrad)" fill-opacity="0.55" stroke="#9b83f0" stroke-width="1.3" stroke-opacity="0.8"/>
        <line x1="32" y1="150" x2="32" y2="126" stroke="#9b83f0" stroke-width="1.1" stroke-opacity="0.55"/>
        <line x1="208" y1="150" x2="208" y2="126" stroke="#9b83f0" stroke-width="1.1" stroke-opacity="0.55"/>

        <polygon points="120,82 208,126 120,170 32,126" fill="url(#diamondGrad)" fill-opacity="0.7" stroke="#a98cf5" stroke-width="1.3" stroke-opacity="0.85"/>
        <line x1="32" y1="126" x2="32" y2="102" stroke="#a98cf5" stroke-width="1.1" stroke-opacity="0.6"/>
        <line x1="208" y1="126" x2="208" y2="102" stroke="#a98cf5" stroke-width="1.1" stroke-opacity="0.6"/>

        <polygon points="120,58 208,102 120,146 32,102" fill="#241f3d"/>
        <image href="https://mrq02oy9yi.ufs.sh/f/MjT0Ey7Y1AFNhoy6fH3FlD2JrvZNO0sSxTX8m1ofitkCjbp4" xlink:href="https://mrq02oy9yi.ufs.sh/f/MjT0Ey7Y1AFNhoy6fH3FlD2JrvZNO0sSxTX8m1ofitkCjbp4" x="32" y="52" width="176" height="100" preserveAspectRatio="xMidYMid slice" clip-path="url(#topFacetClip)"/>
        <polygon points="120,58 208,102 120,146 32,102" fill="none" stroke="#e3d8ff" stroke-width="1.6"/>
        <polygon points="120,74 166,102 120,130 74,102" fill="none" stroke="#ffffff" stroke-opacity="0.45" stroke-width="1.1"/>
      </svg>
    </div>

    <!-- AI Support -->
    <div class="card" id="card-ai">
      <div class="icon-box ic-green">
        <svg viewBox="0 0 24 24" fill="none" stroke="#0c1a12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          <circle cx="7.5" cy="11.5" r="1" fill="#0c1a12" stroke="none"/>
          <circle cx="11.5" cy="11.5" r="1" fill="#0c1a12" stroke="none"/>
          <circle cx="15.5" cy="11.5" r="1" fill="#0c1a12" stroke="none"/>
        </svg>
      </div>
      <h3>AI Support</h3>
      <p>отговори за секунди</p>
    </div>

    <!-- Lead Finder -->
    <div class="card" id="card-lead">
      <div class="icon-box ic-slate">
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      </div>
      <h3>Lead Finder</h3>
      <p>точните компании и хора</p>
    </div>

    <!-- Outreach -->
    <div class="card" id="card-out">
      <div class="icon-box ic-violet">
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m22 2-7 20-4-9-9-4Z"/>
          <path d="M22 2 11 13"/>
        </svg>
      </div>
      <h3>Outreach</h3>
      <p>персонализиран follow&#8209;up</p>
    </div>

    <!-- UGC Content -->
    <div class="card" id="card-ugc">
      <div class="icon-box ic-green">
        <svg viewBox="0 0 24 24" fill="none" stroke="#0c1a12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polygon points="10 8 16 12 10 16 10 8" fill="#0c1a12"/>
        </svg>
      </div>
      <h3>UGC Content</h3>
      <p>повече рекламни тестове</p>
    </div>

    <!-- Post-Purchase -->
    <div class="card" id="card-pp">
      <div class="icon-box ic-coral">
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
      </div>
      <h3>Post-Purchase</h3>
      <p>повече повторни покупки</p>
    </div>

    <div class="noise-vignette"></div>
  </div>
</div>

<script>
  function fitStage() {
    var wrap = document.querySelector('.wrap');
    var stage = document.getElementById('stage');
    var available = wrap.clientWidth;
    var scale = Math.min(1, available / 640);
    stage.style.transform = 'scale(' + scale + ')';
    wrap.style.height = (566 * scale) + 'px';
  }
  window.addEventListener('resize', fitStage);
  fitStage();
</script>

</body>
</html>