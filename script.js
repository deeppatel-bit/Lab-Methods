// Database of methods
const methodsData = [
    {
        id: 1,
        title: "Procedure for Making Paint Drawdown",
        image: "lab img/Drow Down/Drow Down Logo.png",
        description: `<strong>1.0 Objective</strong><br>To lay down procedure for making Paint Drawdown.<br><br><strong>2.0 Scope</strong><br>This STP is applicable for calcined clay products in QC department of Durga oxides.<br><br><strong>3.0 Responsibility</strong><br>&bull; Trained analyst shall be responsible for performing the tests as per the STP.<br>&bull; Authorized QC person shall be responsible for monitoring and proper implementation of this STP.<br>&bull; Head-QC / In-charge person shall be responsible for approval of the STP.<br><br><strong>4.0 Rationale</strong><br>&bull; Definition: Thin paint film applied on black and white printed sheets.<br>&bull; Paint Drawdown indicates the hiding power of Calcined Clay in the paint formulation.<br>&bull; It also indicates the strength of the color when mixed with calcined clay.`,
        materials: [
            "Mechanical stirrer",
            "250 mL plastic beaker",
            "Glass Rod ",
            "Drow Down Ped - Applicator",
            "Spatula",
            "Drawdown Sheet (Black and White background)"
        ],
        materialImages: [
            "lab img/Drow Down/Mechanical stirrer.jpeg",
            "lab img/Drow Down/250ml bikar.jpeg",
            "lab img/Drow Down/Glass Rod.png",
            "lab img/Drow Down/drow down ped.png",
            "lab img/Drow Down/spatula.png",
            "lab img/Drow Down/drow down sheet.png"
        ],
        reagents: `<strong>6.0 Reagents</strong><br>&bull; Nitrosol (Powder)<br>&bull; Acrylic Binder (50% Solids)<br>&bull; Lutron 850 (40% Solids)<br>&bull; Stainer (Blue paste)<br><br><strong>7.0 Reagent Preparation</strong><br>Nitrosol Solution:<br>Take 1  Liter of RO water + 10g of Lutron 850 + 1 g of Nitrosol Powder. 
Mix For 30 Minutes.`,
        samplePreparation: [],
        calibration: [],
        procedure: [
            "Take 20g of Calcined Clay + 20 g of Nitrosol Solution + 10 g of Acrylic Binder in a 250ML      plastic beaker.",
            "For testing the color strength add 0.8 g of blue pigment along with the above mentioned formulation.",
            "Stir it at medium speed till a uniform thick paste is formed (approximately 3–4 minutes).",
            "Similarly make the thick paste using a calcined clay sample to be compared/master sample.",
            "Take little quantity of the prepared paste on the drawdown sheet.",
            "Keep the rod behind the paste and draw it downwards slowly and steadily to apply a thin film on the sheet.",
            "Dry the sheet in oven at 140&deg;C for about 3–5 minutes.",
            "Compare the coverage (hiding of the background) by visually seeing it at 45 degree angle.",
            "Also test the surface smoothness by rubbing with the finger."
        ],
        formula: `<strong>9.0 Calculations</strong><br><br>NA`,
        results: "Record the coverage whether it is Matching, Better or Inferior compared to the standard.<br>Record the color strength whether it is Comparable, Lighter or Darker.<br>File the drawdown sheets with all the details on the top of it.",
        precautions: "Please make sure that the paint film should be applied uniformly without any breaks throughout the sheet.",
        documentHistory: `
            <table class="table table-bordered mb-0" style="border-collapse: collapse; width: 100%;">
                <thead class="table-light">
                    <tr>
                        <th>Revision No.</th>
                        <th>Revision Date</th>
                        <th>Details of Review / Revision</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>00</td>
                        <td>NA</td>
                        <td>New STP</td>
                    </tr>
                </tbody>
            </table>
        `,
        notes: ""
    },
    {
        id: 2,
        title: "Procedure for Finding Particles Finer than 2 Micron",
        image: "lab img/2 MICRON/2 MICRON LOGO.png",
        description: `<strong>1.0 Objective</strong><br>To lay down procedure to find out the percentage of particles that are finer than 2 micron.<br><br><strong>2.0 Scope</strong><br>This STP is applicable for analysis of clay products and raw matrices in QC department of Durga oxides.<br><br><strong>3.0 Responsibility</strong><br>&bull; Trained analyst shall be responsible for performing the tests as per the STP.<br>&bull; Authorized QC person shall be responsible for monitoring and proper implementation of this STP.<br>&bull; Head-QC / In-charge person shall be responsible for approval of the STP.<br><br><strong>4.0 Rationale</strong><br>&bull; Definition: The “Particle Size” is defined as ratio of the weight of particles, having an equivalent spherical diameter smaller than a specified size to the weight of the whole material expressed as percentage measured by the “Anderson” technique.<br>&bull; Finer particles provide better coverage and smooth finish to the paint film.`,
        materials: [
            "Analytical Balance &ndash; accurate to 0.001 g",
            "Ultrasonic processor",
            "Hot Air Oven",
            "Glass cylinder &ndash; Approx. 20 cm height, 5 cm dia and marked at 250 mL",
            "Pipette &ndash; Andersen type 20 mL (2 Way pipette)",
            "China dish or Glass dish",
            "Tilt Pipette 5 mL / Measuring cylinder (10 mL)",
            "Plastic beaker &ndash; 100 mL",
            "RO Water",
            "Sodium Carbonate",
            "Sodium Hexameta Phosphate"
        ],
        materialImages: [
            "lab img/2 MICRON/Analytical Balance.png",
            "lab img/2 MICRON/Ultrasonic processor.png",
            "lab img/2 MICRON/Hot Air Oven.png",
            "lab img/2 MICRON/Glass cylinder .png",
            "lab img/2 MICRON/Pipette – Andersen type 20 mL (2 Way pipette).png",
            "lab img/2 MICRON/China dish or Glass dish.png",
            "lab img/2 MICRON/Tilt pipet 10ml.png",
            "lab img/2 MICRON/Plastic beaker – 100 mL.png",
            "lab img/2 MICRON/RO Water.png",
            "lab img/2 MICRON/Sodium Carbonate.png",
            "lab img/2 MICRON/Sodium Hexameta Phosphate.png"
        ],
        reagents: `<strong>6.1 Deflocculated solution (Sodium carbonate 1.0% W/V + Sodium Hexameta Phosphate 0.5% W/V):</strong><br>For 500 mL solution:<br>Take 5 g of Sodium Carbonate and 2.5 g of Sodium Hexameta Phosphate, dissolve it in approximately 300 mL of RO water and make up the final volume to 500 mL.<br><em>(Note: The volume of solution to be prepared can be changed as per the requirement)</em>`,
        samplePreparation: [
            "Take 5 mL of deflocculation solution in a beaker and add to it 25 mL of RO water.",
            "Add 5 g of test material.",
            "Disperse for 2 min. using ultrasonic processor.",
            "Transfer the slurry with repeated washings into the measuring cylinder and make up the volume to 250 mL."
        ],
        calibration: [],
        procedure: [
            "Place the cylinder inside the particle size setup.",
            "Maintain the temperature of room at 25&deg;C.",
            "Close with rubber cork or hand and shake vigorously for approximately 30 seconds.",
            "Keep the cylinder back and immediately withdraw 20 mL from the bulk of the suspension using the Andersen pipette.",
            "Transfer the 20 mL to china dish of known weight (W1).",
            "Dry to constant weight on hot air oven and take the weight (W2).",
            "Allow the setup without any disturbance.",
            "After 3 hr and 12 min, gently withdraw a second sample from a depth of 5 cm below the surface (without disturbing bulk suspension).",
            "Transfer this to china dish.",
            "Dry to constant weight on hot air oven and take the weight (W3)."
        ],
        formula: `<strong>9.0 Calculations</strong><br><br>Finer than 2 micron (%) = [ (W3 &minus; W1) / (W2 &minus; W1) ] &times; 100`,
        results: "Report the result obtained in two digits after decimal using the unit % (For e.g.: 65.24 %)",
        precautions: "Take proper care that the bulk suspension remains undisturbed during the 3 hr and 12 min time which is required for settling depth for particles finer than 2 micron.",
        documentHistory: `
            <table class="table table-bordered mb-0" style="border-collapse: collapse; width: 100%;">
                <thead class="table-light">
                    <tr>
                        <th>Revision No.</th>
                        <th>Revision Date</th>
                        <th>Details of Review / Revision</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>00</td>
                        <td>NA</td>
                        <td>New STP</td>
                    </tr>
                </tbody>
            </table>
        `,
        notes: ""
    },

    {
        id: 3,
        title: "pH Value of Clay Material",
        image: "lab img/PH/Ph logo.png",

        description: `
    <strong>1. Objective</strong><br>
    To lay down the procedure for determining the pH value of clay material.<br><br>

    <strong>2. Scope</strong><br>
    This procedure is applicable for clay products and raw materials in the QC department.<br><br>

    <strong>3. Responsibility</strong><br>
    &bull; Trained analyst is responsible for performing the test.<br>
    &bull; Authorized QC person ensures proper implementation.<br>
    &bull; Head/QC in-charge is responsible for approval.<br><br>

    <strong>4. Rationale</strong><br>
    &bull; pH is the inverse logarithm of hydrogen ion concentration.<br>
    &bull; It indicates acidity, alkalinity, and neutrality of the material.<br>
    &bull; The pH of clay may change after calcination.
    `,

        materials: [
            "Glass beaker",
            "pH meter (portable)",
            "Stirrer"
        ],
        materialImages: [
            "lab img/PH/250ml glass bikar.png",
            "lab img/PH/PH meter.png",
            "lab img/PH/Glass Rod.png"
        ],

        reagents: "Not applicable.",

        samplePreparation: [
            "Take 10 g of sample.",
            "Add to 90 ml water (10% solution).",
            "Stir for 2–3 minutes to form a uniform solution."
        ],

        calibration: [
            "Prepare buffer solutions of pH 4.0, 7.0, and 9.2 using buffer tablets.",
            "Insert the pH meter in pH 4.0 buffer solution and switch on the instrument.",
            "Adjust the reading until it matches the buffer value.",
            "Repeat for pH 7.0 and pH 9.2 buffer solutions.",
            "If the reading does not match, adjust using the screw provided.",
            "Ensure accurate calibration before testing.",
            "Perform calibration daily before use."
        ],

        procedure: [
            "Insert the pH meter into the prepared sample solution.",
            "Allow the reading to stabilize.",
            "Record the displayed pH value."
        ],

        calculations: "Not applicable.",

        results: "Report the result in single digit after decimal (e.g., 6.0).",

        precautions: "Ensure the pH meter is properly calibrated before testing.",

        documentHistory: `
            <table class="table table-bordered mb-0" style="border-collapse: collapse; width: 100%;">
                <thead class="table-light">
                    <tr>
                        <th>Revision No.</th>
                        <th>Revision Date</th>
                        <th>Details of Review / Revision</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>00</td>
                        <td>NA</td>
                        <td>New STP</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    {
        id: 4,
        title: "Procedure to Find Out the Oil Absorption of Clay",
        image: "lab img/oil absorption/ABSORPTION LOGO.png",
        description: `<strong>1.0 Objective</strong><br>To lay down the procedure to find out oil absorption of clay.<br><br><strong>2.0 Scope</strong><br>This STP is applicable for determining the oil absorption of clay in QC department .<br><br><strong>3.0 Responsibility</strong><br>&bull; Trained analyst shall be responsible for performing the tests as per the STP.<br>&bull; Authorized QC person shall be responsible for monitoring and proper implementation of this STP.<br>&bull; Head-QC / In-charge person shall be responsible for approval of the STP.<br><br><strong>4.0 Rationale</strong><br>&bull; Definition: The quantity of oil absorbed on the surface of the Calcined Clay sample.<br>&bull; It indicates the surface porosity of the material.`,
        materials: [
            "Glass plate",
            "Aluminum or Stainless Steel spatula (Uniform and flexible)",
            "Glass beaker",
            "Dropper",
            "Raw Linseed Oil"
        ],
        materialImages: [
            "lab img/oil absorption/glass .png",
            "lab img/oil absorption/spatula.png",
            "lab img/oil absorption/oil btl.png",
            "lab img/oil absorption/dropper.png",
            "lab img/oil absorption/lineseed.png"
        ],
        reagents: "Not applicable.",
        samplePreparation: [],
        calibration: [],
        procedure: [
            "Weigh 2 g of the dry material.",
            "Keep the material on glass plate.",
            "Fill linseed oil in the glass beaker.",
            "Weigh the beaker along with the dropper (W g).",
            "Add linseed oil drop by drop on the material, each drop being mixed with the material using the spatula.",
            "Incorporate the oil thoroughly with the whole material to obtain a coherent mass.",
            "Weigh the linseed oil bottle with the dropper again (W1 g)."
        ],
        formula: `<strong>9.0 Calculations</strong><br><br>Oil Absorption (g / 100 g of clay) = (W &minus; W1) &times; 50`,
        results: "Report the result obtained in single digit after decimal (For e.g.: 50.1)",
        precautions: "Take care that the oil is not poured in excess than required & no material spillage is there.",
        documentHistory: `
            <table class="table table-bordered mb-0" style="border-collapse: collapse; width: 100%;">
                <thead class="table-light">
                    <tr>
                        <th>Revision No.</th>
                        <th>Revision Date</th>
                        <th>Details of Review / Revision</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>00</td>
                        <td>NA</td>
                        <td>New STP</td>
                    </tr>
                </tbody>
            </table>
        `,
        notes: "<strong>Note:</strong> The end point is reached when exactly enough oil has been incorporated with the Calcined clay to produce very stiff, putty-like paste which does not break or separate & it should not stick to the glass plate."
    },
    {
        id: 6,
        title: "Residue",
        image: "lab img/residue/resuide logo.png",
        description: "Determining the amount of residue retained on a standard sieve.",
        materials: [
            "Standard sieve (e.g., 100 To 600 Mesh)",
            "Beaker",
            "Hot plate",
            "Balance 600 Gm",
            "6kg Balance"
        ],
        materialImages: [
            "lab img/residue/standard seive.png",
            "lab img/residue/1L bikar.jpeg",
            "lab img/residue/hotplate.jpeg",
            "lab img/residue/balance weigh.jpeg",
            "lab img/residue/6kg balance weigh.png"
        ],
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
        image: "lab img/LOI/loi logo.jpeg",
        description: `<strong>1. Objective</strong><br>To determine the loss on ignition of clay material.<br><br><strong>2. Scope</strong><br>This procedure is applicable to clay products and raw materials in the QC department.<br><br><strong>3. Responsibility</strong><br>&bull; Trained analyst is responsible for performing the test.<br>&bull; Authorized QC personnel ensure proper implementation.<br>&bull; QC Head/In-charge is responsible for approval.<br><br><strong>4. Rationale</strong><br>&bull; Loss on Ignition (LOI) indicates the amount of volatile substances present in the material.<br>&bull; It represents weight loss due to heating at high temperature.<br>&bull; It helps in determining moisture, organic matter, and other volatile components.`,
        materials: [
            "Silica crucible",
            "Muffle furnace",
            "Weighing balance",
            "Desiccator",
            "Tongs"
        ],
        materialImages: [
            "lab img/LOI/Silica crucible bowl.jpeg",
            "lab img/LOI/Muffle furnace.jpeg",
            "lab img/LOI/balance weigh.jpeg",
            "lab img/LOI/Desiccator.jpeg",
            "lab img/LOI/tongs.jpeg"
        ],
        reagents: "Not applicable.",
        samplePreparation: [
            "Take a clean and dry silica crucible.",
            "Weigh the empty crucible and record the weight (W1).",
            "Add a known quantity of sample into the crucible and record weight (W2)."
        ],
        calibration: [
            "Ensure weighing balance is calibrated.",
            "Ensure muffle furnace temperature is properly maintained (around 1000&deg;C)."
        ],
        procedure: [
            "Place the crucible with sample in the muffle furnace.",
            "Heat at about 1000&deg;C for 1 hour.",
            "Remove the crucible using tongs and cool it in a desiccator.",
            "Weigh the crucible again after cooling and record weight (W3)."
        ],
        formula: `<strong>10. Calculations</strong><br><br>Loss on Ignition (%) = [ (W2 &minus; W3) / (W2 &minus; W1) ] &times; 100<br><br>Where:<br>W1 = Weight of empty crucible<br>W2 = Weight of crucible + sample before heating<br>W3 = Weight of crucible + sample after heating`,
        results: "Report the result as percentage (%) of loss on ignition.",
        precautions: `&bull; Ensure crucible is clean and dry before use.<br>&bull; Avoid moisture contamination.<br>&bull; Handle hot crucible with proper tools.<br>&bull; Cool the sample in desiccator before weighing.`,
        documentHistory: `
            <table class="table table-bordered mb-0" style="border-collapse: collapse; width: 100%;">
                <thead class="table-light">
                    <tr>
                        <th>Revision No.</th>
                        <th>Revision Date</th>
                        <th>Details of Review / Revision</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>00</td>
                        <td>NA</td>
                        <td>New STP</td>
                    </tr>
                </tbody>
            </table>
        `,
        notes: ""
    },
    {
        id: 9,
        title: "Procedure for Determining Moisture Content of Clay",
        description: `<strong>1.0 Objective</strong><br>To lay down procedure for determining moisture content of clay.<br><br><strong>2.0 Scope</strong><br>This STP is applicable for clay products and raw matrixes in QC department of Durga oxides.<br><br><strong>3.0 Responsibility</strong><br>&bull; Trained analyst shall be responsible for performing the tests as per the STP.<br>&bull; Authorized QC person shall be responsible for monitoring and proper implementation of this STP.<br>&bull; Head-QC / In-charge person shall be responsible for approval of the STP.<br><br><strong>4.0 Rationale</strong><br>&bull; Definition: The free water available on the surface of the material.<br>&bull; Moisture indicates the hydrophilic/hydrophobic nature of the material.`,
        materials: [
            "China Dish",
            "Hot Air Oven",
            "Micro-Balance"
        ],
        reagents: "Not applicable.",
        samplePreparation: [],
        calibration: [],
        procedure: [
            "Take 20 grams of sample in a clean and dry aluminium dish.",
            "Spread the material uniformly throughout the dish.",
            "Keep it inside the moisture balance, set the temperature to 120&deg;C.",
            "Press the start button and wait for the alarm."
        ],
        formula: `<strong>9.0 Calculations</strong><br><br>NA`,
        results: "Note down the display reading.",
        precautions: "Not applicable.",
        documentHistory: `
            <table class="table table-bordered mb-0" style="border-collapse: collapse; width: 100%;">
                <thead class="table-light">
                    <tr>
                        <th>Revision No.</th>
                        <th>Revision Date</th>
                        <th>Details of Review / Revision</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>00</td>
                        <td>NA</td>
                        <td>New STP</td>
                    </tr>
                </tbody>
            </table>
        `,
        notes: ""
    },
    {
        id: 10,
        title: "Procedure for Finding Out the Bulk Density",
        description: `<strong>1.0 Objective</strong><br>To lay down procedure for finding out the Bulk Density.<br><br><strong>2.0 Scope</strong><br>This STP is applicable for powder clay samples in QC department of Durga oxides.<br><br><strong>3.0 Responsibility</strong><br>&bull; Trained analyst shall be responsible for performing the tests as per the STP.<br>&bull; Authorized QC person shall be responsible for monitoring and proper implementation of this STP.<br>&bull; Head-QC / In-charge person shall be responsible for approval of the STP.<br><br><strong>4.0 Rationale</strong><br>&bull; Bulk density is the combination of material density and the air entrapped inside the powder.<br>&bull; Bulk Density affects the flowability of the clay powder into the calciner during calcination.<br>&bull; It indicates the grindability of the mill.`,
        materials: [
            "Measuring cylinder (100 mL)",
            "Balance (accurate to 0.5 g)"
        ],
        reagents: "Not applicable.",
        samplePreparation: [],
        calibration: [],
        procedure: [
            "Keep the dry measuring cylinder on the weighing balance and tare it.",
            "Pour the clay powder slowly through a funnel till the 100 mL mark on the measuring cylinder.",
            "Note down the weight displayed on the weighing balance."
        ],
        formula: `<strong>9.0 Calculations</strong><br><br>Bulk Density (g/L) = (Weight displayed in gram / 100 mL) &times; 1000 mL`,
        results: "Report the results in g/mL.",
        precautions: "Please ensure that there is no spillage on the weighing balance.",
        documentHistory: `
            <table class="table table-bordered mb-0" style="border-collapse: collapse; width: 100%;">
                <thead class="table-light">
                    <tr>
                        <th>Revision No.</th>
                        <th>Revision Date</th>
                        <th>Details of Review / Revision</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>00</td>
                        <td>NA</td>
                        <td>New STP</td>
                    </tr>
                </tbody>
            </table>
        `,
        notes: ""
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

const homeSection = document.getElementById('home-section');
const detailSection = document.getElementById('detail-section');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        once: true
    });

    renderGrid(methodsData);

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredMethods = methodsData.filter(method =>
                method.title.toLowerCase().includes(searchTerm)
            );
            renderGrid(filteredMethods);
        });
    }
});

// Render grid items
function renderGrid(data) {
    const grid = document.getElementById('methodsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5 text-muted">
                <i class="fa-solid fa-flask-vial fa-3x mb-3 text-opacity-50"></i>
                <p>No methods found matching your search.</p>
            </div>
        `;
        return;
    }

    data.forEach(method => {
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4';
        col.setAttribute('data-aos', 'zoom-in');

        // Use custom image if provided, otherwise fallback to placeholder
        const imageUrl = method.image || `https://picsum.photos/seed/labtest${method.id}/400/400`;

        // Extract plain text from description for preview
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = method.description || '';
        const plainDesc = tempDiv.textContent || tempDiv.innerText || '';

        col.innerHTML = `
            <div class="method-card" onclick="showMethodDetail(${method.id})" style="cursor: pointer;">
                <div class="img-wrapper mx-auto mb-3">
                    <img src="${imageUrl}" alt="${method.title}" loading="lazy">
                    <div class="img-overlay">
                        <i class="fa-solid fa-eye fa-2x mb-2"></i>
                        <span class="fw-bold">View Details</span>
                        <div class="overlay-desc">${plainDesc.substring(0, 100)}...</div>
                    </div>
                </div>
                <div class="category-text text-muted small text-uppercase mb-1 fw-bold">Method</div>
                <h6 class="fw-bold text-dark text-uppercase px-2" style="font-size: 0.9rem;">${method.title}</h6>
            </div>
        `;

        grid.appendChild(col);
    });
}

