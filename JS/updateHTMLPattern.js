const fs = require('fs');
const file = 'd:/FCFM/OCTAVO SEMESTRE/Procesamiento de Imagenes/REPO/procesamientoImagenes/Proyecto/HTML/ar.html';
let html = fs.readFileSync(file, 'utf8');

const paises = ['sudafrica', 'corea', 'colombia', 'espana', 'japon', 'tunez', 'uruguay', 'uzbekistan'];
paises.forEach(p => {
    html = html.replace(`url="../MARCADORES/${p}.patt"`, `url="../MARCADORES/pattern-${p}-escudo.patt"`);
});

fs.writeFileSync(file, html, 'utf8');
console.log('ar.html updated with new pattern names');
