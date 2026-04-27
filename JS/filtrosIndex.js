// ============================================
// FILTROS PARA INDEX.HTML - VERSIÓN INDEPENDIENTE
// ============================================

let estadoFiltrosIndex = {
    modo: 'normal',
    brillo: 100,
    contraste: 100,
    saturacion: 100,
    desenfoque: 0,
    pixelado: 0,
    ajusteR: 0,
    ajusteG: 0,
    ajusteB: 0
};

let canvasActivoIndex = false;
let animationIdIndex = null;
let videoIndex = null;
let canvasIndex = null;
let ctxIndex = null;

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    videoIndex = document.getElementById("videoInteractivo");
    if (videoIndex) {
        videoIndex.addEventListener('play', () => {
            if (necesitaCanvasIndex()) iniciarCanvasIndex();
        });
        videoIndex.addEventListener('pause', detenerCanvasIndex);
        videoIndex.addEventListener('ended', detenerCanvasIndex);
    }
});

// ============================================
// VERIFICAR SI NECESITA CANVAS
// ============================================
function necesitaCanvasIndex() {
    return estadoFiltrosIndex.pixelado > 0 || 
           estadoFiltrosIndex.modo === 'pixelado' ||
           estadoFiltrosIndex.modo === 'termica' ||
           estadoFiltrosIndex.ajusteR !== 0 ||
           estadoFiltrosIndex.ajusteG !== 0 ||
           estadoFiltrosIndex.ajusteB !== 0;
}

// ============================================
// LIMPIAR TODO
// ============================================
function detenerCanvasIndex() {
    if (animationIdIndex) {
        cancelAnimationFrame(animationIdIndex);
        animationIdIndex = null;
    }
    
    canvasActivoIndex = false;
    
    if (canvasIndex && canvasIndex.parentNode) {
        canvasIndex.style.display = 'none';
    }
    
    if (videoIndex) {
        videoIndex.style.display = 'block';
        videoIndex.style.filter = 'none';
    }
}

// ============================================
// APLICAR FILTRO PREDEFINIDO
// ============================================
function aplicarFiltroIndex(tipo) {
    detenerCanvasIndex();
    
    estadoFiltrosIndex = {
        modo: tipo,
        brillo: 100,
        contraste: 100,
        saturacion: 100,
        desenfoque: 0,
        pixelado: 0,
        ajusteR: 0,
        ajusteG: 0,
        ajusteB: 0
    };
    
    switch(tipo) {
        case 'normal':
            break;
        case 'desenfoque':
            estadoFiltrosIndex.desenfoque = 5;
            break;
        case 'pixelado':
            estadoFiltrosIndex.pixelado = 10;
            break;
        case 'termica':
            estadoFiltrosIndex.modo = 'termica';
            estadoFiltrosIndex.contraste = 150;
            estadoFiltrosIndex.saturacion = 200;
            break;
        case 'suavizado':
            estadoFiltrosIndex.desenfoque = 1;
            estadoFiltrosIndex.contraste = 95;
            estadoFiltrosIndex.brillo = 102;
            break;
        case 'pastel':
            estadoFiltrosIndex.saturacion = 130;
            estadoFiltrosIndex.contraste = 110;
            estadoFiltrosIndex.brillo = 105;
            break;
        case 'altaSaturacion':
            estadoFiltrosIndex.saturacion = 250;
            estadoFiltrosIndex.contraste = 120;
            break;
    }
    
    actualizarSlidersIndex();
    
    if (necesitaCanvasIndex() && videoIndex && !videoIndex.paused) {
        iniciarCanvasIndex();
    } else {
        aplicarFiltrosCSSIndex();
    }
    
    const botones = document.querySelectorAll(".btn-filtro");
    botones.forEach(btn => btn.classList.remove("active"));
    if (event && event.target) event.target.classList.add("active");
}

