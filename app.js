function getApps(){
  return JSON.parse(localStorage.getItem('applications')||'[]');
}
function saveApps(apps){
  localStorage.setItem('applications',JSON.stringify(apps));
}
function generateId(){
  return 'SK-'+Date.now().toString(36).toUpperCase();
}
function showToast(msg,type='success'){
  const t=document.createElement('div');
  t.style.cssText='position:fixed;top:20px;right:20px;padding:12px 16px;border-radius:8px;background:'+(type==='success'?'#22c55e':'#ef4444')+';color:#fff;z-index:300;box-shadow:0 4px 12px rgba(0,0,0,0.15);font-weight:500;';
  t.textContent=msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(),3000);
}
function initDemo(){
  if(!localStorage.getItem('applications')){
    const demo=[
      {id:'SK-DEMO1',name:'Aisha Kumar',email:'aisha@example.com',type:'student',date:'2025-07-20T10:00:00Z',status:'pending'},
      {id:'SK-DEMO2',name:'Ravi Nair',email:'ravi@example.com',type:'teacher',date:'2025-07-18T14:00:00Z',status:'accepted'},
      {id:'SK-DEMO3',name:'Meera Iyer',email:'meera@example.com',type:'student',date:'2025-07-15T09:00:00Z',status:'rejected'}
    ];
    saveApps(demo);
  }
}
if(document.readyState!=='loading') initDemo();
else document.addEventListener('DOMContentLoaded',initDemo);
