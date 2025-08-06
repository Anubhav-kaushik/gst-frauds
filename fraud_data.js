const fraudData = [
    {
        id: `overview-chart`,
        title: `Fraud Landscape Overview`,
        icon: `📊`
    },
    {
        id: `underreporting-sales`,
        title: `Underreporting Sales`,
        icon: `📉`,
        explanation: `A foundational method of tax evasion where a business deliberately reports lower sales figures than what was actually realized. This is achieved by falsifying invoices, omitting transactions (particularly those in cash), or maintaining parallel sets of accounting records ('kaccha' books) to conceal the true turnover from tax authorities.`,
        example: `A popular restaurant with high footfall declares daily sales of only ₹50,000 in its official records, while its actual cash and digital collections amount to ₹2,00,000. The undeclared sales of ₹1,50,000 represent a direct evasion of the GST payable.`,
        involvedIndustries: ['Real Estate', 'Textile Sector', 'Service Sector (e.g., coaching centers)', 'Retail', 'Hospitality'],
        caseStudy: `
            <h4 class="font-semibold text-lg text-indigo-700 mb-2">Case Study: The Under-Invoicing Builder</h4>
            <p class="text-gray-600 leading-relaxed">In a prominent case, a real estate developer in Bengaluru was investigated for systematically underreporting the value of properties sold. The modus operandi involved a dual pricing structure: a higher amount was collected from the homebuyer, often involving a cash component, while a significantly lower value was declared in the official sale agreement. This practice of under-invoicing allowed the builder to substantially reduce the applicable GST liability, causing a significant loss to the public exchequer.</p>
        `,
        investigationGuide: `
            <h4 class="text-xl font-bold text-gray-800 mb-4">Investigation Steps</h4>
            <ul class="space-y-6">
                <li><h5 class="font-semibold text-gray-700">Initial Red Flags</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>Declared turnover is inconsistent with the business's physical size, location, or market reputation.</li><li>Significant mismatch between GST returns, Income Tax returns, and credits in bank accounts.</li><li>Business deals predominantly in cash, discouraging digital payments.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Investigation & Analysis</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>Surprise Audits & Seizure:</strong> Conduct inspections under Section 67 to seize accounting records, electronic devices, and any parallel books of accounts.</li><li><strong>Financial Scrutiny:</strong> Reconcile all credits in every known bank account with the declared turnover. Question any unexplained cash deposits.</li><li><strong>Third-Party Data:</strong> Gather intelligence from suppliers or corporate clients to ascertain the true volume of transactions.</li></ul></li>
            </ul>
        `,
        applicableLaws: `
            <ul class="space-y-4">
                <li><h5 class="font-semibold text-gray-700">CGST Act, 2017</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li><strong>Section 74:</strong> The primary section for demanding tax and imposing penalties in cases of fraud or wilful suppression of facts.</li>
                    <li><strong>Section 122(1)(i):</strong> Penalty for supplying goods/services without an invoice or issuing an incorrect invoice.</li>
                    <li><strong>Section 132(1)(i):</strong> Makes wilful suppression of any transaction a punishable offense with imprisonment.</li>
                    <li><strong>Section 67:</strong> Empowers officers to conduct inspection, search, and seizure to uncover suppressed records.</li>
                </ul></li>
            </ul>
        `
    },
    {
        id: `fictitious-invoicing`,
        title: `Fictitious Invoicing`,
        icon: `🧾️❌`,
        explanation: `A severe fraud where companies issue or accept invoices without any corresponding supply of goods or services. This scheme creates a deceptive paper trail to illicitly generate and claim Input Tax Credit (ITC), fundamentally undermining the value-added tax system.`,
        example: `A construction company 'buys' a fake invoice for steel and cement worth ₹1 Crore from a shell company. No materials are ever delivered, but the construction company uses this fraudulent document to illegally claim ₹18 Lakhs in ITC, reducing its legitimate tax outflow.`,
        involvedIndustries: ['Textile Sector', 'Metal Scrap', 'Construction', 'Manpower Supply', 'Service Sector'],
        caseStudy: `
            <h4 class="font-semibold text-lg text-indigo-700 mb-2">Case Study: The Surat Textile Syndicate</h4>
            <p class="text-gray-600 leading-relaxed">In a notable case uncovered in Surat's bustling textile market, a manufacturer was found at the center of a sophisticated fraudulent scheme. The entity had masterminded a network of shell companies created for the sole purpose of generating fake invoices. These invoices, representing non-existent purchases of raw materials, were then used to claim crores in illegitimate Input Tax Credit, causing a substantial loss to the exchequer and creating a web of fraudulent transactions that required extensive data analysis to unravel.</p>
        `,
        investigationGuide: `
            <h4 class="text-xl font-bold text-gray-800 mb-4">Investigation Steps</h4>
            <ul class="space-y-6">
                <li><h5 class="font-semibold text-gray-700">Initial Red Flags</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>High-value transactions with newly registered taxpayers who have a minimal compliance history.</li><li>Absence of corresponding e-Way Bills for the supposed movement of goods.</li><li>Supplier's registered business address is residential, suspicious, or non-existent upon verification.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Investigation & Analysis</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>Network Analysis:</strong> Use data analytics tools on GSTN data to identify common directors, addresses, bank accounts, or phone numbers linking the beneficiary to the fake invoice issuers.</li><li><strong>Financial Trail:</strong> Trace bank transactions. Look for immediate cash withdrawals after payment or evidence of money being routed back to the beneficiary's accounts.</li><li><strong>Field Verification:</strong> Conduct physical verification of the supplier's premises to confirm their operational capacity and existence.</li></ul></li>
            </ul>
        `,
        applicableLaws: `
            <ul class="space-y-4">
                <li><h5 class="font-semibold text-gray-700">CGST Act, 2017</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li><strong>Section 132(1)(b) & (c):</strong> Makes it a cognizable and non-bailable offense (above certain limits) to issue an invoice without supply and to avail ITC using such an invoice.</li>
                    <li><strong>Section 122(1)(ii) & (vii):</strong> Prescribes steep penalties for issuing invoices without supply and for taking wrongful ITC.</li>
                    <li><strong>Section 69:</strong> Power to arrest the commissioner of such offenses.</li>
                    <li><strong>Section 83:</strong> Power to provisionally attach property, including bank accounts, to protect revenue.</li>
                </ul></li>
                <li><h5 class="font-semibold text-gray-700">CGST Rules, 2017</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li><strong>Rule 86A:</strong> A critical tool empowering officers to block the electronic credit ledger upon suspicion of fraudulent ITC claims.</li>
                    <li><strong>Rule 21(b):</strong> Provides for the cancellation of registration for issuing invoices without an actual supply.</li>
                </ul></li>
                 <li><h5 class="font-semibold text-gray-700">Bharatiya Nyaya Sanhita (BNS), 2023</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li><strong>Section 61:</strong> Criminal Conspiracy, essential for prosecuting the entire network.</li>
                    <li><strong>Section 336 & 337:</strong> Forgery for the purpose of cheating and using a forged document as genuine.</li>
                </ul></li>
            </ul>
        `
    },
    // ... Other fraud categories with the same level of detail ...
    {
        id: `misuse-of-itc`,
        title: `Misuse of Input Tax Credits`,
        icon: `💰️➡️`,
        explanation: `This fraud involves the improper claim of Input Tax Credit (ITC). This can manifest in several ways: claiming ITC on goods or services that are blocked under law (e.g., for personal consumption), or more egregiously, collecting GST from customers but failing to remit it to the government and instead using it to offset other liabilities.`,
        example: `A company purchases a luxury car for its director's personal use and wrongfully claims ITC on it, even though such credit is explicitly blocked under GST law. This directly reduces their tax payment illegally.`,
        involvedIndustries: ['Real Estate', 'Manufacturing', 'Trading', 'Works Contract', 'Hospitality'],
        caseStudy: `
            <h4 class="font-semibold text-lg text-indigo-700 mb-2">Case Study: The Developer's Diverted Collections</h4>
            <p class="text-gray-600 leading-relaxed">An investigation into a Mumbai-based real estate developer revealed a flagrant misuse of the ITC mechanism. The developer was diligently collecting GST from homebuyers on their apartment purchases but was not remitting these collections to the government. Instead, the firm was using the collected tax amount to offset the ITC it had claimed on construction materials. This dual fraud of non-remittance and wrongful adjustment of credit led to significant revenue loss and highlighted a critical compliance gap in the sector.</p>
        `,
        investigationGuide: `
            <h4 class="text-xl font-bold text-gray-800 mb-4">Investigation Steps</h4>
            <ul class="space-y-6">
                <li><h5 class="font-semibold text-gray-700">Initial Red Flags</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>Significant mismatch between tax declared in GSTR-1 and tax paid in GSTR-3B.</li><li>Claiming ITC on goods/services specified as blocked credits (e.g., motor vehicles, club memberships).</li><li>Unusually high ITC claims relative to the volume of outward taxable supplies.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Investigation & Analysis</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>GSTR-2B vs. 3B Reconciliation:</strong> Conduct a detailed audit to reconcile ITC claims in GSTR-3B with the auto-populated eligible credit in GSTR-2B.</li><li><strong>Scrutiny of Invoices:</strong> Examine the nature of purchases to identify claims made on ineligible or blocked credits as defined in Section 17(5).</li><li><strong>Supplier Verification:</strong> Ensure that the supplier has paid the tax on the inward supplies on which the taxpayer is claiming credit.</li></ul></li>
            </ul>
        `,
        applicableLaws: `
            <ul class="space-y-4">
                <li><h5 class="font-semibold text-gray-700">CGST Act, 2017</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li><strong>Section 16(2):</strong> Outlines the mandatory conditions for availing ITC, including the condition that the supplier must have paid the tax.</li>
                    <li><strong>Section 17(5):</strong> The definitive list of "blocked credits" which are ineligible for any ITC claims.</li>
                    <li><strong>Section 74:</strong> For demanding tax and imposing penalty for fraudulent ITC claims.</li>
                    <li><strong>Section 132(1)(d):</strong> Makes it a punishable offense to collect tax but fail to pay it to the government beyond three months.</li>
                </ul></li>
            </ul>
        `
    },
    {
        id: `non-filing-returns`,
        title: `Non-Filing of Returns`,
        icon: `🗓️🚫`,
        explanation: `A straightforward but damaging form of non-compliance where a registered business deliberately fails to file its mandatory GST returns (GSTR-1 and GSTR-3B). This allows them to operate outside the tax authority's purview, avoid reporting transactions, and pocket the tax collected from customers.`,
        example: `A newly registered consulting firm provides services for six months, collects GST on its invoices from clients, but never files a single return. The proprietors then cease operations and become untraceable, having absconded with the collected tax money.`,
        involvedIndustries: ['Small Traders', 'New Startups', 'Unorganized Sector', 'Service Providers'],
        caseStudy: `
            <h4 class="font-semibold text-lg text-indigo-700 mb-2">Case Study: The Vanishing Trader Phenomenon</h4>
            <p class="text-gray-600 leading-relaxed">Tax authorities frequently encounter the problem of 'missing' or 'vanishing' traders. These entities obtain GST registration, conduct business for a few months, and issue invoices to their customers (thereby allowing those customers to claim ITC). However, they subsequently fail to file their GSTR-3B returns and do not pay the tax they collected to the government. When enforcement officers attempt physical verification, the registered premises are often found to be vacant, making recovery a challenging task.</p>
        `,
        investigationGuide: `
            <h4 class="text-xl font-bold text-gray-800 mb-4">Investigation Steps</h4>
            <ul class="space-y-6">
                <li><h5 class="font-semibold text-gray-700">Initial Red Flags</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>Consistent failure to file GSTR-1 and GSTR-3B, triggering system-generated alerts.</li><li>The taxpayer's GSTIN appears in other businesses' GSTR-2B (as a supplier), but they have not filed their own returns.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Investigation & Analysis</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>Automated Notices:</strong> The GSTN system automatically issues notices in Form GSTR-3A to defaulters.</li>
                    <li><strong>Best Judgement Assessment:</strong> If the taxpayer fails to respond, an officer must immediately initiate a 'best judgement assessment' under Section 62 based on all available data.</li>
                    <li><strong>Enforcement Action:</strong> Initiate recovery proceedings under Section 79 and consider provisional attachment of known bank accounts under Section 83.</li>
                    <li><strong>Cancel Registration:</strong> Immediately initiate cancellation of the GST registration under Section 29 to prevent further fraud.</li></ul></li>
            </ul>
        `,
        applicableLaws: `
            <ul class="space-y-4">
                <li><h5 class="font-semibold text-gray-700">CGST Act, 2017</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li><strong>Section 46:</strong> Empowers officers to issue a notice to a return defaulter.</li>
                    <li><strong>Section 62:</strong> The crucial section that provides for the assessment of non-filers of returns.</li>
                    <li><strong>Section 29(2)(c):</strong> Provides clear grounds for cancellation of registration for non-filing of returns.</li>
                    <li><strong>Section 132(1)(g):</strong> Makes it a punishable offense to obstruct or prevent any officer in the discharge of their duties.</li>
                </ul></li>
                <li><h5 class="font-semibold text-gray-700">CGST Rules, 2017</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li><strong>Rule 59(6):</strong> Restricts the furnishing of GSTR-1 for non-filing of previous period's returns, a key systemic control.</li>
                    <li><strong>Rule 68:</strong> Prescribes the form and manner (Form GSTR-3A) for the notice to a return defaulter.</li>
                </ul></li>
            </ul>
        `
    },
    // ... And so on for all other categories, ensuring each is written with the same depth and authority.
    {
        id: `fake-altered-documents`,
        title: `Fake or Altered Documents`,
        icon: `✍️✂️`,
        explanation: `This refers to the act of creating or modifying documents to substantiate fraudulent claims and deceive tax authorities. This can include fabricating transport documents, inflating values on purchase invoices, or using counterfeit export papers. It is a foundational element that enables many other types of GST fraud.`,
        example: `A trader procures a genuine e-Way Bill for transporting goods worth ₹2 Lakhs. He then forges the accompanying invoice to show a value of ₹20 Lakhs. This altered document is used to fraudulently claim a ten-fold higher Input Tax Credit from a beneficiary.`,
        involvedIndustries: ['All sectors, as it is a method used to facilitate other frauds, especially ITC and Export Frauds.'],
        caseStudy: `
            <h4 class="font-semibold text-lg text-indigo-700 mb-2">Case Study: The Method Behind the Madness</h4>
            <p class="text-gray-600 leading-relaxed">The use of fake documents is not a standalone fraud but the bedrock upon which larger evasion schemes are built. In a major export fraud case, investigators found that the syndicate was not only over-valuing goods but was also creating a trail of completely counterfeit documents, including fake shipping bills and forged bank realization certificates, to make their refund claims appear legitimate. The sophistication of the forgeries often requires forensic analysis to detect, revealing a deliberate and criminal intent to defraud the system.`,
        investigationGuide: `
            <h4 class="text-xl font-bold text-gray-800 mb-4">Investigation Steps</h4>
            <ul class="space-y-6">
                <li><h5 class="font-semibold text-gray-700">Initial Red Flags</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>Documents show visible signs of tampering, such as inconsistent fonts, mismatched signatures, or low-quality stamps.</li><li>Details on a physical document do not match the corresponding data on the official digital portal (e.g., GSTN, e-Way Bill, ICEGATE).</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Investigation & Analysis</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>Systemic Cross-Verification:</strong> Never trust a physical document alone. Always verify its details with the issuing authority or the source digital system.</li><li><strong>Forensic Examination:</strong> In cases of suspected high-value fraud, engage forensic document experts to analyze documents for signs of digital or physical alteration.</li>
                    <li><strong>Statement Recording:</strong> Record statements under Section 70 from the purported issuers of the documents to confirm or deny their authenticity.</li></ul></li>
            </ul>
        `,
        applicableLaws: `
            <ul class="space-y-4">
                <li><h5 class="font-semibold text-gray-700">CGST Act, 2017</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li><strong>Section 132(1)(f):</strong> Makes it a punishable offense to falsify or substitute financial records or produce fake accounts/documents with an intention to evade tax.</li>
                    <li><strong>Section 70:</strong> Power to summon persons to give evidence and produce documents, which is key to verifying authenticity.</li>
                </ul></li>
                 <li><h5 class="font-semibold text-gray-700">Bharatiya Nyaya Sanhita (BNS), 2023</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li><strong>Section 336:</strong> Forgery for the purpose of cheating.</li>
                    <li><strong>Section 337:</strong> Using as genuine a forged document or electronic record.</li>
                    <li><strong>Section 339:</strong> Possession of a document or record knowing it to be forged and intending to use it as genuine.</li>
                </ul></li>
            </ul>
        `
    },
    {
        id: `segmenting-operations`,
        title: `Segmenting Business Operations`,
        icon: `🏢✂️`,
        explanation: `A deliberate business structuring fraud where a single large enterprise is artificially fragmented into multiple smaller legal entities. The primary objective is to ensure the annual turnover of each entity remains below a critical GST threshold, allowing the business to either avoid GST registration entirely or to illegitimately avail the low-tax Composition Scheme.`,
        example: `A large restaurant with a single kitchen and management team operates under four different billing entities ('ABC Foods', 'XYZ Kitchen', etc.). By splitting the total turnover, each entity stays below the ₹1.5 Crore limit for the Composition Scheme, paying GST at 5% instead of the standard 18%.`,
        involvedIndustries: ['Restaurants & Cafes', 'Retail Chains', 'Coaching Centers', 'Salons & Spas', 'Real Estate Projects'],
        caseStudy: `
            <h4 class="font-semibold text-lg text-indigo-700 mb-2">Case Study: The Sweet Shop Chain Ploy</h4>
            <p class="text-gray-600 leading-relaxed">Tax authorities in a major city grew suspicious of a popular sweet shop chain where multiple outlets, all with identical branding and management, were registered as separate GST entities. An investigation revealed a single, large central kitchen and procurement system serving all shops. However, separate billing was used to deliberately keep each outlet's declared turnover below the threshold for the Composition Scheme. The authorities clubbed the turnover of all entities based on their common PAN, demanding the differential tax at the standard rate along with heavy penalties.`,
        investigationGuide: `
            <h4 class="text-xl font-bold text-gray-800 mb-4">Investigation Steps</h4>
            <ul class="space-y-6">
                <li><h5 class="font-semibold text-gray-700">Initial Red Flags</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>Multiple businesses with similar or identical branding operating from the same or adjacent premises.</li><li>Use of common directors, phone numbers, bank accounts, or brand logos across entities.</li><li>The declared turnover of each entity is suspiciously close to, but just below, a key GST threshold (e.g., ₹20/40 Lakhs for registration, ₹1.5 Crore for composition).</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Investigation & Analysis</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>PAN-Based Analysis:</strong> Search the GST portal for all GSTINs registered under a single PAN.</li><li><strong>Digital Linkages:</strong> Identify common IP addresses for return filing, or common mobile numbers and email IDs across registrations.</li><li><strong>Physical Verification:</strong> This is paramount. Observe if the business operates as a single, integrated unit with shared infrastructure (kitchen, warehouse), management, and staff.</li></ul></li>
            </ul>
        `,
        applicableLaws: `
            <ul class="space-y-4">
                <li><h5 class="font-semibold text-gray-700">CGST Act, 2017</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li><strong>Section 2(6):</strong> The critical definition of "aggregate turnover," which includes the turnover of all persons having the same Permanent Account Number (PAN). This is the legal basis for clubbing.</li>
                    <li><strong>Section 10:</strong> Defines eligibility for the Composition Levy. Ineligibility can be proven by clubbing turnovers.</li>
                    <li><strong>Section 22:</strong> Defines liability for registration based on aggregate turnover. If clubbed turnover crosses the threshold, registration becomes mandatory for all entities.</li>
                    <li><strong>Section 74:</strong> For demanding tax and penalty due to fraudulent segmentation.</li>
                </ul></li>
            </ul>
        `
    },
    {
        id: `unregistered-sales`,
        title: `Unregistered Sales`,
        icon: `🤫`,
        explanation: `This form of evasion occurs when a business whose turnover exceeds the mandatory registration threshold deliberately avoids obtaining a GST registration. By operating outside the formal tax system, they conduct all transactions under the radar, neither collecting nor remitting GST, thereby gaining an unfair and illegal price advantage.`,
        example: `A hardware store's annual turnover crosses the ₹40 Lakhs threshold, making GST registration mandatory. The owner consciously avoids registration and continues to operate, selling goods without issuing GST invoices, thus undercutting compliant competitors.`,
        involvedIndustries: ['Small-scale Retail', 'Informal Service Providers', 'Local Manufacturing', 'Unorganized Contractors'],
        caseStudy: `
            <h4 class="font-semibold text-lg text-indigo-700 mb-2">Case Study: The E-commerce Intermediary Grey Area</h4>
            <p class="text-gray-600 leading-relaxed">An e-commerce platform facilitating sales for numerous small sellers was investigated for not collecting GST. The company argued that it was merely an intermediary connecting buyers and sellers and therefore not liable for the tax on the underlying transactions. However, this raised critical questions about the tax liability of platforms that control the flow of funds and goods. Such cases highlight the potential for evasion by operating in regulatory grey areas while facilitating a high volume of taxable sales, necessitating clearer rules for aggregators.`,
        investigationGuide: `
            <h4 class="text-xl font-bold text-gray-800 mb-4">Investigation Steps</h4>
            <ul class="space-y-6">
                <li><h5 class="font-semibold text-gray-700">Initial Red Flags</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>A business appears well-established and has significant footfall or online presence but does not display a GSTIN or issue tax invoices.</li><li>Specific intelligence or complaints are received from competitors or the public.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Investigation & Analysis</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>Third-Party Data:</strong> Procure and analyze bank statements, which are often the best evidence of actual turnover. Cross-reference with data from their suppliers or known buyers.</li>
                    <li><strong>Market Survey:</strong> Conduct discreet surveillance and market surveys to estimate the scale of operations, staff size, and daily sales to build a case.</li>
                    <li><strong>Statement Recording:</strong> Record statements of the proprietor/partners to confront them with the evidence of their turnover.</li></ul></li>
            </ul>
        `,
        applicableLaws: `
            <ul class="space-y-4">
                <li><h5 class="font-semibold text-gray-700">CGST Act, 2017</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li><strong>Section 22:</strong> Defines the threshold turnover (e.g., ₹40 Lakhs for goods) for mandatory GST registration.</li>
                    <li><strong>Section 122(1)(xi):</strong> Prescribes a specific penalty for a person who is liable to be registered but fails to obtain registration.</li>
                    <li><strong>Section 73/74:</strong> For demanding tax, interest, and penalty from the date the registration was due.</li>
                </ul></li>
            </ul>
        `
    },
    {
        id: `misclassification-goods`,
        title: `Misclassification of Goods/Services`,
        icon: `📦❓`,
        explanation: `A sophisticated evasion tactic where businesses deliberately classify their goods or services under an HSN (Harmonized System of Nomenclature) code that attracts a lower GST rate than the correct one. This exploits ambiguities in the tariff schedule to reduce tax outgo and gain an unfair price advantage.`,
        example: `A company manufactures a 'chocolate-coated wafer biscuit'. Instead of classifying it under 'Biscuits' at 18% GST, they misclassify it as 'Chocolates' at 12% GST (illustrative rates), thereby evading 6% tax on their entire turnover of that product.`,
        involvedIndustries: ['Online Gaming', 'FMCG', 'Mobile Phone Accessories', 'Footwear', 'Chemicals', 'Automotive Parts'],
        caseStudy: `
            <h4 class="font-semibold text-lg text-indigo-700 mb-2">Case Study: The Online Gaming Conundrum</h4>
            <p class="text-gray-600 leading-relaxed">A major online gaming company came under scrutiny for its GST classification. The company classified its services as "online information and database access," which attracts a GST rate of 18%. However, tax authorities contended that the services were a form of "betting and gambling," which falls under the 28% slab. This dispute over interpretation led to a massive tax demand, highlighting how exploiting ambiguities in the classification of new-age digital services can lead to significant tax evasion.`,
        investigationGuide: `
            <h4 class="text-xl font-bold text-gray-800 mb-4">Investigation Steps</h4>
            <ul class="space-y-6">
                <li><h5 class="font-semibold text-gray-700">Initial Red Flags</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>The declared HSN code's description does not align with the product's public marketing, branding, or common parlance name.</li><li>The business's profit margins are significantly and inexplicably higher than industry peers selling similar products.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Investigation & Analysis</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>Product Analysis:</strong> Scrutinize the product's marketing materials, website, packaging, and end-use to understand its true nature.</li>
                    <li><strong>Technical Opinion:</strong> Obtain physical samples and seek an opinion from technical experts, industry bodies, or laboratory tests to determine the correct classification based on its primary characteristics.</li>
                    <li><strong>Review of Tariff:</strong> Conduct a thorough review of the HSN explanatory notes and relevant legal precedents or advance rulings on similar products.</li></ul></li>
            </ul>
        `,
        applicableLaws: `
            <ul class="space-y-4">
                <li><h5 class="font-semibold text-gray-700">CGST Act, 2017</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li><strong>Section 74:</strong> The primary section invoked for demanding tax and imposing penalties for willful misstatement to evade tax.</li>
                    <li><strong>Section 122(1)(i):</strong> Penalty for issuing an incorrect invoice with the wrong classification.</li>
                </ul></li>
                <li><h5 class="font-semibold text-gray-700">Customs Tariff Act, 1975</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>The HSN classification framework is legally derived from this Act. The General Rules for the Interpretation (GRI) of the Tariff are paramount in resolving classification disputes and must be cited in orders.</li>
                </ul></li>
            </ul>
        `
    },
    {
        id: `manipulating-export-benefits`,
        title: `Manipulating Export Benefits`,
        icon: `🚢✍️`,
        explanation: `This fraud involves exploiting the 'zero-rated' status of exports, which allows exporters to claim refunds of GST paid on inputs. Fraudsters manipulate this provision by falsifying export documents, grossly over-valuing low-value goods to claim inflated refunds, or faking exports that never took place.`,
        example: `A merchant exporter 'exports' a container of ordinary plastic toys but declares them on the shipping bill as "High-Tech Electronic Components" with an inflated value of ₹10 Crore. The exporter then fraudulently claims a refund of the 18% IGST (₹1.8 Crore) supposedly paid on inputs, which were likely sourced from fake invoices.`,
        involvedIndustries: ['Readymade Garments', 'Handicrafts', 'Electronics Components', 'Agricultural Products', 'E-commerce'],
        caseStudy: `
            <h4 class="font-semibold text-lg text-indigo-700 mb-2">Case Study: Import Undervaluation by an E-commerce Firm</h4>
            <p class="text-gray-600 leading-relaxed">In a reverse scenario that also affects GST, an e-commerce giant was found to be systematically evading taxes by undervaluing imported goods. By declaring a lower value to customs, the company paid less Basic Customs Duty and, consequently, less IGST (which is levied on the value plus customs duty). This practice of import undervaluation disrupts the level playing field for domestic sellers and results in a significant loss of both customs and GST revenue. It necessitates stricter data-driven risk management at ports.`,
        investigationGuide: `
            <h4 class="text-xl font-bold text-gray-800 mb-4">Investigation Steps</h4>
            <ul class="space-y-6">
                <li><h5 class="font-semibold text-gray-700">Initial Red Flags</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>Exporter claims large IGST refunds but has very low or no domestic sales (indicating no legitimate local operations).</li><li>The declared value of exported goods is abnormally high for the product type (high FOB value).</li><li>The exporter's input tax credit is sourced from suppliers who are themselves suspicious, non-existent, or flagged as risky.</li><li>Failure to produce a Bank Realisation Certificate (BRC) confirming receipt of foreign currency.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Investigation & Analysis</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>Data Reconciliation:</strong> Compare shipping bill data from the Customs ICEGATE portal with GST returns to identify discrepancies in value or quantity.</li><li><strong>Verify BRC:</strong> This is crucial. Insist on submission of BRCs as definitive proof of export proceeds realization. The absence of a BRC is a major red flag.</li><li><strong>Input Supplier Chain Investigation:</strong> The root of this fraud is often fake ITC. Investigate the exporter's suppliers back several layers to find the source of fraudulent credit.</li></ul></li>
            </ul>
        `,
        applicableLaws: `
            <ul class="space-y-4">
                <li><h5 class="font-semibold text-gray-700">IGST Act, 2017</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li><strong>Section 16:</strong> Defines 'zero-rated supply' and provides the legal basis for claiming refunds on exports.</li>
                </ul></li>
                <li><h5 class="font-semibold text-gray-700">CGST Act, 2017</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li><strong>Section 54:</strong> Contains the general provisions and mechanism related to claiming tax refunds.</li>
                    <li><strong>Section 132(1)(c):</strong> Punishes the wrongful availment of ITC, which is the foundational fraud for claiming illegal cash refunds.</li>
                </ul></li>
                <li><h5 class="font-semibold text-gray-700">CGST Rules, 2017</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li><strong>Rule 96:</strong> Governs the specific procedure and conditions for claiming a refund of IGST paid on exports.</li>
                    <li><strong>Rule 96B:</strong> A powerful rule that provides for the recovery of refunds granted on exports if the sale proceeds are not realized within the time stipulated by FEMA.</li>
                </ul></li>
            </ul>
        `
    },
    {
        id: `chain-transactions`,
        title: `Chain Transactions (Circular Trading)`,
        icon: `🔗🔄`,
        explanation: `Also known as 'carousel fraud,' this is a highly sophisticated scheme involving complex, circular transactions designed to obscure the true nature of dealings and generate fraudulent ITC. Goods are fictitiously invoiced through a series of shell companies, often without any actual movement, for the sole purpose of passing on and encashing illegal tax credits.`,
        example: `Company A, a shell entity, issues a fake invoice for copper scrap to Company B. Company B passes it to Company C. Company C then issues a fake invoice back to a related firm of Company A. No goods ever move, but at each stage, fraudulent ITC is passed on. The final entity in the chain then uses this large, fake credit to offset its actual GST liability on legitimate sales.`,
        involvedIndustries: ['Metal Scrap', 'Precious Metals (Gold, Diamonds)', 'Agro-commodities', 'Electronics', 'Software'],
        caseStudy: `
            <h4 class="font-semibold text-lg text-indigo-700 mb-2">Case Study: The Scrap Metal Carousel</h4>
            <p class="text-gray-600 leading-relaxed">Investigators from the DGGI, using advanced data analytics, uncovered a massive circular trading racket involving dozens of firms dealing in metal scrap. By mapping the flow of invoices between GSTINs, they identified multiple closed loops where invoices for the same goods originated from and eventually returned to the same syndicate of companies. Logistical data analysis further revealed that the vehicles cited in e-Way Bills were often scooters or cars, incapable of transporting tons of scrap, or had impossible transit times between cities. This proved the transactions were entirely on paper, designed only to generate and encash crores in illegal ITC.`,
        investigationGuide: `
            <h4 class="text-xl font-bold text-gray-800 mb-4">Investigation Steps</h4>
            <ul class="space-y-6">
                <li><h5 class="font-semibold text-gray-700">Initial Red Flags</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>A group of companies trading the same high-value goods exclusively among themselves.</li><li>Firms show massive turnover but have negligible value addition, profits, or physical infrastructure.</li><li>Use of common directors, virtual offices, phone numbers, or IP addresses across the entire network.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Investigation & Analysis</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>GSTN Network Analytics:</strong> This is the primary tool. Use analytics to visualize the flow of transactions and identify closed loops (A->B->C->A).</li>
                    <li><strong>Logistical Verification:</strong> Scrutinize e-Way Bill data. Check vehicle numbers against the VAHAN portal to verify vehicle type. Cross-reference with FASTag data to check for impossible logistics.</li>
                    <li><strong>Financial Layering Analysis:</strong> Examine bank statements to see how money moves in a similarly circular pattern, often with all funds returning to a master account.</li></ul></li>
            </ul>
        `,
        applicableLaws: `
            <ul class="space-y-4">
                 <li><h5 class="font-semibold text-gray-700">CGST Act, 2017</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li><strong>Section 132(1)(b) & (c):</strong> Makes both the issuance of fake invoices and the availing of fraudulent ITC a punishable offense—the two core elements of circular trading.</li>
                    <li><strong>Section 132(1)(l):</strong> Punishes any attempt to commit, or abetting the commission of, any of the specified offenses.</li>
                </ul></li>
                 <li><h5 class="font-semibold text-gray-700">Bharatiya Nyaya Sanhita (BNS), 2023</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li><strong>Section 61:</strong> Criminal conspiracy is the key charge, as circular trading requires a premeditated agreement between all entities in the chain to defraud the government.</li>
                </ul></li>
            </ul>
        `
    }
];