// ============================================
// ACTUALIZAR DESDE SLIDERS
// ============================================
function actualizarFiltrosIndex() {
    estadoFiltrosIndex.brillo = parseInt(document.getElementById('brilloIndex')?.value || 100);
    estadoFiltrosIndex.contraste = parseInt(document.getElementById('contrasteIndex')?.value || 100);
    estadoFiltrosIndex.saturacion = parseInt(document.getElementById('saturacionIndex')?.value || 100);
    estadoFiltrosIndex.desenfoque = parseInt(document.getElementById('desenfoqueIndex')?.value || 0);
    estadoFiltrosIndex.pixelado = parseInt(document.getElementById('pixeladoIndex')?.value || 0);
    
    if (estadoFiltrosIndex.modo !== 'normal') {
        estadoFiltrosIndex.modo = 'custom';
        const botones = document.querySelectorAll(".btn-filtro");
        botones.forEach(btn => btn.classList.remove("active"));
    }
    
    actualizarValoresMostradosIndex();
    
    if (necesitaCanvasIndex() && videoIndex && !videoIndex.paused) {
        iniciarCanvasIndex();
    } else {
        aplicarFiltrosCSSIndex();
    }
}

function actualizarAjusteColorIndex() {
    estadoFiltrosIndex.ajusteR = parseInt(document.getElementById('ajusteRIndex')?.value || 0);
    estadoFiltrosIndex.ajusteG = parseInt(document.getElementById('ajusteGIndex')?.value || 0);
    estadoFiltrosIndex.ajusteB = parseInt(document.getElementById('ajusteBIndex')?.value || 0);
    
    actualizarValoresMostradosIndex();
    
    if (estadoFiltrosIndex.modo !== 'normal') {
        estadoFiltrosIndex.modo = 'custom';
        const botones = document.querySelectorAll(".btn-filtro");
        botones.forEach(btn => btn.classList.remove("active"));
    }
    
    if (necesitaCanvasIndex() && videoIndex && !videoIndex.paused) {
        iniciarCanvasIndex();
    } else {
        aplicarFiltrosCSSIndex();
    }
}

// ============================================
// APLICAR FILTROS CSS
// ============================================
function aplicarFiltrosCSSIndex() {
    detenerCanvasIndex();
    
    if (!videoIndex) return;
    
    let filtroCSS = `
        brightness(${estadoFiltrosIndex.brillo}%)
        contrast(${estadoFiltrosIndex.contraste}%)
        saturate(${estadoFiltrosIndex.saturacion}%)
    `;
    
    if (estadoFiltrosIndex.desenfoque > 0) {
        filtroCSS += ` blur(${estadoFiltrosIndex.desenfoque}px)`;
    }
    
    videoIndex.style.filter = filtroCSS;
    videoIndex.style.display = 'block';
}

// ============================================
// APLICAR FILTROS CON CANVAS
// ============================================
function iniciarCanvasIndex() {
    if (!videoIndex || videoIndex.paused || videoIndex.ended) return;
    if (videoIndex.videoWidth === 0 || videoIndex.videoHeight === 0) return;
    
    detenerCanvasIndex();
    
    if (!canvasIndex) {
        canvasIndex = document.createElement('canvas');
        canvasIndex.id = 'canvas-filtro-index';
        canvasIndex.style.position = 'absolute';
        canvasIndex.style.top = '0';
        canvasIndex.style.left = '0';
        canvasIndex.style.width = '100%';
        canvasIndex.style.height = '100%';
        canvasIndex.style.objectFit = 'cover';
        canvasIndex.style.pointerEvents = 'none';
        
        const container = videoIndex.parentNode;
        container.style.position = 'relative';
        container.insertBefore(canvasIndex, videoIndex);
        ctxIndex = canvasIndex.getContext('2d');
    }
    
    canvasIndex.style.display = 'block';
    videoIndex.style.display = 'none';
    canvasActivoIndex = true;
    
    procesarFrameCanvasIndex();
}

