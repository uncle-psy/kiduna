// Progressive enhancement: the original illustration is always the base layer.
(() => {
  const art = document.querySelector('.hero-woodland .hero-art');
  const canvas = art?.querySelector('.forest-particles');
  const context = canvas?.getContext('2d');
  if (!context) return;

  const still = art.querySelector('img');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let visible = false;
  let ready = still.complete && still.naturalWidth > 0;
  let frame = 0;
  let previous = 0;
  let elapsed = 0;
  let width = 0;
  let height = 0;

  // A repeatable, sparse distribution keeps lights away from the faces.
  let seed = 47;
  const random = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
  const regions = [
    [.30, .72, .09, .29], [.06, .30, .35, .48],
    [.37, .58, .77, .93], [.76, .95, .13, .28],
  ];
  const flies = Array.from({length: 38}, (_, i) => {
    const [left, right, top, bottom] = regions[i % regions.length];
    return {x: left + random() * (right - left), y: top + random() * (bottom - top),
      phase: random() * Math.PI * 2, speed: 2.0 + random() * 1.5,
      size: .7 + random() * .65, cool: i % 7 === 0};
  });
  const embers = Array.from({length: 18}, () => ({
    x: .676 + random() * .033, offset: random(), life: 2.5 + random() * 3,
    drift: (random() - .5) * .055, rise: .15 + random() * .14,
  }));
  // Reflections are anchored only to open water in the approved artwork.
  const water = [
    [.099,.661,.014], [.118,.678,.018], [.084,.690,.013], [.102,.708,.02],
    [.133,.651,.012], [.154,.483,.012], [.141,.499,.016],
    [.260,.903,.014], [.281,.930,.020], [.295,.948,.018],
    [.321,.972,.022], [.243,.914,.013], [.272,.959,.016],
  ];
  const sprites = ['255,211,113', '118,226,228'].map(color => {
    const sprite = document.createElement('canvas');
    sprite.width = sprite.height = 48;
    const ctx = sprite.getContext('2d');
    const light = ctx.createRadialGradient(24,24,0,24,24,24);
    light.addColorStop(0, `rgba(${color},1)`);
    light.addColorStop(.12, `rgba(${color},.85)`);
    light.addColorStop(.3, `rgba(${color},.22)`);
    light.addColorStop(1, `rgba(${color},0)`);
    ctx.fillStyle = light;
    ctx.fillRect(0,0,48,48);
    return sprite;
  });

  function resize() {
    const bounds = art.getBoundingClientRect();
    width = bounds.width;
    height = bounds.height;
    // Bound the backing buffer on Retina displays; the image stays full resolution.
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio,0,0,ratio,0,0);
  }

  function paint(time) {
    frame = requestAnimationFrame(paint);
    if (previous && time - previous < 1000 / 30) return;
    elapsed += previous ? Math.min((time - previous) / 1000, .1) : 0;
    previous = time;
    context.clearRect(0,0,width,height);
    context.globalCompositeOperation = 'lighter';
    const scale = Math.max(.5, width / 1672);

    for (const fly of flies) {
      const pulse = Math.pow(Math.max(0, Math.sin(elapsed * fly.speed + fly.phase)), 1.5);
      const x = (fly.x + Math.sin(elapsed * .65 + fly.phase) * .036 + Math.sin(elapsed * 1.1 + fly.phase) * .008) * width;
      const y = (fly.y + Math.cos(elapsed * .78 + fly.phase) * .028) * height;
      const radius = (10 + fly.size * 5) * scale;
      context.globalAlpha = pulse * .95;
      context.drawImage(sprites[fly.cool ? 1 : 0], x-radius,y-radius,radius*2,radius*2);
      context.fillStyle = fly.cool ? '#dcffff' : '#fff3bd';
      context.beginPath();
      context.arc(x,y,Math.max(.65,fly.size * 1.3 * scale),0,Math.PI*2);
      context.fill();
    }

    // Small translucent flame tongues follow the painted fire, not the people.
    for (let i = 0; i < 6; i++) {
      const phase = elapsed * (3.1 + i * .17) + i * 2.4;
      const baseX = (.651 + i * .013) * width;
      const baseY = (.711 - Math.sin(i) * .005) * height;
      const flameHeight = (.065 + Math.sin(i * 1.9) * .018 + (1 + Math.sin(phase)) * .022) * height;
      const breadth = (.007 + (i % 2) * .003) * width;
      const bend = Math.sin(phase * .83) * .009 * width;
      const tipX = baseX + bend;
      const tipY = baseY - flameHeight;
      const heat = context.createLinearGradient(baseX,baseY,tipX,tipY);
      heat.addColorStop(0,'rgba(255,248,179,.65)');
      heat.addColorStop(.38,'rgba(255,197,51,.52)');
      heat.addColorStop(.8,'rgba(255,119,18,.3)');
      heat.addColorStop(1,'rgba(255,178,50,0)');
      context.globalAlpha = .62 + Math.sin(phase) * .17;
      context.fillStyle = heat;
      context.beginPath();
      context.moveTo(baseX - breadth,baseY);
      context.bezierCurveTo(baseX - breadth * 1.3,baseY - flameHeight * .43,
        tipX + breadth * .5,tipY + flameHeight * .38,tipX,tipY);
      context.bezierCurveTo(tipX + breadth * 1.8,tipY + flameHeight * .37,
        baseX + breadth * 1.2,baseY - flameHeight * .23,baseX + breadth,baseY);
      context.closePath();
      context.fill();
    }

    for (const ember of embers) {
      const progress = (elapsed / ember.life + ember.offset) % 1;
      const x = (ember.x + progress * ember.drift + Math.sin(progress * 9) * .003) * width;
      const y = (.669 - progress * ember.rise) * height;
      const radius = (6 - progress * 3) * scale;
      context.globalAlpha = Math.sin(progress * Math.PI) * .9;
      context.drawImage(sprites[0],x-radius,y-radius,radius*2,radius*2);
    }

    context.lineCap = 'round';
    water.forEach(([x,y,length], i) => {
      const wave = Math.sin(elapsed * .7 + i * 1.8);
      context.globalAlpha = .035 + .11 * ((wave + 1) / 2);
      context.strokeStyle = i % 3 ? '#c4e5e5' : '#ffd48b';
      context.lineWidth = Math.max(.5, 1.1 * scale);
      const shift = Math.sin(elapsed * .3 + i) * .002;
      context.beginPath();
      context.moveTo((x + shift - length/2) * width, y * height);
      context.quadraticCurveTo((x + shift) * width,(y + wave * .0008) * height,
        (x + shift + length/2) * width,y * height);
      context.stroke();
    });
    context.globalAlpha = 1;
  }

  function sync() {
    const state = motion.matches ? 'reduced' : document.hidden ? 'hidden' :
      !visible ? 'offscreen' : !ready ? 'loading' : 'running';
    art.dataset.motion = state;
    if (state === 'running' && !frame) {
      previous = 0;
      frame = requestAnimationFrame(paint);
    } else if (state !== 'running') {
      cancelAnimationFrame(frame);
      frame = 0;
      previous = 0;
      context.clearRect(0,0,width,height);
    }
  }

  resize();
  new ResizeObserver(resize).observe(art);
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    sync();
  }, {threshold: 0}).observe(art);
  motion.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  window.addEventListener('pagehide', () => {visible = false; sync();});
  window.addEventListener('pageshow', () => {
    const bounds = art.getBoundingClientRect();
    visible = bounds.bottom > 0 && bounds.top < innerHeight;
    sync();
  });
  still.addEventListener('load', () => {ready = true; sync();}, {once:true});
  sync();
})();
