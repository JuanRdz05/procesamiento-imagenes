const fs = require('fs');
const file = 'd:/FCFM/OCTAVO SEMESTRE/Procesamiento de Imagenes/REPO/procesamientoImagenes/Proyecto/HTML/ar.html';
let html = fs.readFileSync(file, 'utf8');

// 1. Remove menu-overlay
const menuStart = html.indexOf('<div id="menu-overlay">');
const menuEndMatch = html.indexOf('<div id="ar-wrapper">');
if (menuStart > -1 && menuEndMatch > -1) {
    html = html.slice(0, menuStart) + html.slice(menuEndMatch);
}

// 2. Replace a-marker
const markerStart = html.indexOf('<a-marker');
const markerEndMatch = html.indexOf('</a-marker>');
if (markerStart > -1 && markerEndMatch > -1) {
    const markerEnd = markerEndMatch + 11;
    const entityContainer = `
					<!-- Contenedor del modelo que se reasignará dinámicamente -->
					<a-entity id="modelo-container" visible="false">
						<a-entity id="modelo-bandera" position="0 0 0" scale="0.1 0.1 0.1" visible="true"></a-entity>
						<a-plane id="plano-respaldo" position="0 0 0" rotation="-90 0 0" width="2" height="1.3" visible="false"></a-plane>
					</a-entity>`;
    
    const markers = ['sudafrica', 'corea', 'colombia', 'espana', 'japon', 'tunez', 'uruguay', 'uzbekistan'].map(p => `
					<a-marker type="pattern" url="../MARCADORES/${p}.patt" id="marker-${p}" class="pais-marker" data-pais="${p}" smooth="true" smoothCount="5"></a-marker>`).join('');
    
    html = html.slice(0, markerStart) + entityContainer + markers + '\n\t\t\t\t\t' + html.slice(markerEnd);
}

fs.writeFileSync(file, html, 'utf8');
console.log('ar.html updated');