function procesarFrameCanvasIndex() {
    if (!canvasActivoIndex || !videoIndex || videoIndex.paused || videoIndex.ended) {
        animationIdIndex = null;
        return;
    }
    
    if (videoIndex.videoWidth > 0 && videoIndex.videoHeight > 0) {
        try {
            canvasIndex.width = videoIndex.videoWidth;
            canvasIndex.height = videoIndex.videoHeight;
            canvasIndex.style.width = '100%';
            canvasIndex.style.height = 'auto';
            
            ctxIndex.drawImage(videoIndex, 0, 0, canvasIndex.width, canvasIndex.height);
            
            // PIXELADO
            const pixelSize = estadoFiltrosIndex.pixelado > 0 ? estadoFiltrosIndex.pixelado : 
                              (estadoFiltrosIndex.modo === 'pixelado' ? 10 : 0);
            
            if (pixelSize > 0) {
                const w = canvasIndex.width;
                const h = canvasIndex.height;
                const smallW = Math.max(1, Math.floor(w / pixelSize));
                const smallH = Math.max(1, Math.floor(h / pixelSize));
                
                const tempCanvas = document.createElement('canvas');
                const tempCtx = tempCanvas.getContext('2d');
                tempCanvas.width = smallW;
                tempCanvas.height = smallH;
                tempCtx.drawImage(canvasIndex, 0, 0, smallW, smallH);
                ctxIndex.imageSmoothingEnabled = false;
                ctxIndex.drawImage(tempCanvas, 0, 0, w, h);
            }
            
            // CÁMARA TÉRMICA
            if (estadoFiltrosIndex.modo === 'termica') {
                const imageData = ctxIndex.getImageData(0, 0, canvasIndex.width, canvasIndex.height);
                const data = imageData.data;
                
                for (let i = 0; i < data.length; i += 4) {
                    const intensity = (data[i] + data[i+1] + data[i+2]) / 3;
                    
                    if (intensity < 85) {
                        data[i] = 0;
                        data[i+1] = 0;
                        data[i+2] = 139;
                    } else if (intensity < 170) {
                        data[i] = 255;
                        data[i+1] = 165;
                        data[i+2] = 0;
                    } else {
                        data[i] = 255;
                        data[i+1] = 0;
                        data[i+2] = 0;
                    }
                }
                ctxIndex.putImageData(imageData, 0, 0);
            }
            
            // AJUSTE RGB
            if (estadoFiltrosIndex.ajusteR !== 0 || estadoFiltrosIndex.ajusteG !== 0 || estadoFiltrosIndex.ajusteB !== 0) {
                const imageData = ctxIndex.getImageData(0, 0, canvasIndex.width, canvasIndex.height);
                const data = imageData.data;
                
                for (let i = 0; i < data.length; i += 4) {
                    data[i] = Math.min(255, Math.max(0, data[i] + estadoFiltrosIndex.ajusteR));
                    data[i+1] = Math.min(255, Math.max(0, data[i+1] + estadoFiltrosIndex.ajusteG));
                    data[i+2] = Math.min(255, Math.max(0, data[i+2] + estadoFiltrosIndex.ajusteB));
                }
                ctxIndex.putImageData(imageData, 0, 0);
            }
            
            // BRILLO, CONTRASTE, SATURACIÓN
            if (estadoFiltrosIndex.brillo !== 100 || estadoFiltrosIndex.contraste !== 100 || estadoFiltrosIndex.saturacion !== 100) {
                const imageData = ctxIndex.getImageData(0, 0, canvasIndex.width, canvasIndex.height);
                const data = imageData.data;
                
                for (let i = 0; i < data.length; i += 4) {
                    let r = data[i];
                    let g = data[i+1];
                    let b = data[i+2];
                    
                    r = r * (estadoFiltrosIndex.brillo / 100);
                    g = g * (estadoFiltrosIndex.brillo / 100);
                    b = b * (estadoFiltrosIndex.brillo / 100);
                    
                    r = (r - 128) * (estadoFiltrosIndex.contraste / 100) + 128;
                    g = (g - 128) * (estadoFiltrosIndex.contraste / 100) + 128;
                    b = (b - 128) * (estadoFiltrosIndex.contraste / 100) + 128;
                    
                    if (estadoFiltrosIndex.saturacion !== 100) {
                        const gray = 0.299 * r + 0.587 * g + 0.114 * b;
                        r = gray + (r - gray) * (estadoFiltrosIndex.saturacion / 100);
                        g = gray + (g - gray) * (estadoFiltrosIndex.saturacion / 100);
                        b = gray + (b - gray) * (estadoFiltrosIndex.saturacion / 100);
                    }
                    
                    data[i] = Math.min(255, Math.max(0, r));
                    data[i+1] = Math.min(255, Math.max(0, g));
                    data[i+2] = Math.min(255, Math.max(0, b));
                }
                ctxIndex.putImageData(imageData, 0, 0);
            }
            
            if (estadoFiltrosIndex.desenfoque > 0 && estadoFiltrosIndex.modo !== 'termica') {
                canvasIndex.style.filter = `blur(${estadoFiltrosIndex.desenfoque}px)`;
            } else {
                canvasIndex.style.filter = 'none';
            }
            
        } catch (error) {
            console.warn('Error en canvas:', error);
            detenerCanvasIndex();
            aplicarFiltrosCSSIndex();
        }
    }
    
    if (canvasActivoIndex) {
        animationIdIndex = requestAnimationFrame(procesarFrameCanvasIndex);
    }
}

