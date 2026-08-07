<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Reach Smart</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    font-family: 'Poppins', system-ui, -apple-system, sans-serif;
    padding: 48px 20px;
  }

  .diagram {
    position: relative;
    width: 100%;
    max-width: 860px;
    aspect-ratio: 1 / 1;
    container-type: inline-size;
  }

  .connectors {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .circle {
    position: absolute;
    left: 50%;
    top: 51%;
    transform: translate(-50%, -50%);
    width: 33cqw;
    height: 33cqw;
    border-radius: 50%;
    overflow: hidden;
    background: linear-gradient(140deg, #3d5afe 0%, #6039e8 55%, #8b2ff0 100%);
    box-shadow:
      0 1.6cqw 2.8cqw rgba(63, 30, 130, 0.35),
      inset 0 -1.4cqw 2cqw rgba(15, 5, 45, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .circle::before {
    content: "";
    position: absolute;
    top: 6%;
    left: 10%;
    width: 50%;
    height: 34%;
    background: radial-gradient(ellipse at center, rgba(255,255,255,0.5), rgba(255,255,255,0) 72%);
    border-radius: 50%;
  }

  .circle .label {
    position: relative;
    display: flex;
    flex-direction: column;
    color: #fff;
    font-weight: 800;
    font-size: clamp(22px, 5.6cqw, 54px);
    line-height: 1.02;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    text-shadow: 0 0.4cqw 1cqw rgba(20, 5, 65, 0.55);
  }

  .card {
    position: absolute;
    width: 32cqw;
    background: linear-gradient(135deg, #8a7cba 0%, #4c3f80 100%);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 2cqw;
    box-shadow: 0 1cqw 2.2cqw rgba(45, 20, 95, 0.25);
    display: flex;
    align-items: center;
    gap: 1.3cqw;
    padding: 1.6cqw 1.7cqw;
    z-index: 2;
  }

  .card .icon-tile {
    flex: none;
    width: 5.8cqw;
    height: 5.8cqw;
    border-radius: 1.5cqw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card .icon-tile svg { width: 55%; height: 55%; }

  .card .text { min-width: 0; flex: 1 1 auto; }

  .card .text h3 {
    margin: 0 0 0.2em;
    font-size: clamp(12px, 2.3cqw, 23px);
    font-weight: 700;
    color: #fff;
    line-height: 1.15;
  }

  .card .text p {
    margin: 0;
    font-size: clamp(8.5px, 1.3cqw, 13px);
    font-weight: 600;
    color: rgba(255, 255, 255, 0.92);
    text-transform: uppercase;
    letter-spacing: 0.02em;
    line-height: 1.3;
  }

  .card.top { left: 50%; top: 12cqw; transform: translateX(-50%); }
  .card.left { left: 1.5cqw; top: 33cqw; }
  .card.right { right: 1.5cqw; top: 33cqw; }
  .card.bottom-left { left: 1.5cqw; top: 70.5cqw; }
  .card.bottom-right { right: 1.5cqw; top: 70.5cqw; }

  @media (prefers-reduced-motion: no-preference) {
    .card, .circle { animation: rsFade 0.6s ease backwards; }
    .card.left, .card.right { animation-delay: 0.12s; }
    .card.bottom-left, .card.bottom-right { animation-delay: 0.24s; }
  }
  @keyframes rsFade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
</head>
<body>

<section class="diagram" aria-label="Reach Smart platform overview">
  <svg class="connectors" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" fill="none" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#C9BBF2" stroke-opacity="0.7" stroke-width="0.32" stroke-linecap="round" stroke-linejoin="round">
      <path d="M48.5,23 L48.5,34.5"/>
      <path d="M50,23 L50,34.5"/>
      <path d="M51.5,23 L51.5,34.5"/>

      <path d="M33.5,37.25 H40.5 V46.5 H34"/>
      <path d="M33.5,38.75 H42 V48 H34"/>
      <path d="M33.5,40.25 H43.5 V49.5 H34"/>

      <path d="M66.5,37.25 H59.5 V46.5 H66"/>
      <path d="M66.5,38.75 H58 V48 H66"/>
      <path d="M66.5,40.25 H56.5 V49.5 H66"/>

      <path d="M33.5,74.75 H40.5 V55.5 H34"/>
      <path d="M33.5,76.25 H42 V57 H34"/>
      <path d="M33.5,77.75 H43.5 V58.5 H34"/>

      <path d="M66.5,74.75 H59.5 V55.5 H66"/>
      <path d="M66.5,76.25 H58 V57 H66"/>
      <path d="M66.5,77.75 H56.5 V58.5 H66"/>
    </g>
  </svg>

  <div class="card top">
    <div class="icon-tile" style="background:#2c2318;">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style="color:#F2C14E;" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4.5" width="18" height="12" rx="3.5" stroke="currentColor" stroke-width="1.8"/>
        <path d="M8 16.5 L5 20 L5 16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="8.5" cy="10.5" r="1" fill="currentColor"/>
        <circle cx="12" cy="10.5" r="1" fill="currentColor"/>
        <circle cx="15.5" cy="10.5" r="1" fill="currentColor"/>
      </svg>
    </div>
    <div class="text">
      <h3>AI Support</h3>
      <p>Answers in seconds</p>
    </div>
  </div>

  <div class="card left">
    <div class="icon-tile" style="background:#111a2e;">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style="color:#6FC3F7;" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="8" r="3.2" stroke="currentColor" stroke-width="1.8"/>
        <path d="M3.5 19c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        <circle cx="16.5" cy="7.5" r="2.4" stroke="currentColor" stroke-width="1.6"/>
        <path d="M14.8 13.2c2.6.2 4.7 2.2 4.7 5.3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="text">
      <h3>Lead Finder</h3>
      <p>The right companies and people</p>
    </div>
  </div>

  <div class="card right">
    <div class="icon-tile" style="background:#1e1330;">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style="color:#B79CF0;" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 3 L3 10.5 L10 13.2 L14.5 21 L21 3 Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
        <path d="M21 3 L10 13.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="text">
      <h3>Outreach</h3>
      <p>Personalized follow up</p>
    </div>
  </div>

  <div class="card bottom-left">
    <div class="icon-tile" style="background:#17161a;">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style="color:#ffffff;" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.7"/>
        <path d="M10 8.3 L16 12 L10 15.7 Z" fill="currentColor"/>
      </svg>
    </div>
    <div class="text">
      <h3>UGC Content</h3>
      <p>More ad tests</p>
    </div>
  </div>

  <div class="card bottom-right">
    <div class="icon-tile" style="background:#1e1330;">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style="color:#B79CF0;" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 4 H5.5 L7 15 H18 L20.5 7 H6.3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="9" cy="19" r="1.3" fill="currentColor"/>
        <circle cx="16.5" cy="19" r="1.3" fill="currentColor"/>
      </svg>
    </div>
    <div class="text">
      <h3>Post-Purchase</h3>
      <p>More repeat purchases</p>
    </div>
  </div>

  <div class="circle">
    <div class="label"><span>Reach</span><span>Smart</span></div>
  </div>
</section>

</body>
</html>