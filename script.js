// Database of methods
const methodsData = [
    {
        id: 1,
        title: "Draw Down",
        description: "Standard method for drawing down film to assess hiding power, color uniformity, and film appearance.",
        materials: ["Wire wound bar / Applicator", "Drawdown charts", "Testing material (Paint/Ink)"],
        procedure: ["Place the drawdown chart on a firm, flat surface.", "Position the applicator at the top of the chart.", "Apply a sufficient amount of the sample just in front of the applicator.", "Draw down the sample with a smooth, continuous motion.", "Allow the film to dry in a controlled environment."],
        formula: "",
        notes: "Maintain a constant speed and pressure during application."
    },
    {
        id: 2,
        title: "2 Microns",
        description: "Checking properties and particle size analysis at 2 microns resolution.",
        materials: ["Microscope", "Slides", "Sample", "Measuring tool"],
        procedure: ["Prepare the slide with thinly spread sample.", "Place under the microscope focusing objective.", "Calibrate the measuring tool.", "Measure particle sizes focusing on the 2 micron threshold.", "Record the observation."],
        formula: "",
        notes: ""
    },
    {
        id: 3,
        title: "pH Solutions",
        description: "Preparation of pH buffer solutions for calibrating pH meters.",
        materials: ["500 ml beaker", "pH capsules (4, 7, 9.2)", "3 bottles (100 ml)"],
        procedure: ["Heat 300 ml water", "Pour 100 ml into bottles", "Add capsules", "Shake", "Solution ready"],
        formula: "",
        notes: "Store solutions out of direct sunlight."
    },
    {
        id: 4,
        title: "Oil Absorption",
        description: "Determining the oil absorption number of a sample by adding linseed oil until a paste is formed.",
        materials: ["Glass plate", "Spatula", "Raw linseed oil", "Burette", "Sample powder (e.g., Pigment)"],
        procedure: ["Weigh out a specific amount of the sample onto the glass plate.", "Slowly add linseed oil from the burette drop by drop.", "Mix the oil into the powder thoroughly with a spatula.", "Continue until a continuous stiff paste is formed that does not crack.", "Note the volume of oil used."],
        formula: "(Volume of oil used x 100) / Weight of sample",
        notes: "The test requires a consistent, firm rubbing action."
    },
    {
        id: 5,
        title: "Oil Absorption Method 2",
        description: "Alternative automated or semi-automated method for determining oil absorption.",
        materials: ["Mixer", "Absorptometer", "Linseed oil", "Sample"],
        procedure: ["Introduce sample into the mixing chamber.", "Start the mixer.", "Gradually feed oil into the chamber at a constant rate.", "Monitor torque increase.", "Stop when torque reaches a peak."],
        formula: "",
        notes: ""
    },
    {
        id: 6,
        title: "Residue",
        description: "Determining the amount of residue retained on a standard sieve.",
        materials: ["Standard sieve (e.g., 325 mesh)", "Water or solvent", "Beaker", "Drying oven", "Balance"],
        procedure: ["Weigh the sample accurately.", "Transfer the sample to the sieve.", "Wash thoroughly with solvent until washings are clear.", "Dry the sieve and retained residue in the oven.", "Weigh the residue."],
        formula: "(Weight of residue / Initial weight of sample) * 100",
        notes: "Do not rub the mesh excessively to avoid damage."
    },
    {
        id: 7,
        title: "Flow Point",
        description: "Testing the temperature or condition at which a substance starts to flow.",
        materials: ["Heating block", "Thermometer", "Glass capillary tubes"],
        procedure: ["Pack sample into a capillary tube.", "Place the tube into the heating block.", "Increase temperature gradually.", "Observe the sample closely.", "Record the temperature when the sample visibly begins to flow."],
        formula: "",
        notes: "Ensure uniform heating rate."
    },
    {
        id: 8,
        title: "LOI",
        description: "Loss on Ignition test to determine the amount of volatile matter in a sample.",
        materials: ["Crucible", "Muffle furnace", "Desiccator", "Analytical balance"],
        procedure: ["Pre-ignite the crucible and weigh it.", "Add a known weight of sample to the crucible.", "Place in a muffle furnace at specified temperature (e.g., 1000°C) for a set time.", "Cool in a desiccator.", "Weigh to constant weight."],
        formula: "[(Initial weight - Final weight) / Initial sample weight] * 100",
        notes: "Handle crucible with tongs to avoid contamination from skin oils."
    },
    {
        id: 9,
        title: "Moisture",
        description: "Determination of moisture content by mass loss on drying.",
        materials: ["Petri dish or drying pan", "Oven (105°C)", "Analytical balance", "Desiccator"],
        procedure: ["Weigh the empty pan.", "Spread sample evenly in the pan and weigh.", "Place in oven at 105°C for 2 hours.", "Remove, cool in desiccator, and weigh.", "Repeat until constant weight is achieved."],
        formula: "[(Wet weight - Dry weight) / Wet weight] * 100",
        notes: ""
    },
    {
        id: 10,
        title: "Bulk Density",
        description: "Testing the mass of a many particles of the material divided by the total volume they occupy.",
        materials: ["Graduated cylinder (250 ml)", "Balance", "Funnel"],
        procedure: ["Weigh the empty graduated cylinder.", "Pour the sample freely into the cylinder through a funnel up to a specific mark without tapping.", "Weigh the cylinder with the sample.", "Subtract empty weight to find sample weight.", "Calculate using volume occupied."],
        formula: "Mass of sample / Volume occupied",
        notes: "Ensure the surface of the powder is level before reading volume."
    },
    {
        id: 11,
        title: "Hegman",
        description: "Determination of fineness of grind using a Hegman gauge.",
        materials: ["Hegman gauge", "Scraper", "Sample"],
        procedure: ["Ensure the gauge and scraper are perfectly clean.", "Place a small amount of sample in the deep end of the groove.", "Draw the sample down the length of the gauge with the scraper.", "Immediately view at an angle to the length of the block.", "Note the point where particles first appear in significant numbers."],
        formula: "",
        notes: "Readings must be taken within 10 seconds of draw down."
    },
    {
        id: 12,
        title: "Hegman Method 2",
        description: "Alternative fineness of grind assessment using grindometer variants.",
        materials: ["Grindometer blocks", "Scraper"],
        procedure: ["Apply sample to block.", "Draw down firmly.", "Observe particle dispersion.", "Record reading based on local standard scale."],
        formula: "",
        notes: ""
    },
    {
        id: 13,
        title: "Casting Testing",
        description: "Method for testing casts or molds for durability and defects.",
        materials: ["Molds", "Casting resin", "Tensile tester"],
        procedure: ["Prepare the mold with releasing agent.", "Pour the resin and allow to cure completely.", "De-mold the cast carefully.", "Examine for visual defects (bubbles, cracks).", "Perform mechanical testing if required."],
        formula: "",
        notes: "Curing times must be strictly adhered to."
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const methodsTableBody = document.getElementById('methodsTableBody');
const homeSection = document.getElementById('home-section');
const detailSection = document.getElementById('detail-section');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderTable(methodsData);
    
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredMethods = methodsData.filter(method => 
            method.title.toLowerCase().includes(searchTerm)
        );
        renderTable(filteredMethods);
    });
});