// ============================================
// ACTUALIZAR UI
// ============================================
function actualizarSlidersIndex() {
    const sliders = {
        'brilloIndex': estadoFiltrosIndex.brillo,
        'contrasteIndex': estadoFiltrosIndex.contraste,
        'saturacionIndex': estadoFiltrosIndex.saturacion,
        'desenfoqueIndex': estadoFiltrosIndex.desenfoque,
        'pixeladoIndex': estadoFiltrosIndex.pixelado,
        'ajusteRIndex': estadoFiltrosIndex.ajusteR,
        'ajusteGIndex': estadoFiltrosIndex.ajusteG,
        'ajusteBIndex': estadoFiltrosIndex.ajusteB
    };
    
    for (const [id, valor] of Object.entries(sliders)) {
        const slider = document.getElementById(id);
        if (slider) slider.value = valor;
    }
    
    actualizarValoresMostradosIndex();
}

function actualizarValoresMostradosIndex() {
    if (document.getElementById('valorBrilloIndex')) 
        document.getElementById('valorBrilloIndex').textContent = estadoFiltrosIndex.brillo + '%';
    if (document.getElementById('valorContrasteIndex')) 
        document.getElementById('valorContrasteIndex').textContent = estadoFiltrosIndex.contraste + '%';
    if (document.getElementById('valorSaturacionIndex')) 
        document.getElementById('valorSaturacionIndex').textContent = estadoFiltrosIndex.saturacion + '%';
    if (document.getElementById('valorDesenfoqueIndex')) 
        document.getElementById('valorDesenfoqueIndex').textContent = estadoFiltrosIndex.desenfoque + 'px';
    if (document.getElementById('valorPixeladoIndex')) 
        document.getElementById('valorPixeladoIndex').textContent = estadoFiltrosIndex.pixelado + 'px';
    if (document.getElementById('valorRIndex')) 
        document.getElementById('valorRIndex').textContent = estadoFiltrosIndex.ajusteR;
    if (document.getElementById('valorGIndex')) 
        document.getElementById('valorGIndex').textContent = estadoFiltrosIndex.ajusteG;
    if (document.getElementById('valorBIndex')) 
        document.getElementById('valorBIndex').textContent = estadoFiltrosIndex.ajusteB;
}

// ============================================
// RESETEAR FILTROS
// ============================================
function resetearFiltrosIndex() {
    detenerCanvasIndex();
    
    estadoFiltrosIndex = {
        modo: 'normal',
        brillo: 100,
        contraste: 100,
        saturacion: 100,
        desenfoque: 0,
        pixelado: 0,
        ajusteR: 0,
        ajusteG: 0,
        ajusteB: 0
    };
    
    actualizarSlidersIndex();
    
    if (videoIndex) {
        videoIndex.style.filter = 'none';
        videoIndex.style.display = 'block';
    }
    
    const botones = document.querySelectorAll(".btn-filtro");
    botones.forEach(btn => {
        btn.classList.remove("active");
        if (btn.textContent.includes('Normal')) {
            btn.classList.add("active");
        }
    });
}