const studies=JSON.parse(document.querySelector('#study-data').textContent);
const storageKey='kiduna.campfire-studies.v1.feedback';
const status=document.querySelector('#save-status');
let feedback={};
try{feedback=JSON.parse(localStorage.getItem(storageKey)||'{}');if(!feedback||typeof feedback!=='object'||Array.isArray(feedback))feedback={};}catch{status.textContent='Browser storage is unavailable. Download feedback before leaving.';}
function collect(){return Object.fromEntries(studies.map(s=>[s.id,{shortlisted:document.querySelector(`[data-shortlist="${s.id}"]`).checked,notes:document.querySelector(`[data-notes="${s.id}"]`).value}]));}
function save(){feedback=collect();try{localStorage.setItem(storageKey,JSON.stringify(feedback));status.textContent='Notes and shortlist saved in this browser.';}catch{status.textContent='Could not save in this browser. Download feedback to keep it.';}}
for(const s of studies){const item=feedback[s.id]||{};const note=document.querySelector(`[data-notes="${s.id}"]`);const shortlist=document.querySelector(`[data-shortlist="${s.id}"]`);note.value=typeof item.notes==='string'?item.notes:'';shortlist.checked=item.shortlisted===true;note.addEventListener('input',save);shortlist.addEventListener('change',save);}
document.querySelector('#download-notes').addEventListener('click',()=>{const values=collect();const lines=['KIDUNA — CAMPFIRE STYLE FEEDBACK','Four treatments · Version 1',''];for(const s of studies){const v=values[s.id];lines.push(`${s.id} — ${s.name}`,s.style,`Shortlisted: ${v.shortlisted?'Yes':'No'}`,v.notes||'(No notes yet)','');}const blob=new Blob([lines.join('\n')],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='kiduna-campfire-feedback-v1.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);});
const dialog=document.querySelector('#image-viewer');let current=0;let opener=null;
function show(index){current=index;const s=studies[index];document.querySelector('#viewer-count').textContent=`TREATMENT ${s.id} OF 04 · VERSION 1`;document.querySelector('#viewer-title').textContent=s.name;document.querySelector('#viewer-style').textContent=s.style;const img=document.querySelector('#viewer-img');img.src=`assets/campfire-studies/v1/${s.file}`;img.alt=`Treatment ${s.id}: ${s.name}. ${s.description}`;document.querySelector('#previous').disabled=index===0;document.querySelector('#next').disabled=index===studies.length-1;}
document.querySelectorAll('[data-open]').forEach(button=>button.addEventListener('click',()=>{opener=button;show(studies.findIndex(s=>s.id===button.dataset.open));dialog.showModal();document.body.classList.add('viewer-open');document.querySelector('#close-viewer').focus();}));
document.querySelector('#close-viewer').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{document.body.classList.remove('viewer-open');opener?.focus();});
document.querySelector('#previous').addEventListener('click',()=>{if(current>0)show(current-1);});
document.querySelector('#next').addEventListener('click',()=>{if(current<studies.length-1)show(current+1);});
dialog.addEventListener('keydown',e=>{if(e.key==='ArrowRight'&&current<studies.length-1){e.preventDefault();show(current+1);}if(e.key==='ArrowLeft'&&current>0){e.preventDefault();show(current-1);}});
const revisions={
 '4':{label:'Upright posture',alt:'Version 4: the red-haired mandolin player sits more upright with relaxed shoulders and refined proportions.'},
 '1':{label:'Original',alt:'Version 1: the original Art Nouveau woodland gathering.'},
 '2':{label:'Earlier edit',alt:'Version 2: the flute player has a warmer brown complexion; the red-haired woman has the earlier chin-supporting hand pose.'},
 '3':{label:'Mandolin',alt:'Version 3: the red-haired woman plays a small wooden mandolin beside the campfire; the flute player retains her approved brown complexion.'}
};
document.querySelectorAll('[data-revision]').forEach(button=>button.addEventListener('click',()=>{
 const version=button.dataset.revision;
 const path=`assets/campfire-studies/v${version}/03-woodland-ceremony.png`;
 document.querySelector('#revision-image').src=path;
 document.querySelector('#revision-link').href=path;
 document.querySelector('#revision-image').alt=revisions[version].alt;
 document.querySelector('#revision-status').textContent=`Viewing 03 · Version ${version} · ${revisions[version].label}`;
 document.querySelectorAll('[data-revision]').forEach(other=>other.setAttribute('aria-pressed',String(other===button)));
}));
