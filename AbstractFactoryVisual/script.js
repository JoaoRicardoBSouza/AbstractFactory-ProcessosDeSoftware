var FAMILIES = {
  windows:{label:"Windows", factory:"WindowsFactory", botao:"BotaoWindows", check:"CheckboxWindows", style:"Windows", color:"#2457d6"},
  mac:{label:"Mac", factory:"MacFactory", botao:"BotaoMac", check:"CheckboxMac", style:"Mac", color:"#8b5cf6"},
  linux:{label:"Linux", factory:"LinuxFactory", botao:"BotaoLinux", check:"CheckboxLinux", style:"Linux", color:"#e95420"}
};
var order = ["windows", "mac"];
var current = "windows";
var running = false;
var newest = null;

var elFam = document.getElementById("families");
var elCode = document.getElementById("code");
var elPrev = document.getElementById("preview");
var elLog = document.getElementById("log");
var elMatrix = document.getElementById("matrix");
var btnRun = document.getElementById("run");

function renderFamilies(){
  elFam.innerHTML = "";
  order.forEach(function(key){
    var b = document.createElement("button");
    b.type = "button"; b.className = "fam";
    b.textContent = FAMILIES[key].label;
    b.setAttribute("aria-pressed", key === current);
    b.addEventListener("click", function(){ select(key); });
    elFam.appendChild(b);
  });
}

function renderMatrix(){
  var h = "<tr><th>Fábrica</th><th>Botao</th><th>Checkbox</th></tr>";
  order.forEach(function(key){
    var f = FAMILIES[key];
    var cls = (key === current ? "active" : "") + (key === newest ? " new" : "");
    h += '<tr class="' + cls + '" style="--c:' + f.color + '"><td>' + f.factory + "</td><td>" + f.botao + "</td><td>" + f.check + "</td></tr>";
  });
  elMatrix.innerHTML = h;
  newest = null;
}

function select(key){
  if (running) return;
  current = key;
  renderFamilies();
  update();
  elLog.innerHTML = '<span class="line">Fábrica trocada. Clique em “Executar aplicação”.</span>';
}

function update(){
  var f = FAMILIES[current];
  elPrev.setAttribute("data-f", current);
  elCode.innerHTML =
    '<span class="k">public static void</span> main(String[] args) {\n' +
    '    Aplicacao app = <span class="k">new</span> Aplicacao(<span class="k">new</span> <span class="hl">' + f.factory + '</span>());\n' +
    '    app.renderizar();\n}';
  renderMatrix();
}

function sleep(ms){ return new Promise(function(r){ setTimeout(r, ms); }); }
function addLine(text, cls){
  var s = document.createElement("span");
  s.className = "line" + (cls ? " " + cls : "");
  s.textContent = text;
  elLog.appendChild(s);
}
async function run(){
  if (running) return;
  running = true; btnRun.disabled = true;
  var f = FAMILIES[current];
  elLog.innerHTML = "";
  var logs = [
    ["=== Aplicação com tema " + f.style + " ===", ""],
    ["new Aplicacao(new " + f.factory + "())", ""],
    ["criarBotao() → " + f.botao + " | criarCheckbox() → " + f.check, ""],
    ["Renderizando um botão no estilo " + f.style, "ok"],
    ["Renderizando um checkbox no estilo " + f.style, "ok"]
  ];
  for (var i = 0; i < logs.length; i++){
    addLine(logs[i][0], logs[i][1]);
    await sleep(550);
  }
  elPrev.classList.remove("flash"); void elPrev.offsetWidth; elPrev.classList.add("flash");
  running = false; btnRun.disabled = false;
}

document.getElementById("add").addEventListener("click", function(){
  if (order.indexOf("linux") === -1) order.push("linux");
  newest = "linux";
  this.disabled = true;
  document.getElementById("addNote").hidden = false;
  renderFamilies();
  renderMatrix();
});
btnRun.addEventListener("click", run);
document.getElementById("demoCheck").addEventListener("click", function(){
  this.setAttribute("aria-checked", this.getAttribute("aria-checked") !== "true");
});

renderFamilies();
update();
