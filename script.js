document.addEventListener('DOMContentLoaded', () => {
    const glossary = [
        
        { term: '1. Beaker', translation: 'Vaso de precipitados', definition: 'Description: A cylindrical container used for mixing, heating, and measuring liquids. | Descripción: Un recipiente cilíndrico utilizado para mezclar, calentar y medir líquidos.', image: 'https://tecfresh.com/wp-content/uploads/LPO-2.jpg' },
        { term: '2. Bunsen burner', translation: 'Mechero Bunsen', definition: 'Description: A device that produces a flame for heating substances. | Descripción: Un dispositivo que produce una llama para calentar sustancias.', image: 'https://previews.123rf.com/images/bsd555/bsd5552011/bsd555201102895/159646198-icono-de-color-rgb-del-mechero-bunsen-instrumento-de-laboratorio-calentamiento-esterilizaci%C3%B3n-y.jpg' },
        { term: '3. Test tube', translation: 'Tubo de ensayo', definition: 'Description: A cylindrical glass tube closed at one end, used for holding small samples. | Descripción: Un cilindro de vidrio cerrado en un extremo, utilizado para contener muestras pequeñas.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh44lSe2AyyfkiBA_UB_e9ByOZWeYNzLZoXw&s' },
        { term: '4. Pipette', translation: 'Pipeta', definition: 'Description: An instrument used to measure and transfer liquids from one container to another. | Descripción: Un instrumento utilizado para medir y transferir líquidos de un recipiente a otro.', image: 'https://kitlab.exa.unicen.edu.ar/pipeta.jpg' },
        { term: '5. Graduated cylinder', translation: 'Probeta graduada', definition: 'Description: A glass cylinder with graduation marks for measuring the volume of liquids. | Descripción: Un cilindro de vidrio con marcas de graduación para medir el volumen de líquidos.', image: 'https://tecfresh.com/wp-content/uploads/produc50-ML.jpg' },
        { term: '6. Microscope', translation: 'Microscopio', definition: 'Description: An instrument used to see very small objects not visible to the naked eye. | Descripción: Un instrumento utilizado para ver objetos muy pequeños que no son visibles a simple vista.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlIIJXzFP6saCD4rZ29OyCeBbR0XhaWU9HvA&s' },
        { term: '7. Centrifuge', translation: 'Centrífuga', definition: 'Description: A machine that separates particles of different densities in a sample by spinning it at high speed. | Descripción: Una máquina que separa partículas de diferentes densidades en una muestra girándola a alta velocidad.', image: 'https://www.tplaboratorioquimico.com/wp-content/uploads/2015/03/centrifuga.jpg' },
        { term: '8. Petri dish', translation: 'Placa de Petri', definition: 'Description: A shallow dish used to culture bacteria and other microorganisms. | Descripción: Un plato poco profundo utilizado para cultivar bacterias y otros microorganismos.', image: 'https://www.tplaboratorioquimico.com/wp-content/uploads/2014/12/placa_de_petri-300x200.jpg' },
        { term: '9. Stirring rod', translation: 'Varilla de agitación', definition: 'Description: A glass stick used for mixing solutions. | Descripción: Un palo de vidrio utilizado para mezclar soluciones.', image: 'https://www.tplaboratorioquimico.com/wp-content/uploads/2015/01/varilla_de_agitacion.jpg' },
        { term: '10. Thermometer', translation: 'Termómetro', definition: 'Description: An instrument that measures temperature. | Descripción: Un instrumento que mide la temperatura.', image: 'https://www.tplaboratorioquimico.com/wp-content/uploads/2015/02/termometro-1.jpg' },
        { term: '11. Erlenmeyer flask', translation: 'Matraz Erlenmeyer', definition: 'Description: A glass container with a wide base and narrow neck, used for mixing and storing liquids. | Descripción: Un recipiente de vidrio con base ancha y cuello estrecho, utilizado para mezclar y almacenar líquidos.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zuY8xb-3e7cXhJVbspAGfTV7WXTmIbnjWg&s' },
        { term: '12. Fume hood', translation: 'Campana de extracción', definition: 'Description: A ventilation device that removes hazardous fumes from the laboratory. | Descripción: Un dispositivo de ventilación que elimina vapores peligrosos del laboratorio.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdEchR9Z-gJ4PAnu_dft8JfXjzY2955cuGg&s' },
        { term: '13. Autoclave', translation: 'Autoclave', definition: 'Description: A machine that sterilizes equipment and supplies using high-pressure steam. | Descripción: Una máquina que esteriliza equipos y suministros mediante vapor a alta presión.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-vtUM7iMZWi6pTkldZZJX9Y1tL_DiiMLFw&s' },
        { term: '14. Spectrophotometer', translation: 'Espectrofotómetro', definition: 'Description: A device that measures the amount of light absorbed by a sample. | Descripción: Un dispositivo que mide la cantidad de luz absorbida por una muestra.', image: 'https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2023-06/espectrofotometros.jpg' },
        { term: '15. Hot plate', translation: 'Placa calefactora', definition: 'Description: An apparatus used to heat substances. | Descripción: Un aparato utilizado para calentar sustancias.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntp4gqYbBWAynUE0sJcqu8H7CPqwBuHM-Mw&s' },
        { term: '16. Balances', translation: 'Balanzas', definition: 'Description: Instruments used to measure the mass of objects. | Descripción: Instrumentos utilizados para medir la masa de objetos.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEnp71S7xaZFrDKV24Gkm4RTyqni2_R_5ZBw&s' },
        { term: '17. Lab coat', translation: 'Bata de laboratorio', definition: 'Description: A protective garment worn by scientists to prevent contamination. | Descripción: Una prenda protectora utilizada por los científicos para evitar la contaminación.', image: 'https://anadeshop.com/media/catalog/product/cache/1/image/600x/9df78eab33525d08d6e5fb8d27136e95/a/n/anade-batas-laboratorio-hombre-automaticos.jpg' },
        { term: '18. Gloves', translation: 'Guantes', definition: 'Description: Garments that cover the hands to protect them from hazardous substances. | Descripción: Prendas que cubren las manos para protegerlas de sustancias peligrosas.', image: 'https://solmeglas.com/wp-content/uploads/2023/03/purezero-ultraviolet.png' },
        { term: '19. Safety goggles', translation: 'Gafas de seguridad', definition: 'Description: Eye protection used to prevent eye injuries. | Descripción: Protección ocular utilizada para prevenir lesiones en los ojos.', image: 'https://www.tecnilab.es/wp-content/uploads/2021/07/gafas_seguridad-300x300.jpeg' },
        { term: '20. Reagent', translation: 'Reactivo', definition: 'Description: A substance used in a chemical reaction to detect, measure, examine, or produce other substances. | Descripción: Una sustancia utilizada en una reacción química para detectar, medir, examinar o producir otras sustancias.', image: 'https://www.uv.es/=gammmm/Subsitio%20Operaciones/images/reactivos_solidos.jpg' },
        { term: '21. pH meter', translation: 'Medidor de pH', definition: 'Description: A device that measures the acidity or alkalinity of a solution. | Descripción: Un dispositivo que mide la acidez o alcalinidad de una solución.', image: 'https://omegaperu.com.pe/wp-content/uploads/imagenes/productos/electroquimica/medidor-ph-150-kit.jpg' },
        { term: '22. Dropper', translation: 'Cuentagotas', definition: 'Description: A small tube with a narrow opening used to transfer small amounts of liquid. | Descripción: Un pequeño tubo con una abertura estrecha para transferir pequeñas cantidades de líquido.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSec9BllnKtvOlzennz08SAYqecaTD7hlEM1Q&s' },
        { term: '23. Filter paper', translation: 'Papel de filtro', definition: 'Description: A semipermeable paper used to filter solids from liquids. | Descripción: Un papel semipermeable utilizado para filtrar sólidos de líquidos.', image: 'https://www.tplaboratorioquimico.com/wp-content/uploads/2015/01/papel_filtro.jpg' },
        { term: '24. Magnetic stirrer', translation: 'Agitador magnético', definition: 'Description: A device that uses a magnetic field to mix solutions. | Descripción: Un dispositivo que utiliza un campo magnético para mezclar soluciones.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE_7Q0A3lcI8NuPqu62Gb8DV5Ef_tcj4Ef3A&s' },
        { term: '25. Volumetric flask', translation: 'Matraz volumétrico', definition: 'Description: A calibrated flask used to prepare solutions of precise volumes. | Descripción: Un frasco calibrado utilizado para preparar soluciones de volúmenes precisos.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6_lflVHcBPcv3oXqEDhkaJ8njj5HZODkCw&s' },
        { term: '26. Burette', translation: 'Bureta', definition: 'Description: A graduated tube used to dispense precise volumes of liquids. | Descripción: Un tubo graduado utilizado para dispensar volúmenes precisos de líquidos.', image: 'https://www.tplaboratorioquimico.com/wp-content/uploads/2014/12/bureta1-1-1.jpg' },
        { term: '27. Mortar and pestle', translation: 'Mortero y mano', definition: 'Description: A utensil used to grind and mix substances. | Descripción: Un utensilio utilizado para triturar y mezclar sustancias.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTHEoimU5Zvq-fa4xIvBv2-GEMqAJ8E2Riqw&s' },
        { term: '28. Laboratory notebook', translation: 'Cuaderno de laboratorio', definition: 'Description: A notebook used to record experiments and observations. | Descripción: Un cuaderno utilizado para registrar experimentos y observaciones.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoy5LWOEzTPVNdgTPZiMis0owG4vVX_7AmPQ&s' },
        { term: '29. Lab bench', translation: 'Mesa de laboratorio', definition: 'Description: A work surface in a laboratory. | Descripción: Una superficie de trabajo en un laboratorio.', image: 'https://quimilab.com/wp-content/uploads/2020/10/SLIMFIT.jpg' },
        { term: '30. Aspirator', translation: 'Aspirador', definition: 'Description: A device used to suction liquids. | Descripción: Un dispositivo utilizado para succionar líquidos.', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyLPEtKK0uu4QMDgti6gpdbInxF4ZZmDa2kkKt-RvT8sy9NRuimsdPrKkKWrUcvq6Tl3fbnIH4rDYg_gPC2mWo3eqGQB1S3dWHenPMPsHkfupY5JPV0QcofjWgRm7WbNGM3FLKIvKiV-8/s1600/IMG_7786+25.jpg' },
        { term: '31. Tongs', translation: 'Pinzas', definition: 'Description: Tools used to grasp and manipulate hot or hazardous objects. | Descripción: Herramientas utilizadas para agarrar y manipular objetos calientes o peligrosos.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxAZlWR3wNY3H5nKzZp_YOv_GKI6t2ndJQZQ&s' },
        { term: '32. Wash bottle', translation: 'Frasco lavador', definition: 'Description: A bottle used to wash lab equipment with a stream of water. | Descripción: Un frasco utilizado para lavar equipos de laboratorio con una corriente de agua.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvAU7_dSzDnKbUu9x_4ZtaslEHlpXbx62f4w&s' },
        { term: '33. Deionized water', translation: 'Agua desionizada', definition: 'Description: Purified water that has had its ions removed. | Descripción: Agua purificada que ha sido despojada de sus iones.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwfkx2-3AwSGt5obLrJ93slot3WmUUN8hF2w&s' },
        { term: '34. Analytical balance', translation: 'Balanza analítica', definition: 'Description: A high-precision balance used to measure very small masses. | Descripción: Una balanza de alta precisión utilizada para medir masas muy pequeñas.', image: 'https://armotec.pe/storage/media/large_dN1lmp4qXzdvsxqDHnkOKdjs7Ruw5TbtOwYFXWP0.jpg' },
        { term: '35. Sample', translation: 'Muestra', definition: 'Description: A small amount of material used for analysis or experimentation. | Descripción: Una pequeña cantidad de material utilizada para análisis o experimentación.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThfSj8B8EaU7JpBRvQb6ZNoBm85Rg0E-i0eA&s' },
        { term: '36. Cuvette', translation: 'Cubeta', definition: 'Description: A small glass or plastic tube used in a spectrophotometer. | Descripción: Un pequeño tubo de vidrio o plástico utilizado en un espectrofotómetro.', image: 'https://www.auxilab.es/controles/ObtenerImagen.ashx?f=%5C00%5C03%5Cc3%5C9i_HJM004_5_7_10.jpg' },
        { term: '37. Laminar flow hood', translation: 'Cabina de flujo laminar', definition: 'Description: A workspace that provides a particle-free environment for handling sensitive samples. | Descripción: Un espacio de trabajo que proporciona un ambiente sin partículas para la manipulación de muestras sensibles.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkYYsN7Cgzkd-f4gYvnS0G_DrVmKx87kCKw&s' },
        { term: '38. Staining', translation: 'Tinción', definition: 'Description: The process of adding color to cells or tissues for microscopic observation. | Descripción: El proceso de agregar color a las células o tejidos para observarlos bajo un microscopio.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0J4i9eH81uWO6nhVx-SCFCECI_NJQ5IHAw&s' },
        { term: '39. Dissection kit', translation: 'Kit de disección', definition: 'Description: A set of tools used to dissect organisms. | Descripción: Un conjunto de herramientas utilizadas para diseccionar organismos.', image: 'https://www.grupocastillo.com.pe/wp-content/uploads/2021/12/estuche-de-diseccion.jpg' },
        { term: '40. Incinerator', translation: 'Incinerador', definition: 'Description: A device used to burn biological waste. | Descripción: Un dispositivo utilizado para quemar desechos biológicos.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdYizBp9hFzb2Npq2wdGpCC7bha4tH3wo8A&s' },
        { term: '41. Culture medium', translation: 'Medio de cultivo', definition: 'Description: A substance that provides nutrients for the growth of microorganisms. | Descripción: Una sustancia que proporciona nutrientes para el crecimiento de microorganismos.', image: 'https://viresa.com.mx/content/files/blog/2021/28_tiposdemedios/07.jpg' },
        { term: '42. Electrophoresis', translation: 'Electroforesis', definition: 'Description: A technique used to separate molecules based on size and charge. | Descripción: Una técnica utilizada para separar moléculas según su tamaño y carga.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs9K2OwkhrONwjZUe_iHJ90X5jq91qlWdWHQ&s' },
        { term: '43. Sterilization', translation: 'Esterilización', definition: 'Description: The process of eliminating all microorganisms from an object or surface. | Descripción: El proceso de eliminar todos los microorganismos de un objeto o superficie.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDAmsDpitXz6FIFHSl8n4-0Evg0_rU0DcPoA&s' },
        { term: '44. Inoculating loop', translation: 'Asa de inoculación', definition: 'Description: A tool used to transfer microorganisms to a culture medium. | Descripción: Una herramienta utilizada para transferir microorganismos a un medio de cultivo.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPa5-uIG6xXgueGj3GugbgAP03K7KllzoPg&s' },
        { term: '45. Cryogenic freezer', translation: 'Congelador criogénico', definition: 'Description: A device used to store samples at extremely low temperatures. | Descripción: Un dispositivo utilizado para almacenar muestras a temperaturas extremadamente bajas.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmqQQGXsaELw6LhqSnhhCAmltEW_HJl6Few&s' },
        { term: '46. PCR machine', translation: 'Máquina de PCR', definition: 'Description: A device used to amplify specific DNA sequences. | Descripción: Un dispositivo utilizado para amplificar secuencias específicas de ADN.', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Eppendorf_Mastercycler_Pro_S.jpg' },
        { term: '47. Micropipette', translation: 'Micropipeta', definition: 'Description: A pipette used to measure and transfer very small volumes of liquids. | Descripción: Una pipeta utilizada para medir y transferir volúmenes muy pequeños de líquidos.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByFVUuP_XfGxJpTO0SJNRYsybYmV19o5VaA&s' },
        { term: '48. Lab timer', translation: 'Temporizador de laboratorio', definition: 'Description: A device used to measure time during experiments. | Descripción: Un dispositivo utilizado para medir el tiempo durante los experimentos.', image: 'https://omegaperu.com.pe/wp-content/uploads/Temporizador-digital-de-laboratorio-de-triple-evento-y-pantalla-unica-rastreable-con-calibracion.jpg' },
        { term: '49. Theoretical yield', translation: 'Rendimiento teórico', definition: 'Description: The maximum amount of product that could be formed from given amounts of reactants. | Descripción: La cantidad máxima de producto que podría formarse a partir de cantidades dadas de reactivos.', image: 'https://i.ytimg.com/vi/tHHcM0QXQmY/maxresdefault.jpg' },
        { term: '50. Solvent', translation: 'Solvente', definition: 'Description: A substance in which a solute is dissolved, forming a solution. | Descripción: Una sustancia en la que se disuelve un soluto, formando una solución.', image: 'https://img.medicalexpo.es/images_me/photo-mg/123659-17178788.jpg' }
    ];

const glossarySection = document.getElementById('glossary');
const searchInput = document.getElementById('search');
const modal = document.getElementById('termModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeModal = document.getElementsByClassName('close')[0];

    function displayGlossary(glossary) {
        glossarySection.innerHTML = '';
        glossary.forEach(item => {
            const glossaryItem = document.createElement('div');
            glossaryItem.classList.add('glossary-item');
            glossaryItem.innerHTML = `
                <img src="${item.image}" alt="${item.term}">
                <div>
                    <h2>${item.term} (${item.translation})</h2>
                    <p>${item.definition}</p>
                </div>
            `;
            glossaryItem.addEventListener('click', () => {
                showModal(item);
            });
            glossarySection.appendChild(glossaryItem);

            // Añadir animación de entrada
            requestAnimationFrame(() => {
                glossaryItem.classList.add('loaded');
                setTimeout(() => {
                    glossaryItem.classList.add('flash');
                    setTimeout(() => {
                        glossaryItem.classList.remove('flash');
                    }, 500);
                }, 500);
            });
        });
    }

    function filterGlossary() {
        const searchText = searchInput.value.toLowerCase();
        const filteredGlossary = glossary.filter(item => 
            item.term.toLowerCase().includes(searchText) || 
            item.translation.toLowerCase().includes(searchText) ||
            item.definition.toLowerCase().includes(searchText)
        );
        displayGlossary(filteredGlossary);
    }

    function showModal(item) {
        modalImage.src = item.image;
        modalTitle.textContent = `${item.term} (${item.translation})`;
        modalDescription.textContent = item.definition;
        modal.style.display = "block";
    }

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    searchInput.addEventListener('input', filterGlossary);

    displayGlossary(glossary);

    // Animación de desplazamiento suave al hacer clic en un término
    glossarySection.addEventListener('click', event => {
        const item = event.target.closest('.glossary-item');
        if (item) {
            item.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