// Render table rows
function renderTable(data) {
    methodsTableBody.innerHTML = '';
    
    if (data.length === 0) {
        methodsTableBody.innerHTML = `
            <tr>
                <td colspan="2" class="text-center py-4 text-muted">No methods found matching your search.</td>
            </tr>
        `;
        return;
    }
    
    data.forEach(method => {
        const tr = document.createElement('tr');
        tr.onclick = () => showMethodDetail(method.id);
        
        tr.innerHTML = `
            <td>${method.id}</td>
            <td>${method.title}</td>
        `;
        
        methodsTableBody.appendChild(tr);
    });
}

// Navigation Functions
function showHome(e) {
    if (e) e.preventDefault();
    detailSection.classList.add('d-none');
    homeSection.classList.remove('d-none');
    window.scrollTo(0, 0);
}

function showMethodDetail(id) {
    const method = methodsData.find(m => m.id === id);
    if (!method) return;
    
    // Populate Data
    document.getElementById('methodTitle').textContent = method.title;
    document.getElementById('methodDescription').textContent = method.description;
    
    // Materials
    const materialsList = document.getElementById('methodMaterials');
    materialsList.innerHTML = '';
    method.materials.forEach(material => {
        const li = document.createElement('li');
        li.textContent = material;
        materialsList.appendChild(li);
    });
    
    // Procedure
    const procedureList = document.getElementById('methodProcedure');
    procedureList.innerHTML = '';
    method.procedure.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        procedureList.appendChild(li);
    });
    
    // Formula Section
    const formulaSection = document.getElementById('formulaSection');
    if (method.formula) {
        document.getElementById('methodFormula').textContent = method.formula;
        formulaSection.classList.remove('d-none');
    } else {
        formulaSection.classList.add('d-none');
    }
    
    // Notes Section
    const notesSection = document.getElementById('notesSection');
    if (method.notes) {
        document.getElementById('methodNotes').textContent = method.notes;
        notesSection.classList.remove('d-none');
    } else {
        notesSection.classList.add('d-none');
    }
    
    // Toggle Views
    homeSection.classList.add('d-none');
    detailSection.classList.remove('d-none');
    window.scrollTo(0, 0);
}
