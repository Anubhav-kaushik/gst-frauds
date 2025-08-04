const fraudData = [
    {
        id: `overview-chart`,
        title: `Fraud Landscape Overview`,
        icon: `📊`
    },
    {
        id: `itc-fraud`,
        title: `Input Tax Credit (ITC) Fraud`,
        icon: `🧾️💰`,
        explanation: `ITC fraud is the most prevalent type of GST evasion. It involves claiming tax credits on the basis of fake invoices for goods or services that were never supplied. Fraudsters create a paper trail to show transactions that didn't occur, allowing them to either reduce their own GST liability or claim a cash refund from the government.`,
        example: `A company, 'Buyer Corp', 'purchases' a fake invoice from a shell company for ₹1 Crore of goods. It uses this invoice to claim ₹18 Lakhs in ITC, thereby illegally reducing its tax payment.`,
        involvedIndustries: ['Metal Scrap', 'Construction & Real Estate', 'Software Services', 'Manpower Supply', 'Trading'],
        caseStudy: `
            <h4 class="font-semibold text-lg text-indigo-700 mb-2">Case Study: The ₹10,000 Crore Pan-India Fake Invoice Racket</h4>
            <p class="text-gray-600 leading-relaxed">In 2023, the Directorate General of GST Intelligence (DGGI) busted a massive racket where individuals created over 1,161 shell firms using stolen identities. These firms issued fake invoices for scrap metal and other goods exceeding ₹10,000 Crore without any actual supply. The fraudulent ITC was then passed down a chain of businesses, which used it to evade GST liabilities.</p>
        `,
        investigationGuide: `
            <h4 class="text-xl font-bold text-gray-800 mb-4">Investigation Guide</h4>
            <ul class="space-y-6">
                <li><h5 class="font-semibold text-gray-700">Initial Red Flags</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>Unusually high ITC claims relative to declared turnover.</li><li>Transactions with newly registered taxpayers showing high-value invoices.</li><li>Absence of e-way bills for supposed transport of high-value goods.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Phase 1: Digital Footprint Analysis (OSINT)</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>GST Portal:</strong> Verify the supplier's GSTIN, filing history, and address. A residential address for a large goods supplier is a major red flag.</li><li><strong>MCA Portal:</strong> Look up the supplier's CIN. Identify directors and check for links to other suspicious companies.</li><li><strong>Geospatial Tools (e.g., Google Maps):</strong> Visually inspect the registered address via Street View.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Phase 2: Financial & Transactional Scrutiny</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>Bank Statement Analysis:</strong> Look for money looping back to the beneficiary or large, immediate cash withdrawals.</li><li><strong>E-Way Bill Portal:</strong> Cross-verify invoices with e-way bill data. No corresponding e-way bill is strong evidence of a paper-only sale.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Phase 3: Field Verification</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>Conduct unannounced visits to the supplier's premises to verify their existence and operational capacity.</li></ul></li>
            </ul>
        `
    },
    {
        id: `circular-trading`,
        title: `Circular Trading Fraud`,
        icon: `🔄`,
        explanation: `Circular trading (or "carousel fraud") is a sophisticated scheme where goods are fictitiously traded through a chain of companies, ultimately returning to the origin or a related entity. This creates an artificial chain of transactions solely to inflate turnover and pass on fraudulent ITC.`,
        example: `Firm A invoices goods to Firm B, B to C, and C back to A. No goods are moved. However, at each stage, ITC is passed on. The beneficiary firm uses this fake credit to offset its actual tax liability.`,
        involvedIndustries: ['Precious Metals (Gold, Diamonds)', 'Metal Scrap', 'Agro-commodities', 'Electronics'],
        caseStudy: `
            <h4 class="font-semibold text-lg text-indigo-700 mb-2">Case Study: The ₹1,200 Crore Metals Scrap Fraud</h4>
            <p class="text-gray-600 leading-relaxed">Authorities in Gujarat uncovered a circular trading fraud involving 35 firms trading invoices for metal scrap. The investigation, using advanced data analytics, found that goods were supposedly transported between states in a circular manner. However, vehicle tracking and toll data showed impossible transit times, proving the transactions were fictitious and designed only to generate and encash ₹215 Crore in fraudulent ITC.</p>
        `,
        investigationGuide: `
            <h4 class="text-xl font-bold text-gray-800 mb-4">Investigation Guide</h4>
            <ul class="space-y-6">
                <li><h5 class="font-semibold text-gray-700">Initial Red Flags</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>A group of companies trading the same high-value goods among themselves.</li><li>Firms showing massive turnover with minimal or no actual profit.</li><li>Common directors, addresses, or IP addresses across multiple firms.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Phase 1: Network Analysis (Data-Driven)</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>GSTN Data:</strong> Use analytics tools to map transactions between GSTINs. Look for closed loops where invoices flow from A->B->C->A.</li><li><strong>MCA Portal:</strong> Identify common directors or family members across the network.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Phase 2: Logistical Verification</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>E-Way Bill Analysis:</strong> Check if the vehicle type can carry the declared goods (e.g., a scooter for tons of steel).</li><li><strong>Toll Plaza Data:</strong> Match vehicle numbers with FASTag data to verify if the vehicles actually crossed the toll plazas.</li></ul></li>
            </ul>
        `
    },
    {
        id: `fake-billing`,
        title: `Fake Billing`,
        icon: `📄❌`,
        explanation: `This is the act of creating and issuing an invoice without any actual supply of goods or services. These fake invoices are then 'sold' for a commission to legitimate businesses that use them to fraudulently claim Input Tax Credit, effectively converting fake credit into real money and cheating the exchequer.`,
        example: `A billing operator with a shell firm issues a fake invoice for ₹50 Lakhs. A legitimate company 'buys' this invoice, pays the operator a 2% commission (₹1 Lakh) in cash, and then uses the fake invoice to illegally claim ₹9 Lakhs in ITC from the government.`,
        involvedIndustries: ['Construction', 'Steel Trading', 'Manpower Supply', 'IT & Software Services', 'Paper Trading'],
        caseStudy: `
            <h4 class="font-semibold text-lg text-indigo-700 mb-2">Case Study: The CA-Masterminded Billing Racket</h4>
            <p class="text-gray-600 leading-relaxed">In 2021, the Delhi CGST department arrested a chartered accountant for masterminding a massive fake billing operation. He created a network of over 100 non-existent firms and used them to issue fraudulent invoices worth over ₹540 Crore. This network allowed various beneficiary companies to illegally avail and pass on ITC, causing a huge loss to the government revenue.</p>
        `,
        investigationGuide: `
            <h4 class="text-xl font-bold text-gray-800 mb-4">Investigation Guide</h4>
            <ul class="space-y-6">
                <li><h5 class="font-semibold text-gray-700">Initial Red Flags</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>Supplier is newly registered and immediately shows high-volume transactions.</li><li>Beneficiary firm has unusually high ITC compared to its industry peers.</li><li>Payment for invoices is made in a suspicious manner (e.g., immediately withdrawn as cash).</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Phase 1: Digital Investigation</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>GST Portal & MCA:</strong> Check the supplier's registration details, address, and directors. Often, the addresses are fake or belong to dummy individuals.</li><li><strong>Bank Analysis:</strong> Trace the payment from the beneficiary to the supplier. In fake billing, the money is typically routed back to the beneficiary through multiple accounts or withdrawn as cash, minus the commission.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Phase 2: Field Verification</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>Conduct a surprise visit to the supplier's registered address. It will almost certainly be non-operational.</li><li>Interrogate the beneficiary company about the source and nature of the supply. They will be unable to provide proof of receipt of goods/services.</li></ul></li>
            </ul>
        `
    },
    {
        id: `shell-companies`,
        title: `Use of Shell Companies`,
        icon: `🏢👻`,
        explanation: `Shell companies are entities that exist only on paper, with no real business operations. They are the primary tool for generating fake invoices. Fraudsters often use stolen or manipulated identity documents (like PAN and Aadhaar of unsuspecting individuals) to register these companies, making the real masterminds difficult to trace.`,
        example: `A fraudster uses the stolen PAN and Aadhaar of a laborer to register "XYZ Trading", then uses this 'company' to issue crores in fake invoices, all without the laborer's knowledge.`,
        involvedIndustries: ['Used as a tool across all industries, especially for high-value goods and services.'],
        caseStudy: `
            <h4 class="font-semibold text-lg text-indigo-700 mb-2">Case Study: The Bhavnagar Identity Theft Scam</h4>
            <p class="text-gray-600 leading-relaxed">A major fraud in Bhavnagar, Gujarat, exposed how Aadhaar data could be manipulated. Criminals unlawfully accessed a government portal to change the mobile numbers linked to citizens' Aadhaar cards. With the new number, they could receive OTPs to apply for PAN cards and then GST registrations in the victims' names. Over 460 shell firms were created this way to pass on illegal ITC.</p>
        `,
        investigationGuide: `
            <h4 class="text-xl font-bold text-gray-800 mb-4">Investigation Guide</h4>
            <ul class="space-y-6">
                <li><h5 class="font-semibold text-gray-700">Initial Red Flags</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>GST registration at a dubious address (slum, vacant plot).</li><li>The proprietor is a person of very modest means but the firm has a massive turnover.</li><li>No online presence, no employees, and no discernible business activity.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Phase 1: Identity & Premise Verification (OSINT)</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>GST & MCA Portals:</strong> Check address and director details. One person as a director of dozens of new companies is a huge red flag.</li><li><strong>Geospatial Tools:</strong> Virtually survey the address for signs of a legitimate business.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Phase 2: Field Investigation</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>Visit the registered address. It will likely be locked or non-existent.</li><li>Locate and interview the person listed as the proprietor. They are often victims of identity theft.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Phase 3: Uncovering the Mastermind</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>Analyze bank accounts to trace the money trail.</li><li>Examine IP addresses and mobile numbers used for GST filings.</li></ul></li>
            </ul>
        `
    },
    {
        id: `underreporting-sales`,
        title: `Underreporting of Sales`,
        icon: `📉😔`,
        explanation: `A direct form of tax evasion where businesses intentionally conceal a portion of their sales. This is often done by not issuing invoices for cash transactions or by maintaining two sets of books ('kaccha' and 'pakka' bills). This fraud is particularly common in B2C sectors.`,
        example: `A restaurant makes ₹10 Lakhs in daily sales but only reports ₹3 Lakhs of sales for which it issues GST invoices. The remaining ₹7 Lakhs of cash sales are not recorded, and the GST is evaded.`,
        involvedIndustries: ['Restaurants & Hospitality', 'Retail (FMCG, Electronics)', 'Textiles', 'Real Estate (cash component)', 'Coaching Centers'],
        caseStudy: `
            <h4 class="font-semibold text-lg text-indigo-700 mb-2">Case Study: Raid on a Major Pan Masala Manufacturer</h4>
            <p class="text-gray-600 leading-relaxed">Tax officials raided a major pan masala and tobacco manufacturer, discovering that the company was massively underreporting its production and sales. The investigation found that the actual number of trucks clearing goods from the factory was far higher than what was declared in their records. By suppressing turnover, the company had evaded GST and cess worth over ₹800 Crore.</p>
        `,
        investigationGuide: `
            <h4 class="text-xl font-bold text-gray-800 mb-4">Investigation Guide</h4>
            <ul class="space-y-6">
                <li><h5 class="font-semibold text-gray-700">Initial Red Flags</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>Business has high footfall but declares low turnover.</li><li>Mismatch between GST returns and Income Tax returns.</li><li>Unusually low electricity consumption for a declared level of manufacturing.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Phase 1: Data Reconciliation & Intelligence</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>Comparative Analysis:</strong> Compare GSTR-3B with GSTR-1 and Income Tax filings.</li><li><strong>Third-Party Data:</strong> Analyze data from e-commerce platforms or bank deposits.</li><li><strong>Market Intelligence:</strong> Use 'mystery shoppers' to gather evidence on billing practices.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Phase 2: Surprise Audits</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>Conduct unannounced inspections.</li><li>Seize electronic devices to find parallel accounting software or hidden sales records.</li><li>Check physical stock levels against recorded stock.</li></ul></li>
            </ul>
        `
    },
    {
        id: `misclassification`,
        title: `Misclassification of Goods`,
        icon: `📦❓`,
        explanation: `This fraud involves deliberately classifying goods or services under a lower GST rate category to pay less tax. Businesses exploit ambiguities in HSN codes to misrepresent their products and gain an unfair competitive advantage.`,
        example: `A company selling 'Luxury Chocolates' (28% GST) misclassifies them as 'Cocoa Powder' (5% GST) on their invoices, thereby evading 23% in GST.`,
        involvedIndustries: ['Online Gaming', 'FMCG', 'Footwear', 'Mobile Phones & Accessories', 'Chemicals'],
        caseStudy: `
            <h4 class="font-semibold text-lg text-indigo-700 mb-2">Case Study: The Online Gaming Sector Debate</h4>
            <p class="text-gray-600 leading-relaxed">Before rules were clarified, many online gaming companies classified their services as 'platform services' (18% GST). Tax authorities argued these were betting services (28% GST). This misclassification led to massive tax demand notices, with one company receiving a notice for ₹21,000 Crore.</p>
        `,
        investigationGuide: `
            <h4 class="text-xl font-bold text-gray-800 mb-4">Investigation Guide</h4>
            <ul class="space-y-6">
                <li><h5 class="font-semibold text-gray-700">Initial Red Flags</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>Declared HSN code doesn't match publicly advertised products.</li><li>Profit margins are significantly higher than industry peers.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Phase 1: Product & Market Analysis (OSINT)</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>Company Website & Social Media:</strong> Analyze how the company markets its products.</li><li><strong>E-commerce Listings:</strong> Check detailed product descriptions.</li><li><strong>HSN Code Search (GST Portal):</strong> Verify the official description and tax rate for the HSN codes.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Phase 2: Audit and Expert Opinion</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>Conduct a detailed audit of sales invoices.</li><li>Obtain physical samples for technical analysis to determine correct classification.</li></ul></li>
            </ul>
        `
    },
    {
        id: `segmenting-operations`,
        title: `Segmenting Business Operations`,
        icon: `✂️🏢`,
        explanation: `A single large business is artificially split into multiple smaller legal entities. The primary goal is to keep the turnover of each entity below a certain GST threshold, either to avoid GST registration altogether or to qualify for simpler, low-tax options like the Composition Scheme.`,
        example: `A large restaurant with one kitchen is registered as three separate entities: 'ABC Foods', 'XYZ Kitchen', and 'PQR Eatery'. Each entity uses a different billing machine and reports turnover just below the Composition Scheme threshold, allowing them to pay tax at a much lower rate (e.g., 5%) instead of the standard rate.`,
        involvedIndustries: ['Restaurants & Cafes', 'Retail Chains', 'Salons & Spas', 'Real Estate Projects', 'Coaching Classes'],
        caseStudy: `
            <h4 class="font-semibold text-lg text-indigo-700 mb-2">Case Study: The Sweet Shop Chain Ploy</h4>
            <p class="text-gray-600 leading-relaxed">Tax authorities in a major city noticed a pattern where multiple sweet shops with identical branding and management were registered as separate entities. An investigation revealed that all shops shared a single, large central kitchen and procurement system but used separate billing to keep each outlet's turnover below the threshold for the Composition Scheme. The authorities clubbed the turnover of all entities and demanded the differential tax at the standard rate, plus penalties.</p>
        `,
        investigationGuide: `
            <h4 class="text-xl font-bold text-gray-800 mb-4">Investigation Guide</h4>
            <ul class="space-y-6">
                <li><h5 class="font-semibold text-gray-700">Initial Red Flags</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>Multiple businesses with similar branding operate from the same or adjacent premises.</li><li>Common directors, phone numbers, or bank accounts across these entities.</li><li>Each entity's turnover is suspiciously just below a key GST threshold (e.g., ₹20 Lakhs, ₹50 Lakhs).</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Phase 1: Digital & Data Analysis</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>GST Portal:</strong> Search for all GSTINs registered at a single address or with a common mobile number.</li><li><strong>MCA Portal:</strong> Link common directors across the multiple entities.</li><li><strong>Bank Analysis:</strong> Check for fund transfers between the 'separate' entities or payments to a single master account.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Phase 2: Physical Verification</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>Physical inspection is key. Observe if the business operates as a single unit (e.g., one manager, one kitchen, one warehouse).</li><li>Interview employees about who they consider their employer.</li></ul></li>
            </ul>
        `
    },
    {
        id: `export-fraud`,
        title: `Manipulating Export Benefits`,
        icon: `🚢✍️`,
        explanation: `GST law promotes exports by making them 'zero-rated', allowing exporters to claim a refund of GST paid on inputs. Fraudsters exploit this by faking exports or by grossly over-valuing low-value goods. They submit forged documents to claim large refunds of IGST they never paid or were not entitled to.`,
        example: `A company exports a container of bricks but declares it as 'high-tech machinery' worth ₹10 Crore. They then claim a refund of the 18% IGST (₹1.8 Crore) on this inflated value.`,
        involvedIndustries: ['Readymade Garments', 'Handicrafts', 'Electronics Components', 'Agricultural Products'],
        caseStudy: `
            <h4 class="font-semibold text-lg text-indigo-700 mb-2">Case Study: The ₹500 Crore Duty Drawback Scam</h4>
            <p class="text-gray-600 leading-relaxed">The Directorate of Revenue Intelligence (DRI) busted a scam where multiple shell companies claimed export benefits. They took fraudulent ITC from other shell firms and used it to pay IGST on exports of low-quality goods like fabrics. The value was over-invoiced by up to 1000%, allowing them to claim massive cash refunds of IGST.</p>
        `,
        investigationGuide: `
            <h4 class="text-xl font-bold text-gray-800 mb-4">Investigation Guide</h4>
            <ul class="space-y-6">
                <li><h5 class="font-semibold text-gray-700">Initial Red Flags</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>Exporter has very low or no domestic sales.</li><li>Value of exports is unusually high for the type of goods.</li><li>Input credit is sourced from suspicious suppliers.</li><li>Lack of a Bank Realization Certificate (BRC).</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Phase 1: Data Reconciliation</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>GSTN vs ICEGATE Data:</strong> Cross-verify shipping bills on the Customs portal (ICEGATE) with GST returns.</li><li><strong>Input Supplier Analysis:</strong> Analyze the GST returns of the exporter's suppliers.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Phase 2: Financial & Logistical Verification</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>Check for BRCs:</strong> Demand proof that foreign remittance was received.</li><li><strong>Risk-Based Inspection:</strong> Customs can perform physical inspections of containers at the port.</li></ul></li>
            </ul>
        `
    },
    {
        id: `non-filing-returns`,
        title: `Non-Filing of Returns`,
        icon: `🗓️🚫`,
        explanation: `This is a straightforward form of non-compliance where a registered business collects GST from its customers but fails to file its mandatory GST returns (GSTR-1, GSTR-3B) and deposit the collected tax with the government. The business essentially pockets the tax amount.`,
        example: `A newly registered consulting firm provides services for 6 months, collects GST on its invoices, but never files a single return. The proprietors then vanish, having stolen the tax money.`,
        involvedIndustries: ['Small Traders', 'New Startups', 'Service Providers', 'Unorganized Sector'],
        caseStudy: `
            <h4 class="font-semibold text-lg text-indigo-700 mb-2">Case Study: The Vanishing Trader Problem</h4>
            <p class="text-gray-600 leading-relaxed">Across various cities, tax authorities identified thousands of 'missing' traders. These were businesses that registered for GST, conducted transactions for a few months, and collected tax. However, they never filed any returns. By the time the automated system flagged them for non-filing and officers went for physical verification, the premises were vacant and the operators were untraceable, leaving a trail of un-deposited tax liability.</p>
        `,
        investigationGuide: `
            <h4 class="text-xl font-bold text-gray-800 mb-4">Investigation Guide</h4>
            <ul class="space-y-6">
                <li><h5 class="font-semibold text-gray-700">Initial Red Flags</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>Consistent failure to file GSTR-1 and GSTR-3B by the due dates, triggering system alerts.</li><li>The business is new but appears in the GSTR-2A/2B of other taxpayers, indicating it has issued invoices.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Phase 1: Automated System Action</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li>The GSTN automatically sends reminders and notices for non-filing.</li><li>After a set period, the system can block e-way bill generation and eventually lead to automated suspension of the GST registration.</li></ul></li>
                <li><h5 class="font-semibold text-gray-700">Phase 2: Enforcement & Recovery</h5><ul class="list-disc list-inside mt-2 space-y-1 text-gray-600"><li><strong>Provisional Attachment:</strong> Authorities can attach the business's bank accounts to recover the estimated tax dues.</li><li><strong>Cancellation of Registration:</strong> The GSTIN is cancelled, preventing further fraud.</li><li><strong>Scrutiny of Counter-Party Data:</strong> Identify all recipients of invoices from the non-filer and investigate the entire supply chain.</li></ul></li>
            </ul>
        `
    }
];