(()=>{
  const canvas=document.getElementById('bg');
  const ctx=canvas.getContext('2d');
  let W=canvas.width=innerWidth, H=canvas.height=innerHeight;
  const TAU=Math.PI*2;
  window.addEventListener('resize',()=>{W=canvas.width=innerWidth;H=canvas.height=innerHeight});
  // particles
  class P{constructor(x,y,vx,vy,r,h,l){Object.assign(this,{x,y,vx,vy,r,h,l})}
    step(dt){this.x+=this.vx*dt;this.y+=this.vy*dt;this.l-=dt*0.06;}
    alive(){return this.l>0 && this.x>-100 && this.x<W+100 && this.y>-100 && this.y<H+100}
    draw(ctx){ctx.beginPath();ctx.fillStyle=`hsla(${this.h},100%,60%,${Math.max(0,this.l)})`;
      ctx.shadowColor=`hsla(${this.h},100%,60%,${Math.max(0,this.l)})`;
      ctx.shadowBlur=24;ctx.arc(this.x,this.y,this.r,0,TAU);ctx.fill();}
  }
  const parts=[];
  function spawn(x,y,spread=80,count=8){for(let i=0;i<count;i++){const a=Math.random()*TAU;const s=0.4+Math.random()*1.6;const vx=Math.cos(a)* (Math.random()*spread+40)/80;const vy=Math.sin(a)* (Math.random()*spread+40)/80;const r=2+Math.random()*6;const h=160+Math.random()*200;const l=0.8+Math.random()*1.2;parts.push(new P(x,y,vx*s,vy*s,r,h,l))}} 
  // continuous ambient particles






























})();  addEventListener('keydown',e=>{if(e.key.toLowerCase()==='h')location.href='/';});  // keyboard accessibility: press H for home  document.getElementById('go-home').addEventListener('click',e=>{e.preventDefault();location.href='/';});  // small UX: 'Take me home' returns to root  setInterval(ambientTick,160);  requestAnimationFrame(draw);  for(let i=0;i<60;i++)spawn(Math.random()*W,Math.random()*H,180,1);  // initial ambient seeds  }    requestAnimationFrame(draw);    if(heading){const rect=heading.getBoundingClientRect();const cx=rect.left+rect.width/2;const cy=rect.top+rect.height/2;const dx=(mx-cx)/40, dy=(my-cy)/40;heading.style.transform=`translate(${dx}px,${dy}px)`}    // heading parallax    ctx.save();ctx.globalAlpha=0.04;ctx.strokeStyle='#00eaff';ctx.lineWidth=1;for(let x=0;x<W;x+=60){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}for(let y=0;y<H;y+=60){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}ctx.restore();    // subtle grid lines for neon tech vibe    ctx.globalCompositeOperation='lighter';for(const p of parts)p.draw(ctx);ctx.globalCompositeOperation='source-over';    // draw using additive blending    const now=performance.now();const dt=1;for(let i=parts.length-1;i>=0;i--){const p=parts[i];p.step(dt);if(!p.alive())parts.splice(i,1);}    // update particles    for(let i=0;i<3;i++){ctx.beginPath();const cx=W* (0.2+0.6*Math.sin(t* (0.8+i*0.6) + i));const cy=H* (0.3+0.3*Math.cos(t* (0.6+i*0.4)));const rad=200+Math.sin(t* (1.2+i))*120;const hue=200+i*60;const grd=ctx.createRadialGradient(cx,cy,20,cx,cy,rad);grd.addColorStop(0,`hsla(${hue},100%,60%,0.12)`);grd.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=grd;ctx.fillRect(cx-rad,cy-rad,rad*2,rad*2)}    const t=Date.now()*0.0006;    // animated radial flares    const g=ctx.createLinearGradient(0,0,W,H);g.addColorStop(0,'rgba(8,6,15,1)');g.addColorStop(1,'rgba(2,2,8,1)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);    // subtle gradient background overlay  function draw(ts){ctx.clearRect(0,0,W,H);  // parallax for 404 heading
  const heading=document.querySelector('.glitch');  addEventListener('click',e=>{spawn(e.clientX,e.clientY,140,24)});  addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;spawn(mx,my,60,2)});  let mx=W/2,my=H/2;  // mouse interactionn  function ambientTick(){if(parts.length<160 && Math.random()<0.35){const edge=Math.random();if(edge<0.25)spawn(Math.random()*W, -20,200,1);else if(edge<0.5)spawn(Math.random()*W,H+20,200,1);else if(edge<0.75)spawn(-20,Math.random()*H,200,1);else spawn(W+20,Math.random()*H,200,1)} }