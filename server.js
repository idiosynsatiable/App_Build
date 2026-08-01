const http=require('http');
const fs=require('fs');
const path=require('path');
const PORT=process.env.PORT||3000;
const root=__dirname;
const types={'.html':'text/html; charset=utf-8','.jpg':'image/jpeg','.json':'application/json; charset=utf-8'};
http.createServer((req,res)=>{
  let url;
  try{url=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{return end(400,'text/plain','Bad request')}
  if(url==='/health') return end(200,'application/json; charset=utf-8',JSON.stringify({ok:true,service:'beaulieu-persian-boutique'}));
  if(url==='/') url='/index.html';
  const file=path.join(root,path.normalize(url).replace(/^(\.\.[/\\])+/,''));
  if(!file.startsWith(root)) return end(403,'text/plain','Forbidden');
  fs.readFile(file,(err,data)=>{
    if(err){fs.readFile(path.join(root,'index.html'),(e,fallback)=>end(e?404:200,'text/html; charset=utf-8',e?'Not found':fallback));return}
    end(200,types[path.extname(file).toLowerCase()]||'application/octet-stream',data);
  });
  function end(status,type,body){res.writeHead(status,{'Content-Type':type,'X-Content-Type-Options':'nosniff'});res.end(body)}
}).listen(PORT,'0.0.0.0',()=>console.log(`Beaulieu site live on ${PORT}`));
