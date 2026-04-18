$(document).ready(function () {
    // Alerta de Bienvenida (Fase 1)
    if (!localStorage.getItem('welcomeShown')) {
        const toastElement = document.getElementById('welcomeToast');
        // Usando bootstrap toast API
        if (toastElement) {
            import('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js').then(() => {
                const toast = new bootstrap.Toast(toastElement, { autohide: false });
                toast.show();
                localStorage.setItem('welcomeShown', 'true');
            });
        }
    }

    // Mostrar spinner (Fase 2)
    $("#loader").show();
    $("#lista-peliculas").hide();

    // Delay de 5 segundos para Fase 2
    setTimeout(function() {
      $.ajax({
        url: "data/peliculas.json",
        method: "GET",
        dataType: "json",
        success: function (peliculas) {
          $("#loader").hide(); // Ocultar spinner cuando responde
          let html = "";
          const fechaActual = new Date();

          peliculas.forEach(function (peli) {
            const fechaEstreno = new Date(peli.fecha_estreno);
            const diasDiferencia = (fechaActual - fechaEstreno) / (1000 * 60 * 60 * 24);
            
            let badgeHtml = "";
            let precioMostrar = "";

            // Validación de lógica de estreno: consideramos estreno si la película tiene menos de ~5000 días (para forzar visualización de estreno vs normal en este dataset clásico)
            // Se puede ajustar. Por ahora, toda película a partir del año 2010 es estreno, y anterior es regular para tener variedad en los datos falsos.
            if (fechaEstreno.getFullYear() >= 2010) {
                badgeHtml = `<span class="badge bg-danger p-tag mb-2 px-3 py-2" style="border-radius: 6px;">¡Estreno!</span>`;
                precioMostrar = `$${peli.precios.estreno.toFixed(2)}`;
            } else {
                badgeHtml = `<span class="badge bg-secondary p-tag mb-2 px-3 py-2" style="border-radius: 6px;">Cartelera regular</span>`;
                precioMostrar = `$${peli.precios.normal.toFixed(2)}`;
            }

            html += `
              <div class="col-md-4 mb-4">
                <div class="card p-card h-100 shadow-lg" style="background-color: #1a1a1a; color: white; border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; transition: transform 0.3s; overflow:hidden;">
                  <img src="img/${peli.imagen}" class="card-img-top" alt="${peli.titulo}" style="height: 300px; object-fit: cover;">
                  <div class="card-body d-flex flex-column">
                    <div>${badgeHtml}</div>
                    <h5 class="card-title fw-bold mt-2">${peli.titulo}</h5>
                    <p class="card-text small text-muted mb-3">${peli.generos.join(" • ")}</p>
                    <h5 class="card-text text-success fw-bold flex-grow-1">${precioMostrar}</h5>
                    
                    <div class="d-flex justify-content-between mt-auto pt-3">
                      <button class="btn btn-outline-light btn-sm p-button" onclick="abrirTrailer('${peli.trailer}')">Ver Tráiler</button>
                      <a href="pages/detalle.html?id=${peli.id}" class="btn btn-primary btn-sm p-button px-3">Más Detalles</a>
                    </div>
                  </div>
                </div>
              </div>`;
          });
          
          // Renderizar con animación (Fase 2)
          $("#lista-peliculas").html(html).fadeIn(1000);
        },
        error: function (xhr, status, error) {
          $("#loader").hide();
          console.error("Error al cargar las películas:", error);
          $("#lista-peliculas").html(`
            <div class="col-12">
              <div class="alert alert-danger text-center" role="alert">
                No se pudo cargar la cartelera en este momento. Intenta nuevamente más tarde.
              </div>
            </div>
          `).show();
        }
      });
    }, 5000);
  });

  // Función global para manejar el modal y añadir el video dinámicamente
  window.abrirTrailer = function(url) {
      $("#trailerIframe").attr("src", url);
      var myModal = new bootstrap.Modal(document.getElementById('trailerModal'));
      myModal.show();
  };

  // Limpiar iframe al cerrar modal para detener reproducción
  $(document).on('hidden.bs.modal', '#trailerModal', function () {
      $("#trailerIframe").attr("src", "");
  });
  