// Navigation Functions
function showHome(e) {
    if (e) e.preventDefault();
    detailSection.classList.add('d-none');
    homeSection.classList.remove('d-none');
    window.scrollTo(0, 0);
    // Refresh AOS animations on view change
    setTimeout(() => AOS.refresh(), 50);
}

function showMethodDetail(id) {
    const method = methodsData.find(m => m.id === id);
    if (!method) return;

    // Title and Category
    document.getElementById('methodTitle').textContent = method.title;

    // Abstract an objective for the short description
    let shortDesc = method.description || '';
    if (shortDesc.includes('<br><br>')) {
        shortDesc = shortDesc.split('<br><br>')[0]; // Just take the Objective
    } else if (shortDesc.length > 200) {
        shortDesc = shortDesc.substring(0, 200) + '...';
    }

    const methodShortDesc = document.getElementById('methodShortDesc');
    if (methodShortDesc) {
        methodShortDesc.innerHTML = shortDesc;
    }

    // Main Image (Circular)
    const detailImage = document.getElementById('detailImage');
    if (detailImage) {
        detailImage.src = method.image || `https://picsum.photos/seed/labtest${method.id}/600/600`;
    }

    // Large Image (Rectangular)
    const detailLargeImage = document.getElementById('detailLargeImage');
    if (detailLargeImage) {
        detailLargeImage.src = method.largeImage || `https://picsum.photos/seed/labtest${method.id}large/800/600`;
    }

    // Materials (Replacing Features & Benefits)
    const materialsList = document.getElementById('methodMaterials');
    if (materialsList) {
        materialsList.innerHTML = '';
        if (method.materials && method.materials.length > 0) {
            method.materials.forEach((material, index) => {
                const li = document.createElement('li');
                li.style.display = 'flex';
                li.style.alignItems = 'center';
                li.style.marginBottom = '16px';

                // Using custom image if provided, otherwise placeholder
                const matImage = (method.materialImages && method.materialImages[index]) ? method.materialImages[index] : `https://picsum.photos/seed/mat${method.id}_${index}/100/100`;
                li.innerHTML = `
                    <img src="${matImage}" alt="Material" style="width: 80px; height: 80px; border-radius: 8px; margin-right: 16px; object-fit: contain; border: 1px solid #ddd; background-color: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.05); padding: 4px;">
                    <span style="font-size: 1rem; color: #444; font-weight: 500;">${material}</span>
                `;
                materialsList.appendChild(li);
            });
        } else {
            materialsList.innerHTML = '<li style="color: #555; font-size: 0.95rem;">Standard lab equipment</li>';
        }
    }

    // Construct the Long Description HTML for the bottom section
    let longDescHTML = '';

    if (method.description) {
        longDescHTML += `${method.description}<br><br>`;
    }
    if (method.reagents && method.reagents !== "Not applicable.") {
        longDescHTML += `${method.reagents}<br><br>`;
    }

    if (method.samplePreparation && method.samplePreparation.length > 0) {
        longDescHTML += `<strong>Sample Preparation:</strong><br><ul style="padding-left:1rem;">`;
        method.samplePreparation.forEach(s => longDescHTML += `<li>${s}</li>`);
        longDescHTML += `</ul><br>`;
    }

    if (method.calibration && method.calibration.length > 0) {
        longDescHTML += `<strong>Calibration:</strong><br><ul style="padding-left:1rem;">`;
        method.calibration.forEach(s => longDescHTML += `<li>${s}</li>`);
        longDescHTML += `</ul><br>`;
    }

    if (method.procedure && method.procedure.length > 0) {
        longDescHTML += `<strong>Procedure:</strong><br><ol style="padding-left:1.5rem;">`;
        method.procedure.forEach(s => longDescHTML += `<li>${s}</li>`);
        longDescHTML += `</ol><br>`;
    }

    const formulaData = method.formula || method.calculations;
    if (formulaData && formulaData !== "NA" && formulaData !== "Not applicable.") {
        longDescHTML += `${formulaData}<br><br>`;
    }

    if (method.results) {
        longDescHTML += `<strong>Results:</strong><br>${method.results}<br><br>`;
    }

    if (method.precautions) {
        longDescHTML += `<strong>Precautions:</strong><br>${method.precautions}<br><br>`;
    }

    if (method.notes) {
        longDescHTML += `<strong>Notes:</strong><br>${method.notes}<br><br>`;
    }

    const historyData = method.documentHistory || method.history;
    if (historyData) {
        longDescHTML += `<strong>Document History:</strong><br><div class="table-responsive mt-2">${historyData}</div><br>`;
    }

    const methodLongDesc = document.getElementById('methodLongDesc');
    if (methodLongDesc) {
        methodLongDesc.innerHTML = longDescHTML;
    }

    // Toggle Views
    document.getElementById('home-section').classList.add('d-none');
    document.getElementById('detail-section').classList.remove('d-none');
    window.scrollTo(0, 0);

    // Refresh AOS
    setTimeout(() => AOS.refresh(), 50);
}
